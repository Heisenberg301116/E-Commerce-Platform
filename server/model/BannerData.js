import mongoose from 'mongoose';

const bannerSchema = new mongoose.Schema({
    product_id: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        unique: true,
    },
    image: {
        type: String,
        required: true,
    },
});


const Banner = mongoose.model('Banners', bannerSchema);

export default Banner;