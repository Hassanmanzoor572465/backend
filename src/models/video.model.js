import mongoose, {Schema} from "mongoose";
import mongooseAggregatePaaginate from "mongoose-aggregate-paginate-v2"


const videoSchema = new Schema({
    title: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true,
    },
    videoFile: {
        type: String,
        required: true,
    },
    thumbnail: {
        type: String,
        required: true,
    },

    duration: {
        type: Number,
        required: true,
    },
    views: {
        type: Number,
        required: true,
    },

    isPublished: {
        type: Boolean,
        default: true,
    },
    likes: {
        type: Number,
        default: 0
    },
    dislikes: {
        type: Number,
        default: 0
    },
    comments: {
        type: Array,
    },
    owner: {
        type: Schema.Types.ObjectId,
        ref: "User",
    },

},
    {
        timestamps: true
    }
    );

    videoSchema.plugin(mongooseAggregatePaaginate)
    
    export default mongoose.model("Video", videoSchema);   