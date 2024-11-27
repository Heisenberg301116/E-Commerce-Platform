// Importing Data
import { BannerData } from './constants/BannerData.js'
import { HighResPhotos } from './constants/HighResPhotos.js'
import { LowResPhotos } from './constants/LowResPhotos.js'
import { ProductData } from './constants/ProductData.js'
import { QAData } from './constants/QAData.js'
import { ReviewData } from './constants/ReviewData.js'
import { ReviewPhotos } from './constants/ReviewPhotos.js'
import { SellersData } from './constants/SellerData.js'
import { UserData } from './constants/UserData.js'

// Importing Models
import Banner from './model/BannerData.js'
import HighRes from './model/HighResPhotos.js'
import LowRes from './model/LowResPhotos.js'
import Product from './model/ProductData.js'
import QuesAns from './model/QAData.js'
import Review from './model/ReviewData.js'
import ReviewImg from './model/ReviewPhotos.js'
import Seller from './model/SellerData.js'
import User from './model/UserData.js'


const DefaultData = async () => {
    try {
        // await Banner.insertMany(BannerData)
        // await Product.insertMany(ProductData)
        // await Seller.insertMany(SellersData)
        // await Banner.insertMany(BannerData)
        // await LowRes.insertMany(LowResPhotos)
        // await HighRes.insertMany(HighResPhotos)
        // await QuesAns.insertMany(QAData)
        // await User.insertMany(UserData)
        // await Review.insertMany(ReviewData)
        // await ReviewImg.insertMany(ReviewPhotos)

        console.log("=================> Data imported successfully")
    }
    catch (error) {
        console.log("==================> Error while inserting default data ", error.message)
    }
}

export default DefaultData;