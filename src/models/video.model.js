import mongoose, { Schema } from "mongoose";
import mongooseAggregatePaginate from "mongoose-aggregate-paginate-v2";

const videoSchema = new Schema(
    {
        videoFile: {
            type: String, // from cloude
            required: true
        },
        thumbnail: {
            type: String, // from cloude
            required: true
        },
        title: {
            type: String, 
            required: true
        },
        description: {
            type: String, 
            required: true
        },
        duration: {
            type: String, // from cloude
            required: true
        },
        views: {
            type: Number,
            default: 0
        },
        isPublished: {
            type: Number,
            default: true
        },
        owner: {
            type: Schema.Types.ObjectId,
            ref: "User"
        }

    },
    { timestamps: true }
)

videoSchema.plugun(mongooseAggregatePaginate);
export const Video = mongoose.model("Video", videoSchema);