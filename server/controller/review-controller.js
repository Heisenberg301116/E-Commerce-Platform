
import Review from '../model/ReviewData.js'
import ReviewImg from '../model/ReviewPhotos.js'
import cloudinary from '../config/cloudinary.js'
import { Readable } from 'stream';

// ================================================================================================================================

export const ReviewsData = async (request, response) => {       // next 'limit' reviews data for given product
    // const request = {
    //     body: {
    //         product_id: new mongoose.Types.ObjectId("670b90f849af9bf770efd3ce"),
    //         skip: 0,
    //         limit: 2,
    //         sort: 'Most Recent',
    //     }
    // }

    try {
        const { product_id, sort, skip = 0, limit = 10 } = request.body; // Set default values for skip and limit        

        const reviews = await Review.find({ product_id: product_id })
            .sort(sort === "most-helpful" ? { likes: -1 } :
                sort === "most-recent" ? { date: -1 } :
                    sort === "least-recent" ? { date: 1 } :
                        sort === "positive-first" ? { rating: -1 } :
                            sort === "negative-first" ? { rating: 1 } :
                                {}) // Default to no sorting if sort is not specified
            .skip(skip)
            .limit(limit);


        if (reviews && reviews.length === 0) {
            return response.status(200).json({ data: [] })
        }
        else {
            return response.status(200).json({ data: reviews })
        }
    }

    catch (error) {
        response.status(500).json({ message: 'Internal Server Error', error: error.message });
    }
};

// ================================================================================================================================
// const request = {
//     body: {
//         product_id: new mongoose.Types.ObjectId("670b90f849af9bf770efd3d4"),
//         user_id: new mongoose.Types.ObjectId("670bace596392ddfc980cc55"),
//     }
// }

export const UserReviewImgs = async (request, response) => {        // all review images by given user for given product
    // console.log("==============> hitting router")
    try {
        const { product_id, user_id } = request.body; // Set default values for skip and limit

        const reviewImgs = await ReviewImg.find({ user_id: user_id, product_id: product_id }, { images_arr: 1, _id: 0 })

        // console.log("==============> reviewImgs = ", reviewImgs)

        if (reviewImgs.length > 0) {
            response.status(200).json({ data: reviewImgs[0].images_arr });
        }

        else {
            // return response.status(404).json({ message: 'No image found !' });
            response.status(200).json({ data: [] });
        }
    }

    catch (error) {
        // console.log("===================> error in userreviewcontroller = ", error.message)
        response.status(500).json({ message: 'Internal Server Error', error: error.message });
    }
};

// ================================================================================================================================
// const request = {
//     body: {
//         product_id: new mongoose.Types.ObjectId("670b90f849af9bf770efd3d4"),
//         user_id: new mongoose.Types.ObjectId("670bace596392ddfc980cc55"),
//     }
// }

export const UserReviewData = async (request, response) => {        // review data of a given user for a given product
    // console.log("==============> hitting router")

    try {
        const { product_id, user_id } = request.body; // Set default values for skip and limit        

        const review = await Review.find({ user_id: user_id, product_id: product_id }, { _id: 0 })

        if (review.length > 0) {
            response.status(200).json({ data: review[0] });
        }

        else {
            // return response.status(404).json({ message: 'No review found !' });
            response.status(200).json({ data: "" });
        }
    }

    catch (error) {
        // console.log("==============> error in reviewcontroller userdata = ", error.message)
        response.status(500).json({ message: 'Internal Server Error', error: error.message });
    }
};

// ================================================================================================================================

