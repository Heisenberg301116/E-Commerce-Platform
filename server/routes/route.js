import express from 'express'
import { UserSignup, UserLogin, UserProfileUpdate, DeleteProfile, RemovefromCart, AddtoCart, UpdateCart, AddReviewFeedback, AddtoMyOrders, MyOrders, AddQuestionFeedback } from '../controller/user-controller.js';
import { ReviewsData, UserReviewImgs, UserReviewData, ReviewsImages, UpdateReviewLikesDislikes, UploadImagesToCloudinary, DeleteImagesFromCloudinary, AddorUpdateReview, AddUpdateUserReviewImgs } from '../controller/review-controller.js';
import { QuesAnsData, UpdateQuesLikesDislikes } from '../controller/quesans-controller.js';
import { ProductTitles, CategoryProducts, TaglineProducts, SearchResult, HighResProductImgs, LowResProductImg, FetchProductDetail, FetchSellerDetail } from '../controller/product-controller.js';
import { doPayment, status } from '../controller/payment-controller.js';

// for reading images from the client side
import multer from 'multer';
const upload = multer({ storage: multer.memoryStorage() });

const router = express.Router();


// Product Endpoints
router.get('/productsTitle', ProductTitles);
router.post('/productDetail', FetchProductDetail);
router.post('/sellerDetail', FetchSellerDetail);
router.post('/categoryProducts', CategoryProducts);
router.post('/taglineProducts', TaglineProducts);
router.post('/searchProducts', SearchResult);
router.post('/highResImgs', HighResProductImgs);
router.post('/lowResImgs', LowResProductImg);

// User Endpoints
router.post('/signup', UserSignup);
router.post('/login', UserLogin);
router.post('/updateUser', UserProfileUpdate);
router.post('/deleteUser', DeleteProfile);
router.post('/removefromCart', RemovefromCart);
router.post('/addtoCart', AddtoCart);
router.post('/updateCart', UpdateCart);
router.post('/myOrders', MyOrders);
router.post('/addtoMyOrders', AddtoMyOrders);
router.post('/userReviewFeedback', AddReviewFeedback);
router.post('/userQuestionFeedback', AddQuestionFeedback);

// Review Endpoints
router.post('/fetchReviews', ReviewsData);
router.post('/fetchReviewsImgs', ReviewsImages);
router.post('/UserReviewImgs', UserReviewImgs);
router.post('/UserReview', UserReviewData);
router.post('/updateReviewRating', UpdateReviewLikesDislikes);
router.post('/uploadImages', upload.array('images'), UploadImagesToCloudinary);
router.post('/deleteImages', DeleteImagesFromCloudinary);
router.post('/AddUpdateUserReview', AddorUpdateReview);
router.post('/AddUpdateUserReviewImgs', AddUpdateUserReviewImgs);

// Question-Answer Endpoints
router.post('/fetchQuestions', QuesAnsData);
router.post('/updateQuestionRating', UpdateQuesLikesDislikes);

// Payment Gateway endpoints
router.post('/buy', doPayment);
router.post('/status/:txnId', status);


export default router;