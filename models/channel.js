import mongoose from 'mongoose';
const ChannelSchema = new mongoose.Schema(
    {
        channelName: {
            type: 'string',
        },
        channelImage: {
            type: "string"
        },
        description: {
            type: "string"
        },

        instagram: {
            type: "string"
        },
        telegram: {
            type: "string"
        },
        discord: {
            type: "string"
        },
        linkedin: {
            type: "string"
        }


    }
);
const Channel = mongoose.models.Channel || mongoose.model('Channel', ChannelSchema);

module.exports = Channel;
