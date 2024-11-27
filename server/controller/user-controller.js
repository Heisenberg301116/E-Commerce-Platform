import User from '../model/UserData.js'
import mongoose from 'mongoose';
const { ObjectId } = mongoose.Types;

// ================================================================================================================================

export const UserSignup = async (request, response) => {
    // const request = {
    //     body: {
    //         name: 'Raj Tilak',
    //         email: 'pappu',
    //         phone: '7014581834',
    //         password: 'abcdef'
    //     }
    // }
    try {
        const user = await User.findOne({ 'email': request.body.email })

        if (user) {
            response.status(401).json({ message: 'Username already exists' });
        }

        else {
            const newUser = await User.create({
                name: request.body.name,
                email: request.body.email,
                phone: request.body.phone,
                password: request.body.password,
            })

            response.status(200).json({ message: 'Account created successfully !', userInfo: newUser })
        }
    }

    catch (error) {
        response.status(500).json({ message: 'Internal Server Error', error: error.message })
    }
}

// ================================================================================================================================

export const UserLogin = async (request, response) => {
    // const request = {
    //     body: {
    //         email: 'raj983567@gmail.com',
    //         password: 'retet4re'
    //     }
    // }

    try {
        const user = await User.findOne({ 'email': request.body.email })

        if (user && user.password === request.body.password) {
            response.status(200).json({ message: 'Login Successful !', userInfo: user })
        }

        else if (user && user.password !== request.body.password) {
            response.status(401).json({ message: 'Password Incorrect !' })
        }

        else {
            response.status(404).json({ message: 'User not found, please Signup !' })
        }
    }

    catch (error) {
        response.status(500).json({ message: 'Internal Server Error', error: error.message })
    }
}

// ================================================================================================================================

export const UserProfileUpdate = async (request, response) => {
    // const request = {
    //     body: {
    //         name: 'Raj Tilak',
    //         email: 'pappu',
    //         phone: '',
    //         password: '54545',
    //         address: 'Poanta Sahib'
    //     }
    // }
    try {
        const updatedUser = await User.findOneAndUpdate({ email: request.body.email }, request.body, { new: true, runValidators: true })

        if (!updatedUser) {
            return response.status(404).json({ message: 'User not found!' });
        }

        response.status(200).json({ message: 'Account updated successfully !', userInfo: updatedUser })
    }


    catch (error) {
        response.status(500).json({ message: 'Internal Server Error', error: error.message })
    }
}

// ================================================================================================================================

export const DeleteProfile = async (request, response) => {
    // const request = {
    //     body: {        
    //         email: 'pappu',       
    //     }
    // }
    try {
        const deletedUser = await User.findOneAndDelete({ email: request.body.email })

        if (!deletedUser) {
            return response.status(404).json({ message: 'User not found!' });
        }

        response.status(200).json({ message: 'Account deleted !' })
    }


    catch (error) {
        response.status(500).json({ message: 'Internal Server Error', error: error.message })
    }
}

// ================================================================================================================================

export const RemovefromCart = async (request, response) => {
    // const request = {
    //     body: {
    //         user_id: new mongoose.Types.ObjectId("670bace596392ddfc980cc53"),
    //         product_id: new mongoose.Types.ObjectId("670bace596392ddfc980cc77"),
    //     }
    // }

    const { product_id, user_id } = request.body;

    try {
        const result = await User.updateOne({ _id: user_id }, { $pull: { cart: { product_id: product_id } } })

        if (result.modifiedCount === 0) {
            return response.status(404).json({ message: 'Product not found in cart !' });
        }

        response.status(200).json({ message: 'Product removed from Cart !' })
    }


    catch (error) {
        response.status(500).json({ message: 'Internal Server Error', error: error.message })
    }
}

// ================================================================================================================================

