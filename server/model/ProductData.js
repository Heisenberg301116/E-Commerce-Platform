import mongoose from 'mongoose';

const productSchema = new mongoose.Schema({
    seller_id: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
    },
    total_product_images: {
        type: Number,
        required: true,
    },
    category: {
        type: String,
        required: true,
    },
    quantity: {
        type: Number,
        required: true,
    },
    max_quantity: {
        type: Number,
        required: true,
    },
    tagline: {
        type: String,
        required: true,
    },
    delivery_charges: {
        type: Number,
        required: true,
    },
    free_delivery_over: {
        type: Number,
        default: null,
    },
    delivery_time: {
        type: Number,
        required: true,
    },
    total_sold: {
        type: Number,
        required: true,
    },
    title: {
        shorttitle: {
            type: String,
            required: true,
        },
        longtitle: {
            type: String,
            required: true,
        },
    },
    price: {
        mrp: {
            type: Number,
            required: true,
        },
        cost: {
            type: Number,
            required: true,
        },
        discount: {
            type: String,
            required: true,
        },
    },
    services: {
        Cash_On_Delivery: {
            type: Boolean,
        },
        Warranty: {
            type: String,
        },
        Return: {
            type: String,
        },
        Replacement: {
            type: String,
        },
    },
    highlights: {
        type: [String],
        required: true,
    },
    description: {
        type: String,
        required: true,
    },
    Specifications: {
        type: mongoose.Schema.Types.Mixed,  // This allows for any structure
        required: true
    },
    total_ratings: {
        type: Number,
        required: true,
    },
    average_stars: {
        type: Number,
        required: true,
        min: 0,
        max: 5
    },
    stars: {
        type: Map,
        of: Number,  // Dynamic keys for star ratings
        required: true
    },
    other_ratings: {
        type: Map,
        of: Number,  // Dynamic keys for other ratings
        required: true
    },
    total_reviews: {
        type: Number,
        required: true
    },
    total_review_images: {
        type: Number,
        required: true
    },
    total_questions: {
        type: Number,
        required: true
    }
})


// Create a model from the schema
const Product = mongoose.model('Products', productSchema);

export default Product;