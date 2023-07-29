import { Schema, model, models } from "mongoose";

const UpvoteSchema = new Schema({
    name: {
        type: String,
    },
    upvoteCount: {
        type: Number,
    }
})

const ExoUpvote = models.ExoUpvote || model("ExoUpvote", UpvoteSchema);

export default ExoUpvote;