export const ReviewsImages = async (request, response) => {       // next 'limit' reviews data for given product 

    // const request = {
    //     body: {
    //         product_id: new mongoose.Types.ObjectId("670b90f849af9bf770efd3ce"),
    //         skip: 0,
    //         limit: 5,
    //         sort: 'most-recent',
    //     }
    // }

    try {
        const { product_id, sort, skip = 0, limit = 100 } = request.body; // Set default values for skip and limit

        const reviews = await Review.find({ product_id: product_id })
            .sort(sort === "most-helpful" ? { likes: -1 } :
                sort === "most-recent" ? { date: -1 } :
                    sort === "least-recent" ? { date: 1 } :
                        sort === "positive-first" ? { rating: -1 } :
                            sort === "negative-first" ? { rating: 1 } :
                                {}) // Default to no sorting if sort is not specified
            .skip(skip)
            .limit(limit)     // collect images of next 100 reviews only.

        if (reviews.length === 0) {
            return response.status(200).json({ data: [] });
        }

        const Promises = reviews.map(async (review) => {
            const Imgs = await ReviewImg.find({ product_id: product_id, user_id: review.user_id }, { images_arr: 1, _id: 0 })

            if (Imgs && Imgs.length > 0) {
                const images_arr = Imgs[0].images_arr;
                const final_obj = { ...review.toObject(), review_images: images_arr }
                return final_obj;
            }
            else {
                return null;
            }
        })

        const reviews_arr = (await Promise.all(Promises)).filter((item) => item !== null)

        // console.log("======================> reviews_arr = ", reviews_arr)

        response.status(200).json({ data: reviews_arr });
    }

    catch (error) {
        response.status(500).json({ message: 'Internal Server Error', error: error.message });
    }
};

// ================================================================================================================================

export const UpdateReviewLikesDislikes = async (request, response) => {       // this will increment/decrement the count of like/dislike by given value
    // const request = {
    //     body: {
    //         review_id: new mongoose.Types.ObjectId("670bc68ff0eb2b2682dffe70"),
    //         like: 5,        // increment like count by 1
    //         dislike: -2,     // decrement dislike count by 2
    //     }
    // }

    const { review_id, like, dislike } = request.body;

    try {
        const result = await Review.findOneAndUpdate({ _id: review_id }, { $inc: { likes: like, dislikes: dislike } })
        response.status(200).json({ message: "Updated Likes/Dislikes !" })
    }

    catch (error) {
        response.status(500).json({ message: 'Internal Server Error', error: error.message })
    }
}

// ================================================================================================================================

export const UploadImagesToCloudinary = async (request, response) => {       // this will upload the given images in the array to cloudinary and returns URL corresponsing to each image back to the client in the form of array 
    // const request = {
    //     body: {
    //         images: [img1, img2, ....]
    //     }
    // }

    const files = request.files; // Access the uploaded files
    // console.log("==================> inside route and images = ", files)
    // console.log("==================> inside route and request = ", request)

    try {
        const imagesURL = [];

        // Upload each image to Cloudinary
        for (const file of files) {
            // console.log("============> file = ", file);

            // Convert buffer to readable stream
            const stream = Readable.from(file.buffer);

            // Use a Promise to handle the upload_stream
            const uploadResponse = await new Promise((resolve, reject) => {
                const uploadStream = cloudinary.uploader.upload_stream(
                    { folder: "Nexus/Review_Images" },
                    (error, result) => {
                        if (error) {
                            reject(error);
                        } else {
                            resolve(result);
                        }
                    }
                );

                // Pipe the stream to Cloudinary
                stream.pipe(uploadStream);
            });

            imagesURL.push(uploadResponse.secure_url); // Push the uploaded file's URL
        }

        // console.log("==============> inside UploadImagesToCloudinary and urls from server = ", imagesURL)

        response.status(200).json({ message: "Images Uploaded Successfully !", data: imagesURL })
    }

    catch (error) {
        // console.log("==============> error from server = ", error.message)
        response.status(500).json({ message: 'Internal Server Error', error: error.message })
    }
}

// ================================================================================================================================

