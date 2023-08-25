import mongoose from 'mongoose';
const ChannelSchema = new mongoose.Schema(
    {
        channelName: {
            type: String,
        },
        userId: {
            type: String,
        },
        channelImage: {
            type: String,
        },
        description: {
            type: String,
        },

        instagram: {
            type: String,
        },
        telegram: {
            type: String,
        },
        discord: {
            type: String,
        },
        linkedin: {
            type: String,
        },
        userId: {
            type: String,
        }



    }
);
const Channel = mongoose.models.Channel || mongoose.model('Channel', ChannelSchema);

module.exports = Channel;
