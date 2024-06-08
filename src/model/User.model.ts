import mongoose, {Schema, Document} from "mongoose";


export interface Message extends Document{
    content : string;
    createdAt: Date
}

//CUSTOM SCHEMA
const MessageSchema : Schema<Message> = new Schema({
content: {
    type: String,
    required: true
},
createdAt: {
    type: Date,
    required: true,
    default: Date.now
}

}, {timestamps:true}) 

export interface User extends Document{
    username: string;
    email: string;
    password: string;
    verifyCode: string;                 // verifyCode = OTP
    verifyCodeExpiry: Date;
    isAcceptingMessages: boolean;
    isVerified: boolean;
    messages: Message[]
}

const UserSchema : Schema<User> = new Schema({

    username: {
    type: String,
    required: [true, 'username is required'],
    trim: true,
    unique: true
    },
     email: {
        type: String,
        required: [true, 'email is required'],
        unique: true,
        match: [/.+\@.+\..+/, 'please use a valid email.']
    },
    password: {
        type: String,
        required:[true, 'password is required'],
    },
    verifyCode: {
        type: String,
        required: true
    },
    verifyCodeExpiry: {
        type: Date,
        required: true
    },
    isVerified: {
        type: Boolean,
        default: false
    },
    isAcceptingMessages: {
        type: Boolean,
        default: true
    },
    messages: [MessageSchema]
    }, {timestamps:true})

    const UserModel = (mongoose.models.User as mongoose.Model<User>) || (mongoose.model<User>('user', UserSchema)) 
    export default UserModel