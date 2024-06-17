import mongoose, {Schema} from "mongoose";

const messageSchema = new Schema(
    {
        sendTo:{
            type: Schema.Types.ObjectId,
            ref: 'User'
        },
        content:{
            type: String,
            required: true
        }
    },{
        timestamps: true
    }
)

export const msgModel = mongoose.model('Message' , messageSchema)