import mongoose from 'mongoose';
const UserSchema = new mongoose.Schema(
    {
        username: {
            type: 'string',
        }
    }
);
export const User = mongoose.models.users || mongoose.model("user", UserSchema);
