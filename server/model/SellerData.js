import mongoose from 'mongoose';

const ratingSchema = new mongoose.Schema({
    stars: {
        type: Number,
        required: true,
        min: 0,
        max: 5
    },
    total: {
        type: Number,
        required: true,
        min: 0
    }
},{ _id: false });

const SellerDataSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
        unique: true,
        index: true,
    },
    phone: {
        type: String,
        required: true,
    },
    total_products_sold: {
        type: Number,
        required: true,
        default: 0,
    },
    register_date: {
        type: Date,
        required: true,
    },
    rating: {
        type: ratingSchema, // Using the defined ratingSchema as a sub-document
        required: true
    }
});


const Seller = mongoose.model('Sellers', SellerDataSchema);

export default Seller;
