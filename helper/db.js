import mongoose from 'mongoose';
// import { User } from '@/models/user';

export const connectDb = async () => {
    try {
        const { connection } = await mongoose.connect(process.env.MONGO, {
            dbName: 'course'
        });
        console.log('db connected')
        // const user = new User({
        //     username: "yash"
        // })
        // await user.save();
    }
    catch (err) {
        console.log('failed to connect with database', err);
    }
}