import QuesAns from '../model/QAData.js'

// ================================================================================================================================

export const QuesAnsData = async (request, response) => {       // next 'limit' reviews data for given product
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

        // console.log("============> product_id, sort, skip, limit = ", product_id, sort, skip, limit)

        const questions = await QuesAns.find({ product_id: product_id })
            .sort(sort === "most-helpful" ? { likes: -1 } :
                sort === "most-recent" ? { date: -1 } :
                    sort === "least-recent" ? { date: 1 } :
                        {})
            .skip(skip)
            .limit(limit);


        if (questions && questions.length === 0) {
            return response.status(200).json({ data: [] })
        }
        else {
            return response.status(200).json({ data: questions })
        }
    }

    catch (error) {
        response.status(500).json({ message: 'Internal Server Error', error: error.message });
    }
};

// ================================================================================================================================

export const UpdateQuesLikesDislikes = async (request, response) => {       // this will increment/decrement the count of like/dislike by given value
    // const request = {
    //     body: {
    //         question_id: new mongoose.Types.ObjectId("670bc68ff0eb2b2682dffe70"),
    //         like: 5,        // increment like count by 5
    //         dislike: -2,     // decrement dislike count by 2
    //     }
    // }
    const { question_id, like, dislike } = request.body;

    try {
        const result = await QuesAns.updateOne({ _id: question_id }, { $inc: { likes: like, dislikes: dislike } })
        response.status(200).json({ message: "Updated Likes/Dislikes !" })
    }

    catch (error) {
        response.status(500).json({ message: 'Internal Server Error', error: error.message })
    }
}

// ================================================================================================================================