export const DeleteImagesFromCloudinary = async (request, response) => {       // this will delete the given images (having cloudinary URL) from Cloudinary
    // const request = {
    //     body: {
    //         images: [url1, url2, ....]
    //     }
    // }

    const { images } = request.body;

    // console.log("=================> inside DeleteImagesFromCloudinary and request.body = ", request.body)

    try {
        // Extract public IDs from Cloudinary URLs
        const publicIds = images.map((url) => {
            // Cloudinary public IDs are the part of the URL after "/upload/"
            const segments = url.split('/upload/');
            if (segments.length < 2) {
                throw new Error(`Invalid Cloudinary URL: ${url}`);
            }
            const path = segments[1]; // Get the path after 'upload/'
            const pathWithoutVersion = path.replace(/^v[0-9]+\//, ''); // Remove version prefix if present
            return pathWithoutVersion.split('.')[0]; // Remove file extension
        });

        // console.log("================> inside DeleteImagesFromCloudinary and public ids = ", publicIds)

        // Delete each image by its public ID
        for (const publicId of publicIds) {
            await cloudinary.uploader.destroy(publicId);
        }

        // console.log("=================> inside DeleteImagesFromCloudinary and removed successfully")

        response.status(200).json({ message: "Images Removed Successfully !" })
    }

    catch (error) {
        // console.log("=========> error in DeleteImagesFromCloudinary reviewcontroller = ", error.message)
        response.status(500).json({ message: 'Internal Server Error', error: error.message })
    }
}

// ================================================================================================================================

export const AddorUpdateReview = async (request, response) => {       // if review is not present, this will add it, else it will update it
    // const request = {
    //     body: {
    //         product_id: new mongoose.Types.ObjectId("670b90f849af9bf770efd3ce"),
    //         user_id: new mongoose.Types.ObjectId("670bace596392ddfc980cc61"),
    //         name: "Deepak Kulkarni",
    //         date: '2024-05-23',
    //         rating: 5,
    //         likes: 15,
    //         dislikes: -2,
    //         title: "Awesome !",
    //         message: "Loved this phone !",
    //     }
    // }

    const { user_id, product_id, date, name, rating, likes, dislikes, title, message } = request.body;

    // console.log("==============> user_id, product_id, date, name, rating, likes, dislikes, title, message = ", user_id, product_id, date, name, rating, likes, dislikes, title, message)

    // console.log("================> inside AddorUpdateReview and request.body = ", request.body)

    try {
        const alreadyPresent = await Review.findOne({ user_id: user_id, product_id: product_id })

        // console.log("==============> inside AddorUpdateReview and already present = ", alreadyPresent)

        if (!alreadyPresent) {
            const result = await Review.create(request.body);
            // console.log("=========> inside AddorUpdateReview and creatig new review and result = ", result)
            response.status(200).json({ message: "Review Submitted !" })

        }
        else {
            const result = await Review.updateOne({ user_id: user_id, product_id: product_id }, { $set: { date: date, rating: rating, title: title, message: message } })

            // console.log("=========> inside AddorUpdateReview and modifying old review and result = ", result)

            response.status(200).json({ message: "Review Updated !" })
        }
    }

    catch (error) {
        // console.log("=========> error in AddorUpdateReview reviewcontroller = ", error.message)
        response.status(500).json({ message: 'Internal Server Error', error: error.message })
    }
}

// ================================================================================================================================

export const AddUpdateUserReviewImgs = async (request, response) => {       // if review images are not present, this will add it, else it will update it
    // const request = {
    //     body: {
    //         product_id: new mongoose.Types.ObjectId("670b90f849af9bf770efd3ce"),
    //         user_id: new mongoose.Types.ObjectId("670bace596392ddfc980cc61"),
    //         images_arr: [url1, url2, ...]
    //     }
    // }

    const { user_id, product_id, images_arr } = request.body;

    // console.log("================> inside UserReviewImgs and request.body = ", request.body)

    try {
        const alreadyPresent = await ReviewImg.findOne({ user_id: user_id, product_id: product_id })

        // console.log("==============> inside UserReviewImgs route and already present = ", alreadyPresent)

        if (!alreadyPresent) {
            const result = await ReviewImg.create(request.body);
            // console.log("=========> inside UserReviewImgs and creatig new review img and result = ", result)
            response.status(200).json({ message: "Review Images Submitted !" })

        }
        else {
            const result = await ReviewImg.updateOne({ user_id: user_id, product_id: product_id }, { $set: { images_arr: images_arr } })

            // console.log("=========> inside UserReviewImgs and modifying old review and result = ", result)
            response.status(200).json({ message: "Review Images Updated !" })
        }
    }

    catch (error) {
        // console.log("=========> error in UserReviewImgs reviewcontroller = ", error.message)
        response.status(500).json({ message: 'Internal Server Error', error: error.message })
    }
}

// ================================================================================================================================