export const AddtoCart = async (request, response) => {
    // const request = {
    //     body: {
    //         user_id: new mongoose.Types.ObjectId("670bace596392ddfc980cc53"),
    //         product_id: new mongoose.Types.ObjectId("670bace596392ddfc980cc77"),
    //         quantity: 5,
    //     }
    // }

    const { product_id, user_id, quantity } = request.body;

    try {
        const alreadyPresent = await User.findOne({ _id: user_id, "cart.product_id": product_id })

        if (alreadyPresent) {
            return response.status(200).json({ message: 'Product already present in cart !', data: alreadyPresent.cart })
        }
        else {
            const result = await User.findOneAndUpdate({ _id: user_id }, { $addToSet: { cart: { product_id: product_id, quantity: quantity } } }, { new: true })

            return response.status(200).json({ message: 'Added to cart !', data: result.cart })
        }
    }

    catch (error) {
        response.status(500).json({ message: 'Internal Server Error', error: error.message })
    }
}

// ================================================================================================================================

export const UpdateCart = async (request, response) => {
    // const request = {
    //     body: {
    //         user_id: new mongoose.Types.ObjectId("670bace596392ddfc980cc53"),
    //         cartdata: [obj1, obj2, ...]
    //     }
    // }

    const { user_id, cartdata } = request.body;

    // console.log("=======> inside route and cartdata = ", cartdata)   

    try {
        const result = await User.updateOne({ _id: user_id }, { $set: { cart: cartdata } })

        if (result.modifiedCount > 0) {
            // console.log("modified and cartdata = ", cartdata)
            return response.status(200).json({ message: 'Cart updated successfully !', data: cartdata })
        }
        else {
            // console.log("==========> not modified")
            return response.status(404).json({ message: 'Failed to update Cart !' })
        }
    }

    catch (error) {
        response.status(500).json({ message: 'Internal Server Error', error: error.message })
    }
}

// ================================================================================================================================

export const MyOrders = async (request, response) => {
    // const request = {
    //     body: {
    //         user_id: new mongoose.Types.ObjectId("670bace596392ddfc980cc57"),
    //         skip: 0,
    //         limit: 2,
    //         sort: 'Most Recent',
    //     }
    // }

    try {
        const { user_id, sort, skip = 0, limit = 10 } = request.body;
        const ord = await User.findOne({ _id: user_id, }).select('orders')

        // console.log("==========> user_id = ", user_id, " and sort,skip,limit = ", sort, skip, limit)

        // console.log("==========> date = ", ord.orders[0].delivery_date, "ord type date = ", typeof (ord.orders[0].delivery_date))

        const orders = await User.aggregate([
            { $match: { _id: new ObjectId(user_id) } }, // Match the user
            { $unwind: "$orders" },       // Deconstruct the orders array
            ...(sort === "on-the-way" ?
                [
                    { $match: { "orders.delivered": false } },
                    { $sort: { "orders.delivery_date": -1 } }  // Sort by delivery_date in descending order
                ]
                :
                sort === "delivered" ?
                    [
                        { $match: { "orders.delivered": true } },
                        { $sort: { "orders.delivery_date": -1 } }  // Sort by delivery_date in descending order
                    ]
                    :
                    [
                        {
                            $sort:
                                sort === "least-recent" ?
                                    { "orders.delivery_date": 1 }
                                    :
                                    { "orders.delivery_date": -1 }      // default: Most Recent
                        }
                    ]
            ),
            { $skip: skip },             // Skip initial orders
            { $limit: limit },           // Limit the number of orders
            { $group: { _id: "$_id", orders: { $push: "$orders" } } } // Group back into a single user document
        ]);

        const filtered_orders = orders[0]?.orders || [];

        // console.log("============> orders = ", orders)
        // console.log("============> filtered_orders = ", filtered_orders)

        return response.status(200).json({ data: filtered_orders })
    }

    catch (error) {
        // console.log("============> error in server side = ", error.message)
        response.status(500).json({ message: 'Internal Server Error', error: error.message })
    }
}


// ================================================================================================================================

