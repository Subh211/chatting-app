import { Schema, model } from 'mongoose';

const messageSchema = new Schema({
    participants: [String], 
    messages: [
        {
            sender: String,
            message: String,
            timestamp: { type: Date, default: Date.now }
        }
    ]
});

const Message = model('Message', messageSchema);

export default Message;
