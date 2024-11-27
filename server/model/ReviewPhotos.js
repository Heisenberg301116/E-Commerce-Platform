import mongoose from 'mongoose';

const ReviewPhotosSchema = new mongoose.Schema({
    product_id: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
    },
    user_id: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
    },
    images_arr: {
        type: [String],
        default: [],
    },
});


const ReviewImg = mongoose.model('ReviewImages', ReviewPhotosSchema);

export default ReviewImg;