export const AddtoMyOrders = async (request, response) => {
    // const request = {
    //     body: {
    //         user_id: new mongoose.Types.ObjectId("670bace596392ddfc980cc57"),
    //         product_id: new mongoose.Types.ObjectId("670b90f849af9bf770efd3ce"),
    //         quantity: 2,
    //         price: 42999,
    //         delivery_charge: 0,
    //         delivery_date: '2024-01-14',
    //         delivered: true,
    //     }
    // }

    const { product_id, user_id, quantity, price, delivery_charge, delivery_date, delivered } = request.body;

    try {
        const result = await User.findOneAndUpdate({ _id: user_id }, { $push: { "orders": { product_id: product_id, quantity: quantity, price: price, delivery_charge: delivery_charge, delivery_date: delivery_date, delivered: delivered } } })

        if (result) {
            response.status(200).json({ message: 'Order added to My-Orders !', data: result.orders })
        }
        else {
            response.status(404).json({ message: 'Failed to add order into My-Orders !' })
        }
    }


    catch (error) {
        response.status(500).json({ message: 'Internal Server Error', error: error.message })
    }
}


// ================================================================================================================================

export const AddReviewFeedback = async (request, response) => {
    // const request = {
    //     body: {
    //         user_id: new mongoose.Types.ObjectId("670bace596392ddfc980cc53"),   
    //         review_id: new mongoose.Types.ObjectId("670bace596392ddfc980cc53"),      
    //         action: "liked"
    //     }
    // }

    const { user_id, review_id, action } = request.body;

    try {
        const alreadyPresent = await User.findOne({ _id: user_id, "reviewsaction.review_id": review_id })

        if (alreadyPresent && action !== 'remove') {
            const result = await User.findOneAndUpdate({ _id: user_id, "reviewsaction.review_id": review_id }, { $set: { "reviewsaction.$.action": action } })

            return response.status(200).json({ data: result.reviewsaction })
        }

        else if (!alreadyPresent && action !== 'remove') {
            const result = await User.findOneAndUpdate({ _id: user_id }, { $addToSet: { reviewsaction: { review_id: review_id, action: action } } }, { new: true })

            console.log("==============> result = ", result)

            return response.status(200).json({ data: result.reviewsaction })
        }

        else if (alreadyPresent) {
            const result = await User.findOneAndUpdate({ _id: user_id }, { $pull: { reviewsaction: { review_id: review_id } } })

            return response.status(200).json({ data: result.reviewsaction })
        }

        else {
            return response.status(404).json({ message: 'Feedback not found !' })
        }
    }

    catch (error) {
        response.status(500).json({ message: 'Internal Server Error', error: error.message })
    }
}

// ================================================================================================================================

export const AddQuestionFeedback = async (request, response) => {
    // const request = {
    //     body: {
    //         user_id: new mongoose.Types.ObjectId("670bace596392ddfc980cc57"),
    //         product_id: new mongoose.Types.ObjectId("670b90f849af9bf770efd3ce"),
    //         question_id: new mongoose.Types.ObjectId("670babb0d14d5d29c0733af5"),
    //         action: "remove"
    //     }
    // }

    const { product_id, user_id, question_id, action } = request.body;

    try {
        const alreadyPresent = await User.findOne({ _id: user_id, "QaAction.product_id": product_id, "QaAction.question_id": question_id })

        if (alreadyPresent && action !== "remove") {
            const result = await User.findOneAndUpdate({ _id: user_id, "QaAction.product_id": product_id, "QaAction.question_id": question_id }, { $set: { "QaAction.$.action": action } }, { new: true })

            // console.log("================> result = ", result.QaAction)

            return response.status(200).json({ message: 'Feedback updated !', data: result.QaAction })
        }
        else if (!alreadyPresent && action !== "remove") {
            const result = await User.findOneAndUpdate({ _id: user_id }, { $addToSet: { QaAction: { product_id: product_id, question_id: question_id, action: action } } }, { new: true })

            // console.log("================> result = ", result.QaAction)

            return response.status(200).json({ message: 'Feedback submitted !', data: result.QaAction })
        }
        else if (alreadyPresent && action === "remove") {
            const result = await User.findOneAndUpdate({ _id: user_id }, { $pull: { QaAction: { product_id: product_id, question_id: question_id } } }, { new: true });

            // console.log("================> result = ", result.QaAction)

            return response.status(200).json({ message: 'Feedback removed !', data: result.QaAction })
        }
        else {
            return response.status(404).json({ message: 'Feedback not found !' })
        }
    }


    catch (error) {
        response.status(500).json({ message: 'Internal Server Error', error: error.message })
    }
}

// ================================================================================================================================