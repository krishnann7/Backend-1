import mongoose, { Schema } from "mongoose";
import moongooseAggregatePaginate from "moongoose-aggregate-paginate-v2"

const videoSchema = new Schema(
  {
    videoFile: {
      type: String,
      required: true,
    },
    thumbnail: {
      type: String,
      required: true,
    },
    title: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    duration: {
      type: String,
      required: true,
    },
    views:{
        type: Number,
        default:0
    },
    isPublic:{
        type: Boolean,
        default: true
    },
    owner:{
        type: Schema.Types.ObjectId,
        ref: "User"
    }
  },
  {
    timestamps: true,
  }
);

videoSchema.plugin(moongooseAggregatePaginate)

export const Video = mongoose.model("Video", videoSchema);
