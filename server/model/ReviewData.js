import mongoose from 'mongoose';

const ReviewDataSchema = new mongoose.Schema({
    product_id: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,        
    },
    user_id: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,       
    },
    name: {
        type: String,
        required: true,
    },
    date: {
        type: Date,
        required: true,
    },
    rating: {
        type: Number,
        required: true,
    },
    likes: {
        type: Number,
        required: true,
        default: 0
    },
    dislikes: {
        type: Number,
        required: true,
        default: 0
    },
    title: {
        type: String,
        default: ''   
    },
    message: {
        type: String,      
        default: ''  
    },
});


const Review = mongoose.model('Reviews', ReviewDataSchema);

export default Review;