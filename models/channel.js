import mongoose from 'mongoose';
const ChannelSchema = new mongoose.Schema(
    {
        channelName: {
            type: 'string',
        }
    }
);
export const Channel = mongoose.models.tasks || mongoose.model("channels", ChannelSchema);
