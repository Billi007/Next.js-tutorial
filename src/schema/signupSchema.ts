import {z} from 'zod'

export const userameValidation = z
.string()
.min(2, 'username must be at least 2 characters.')
.max(20, "username must not be no more than 20 characters.")
.regex(/^[a-zA-Z0-9_]+$/, 'username must not contain special character.')

export const signupValidation = z.object({
    username : userameValidation,
    email : z.string().email({message: 'Invalid email address.'}),
    password: z.string().min(6, {message: 'password must be atleast 6 charaters.'})
})