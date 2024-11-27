import mongoose from 'mongoose';

// Define cart item schema
const cartItemSchema = new mongoose.Schema({
    product_id: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
    },
    quantity: {
        type: Number,
        required: true,
    }
}, { _id: false }); // Disable auto-id for subdocument

// Define review action schema
const reviewActionSchema = new mongoose.Schema({
    review_id: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
    },
    action: {
        type: String,
        enum: ['liked', 'disliked'], // Restrict possible values for action
        required: true,
    }
}, { _id: false }); // Disable auto-id for subdocument

// Define order schema
const orderSchema = new mongoose.Schema({
    product_id: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
    },
    quantity: {
        type: Number,
        required: true,
    },
    price: {
        type: Number,
        required: true,
    },
    delivery_charge: {
        type: Number,
        required: true,
    },
    delivery_date: {
        type: Date,
        required: true,
    },
    delivered: {
        type: Boolean,
        required: true,
    }
}, { _id: false }); // Disable auto-id for subdocument

// Define QA action schema
const qaActionSchema = new mongoose.Schema({
    product_id: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
    },
    question_id: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
    },
    action: {
        type: String,
        enum: ['liked', 'disliked'], // Restrict possible values for action
        required: true,
    }
}, { _id: false }); // Disable auto-id for subdocument

// Define user schema: email is unique id
const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        trim: true,
    },
    email: {
        type: String,
        required: true,
        trim: true,
        unique: true,
        lowercase: true,
        index: true,
    },
    password: {
        type: String,
        required: true,
    },
    phone: {
        type: String,
        required: true,
    },
    address: {
        type: String,
        default: '',
    },
    cart: {
        type: [cartItemSchema], // Array of cart items
        default: [], // Default to an empty array
    },
    reviewsaction: {
        type: [reviewActionSchema], // Array of review actions
        default: [], // Default to an empty array
    },
    orders: {
        type: [orderSchema], // Array of orders
        default: [], // Default to an empty array
    },
    QaAction: {
        type: [qaActionSchema], // Array of QA actions
        default: [], // Default to an empty array
    },
});

// Create the UserData model
const User = mongoose.model('Users', userSchema);

export default User;
