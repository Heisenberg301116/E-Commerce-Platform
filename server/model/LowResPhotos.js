import mongoose from 'mongoose';

// Define low-resolution image schema
const lowResImageSchema = new mongoose.Schema({
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

// Create the model for low-resolution images
const LowRes = mongoose.model('LowResImages', lowResImageSchema);

export default LowRes;