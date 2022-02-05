import dotenv from 'dotenv'
dotenv.config()

export const dbURI = process.env.MONGODB_URI || 'mongodb+srv://admin_user:cHRQXsogeMiV319P@kave.06ni1.mongodb.net/kave?retryWrites=true&w=majority'
export const port = process.env.PORT || 4000
export const secret = process.env.SECRET || 'shhhh its a secret'