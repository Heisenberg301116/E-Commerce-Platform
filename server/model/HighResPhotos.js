import mongoose from 'mongoose';

// Define the HighResPhotos schema
const highResPhotosSchema = new mongoose.Schema({
    product_id: {
        type: mongoose.Schema.Types.ObjectId,
        required: true, // Assuming product_id is mandatory
        unique: true, // Ensures that each product_id is unique
    },
    images: {
        type: [String], // Array of strings to hold multiple image paths
        required: true, // Assuming images are mandatory
    },
});

// Create the HighResPhotos model
const HighRes = mongoose.model('HighResImages', highResPhotosSchema);

export default HighRes;
