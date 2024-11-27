import Product from '../model/ProductData.js'
import Seller from '../model/SellerData.js'
import LowRes from '../model/LowResPhotos.js'
import HighRes from '../model/HighResPhotos.js'

//================================================================================================================================

export const ProductTitles = async (request, response) => {
    // Empty request body

    try {
        // Fetch only the longtitle field from all products
        const products = await Product.find({}, { 'title.longtitle': 1 });

        // Map over the products to extract the long title
        const titles = products.map(product => ({
            title: product.title.longtitle,
            id: product._id
        }));

        if (!titles.length) {
            return response.status(404).json({ titles: [] });
        }

        response.status(200).json({ titles: titles })
    }


    catch (error) {
        response.status(500).json({ message: 'Internal Server Error', error: error.message })
    }
}

// ================================================================================================================================

export const CategoryProducts = async (request, response) => {
    // const request = {
    //     body: {
    //         category: 'Smartphones',
    //         skip: 0,        // skip first 6 products
    //         limit: 1,       // fetch next 5 products
    //         sort: 'Price- Low to High'
    //     }
    // }

    // console.log("===============> inside server category")

    try {
        let products = [];
        const { category, sort, skip = 0, limit = 10 } = request.body; // Set default values for skip and limit

        products = await Product.find({ category: category })
            .sort(sort === "lowest-price" ? { "price.cost": 1 } :
                sort === "highest-price" ? { "price.cost": -1 } :
                    sort === "lowest-delivery-charges" ? { delivery_charges: 1 } :
                        sort === "top-rated" ? { average_stars: -1 } :
                            sort === "most-bought" ? { total_sold: -1 } :
                                sort === "most-rated" ? { total_ratings: -1 } :
                                    sort === "most-reviewed" ? { total_reviews: -1 } :
                                        {}) // Default to no sorting if sort is not specified
            .skip(skip)
            .limit(limit)

        if (products && products.length === 0) {
            return response.status(200).json({ data: [] })
        }
        else {
            return response.status(200).json({ data: products })
        }
    }


    catch (error) {
        response.status(500).json({ message: 'Internal Server Error', error: error.message })
    }
}

// ================================================================================================================================

export const TaglineProducts = async (request, response) => {
    // const request = {
    //     body: {
    //         tagline: `Season's Top Picks`,
    //         skip: 0,        // skip first 6 products
    //         limit: 1,       // fetch next 5 products
    //         sort: 'Price- Low to High'
    //     }
    // }

    // console.log("===============> inside server category")

    try {
        let products = [];
        const { tagline, sort, skip = 0, limit = 10 } = request.body; // Set default values for skip and limit

        products = await Product.find({ tagline: tagline })
            .sort(sort === "lowest-price" ? { "price.cost": 1 } :
                sort === "highest-price" ? { "price.cost": -1 } :
                    sort === "lowest-delivery-charges" ? { delivery_charges: 1 } :
                        sort === "top-rated" ? { average_stars: -1 } :
                            sort === "most-bought" ? { total_sold: -1 } :
                                sort === "most-rated" ? { total_ratings: -1 } :
                                    sort === "most-reviewed" ? { total_reviews: -1 } :
                                        {}) // Default to no sorting if sort is not specified
            .skip(skip)
            .limit(limit)

        if (!products || products.length === 0) {
            return response.status(200).json({ data: [] })
        }
        else {
            return response.status(200).json({ data: products })
        }
    }


    catch (error) {
        response.status(500).json({ message: 'Internal Server Error', error: error.message })
    }
}

// ================================================================================================================================

export const SearchResult = async (request, response) => {
    // const request = {
    //     body: {
    //         query: 'bag',     // search query        
    //         skip: 0,        // skip first 6 products
    //         limit: 5,       // fetch next 5 products
    //         sort: 'Price- Low to High'
    //     }
    // }

    try {
        const { query, sort, skip = 0, limit = 10 } = request.body; // Set default values for skip and limit
        let products = [];

        // Create a base filter for the search query
        const baseFilter = { $or: [] };

        // Adding conditions to the filter based on the order of matching
        if (query) {
            baseFilter.$or.push(
                { title: { longtitle: { $regex: query, $options: 'i' } } }, // Match longtitle
                { description: { $regex: query, $options: 'i' } }, // Match description
                { category: { $regex: query, $options: 'i' } }, // Match category
                { tagline: { $regex: query, $options: 'i' } } // Match tagline
                // { highlights: { $regex: query, $options: 'i' } }, // Match highlights                
                // { specification: { $regex: query, $options: 'i' } }, // Match specification                
            );
        }

        // Perform the product retrieval based on the filter and sorting
        products = await Product.find(baseFilter)
            .sort(sort === "lowest-price" ? { "price.cost": 1 } :
                sort === "highest-price" ? { "price.cost": -1 } :
                    sort === "lowest-delivery-charges" ? { delivery_charges: 1 } :
                        sort === "top-rated" ? { average_stars: -1 } :
                            sort === "most-bought" ? { total_sold: -1 } :
                                sort === "most-rated" ? { total_ratings: -1 } :
                                    sort === "most-reviewed" ? { total_reviews: -1 } :
                                        {}) // Default to no sorting if sort is not specified
            .skip(skip)
            .limit(limit);

        // Send the response with the fetched products
        if (products && products.length === 0) {
            return response.status(200).json({ data: products })
        }
        else {
            return response.status(200).json({ data: products })
        }
    }

    catch (error) {
        response.status(500).json({ message: 'Internal Server Error', error: error.message });
    }
};

// ================================================================================================================================

export const FetchProductDetail = async (request, response) => {
    // const request = {
    //     body: {
    //         product_id: new mongoose.Types.ObjectId("670b90f849af9bf770efd3ce"),
    //     }
    // }

    // console.log("==============> hitting router")

    try {
        const product = await Product.findOne({ _id: request.body.product_id })

        if (!product) {
            response.status(404).json({ message: 'Product does not exist !' });
            // console.log("=============> product-id = ", request.body.product_id, " and product not found")
        }

        else {
            response.status(200).json({ product: product });
            // console.log("=============> product-id = ", request.body.product_id, " and product found")
        }

    }

    catch (error) {
        return response.status(500).json({ message: 'Internal Server Error', error: error.message });
    }
};

// ================================================================================================================================

export const FetchSellerDetail = async (request, response) => {
    // const request = {
    //     body: {
    //         seller_id: new mongoose.Types.ObjectId("670b90f849af9bf770efd3ce"),
    //     }
    // }

    // console.log("==============> hitting router")

    try {
        const seller = await Seller.findOne({ _id: request.body.seller_id })

        if (!seller) {
            // console.log("===============> sellerid = ", request.body.seller_id, " and not found")
            return response.status(404).json({ message: 'Seller does not exist !' });
        }

        // console.log("===============> sellerid = ", request.body.seller_id, " and found !")

        return response.status(200).json({ seller: seller });
    }

    catch (error) {
        return response.status(500).json({ message: 'Internal Server Error', error: error.message });
    }
};


// ================================================================================================================================

export const HighResProductImgs = async (request, response) => {
    // const request = {
    //     body: {
    //         product_id: new mongoose.Types.ObjectId("670b90f849af9bf770efd3ce"),
    //     }
    // }

    try {
        const HighResImgs = await HighRes.find({ product_id: request.body.product_id }, { images: 1, _id: 0 })

        if (HighResImgs.length === 0) {
            response.status(404).json({ message: 'Product does not exist !' });
        }

        response.status(200).json({ data: HighResImgs[0].images });
    }

    catch (error) {
        response.status(500).json({ message: 'Internal Server Error', error: error.message });
    }
};

// ================================================================================================================================

export const LowResProductImg = async (request, response) => {
    // const request = {
    //     body: {
    //         product_id: new mongoose.Types.ObjectId("670b90f849af9bf770efd3ce"),
    //     }
    // }       

    // console.log("==============> hitting router")

    try {
        const LowResImg = await LowRes.find({ product_id: request.body.product_id }, { image: 1, _id: 0 })

        if (LowResImg.length === 0) {
            response.status(404).json({ message: 'Product does not exist !' });
        }
        else {
            response.status(200).json({ LowResImg: (LowResImg[0]).image });
        }

        // console.log("=============> product-id = ",request.body.product_id, " and LowResImg  = ",LowResImg )
    }

    catch (error) {
        response.status(500).json({ message: 'Internal Server Error', error: error.message });
    }
};

// ================================================================================================================================