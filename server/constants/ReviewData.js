// id for each data = Composite(product_id, user_id)

import mongoose from "mongoose"

export const ReviewData = [
    {
        product_id: new mongoose.Types.ObjectId("670b90f849af9bf770efd3ce"),
        user_id: new mongoose.Types.ObjectId("670bace596392ddfc980cc53"),
        name: 'Rajesh Bhatia',
        date: '2024-01-14',
        rating: 5,
        likes: 266,
        dislikes: 95,
        title: 'Super!',
        message: "One of the best Mobile in the Market under 20k, the performance was good, the camera was also ok, the design was premium quality, GT-mode was supper and would say that if you are going for a new phone with mid-budget this one will be the best."
    },

    {
        product_id: new mongoose.Types.ObjectId("670b90f849af9bf770efd3ce"),
        user_id: new mongoose.Types.ObjectId("670bace596392ddfc980cc54"),
        name: 'Sahil Singh',
        date: '2024-05-09',
        rating: 4,
        likes: 26,
        dislikes: 95,
        title: 'Best in the market!',
        message: "Absolutely Great phone and Good Camera and Performance"
    },

    {
        product_id: new mongoose.Types.ObjectId("670b90f849af9bf770efd3ce"),
        user_id: new mongoose.Types.ObjectId("670bace596392ddfc980cc55"),
        name: 'Saheli Roy',
        date: '2024-11-17',
        rating: 5,
        likes: 88,
        dislikes: 12,
        title: 'Simply awesome',
        message: "Value of money it is too good.. colour of this ph and all other faculty is just speechless.im Loving it...."
    },

    {
        product_id: new mongoose.Types.ObjectId("670b90f849af9bf770efd3ce"),
        user_id: new mongoose.Types.ObjectId("670bace596392ddfc980cc56"),
        name: 'Ramesh',
        date: '2024-05-23',
        rating: 5,
        likes: 97,
        dislikes: 52,
        title: 'Perfect product!',
        message: "If anyone have idea to buy this phone ,just see this review...\n1. Compare to any other mobile in this budget 80w charger worth for, battery 5200 Fast charging in 45-50 mins,\n2. Performance best mobile\n3. best part is camera,I like the normal images.\n4. Display Stylish and feel better\n5. In this 2 colours green have stylish look and satisfy\nJust see this before buy the mobile\nWorth for money and value for money."
    },

    {
        product_id: new mongoose.Types.ObjectId("670b90f849af9bf770efd3ce"),
        user_id: new mongoose.Types.ObjectId("670bace596392ddfc980cc57"),
        name: 'Ravindra Kumar',
        date: '2024-07-24',
        rating: 1,
        likes: 28,
        dislikes: 10,
        title: 'Not recommended at all',
        message: "80 wat charger one hour battery full charge what a scam"
    },

    {
        product_id: new mongoose.Types.ObjectId("670b90f849af9bf770efd3ce"),
        user_id: new mongoose.Types.ObjectId("670bace596392ddfc980cc58"),
        name: 'Ankit Kumar',
        date: '2024-08-12',
        rating: 2,
        likes: 0,
        dislikes: 3,
        title: 'Slightly disappointed',
        message: "Charging time is too long , 3 hours. Fast charging is not supported every time., Bad charging department overall."
    },

    {
        product_id: new mongoose.Types.ObjectId("670b90f849af9bf770efd3ce"),
        user_id: new mongoose.Types.ObjectId("670bace596392ddfc980cc59"),
        name: 'Sri Srinath',
        date: '2024-02-12',
        rating: 3,
        likes: 25,
        dislikes: 13,
        title: 'Just okay',
        message: "Camera very disappoint\nother features ok\nPrice range high",
    },

    {
        product_id: new mongoose.Types.ObjectId("670b90f849af9bf770efd3ce"),
        user_id: new mongoose.Types.ObjectId("670bace596392ddfc980cc5a"),
        name: 'Rajendra Sahoo',
        date: '2024-03-12',
        rating: 4,
        likes: 1,
        dislikes: 0,
        title: 'Delightful',
        message: "The product is excellent",
    },

    {
        product_id: new mongoose.Types.ObjectId("670b90f849af9bf770efd3ce"),
        user_id: new mongoose.Types.ObjectId("670bace596392ddfc980cc5b"),
        name: 'Hamza Qureshi',
        date: '2024-04-21',
        rating: 5,
        likes: 125,
        dislikes: 10,
        title: 'Best in the segment',
        message: "Look here I will give you honest review\nPros-\n-display is awesome at this price range with curved and smooth display ( I like curved display more than than flat)\n- brightness is also good\n-Battery is awesome for normal use, and good for gaming\n- charging speed also best 0-100 in just 50-55 minutes\n- ai camera feature is too good\n-camera is also good but not that much\n- performance is also good bcz it has snapdragon processor which gives long lasting performance after years\nCons-\n-Back design is so average like 11-12k mobiles (I hate big camera phones)\n-heat slightly like warm while normal use (not too much)"
    },

    {
        product_id: new mongoose.Types.ObjectId("670b90f849af9bf770efd3cf"),
        user_id: new mongoose.Types.ObjectId("670bace596392ddfc980cc5b"),
        name: 'Hamza Qureshi',
        date: '2024-04-21',
        rating: 1,
        likes: 12,
        dislikes: 10,
        title: 'Worst Product Ever',
        message: "To dirty and cheap quality. Not worth it even for free."
    },

    {
        product_id: new mongoose.Types.ObjectId("670b90f849af9bf770efd3cf"),
        user_id: new mongoose.Types.ObjectId("670bace596392ddfc980cc5a"),
        name: 'Rajendra Sahoo',
        date: '2024-03-12',
        rating: 4,
        likes: 5,
        dislikes: 0,
        title: 'Good',
        message: "Good Product. Can go for it.",
    },

    {
        product_id: new mongoose.Types.ObjectId("670b90f849af9bf770efd3cf"),
        user_id: new mongoose.Types.ObjectId("670bace596392ddfc980cc57"),
        name: 'Ravindra Kumar',
        date: '2024-07-24',
        rating: 1,
        likes: 0,
        dislikes: 0,
        title: 'Quality very bad',
        message: "Material got torn off within 5 days."
    },

    {
        product_id: new mongoose.Types.ObjectId("670b90f849af9bf770efd3cf"),
        user_id: new mongoose.Types.ObjectId("670bace596392ddfc980cc58"),
        name: 'Ankit Kumar',
        date: '2024-08-12',
        rating: 2,
        likes: 1,
        dislikes: 0,
        title: 'Not at all recommended',
        message: "Zip is not good poor quality if trust and take somewhere you will suffer."
    },

    {
        product_id: new mongoose.Types.ObjectId("670b90f849af9bf770efd3d0"),
        user_id: new mongoose.Types.ObjectId("670bace596392ddfc980cc5b"),
        name: 'Hamza Qureshi',
        date: '2024-04-21',
        rating: 1,
        likes: 12,
        dislikes: 10,
        title: 'Worst Product Ever',
        message: "To dirty and cheap quality. Not worth it even for free."
    },

    {
        product_id: new mongoose.Types.ObjectId("670b90f849af9bf770efd3d0"),
        user_id: new mongoose.Types.ObjectId("670bace596392ddfc980cc5a"),
        name: 'Rajendra Sahoo',
        date: '2024-03-12',
        rating: 4,
        likes: 5,
        dislikes: 0,
        title: 'Good',
        message: "Good Product. Can go for it.",
    },

    {
        product_id: new mongoose.Types.ObjectId("670b90f849af9bf770efd3d0"),
        user_id: new mongoose.Types.ObjectId("670bace596392ddfc980cc57"),
        name: 'Ravindra Kumar',
        date: '2024-07-24',
        rating: 1,
        likes: 0,
        dislikes: 0,
        title: 'Quality very bad',
        message: "Material got torn off within 5 days."
    },

    {
        product_id: new mongoose.Types.ObjectId("670b90f849af9bf770efd3d0"),
        user_id: new mongoose.Types.ObjectId("670bace596392ddfc980cc58"),
        name: 'Ankit Kumar',
        date: '2024-08-12',
        rating: 2,
        likes: 1,
        dislikes: 0,
        title: 'Not at all recommended',
        message: "Zip is not good poor quality if trust and take somewhere you will suffer."
    },

    {
        product_id: new mongoose.Types.ObjectId("670b90f849af9bf770efd3d1"),
        user_id: new mongoose.Types.ObjectId("670bace596392ddfc980cc53"),
        name: 'Rajesh Bhatia',
        date: '2024-01-14',
        rating: 5,
        likes: 266,
        dislikes: 95,
        title: 'Super!',
        message: "Packaging is not good... product is always awesome"
    },

    {
        product_id: new mongoose.Types.ObjectId("670b90f849af9bf770efd3d1"),
        user_id: new mongoose.Types.ObjectId("670bace596392ddfc980cc54"),
        name: 'Sahil Singh',
        date: '2024-05-09',
        rating: 5,
        likes: 26,
        dislikes: 95,
        title: 'Smells Terrible',
        message: "Smells like feet, don't buy."
    },

    {
        product_id: new mongoose.Types.ObjectId("670b90f849af9bf770efd3d1"),
        user_id: new mongoose.Types.ObjectId("670bace596392ddfc980cc55"),
        name: 'Saheli Roy',
        date: '2024-11-17',
        rating: 5,
        likes: 88,
        dislikes: 12,
        title: 'Nice Product',
        message: "I always use dettol handwash. Don't like any other product other than this."
    },

    {
        product_id: new mongoose.Types.ObjectId("670b90f849af9bf770efd3d1"),
        user_id: new mongoose.Types.ObjectId("670bace596392ddfc980cc56"),
        name: 'Ramesh',
        date: '2024-05-23',
        rating: 5,
        likes: 97,
        dislikes: 52,
        title: 'Quantity and Quality',
        message: "1.5 litre is very big and it's gives us 10-12 months of usage also quality is very good."
    },

    {
        product_id: new mongoose.Types.ObjectId("670b90f849af9bf770efd3d1"),
        user_id: new mongoose.Types.ObjectId("670bace596392ddfc980cc57"),
        name: 'Ravindra Kumar',
        date: '2024-07-24',
        rating: 4,
        likes: 28,
        dislikes: 10,
        title: 'Best',
        message: "Smells good, safe, cleans well, value for money. Totally worth it."
    },

    {
        product_id: new mongoose.Types.ObjectId("670b90f849af9bf770efd3d1"),
        user_id: new mongoose.Types.ObjectId("670bace596392ddfc980cc58"),
        name: 'Ankit Kumar',
        date: '2024-08-12',
        rating: 2,
        likes: 0,
        dislikes: 3,
        title: 'Damaged Packaging',
        message: "I got damaged package of Dettol handwash. It totally spilled inside the box, shown in the video. Though quantity is good but packing wise, Very disappointed. You must improve packing liquid items."
    },

    {
        product_id: new mongoose.Types.ObjectId("670b90f849af9bf770efd3d1"),
        user_id: new mongoose.Types.ObjectId("670bace596392ddfc980cc59"),
        name: 'Sri Srinath',
        date: '2024-02-12',
        rating: 1,
        likes: 25,
        dislikes: 13,
        title: 'Not recommended at all',
        message: "Don't buy this product , ph value is not maintained . I feel pain in my hand after using this product . I used same product from lot of brand . But Dettol is the one is really bad in quality . Atleast for me.",
    },

    {
        product_id: new mongoose.Types.ObjectId("670b90f849af9bf770efd3d1"),
        user_id: new mongoose.Types.ObjectId("670bace596392ddfc980cc5a"),
        name: 'Rajendra Sahoo',
        date: '2024-03-12',
        rating: 3,
        likes: 1,
        dislikes: 0,
        title: 'Fair',
        message: "Late delivery but product perfect",
    },

    {
        "product_id": new mongoose.Types.ObjectId("670b90f849af9bf770efd3d2"),
        user_id: new mongoose.Types.ObjectId("670bace596392ddfc980cc53"),
        "name": "Rajesh Bhatia",
        "date": "2024-02-15",
        "rating": 5,
        "likes": 12,
        "dislikes": 0,
        "title": "Great Quality!",
        "message": "The fabric feels amazing, fits perfectly. Definitely worth the price!"
    },

    {
        "product_id": new mongoose.Types.ObjectId("670b90f849af9bf770efd3d2"),
        user_id: new mongoose.Types.ObjectId("670bace596392ddfc980cc54"),
        "name": "Sahil Singh",
        "date": "2024-01-30",
        "rating": 4,
        "likes": 8,
        "dislikes": 1,
        "title": "Good but not perfect",
        "message": "Shirt is good overall but the size ran slightly smaller than expected."
    },

    {
        "product_id": new mongoose.Types.ObjectId("670b90f849af9bf770efd3d2"),
        user_id: new mongoose.Types.ObjectId("670bace596392ddfc980cc55"),
        "name": "Saheli Roy",
        "date": "2024-03-05",
        "rating": 3,
        "likes": 5,
        "dislikes": 2,
        "title": "Decent shirt, poor delivery",
        "message": "Shirt quality is fine but delivery took too long."
    },

    {
        "product_id": new mongoose.Types.ObjectId("670b90f849af9bf770efd3d2"),
        user_id: new mongoose.Types.ObjectId("670bace596392ddfc980cc56"),
        "name": "Ramesh",
        "date": "2024-02-22",
        "rating": 2,
        "likes": 3,
        "dislikes": 5,
        "title": "Not worth the price",
        "message": "The fabric quality didn't meet my expectations. Found better options elsewhere."
    },

    {
        "product_id": new mongoose.Types.ObjectId("670b90f849af9bf770efd3d2"),
        user_id: new mongoose.Types.ObjectId("670bace596392ddfc980cc57"),
        "name": "Ravindra Kumar",
        "date": "2024-03-10",
        "rating": 1,
        "likes": 1,
        "dislikes": 10,
        "title": "Very disappointed",
        "message": "Color faded after one wash, and the size was completely off."
    },

    {
        "product_id": new mongoose.Types.ObjectId("670b90f849af9bf770efd3d3"),
        user_id: new mongoose.Types.ObjectId("670bace596392ddfc980cc53"),
        "name": "Rajesh Bhatia",
        "date": "2024-02-15",
        "rating": 5,
        "likes": 12,
        "dislikes": 0,
        "title": "Outstanding Performance!",
        "message": "The laptop works flawlessly, handles heavy tasks with ease. Great value for money!"
    },

    {
        "product_id": new mongoose.Types.ObjectId("670b90f849af9bf770efd3d3"),
        user_id: new mongoose.Types.ObjectId("670bace596392ddfc980cc54"),
        "name": "Sahil Singh",
        "date": "2024-01-30",
        "rating": 4,
        "likes": 8,
        "dislikes": 1,
        "title": "Solid but minor issues",
        "message": "Overall good laptop, but the battery life could be better. Runs well for the price."
    },

    {
        "product_id": new mongoose.Types.ObjectId("670b90f849af9bf770efd3d3"),
        user_id: new mongoose.Types.ObjectId("670bace596392ddfc980cc55"),
        "name": "Saheli Roy",
        "date": "2024-03-05",
        "rating": 3,
        "likes": 5,
        "dislikes": 2,
        "title": "Average performance, late delivery",
        "message": "The laptop is okay for light use, but delivery was delayed by several days."
    },

    {
        "product_id": new mongoose.Types.ObjectId("670b90f849af9bf770efd3d3"),
        user_id: new mongoose.Types.ObjectId("670bace596392ddfc980cc56"),
        "name": "Ramesh",
        "date": "2024-02-22",
        "rating": 2,
        "likes": 3,
        "dislikes": 5,
        "title": "Disappointing Battery Life",
        "message": "Battery drains too quickly, and the build quality isn't great for the price."
    },

    {
        "product_id": new mongoose.Types.ObjectId("670b90f849af9bf770efd3d3"),
        user_id: new mongoose.Types.ObjectId("670bace596392ddfc980cc57"),
        "name": "Ravindra Kumar",
        "date": "2024-03-10",
        "rating": 1,
        "likes": 1,
        "dislikes": 10,
        "title": "Extremely Disappointed",
        "message": "Laptop started overheating after a week of use. Very poor build quality, not recommended."
    },

    {
        "product_id": new mongoose.Types.ObjectId("670b90f849af9bf770efd3d4"),
        user_id: new mongoose.Types.ObjectId("670bace596392ddfc980cc53"),
        "name": "Rajesh Bhatia",
        "date": "2024-02-15",
        "rating": 5,
        "likes": 12,
        "dislikes": 0,
        "title": "Excellent Refrigerator!",
        "message": "I recently purchased this Samsung Digital Inverter Refrigerator, and I couldn't be happier! \nThe cooling efficiency is top-notch, keeping my fruits and vegetables fresh for a longer time. \nThe design is sleek and fits perfectly in my kitchen. \nIt's also very quiet, which is a huge plus for me."
    },

    {
        "product_id": new mongoose.Types.ObjectId("670b90f849af9bf770efd3d4"),
        user_id: new mongoose.Types.ObjectId("670bace596392ddfc980cc54"),
        "name": "Sahil Singh",
        "date": "2024-01-30",
        "rating": 4,
        "likes": 8,
        "dislikes": 1,
        "title": "Good Performance with Minor Issues",
        "message": "This refrigerator has a great cooling capacity, but I did face a minor issue with ice formation in the freezer compartment. \nOverall, the energy efficiency is impressive, and it's spacious enough for my family's needs. \nI would recommend it, but just be cautious about the ice buildup."
    },

    {
        "product_id": new mongoose.Types.ObjectId("670b90f849af9bf770efd3d4"),
        user_id: new mongoose.Types.ObjectId("670bace596392ddfc980cc55"),
        "name": "Saheli Roy",
        "date": "2024-03-05",
        "rating": 3,
        "likes": 5,
        "dislikes": 2,
        "title": "Decent but Room for Improvement",
        "message": "The refrigerator does its job adequately, keeping items cool. \nHowever, I was disappointed with the shelf space; it feels a bit cramped. \nAdditionally, the noise level is noticeable, especially during the compressor's operation. \nI expected a quieter experience from a brand like Samsung."
    },

    {
        "product_id": new mongoose.Types.ObjectId("670b90f849af9bf770efd3d4"),
        user_id: new mongoose.Types.ObjectId("670bace596392ddfc980cc56"),
        "name": "Ramesh",
        "date": "2024-02-22",
        "rating": 2,
        "likes": 3,
        "dislikes": 5,
        "title": "Not What I Expected",
        "message": "I had high hopes for this Samsung refrigerator, but it hasn't met my expectations. \nThe cooling is inconsistent, with some items not getting cold enough. \nMoreover, the plastic quality of the shelves feels cheap. \nI would suggest looking into other options before committing to this one."
    },

    {
        "product_id": new mongoose.Types.ObjectId("670b90f849af9bf770efd3d4"),
        user_id: new mongoose.Types.ObjectId("670bace596392ddfc980cc57"),
        "name": "Ravindra Kumar",
        "date": "2024-03-10",
        "rating": 1,
        "likes": 1,
        "dislikes": 10,
        "title": "Very Disappointed",
        "message": "I regret purchasing this refrigerator. \nThe compressor broke down within a month, and it took ages to get it repaired. \nMoreover, the temperature control is faulty, leading to food spoilage. \nI expected better quality from Samsung and am now considering a different brand."
    },

    {
        "product_id": new mongoose.Types.ObjectId("670b90f849af9bf770efd3d5"),
        user_id: new mongoose.Types.ObjectId("670bace596392ddfc980cc53"),
        "name": "Rajesh Bhatia",
        "date": "2024-02-10",
        "rating": 4,
        "likes": 12,
        "dislikes": 1,
        "title": "Very Good Product",
        "message": "The face wash is really effective for oily skin. I’ve been using it for over a month, and my skin feels cleaner and more refreshed. It leaves a nice cooling sensation after washing, and I can see the difference in brightness.\nThe only downside is that the tube is a bit small for the price."
    },
    {
        "product_id": new mongoose.Types.ObjectId("670b90f849af9bf770efd3d5"),
        user_id: new mongoose.Types.ObjectId("670bace596392ddfc980cc54"),
        "name": "Sahil Singh",
        "date": "2024-01-20",
        "rating": 5,
        "likes": 45,
        "dislikes": 3,
        "title": "Best face wash I have used so far!",
        "message": "I have tried many face washes, but this one stands out. The combination of charcoal and vitamin C works wonders. My skin looks much brighter, and I no longer have the oily residue at the end of the day. The scent is light and refreshing. I highly recommend it for anyone looking to brighten their skin."
    },
    {
        "product_id": new mongoose.Types.ObjectId("670b90f849af9bf770efd3d5"),
        user_id: new mongoose.Types.ObjectId("670bace596392ddfc980cc55"),
        "name": "Saheli Roy",
        "date": "2024-03-05",
        "rating": 3,
        "likes": 23,
        "dislikes": 5,
        "title": "Good but drying for winters",
        "message": "The face wash cleans well and gives a fresh feeling after every wash. However, during winter, I found it a bit drying. If you have combination skin like mine, it might leave some dry patches.\nStill, it works well for controlling oil and removing dirt. Just make sure to moisturize after use."
    },
    {
        "product_id": new mongoose.Types.ObjectId("670b90f849af9bf770efd3d5"),
        user_id: new mongoose.Types.ObjectId("670bace596392ddfc980cc56"),
        "name": "Ramesh",
        "date": "2024-02-25",
        "rating": 5,
        "likes": 32,
        "dislikes": 0,
        "title": "Superb face wash for men!",
        "message": "I bought this face wash after a friend's recommendation, and it has been amazing. My skin feels cleaner, and it has helped in reducing the oiliness. The brightening effect is noticeable within a week. It's the best I have used so far.\nWill definitely buy again!"
    },
    {
        "product_id": new mongoose.Types.ObjectId("670b90f849af9bf770efd3d5"),
        user_id: new mongoose.Types.ObjectId("670bace596392ddfc980cc57"),
        "name": "Ravindra Kumar",
        "date": "2024-01-12",
        "rating": 2,
        "likes": 6,
        "dislikes": 10,
        "title": "Didn’t meet my expectations",
        "message": "I had high hopes after reading the reviews, but this face wash didn’t work well for me. It left my skin feeling tight and dry. The brightening effect is minimal, and I didn't notice any significant change even after using it for two weeks."
    },
    {
        "product_id": new mongoose.Types.ObjectId("670b90f849af9bf770efd3d5"),
        user_id: new mongoose.Types.ObjectId("670bace596392ddfc980cc58"),
        "name": "Ankit Kumar",
        "date": "2024-03-02",
        "rating": 4,
        "likes": 18,
        "dislikes": 2,
        "title": "Works well for oily skin",
        "message": "This face wash is great for people with oily skin. It effectively removes the excess oil without leaving the skin too dry. I use it twice a day, and my skin looks fresher. However, it doesn’t do much for acne or blackheads, but overall, it’s a good product."
    },
    {
        "product_id": new mongoose.Types.ObjectId("670b90f849af9bf770efd3d5"),
        user_id: new mongoose.Types.ObjectId("670bace596392ddfc980cc59"),
        "name": "Sri Srinath",
        "date": "2024-02-18",
        "rating": 5,
        "likes": 27,
        "dislikes": 0,
        "title": "Highly recommended",
        "message": "This face wash is excellent. My skin feels smoother and cleaner after every wash. The charcoal and vitamin C formula really works to remove impurities and give a bright glow. It’s now my go-to face wash."
    },
    {
        "product_id": new mongoose.Types.ObjectId("670b90f849af9bf770efd3d5"),
        user_id: new mongoose.Types.ObjectId("670bace596392ddfc980cc59"),
        "name": "Rajendra Sahoo",
        "date": "2024-02-22",
        "rating": 4,
        "likes": 21,
        "dislikes": 1,
        "title": "Effective but pricey",
        "message": "The product works as advertised, and the results are visible after a few uses. It helps to reduce oiliness and brighten the skin. However, the price could be lower for the quantity provided. Overall, a good buy if you don’t mind spending a bit more."
    },
    {
        "product_id": new mongoose.Types.ObjectId("670b90f849af9bf770efd3d5"),
        user_id: new mongoose.Types.ObjectId("670bace596392ddfc980cc5b"),
        "name": "Hamza Qureshi",
        "date": "2024-01-28",
        "rating": 3,
        "likes": 10,
        "dislikes": 4,
        "title": "Average results",
        "message": "I’ve been using this face wash for two weeks now, but I haven’t seen a drastic improvement in my skin. It cleans well but doesn’t really help with oil control as much as I hoped.\nMight work better for someone with less oily skin."
    },
    {
        "product_id": new mongoose.Types.ObjectId("670b90f849af9bf770efd3d5"),
        user_id: new mongoose.Types.ObjectId("670bace596392ddfc980cc5c"),
        "name": "Vivek Reddy",
        "date": "2024-02-15",
        "rating": 4,
        "likes": 16,
        "dislikes": 3,
        "title": "Great for daily use",
        "message": "This face wash is gentle enough for daily use, and I love how it makes my skin feel fresh and clean after every wash. The brightening effect is subtle but noticeable after regular use."
    },
    {
        "product_id": new mongoose.Types.ObjectId("670b90f849af9bf770efd3d5"),
        user_id: new mongoose.Types.ObjectId("670bace596392ddfc980cc5d"),
        "name": "Shivam Bansal",
        "date": "2024-01-05",
        "rating": 1,
        "likes": 2,
        "dislikes": 13,
        "title": "Not worth the price",
        "message": "I’m really disappointed with this face wash. It didn’t work for my skin type at all and left it feeling dry and irritated. I wouldn’t recommend it to anyone with sensitive or dry skin."
    },
    {
        "product_id": new mongoose.Types.ObjectId("670b90f849af9bf770efd3d5"),
        user_id: new mongoose.Types.ObjectId("670bace596392ddfc980cc5e"),
        "name": "Kartik Mishra",
        "date": "2024-03-08",
        "rating": 5,
        "likes": 30,
        "dislikes": 2,
        "title": "Amazing face wash!",
        "message": "This face wash has worked wonders for my skin. It feels so much cleaner, and my complexion has brightened up. I’ve received compliments from friends about how fresh my face looks. Definitely recommend!"
    },
    {
        "product_id": new mongoose.Types.ObjectId("670b90f849af9bf770efd3d5"),
        user_id: new mongoose.Types.ObjectId("670bace596392ddfc980cc5f"),
        "name": "Preeti Yadav",
        "date": "2024-02-07",
        "rating": 3,
        "likes": 14,
        "dislikes": 6,
        "title": "Decent but not great",
        "message": "This face wash does the job but didn’t exceed my expectations. It cleans the skin, but I didn’t notice much improvement in terms of brightness or oil control. For the price, I expected better results."
    },
    {
        "product_id": new mongoose.Types.ObjectId("670b90f849af9bf770efd3d5"),
        user_id: new mongoose.Types.ObjectId("670bace596392ddfc980cc60"),
        "name": "Manish Patel",
        "date": "2024-01-22",
        "rating": 4,
        "likes": 25,
        "dislikes": 3,
        "title": "Good for everyday use",
        "message": "I use this face wash every morning, and it helps me start the day feeling fresh. The citrus fragrance is pleasant, and it’s effective in removing dirt and oil. My skin has a slight glow after using it."
    },
    {
        "product_id": new mongoose.Types.ObjectId("670b90f849af9bf770efd3d5"),
        user_id: new mongoose.Types.ObjectId("670bace596392ddfc980cc61"),
        "name": "Deepak Kulkarni",
        "date": "2024-03-10",
        "rating": 2,
        "likes": 7,
        "dislikes": 9,
        "title": "Too drying for my skin",
        "message": "I have combination skin, and this face wash dried out the areas around my cheeks, while the oily parts didn’t see much improvement. Not ideal if you have skin that tends to dry out easily."
    },

    {
        "product_id": new mongoose.Types.ObjectId("670b90f849af9bf770efd3d5"),
        user_id: new mongoose.Types.ObjectId("670bace596392ddfc980cc62"),
        "name": "Ravi Shankar",
        "date": "2024-03-15",
        "rating": 1,
        "likes": 5,
        "dislikes": 12,
        "title": "Damaged packaging, not satisfied",
        "message": "The product arrived with the packaging completely damaged. The face wash tube had leaked inside the box, and I lost a lot of product. Very disappointing to receive such poor packaging. This has ruined my first experience with this face wash, so I can't comment on the product itself."
    },

    {
        "product_id": new mongoose.Types.ObjectId("670b90f849af9bf770efd3d5"),
        user_id: new mongoose.Types.ObjectId("670bace596392ddfc980cc63"),
        "name": "Pooja Mehta",
        "date": "2024-03-18",
        "rating": 2,
        "likes": 9,
        "dislikes": 7,
        "title": "Leaking tube, poor quality control",
        "message": "I received the face wash in a leaky tube, with almost half of the product spilled inside the delivery box. Although the face wash itself seems fine, the quality control for packaging needs to be improved drastically. I won't be ordering from here again unless they fix these issues."
    },

    {
        product_id: new mongoose.Types.ObjectId("670b90f849af9bf770efd3d6"),
        user_id: new mongoose.Types.ObjectId("670bace596392ddfc980cc53"),
        name: "Rajesh Bhatia",
        date: "2024-03-13",
        rating: 5,
        likes: 8,
        dislikes: 0,
        title: "Excellent Earbuds",
        message: "The Noise Buds Connect are just fantastic! The sound quality is superb, and I love the long battery life. I was a bit skeptical at first, but they have exceeded my expectations. The earbuds are super comfortable, even for extended wear, and the quad mic with ENC works great during calls. Highly recommend these for anyone looking for quality wireless earbuds with great features."
    },

    {
        product_id: new mongoose.Types.ObjectId("670b90f849af9bf770efd3d6"),
        user_id: new mongoose.Types.ObjectId("670bace596392ddfc980cc54"),
        name: "Sahil Singh",
        date: "2024-03-14",
        rating: 4,
        likes: 6,
        dislikes: 1,
        title: "Good for the Price",
        message: "I got these earbuds as a gift, and I am really happy with them. The playtime is exactly as advertised, and I love the Instacharge feature - it really does give you a lot of listening time with just a short charge. However, sometimes the connection drops when I’m moving around, which can be a bit frustrating. Overall, for the price, these are great earbuds with nice features."
    },

    {
        product_id: new mongoose.Types.ObjectId("670b90f849af9bf770efd3d6"),
        user_id: new mongoose.Types.ObjectId("670bace596392ddfc980cc55"),
        name: "Saheli Roy",
        date: "2024-03-15",
        rating: 2,
        likes: 2,
        dislikes: 5,
        title: "Not as Expected",
        message: "I was really looking forward to trying these earbuds after reading the specs, but I found the sound quality to be lacking, especially in the bass department. The earbuds look good, and they’re comfortable, but I expected better performance. The connectivity sometimes drops, and the ENC doesn’t seem very effective during calls. Not really satisfied."
    },

    {
        product_id: new mongoose.Types.ObjectId("670b90f849af9bf770efd3d6"),
        user_id: new mongoose.Types.ObjectId("670bace596392ddfc980cc56"),
        name: "Ramesh",
        date: "2024-03-16",
        rating: 5,
        likes: 10,
        dislikes: 0,
        title: "Amazing Battery Life",
        message: "The Noise Buds Connect have an incredible battery life! I use them all day long, and I rarely need to recharge them. The sound is clear, and the Instacharge feature is a game-changer for me. I also appreciate the Hyper Sync, which makes pairing so much easier. These earbuds are perfect for someone who wants something reliable and long-lasting."
    },

    {
        product_id: new mongoose.Types.ObjectId("670b90f849af9bf770efd3d6"),
        user_id: new mongoose.Types.ObjectId("670bace596392ddfc980cc57"),
        name: "Ravindra Kumar",
        date: "2024-03-17",
        rating: 3,
        likes: 3,
        dislikes: 2,
        title: "Decent Product",
        message: "The Noise Buds Connect are decent overall. I like the mint green color, and the earbuds are quite comfortable to wear. The sound quality is good for the price, but I noticed some minor connectivity issues, especially when I'm outdoors. The battery life is impressive, and the charging is really quick. Not the best I've used, but definitely not bad either."
    },

    {
        product_id: new mongoose.Types.ObjectId("670b90f849af9bf770efd3d6"),
        user_id: new mongoose.Types.ObjectId("670bace596392ddfc980cc58"),
        name: "Ankit Kumar",
        date: "2024-03-18",
        rating: 4,
        likes: 7,
        dislikes: 1,
        title: "Great Value for Money",
        message: "I’ve been using these earbuds for a few weeks now, and I’m quite happy with the purchase. The sound is clear, the bass is decent, and the ENC makes a noticeable difference in reducing background noise. I love the Instacharge feature, which is very convenient when I’m in a hurry. These earbuds are a great value for the money, and I would definitely recommend them to others."
    },

    {
        product_id: new mongoose.Types.ObjectId("670b90f849af9bf770efd3d6"),
        user_id: new mongoose.Types.ObjectId("670bace596392ddfc980cc59"),
        name: "Sri Srinath",
        date: "2024-03-19",
        rating: 1,
        likes: 1,
        dislikes: 8,
        title: "Very Disappointing",
        message: "I had high hopes for the Noise Buds Connect, but I’m extremely disappointed. The earbuds frequently disconnect from my device, and the sound quality is really subpar. I even tried resetting them, but the issues persisted. The ENC does nothing to improve call quality, and I find myself having to repeat myself often. Would not recommend these earbuds."
    },

    {
        product_id: new mongoose.Types.ObjectId("670b90f849af9bf770efd3d7"),
        user_id: new mongoose.Types.ObjectId("670bace596392ddfc980cc53"),
        name: "Rajesh Bhatia",
        date: "2024-04-01",
        rating: 4,
        likes: 5,
        dislikes: 1,
        title: "Good Quality Bottle",
        message: "The Cello H2O glass bottle is of great quality. I like that it’s made of borosilicate glass, which is quite durable and doesn’t break easily. The wide mouth makes it super easy to clean and fill with ice or fruits. It’s perfect for carrying around whether I'm going to the office or on a road trip. My only complaint is that the cap could be a bit tighter, but overall, I am happy with this purchase."
    },
    {
        product_id: new mongoose.Types.ObjectId("670b90f849af9bf770efd3d7"),
        user_id: new mongoose.Types.ObjectId("670bace596392ddfc980cc54"),
        name: "Sahil Singh",
        date: "2024-04-02",
        rating: 5,
        likes: 10,
        dislikes: 0,
        title: "Perfect for Everyday Use",
        message: "I absolutely love this water bottle! It’s sturdy, looks elegant, and holds just the right amount of water for me. The glass material doesn’t alter the taste of water, which is a huge plus for me. I also love that it fits easily in my fridge and stays cool. I carry it with me everywhere – to the office, gym, and even when I travel. Highly recommend this bottle if you're looking for something both functional and stylish."
    },
    {
        product_id: new mongoose.Types.ObjectId("670b90f849af9bf770efd3d7"),
        user_id: new mongoose.Types.ObjectId("670bace596392ddfc980cc55"),
        name: "Saheli Roy",
        date: "2024-04-03",
        rating: 3,
        likes: 4,
        dislikes: 2,
        title: "Nice Bottle but Fragile",
        message: "The Cello H2O bottle has a lovely design, and I really appreciate the wide mouth for easy cleaning. However, it’s a bit more fragile than I expected. I accidentally dropped it once, and it cracked. If you're careful with it, it’s a great bottle, but I would recommend using a protective sleeve to prevent damage. Also, the bottle cap sometimes doesn’t seem to close tightly enough."
    },
    {
        product_id: new mongoose.Types.ObjectId("670b90f849af9bf770efd3d7"),
        user_id: new mongoose.Types.ObjectId("670bace596392ddfc980cc56"),
        name: "Ramesh",
        date: "2024-04-04",
        rating: 5,
        likes: 7,
        dislikes: 0,
        title: "Excellent Product!",
        message: "I am very impressed with this water bottle. The borosilicate glass feels high quality, and it’s really easy to clean thanks to the wide mouth. I’ve been using it daily for a couple of weeks, and it still looks brand new. It's perfect for keeping in the fridge or taking it to work. I would definitely recommend this to anyone looking for a sturdy and safe glass bottle."
    },
    {
        product_id: new mongoose.Types.ObjectId("670b90f849af9bf770efd3d7"),
        user_id: new mongoose.Types.ObjectId("670bace596392ddfc980cc57"),
        name: "Ravindra Kumar",
        date: "2024-04-05",
        rating: 4,
        likes: 6,
        dislikes: 1,
        title: "Good Buy for the Price",
        message: "The Cello H2O bottle is quite affordable and gets the job done. I like the clean design, and the 1-liter size is just perfect for my daily needs. The only thing I would mention is that it feels a bit slippery sometimes, so I have to be careful. Other than that, it’s a great bottle for anyone looking for a glass option that’s easy to maintain and carry around."
    },
    {
        product_id: new mongoose.Types.ObjectId("670b90f849af9bf770efd3d7"),
        user_id: new mongoose.Types.ObjectId("670bace596392ddfc980cc58"),
        name: "Ankit Kumar",
        date: "2024-04-06",
        rating: 2,
        likes: 2,
        dislikes: 4,
        title: "Not as Durable as Expected",
        message: "I was excited to try this bottle, but unfortunately, it didn’t meet my expectations. While the design is nice, the glass isn’t as strong as I hoped. I dropped it once from a low height, and it shattered instantly. It would be great if it came with a silicone sleeve or something to make it more durable. For now, I think I’ll stick to stainless steel bottles."
    },
    {
        product_id: new mongoose.Types.ObjectId("670b90f849af9bf770efd3d7"),
        user_id: new mongoose.Types.ObjectId("670bace596392ddfc980cc59"),
        name: "Sri Srinath",
        date: "2024-04-07",
        rating: 5,
        likes: 9,
        dislikes: 0,
        title: "Love This Glass Bottle",
        message: "This is the perfect bottle for those who want a healthier alternative to plastic. I love that it’s made of borosilicate glass, which makes it safer and more durable. I use it every day, and it’s very easy to clean, thanks to the wide mouth. The cap seals well, so I never have to worry about leaks. It’s also very lightweight for a glass bottle, which is great for travel. Absolutely love it!"
    },
    {
        product_id: new mongoose.Types.ObjectId("670b90f849af9bf770efd3d8"),
        user_id: new mongoose.Types.ObjectId("670bace596392ddfc980cc53"),
        name: "Rajesh Bhatia",
        date: "2024-04-01",
        rating: 4,
        likes: 5,
        dislikes: 1,
        title: "Comfortable and Stylish",
        message: "I recently purchased these FLITE flip flops, and I have to say, they are quite comfortable! The cushioning is soft, making them perfect for long walks or just lounging around the house. I also appreciate the stylish design that goes well with my casual outfits. My only complaint is that the straps could be a bit more padded for added comfort, but overall, I’m very satisfied with my purchase."
    },
    {
        product_id: new mongoose.Types.ObjectId("670b90f849af9bf770efd3d8"),
        user_id: new mongoose.Types.ObjectId("670bace596392ddfc980cc54"),
        name: "Sahil Singh",
        date: "2024-04-02",
        rating: 5,
        likes: 8,
        dislikes: 0,
        title: "Best Flip Flops I've Ever Owned!",
        message: "These FLITE flip flops are fantastic! I love how lightweight and breathable they are, making them perfect for the hot summer days. The grip is excellent, so I don’t worry about slipping when I walk on wet surfaces. I've worn them to the beach and for casual outings, and they’ve held up beautifully. Highly recommend these if you're looking for comfort and style!"
    },
    {
        product_id: new mongoose.Types.ObjectId("670b90f849af9bf770efd3d8"),
        user_id: new mongoose.Types.ObjectId("670bace596392ddfc980cc55"),
        name: "Saheli Roy",
        date: "2024-04-03",
        rating: 3,
        likes: 4,
        dislikes: 2,
        title: "Decent but Not Great",
        message: "I bought these flip flops expecting great comfort based on the reviews, but I found them to be just okay. They look nice and the price is reasonable, but after a few hours of wear, I noticed some discomfort between my toes. They might be better for short periods of use, but I wouldn’t recommend them for extended wear."
    },
    {
        product_id: new mongoose.Types.ObjectId("670b90f849af9bf770efd3d8"),
        user_id: new mongoose.Types.ObjectId("670bace596392ddfc980cc56"),
        name: "Ramesh",
        date: "2024-04-04",
        rating: 5,
        likes: 7,
        dislikes: 0,
        title: "Perfect for Everyday Wear",
        message: "I absolutely love my FLITE flip flops! They are incredibly comfortable and perfect for everyday wear. The soft footbed gives great support, and I can wear them all day without any discomfort. I also love the variety of colors available, which makes it easy to match them with my outfits. Definitely a great buy!"
    },
    {
        product_id: new mongoose.Types.ObjectId("670b90f849af9bf770efd3d8"),
        user_id: new mongoose.Types.ObjectId("670bace596392ddfc980cc57"),
        name: "Ravindra Kumar",
        date: "2024-04-05",
        rating: 2,
        likes: 2,
        dislikes: 4,
        title: "Not as Comfortable as Expected",
        message: "I had high hopes for these FLITE flip flops, but unfortunately, they didn’t meet my expectations. The design is nice, but the straps are a bit too tight for my feet, which makes them uncomfortable for prolonged use. I also found that they do not provide enough arch support. I would recommend looking for a different option if you have wider feet."
    },
    {
        product_id: new mongoose.Types.ObjectId("670b90f849af9bf770efd3d8"),
        user_id: new mongoose.Types.ObjectId("670bace596392ddfc980cc58"),
        name: "Ankit Kumar",
        date: "2024-04-06",
        rating: 4,
        likes: 6,
        dislikes: 1,
        title: "Great for Casual Outings",
        message: "These FLITE flip flops are great for casual outings and quick trips to the store. They are easy to slip on and off, and the cushioning is comfortable. I especially love wearing them around the house. However, they could use a little more grip on the sole; I noticed they can be slippery on certain surfaces. Overall, I’m happy with my purchase."
    },
    {
        product_id: new mongoose.Types.ObjectId("670b90f849af9bf770efd3d8"),
        user_id: new mongoose.Types.ObjectId("670bace596392ddfc980cc59"),
        name: "Sri Srinath",
        date: "2024-04-07",
        rating: 5,
        likes: 9,
        dislikes: 0,
        title: "Fantastic Flip Flops!",
        message: "I am so impressed with these FLITE flip flops! They are super comfortable and provide excellent support, which is hard to find in flip flops. I’ve worn them all day without any discomfort, and they look great too! I’ve received many compliments on them. The price is reasonable for the quality, and I plan to buy another pair in a different color soon!"
    },
    {
        product_id: new mongoose.Types.ObjectId("670b90f849af9bf770efd3d9"),
        user_id: new mongoose.Types.ObjectId("670bace596392ddfc980cc53"),
        name: "Rajesh Bhatia",
        date: "2024-04-01",
        rating: 4,
        likes: 5,
        dislikes: 1,
        title: "Effective Dishwashing Gel",
        message: "The Vim Dishwash Liquid Gel is quite effective for cleaning dishes! I really appreciate the lemon scent, which leaves my kitchen smelling fresh and clean. The gel consistency makes it easy to apply, and I find that a little goes a long way. It cuts through grease and grime easily, although I wish it had a slightly more powerful formulation for tougher stains. Overall, it’s a great product for everyday dishwashing."
    },
    {
        product_id: new mongoose.Types.ObjectId("670b90f849af9bf770efd3d9"),
        user_id: new mongoose.Types.ObjectId("670bace596392ddfc980cc54"),
        name: "Sahil Singh",
        date: "2024-04-02",
        rating: 5,
        likes: 10,
        dislikes: 0,
        title: "Best Dishwashing Liquid!",
        message: "I’ve tried several dishwashing liquids, but Vim’s Lemon Gel is by far the best! The lemon scent is refreshing, and it works wonders on greasy pots and pans. I love how it creates a good lather, making it easy to scrub away food residue. The refill pouch is also a great value, and I feel like I’m making a more eco-friendly choice. Highly recommend this product to anyone looking for an efficient and pleasant dishwashing solution!"
    },
    {
        product_id: new mongoose.Types.ObjectId("670b90f849af9bf770efd3d9"),
        user_id: new mongoose.Types.ObjectId("670bace596392ddfc980cc55"),
        name: "Saheli Roy",
        date: "2024-04-03",
        rating: 3,
        likes: 4,
        dislikes: 2,
        title: "Average Performance",
        message: "While the Vim Dishwash Gel does clean my dishes adequately, I found it to be just average compared to other brands I’ve used. It has a nice lemon scent, but it doesn’t seem to cut through grease as effectively as I hoped. I also noticed that I needed to use a bit more product than expected to achieve the same level of cleanliness. It’s okay for daily use, but I might look for something stronger next time."
    },
    {
        product_id: new mongoose.Types.ObjectId("670b90f849af9bf770efd3d9"),
        user_id: new mongoose.Types.ObjectId("670bace596392ddfc980cc56"),
        name: "Ramesh",
        date: "2024-04-04",
        rating: 5,
        likes: 7,
        dislikes: 0,
        title: "Wonderful Cleaning Power!",
        message: "I’m very impressed with the Vim Dishwash Liquid Gel. The cleaning power is outstanding, and it really helps to remove tough stains without much scrubbing. I love the lemon fragrance; it’s refreshing and doesn’t overpower the smell of food. The refill pouch is also very convenient and cost-effective. I’ll definitely continue to purchase this product and recommend it to my friends and family!"
    },
    {
        product_id: new mongoose.Types.ObjectId("670b90f849af9bf770efd3d9"),
        user_id: new mongoose.Types.ObjectId("670bace596392ddfc980cc57"),
        name: "Ravindra Kumar",
        date: "2024-04-05",
        rating: 2,
        likes: 2,
        dislikes: 4,
        title: "Not What I Expected",
        message: "First of all, the packaging was bad and some of the liquid leaked into the packaging. I was quite disappointed with the Vim Dishwash Liquid Gel. While it smells great, I found that it struggled with tougher grease stains. I had to use a lot of the product to get my dishes clean, which defeats the purpose of buying a refill pouch. For the price, I expected better performance. I think I’ll be switching to a different brand for my dishwashing needs."
    },
    {
        product_id: new mongoose.Types.ObjectId("670b90f849af9bf770efd3d9"),
        user_id: new mongoose.Types.ObjectId("670bace596392ddfc980cc58"),
        name: "Ankit Kumar",
        date: "2024-04-06",
        rating: 4,
        likes: 6,
        dislikes: 1,
        title: "Good Value for Money",
        message: "The Vim Dishwash Liquid Gel is a solid choice for anyone looking for an effective dishwashing solution. It cleans well and the lemon scent is a bonus! I appreciate that the gel is easy to dispense and a little goes a long way. My only concern is that it could be a bit more effective on baked-on food, but for everyday use, it works perfectly. I’m happy with this purchase!"
    },
    {
        product_id: new mongoose.Types.ObjectId("670b90f849af9bf770efd3d9"),
        user_id: new mongoose.Types.ObjectId("670bace596392ddfc980cc59"),
        name: "Sri Srinath",
        date: "2024-04-07",
        rating: 5,
        likes: 9,
        dislikes: 0,
        title: "Fantastic Product!",
        message: "I absolutely love the Vim Dishwash Liquid Gel! It’s incredibly effective at cleaning my dishes, and I love the refreshing lemon scent it leaves behind. The gel formula makes it easy to apply and ensures that I’m not wasting any product. I also appreciate that it’s gentle on my hands. This is definitely my go-to dishwashing liquid, and I’ll be purchasing it again in the future!"
    },
    {
        product_id: new mongoose.Types.ObjectId("670b90f849af9bf770efd3da"),
        user_id: new mongoose.Types.ObjectId("670bace596392ddfc980cc53"),
        name: "Rajesh Bhatia",
        date: "2024-04-01",
        rating: 4,
        likes: 6,
        dislikes: 1,
        title: "Great Commuter Scooter",
        message: "The Green Udaan Electric Scooter is an excellent choice for my daily commute! The design is sleek and modern, and I love the portability of the rechargeable battery. It easily fits into my office space without taking up much room. The 30 km range is perfect for my daily trips, and the scooter can reach up to 25 km/h, which is more than enough for city traffic. My only concern is that the wider deck could use some anti-slip features for better grip. Overall, a fantastic purchase!"
    },
    {
        product_id: new mongoose.Types.ObjectId("670b90f849af9bf770efd3da"),
        user_id: new mongoose.Types.ObjectId("670bace596392ddfc980cc54"),
        name: "Sahil Singh",
        date: "2024-04-02",
        rating: 5,
        likes: 8,
        dislikes: 0,
        title: "Amazing Performance!",
        message: "I’m absolutely thrilled with my Green Udaan Electric Scooter! It’s incredibly easy to ride, and the acceleration is impressive for a 250W motor. I love that there’s no need for RTO registration or a driving license; it makes things hassle-free. The scooter has become my go-to for commuting and weekend rides. Plus, the battery life is excellent—I can cover my daily distance without needing a recharge. Highly recommend this scooter to anyone looking for a reliable and stylish way to get around!"
    },
    {
        product_id: new mongoose.Types.ObjectId("670b90f849af9bf770efd3da"),
        user_id: new mongoose.Types.ObjectId("670bace596392ddfc980cc55"),
        name: "Saheli Roy",
        date: "2024-04-03",
        rating: 3,
        likes: 4,
        dislikes: 2,
        title: "Decent but Could be Better",
        message: "I recently purchased the Green Udaan Electric Scooter and have mixed feelings about it. While it is stylish and easy to handle, I found that the range is not as great as I expected. After about 25 km, I felt the battery life was declining, and I had to recharge it sooner than I anticipated. Additionally, I noticed that riding on uneven surfaces can be a bit bumpy due to the wider deck design. Overall, it’s a decent scooter, but I was hoping for better performance."
    },
    {
        product_id: new mongoose.Types.ObjectId("670b90f849af9bf770efd3da"),
        user_id: new mongoose.Types.ObjectId("670bace596392ddfc980cc56"),
        name: "Ramesh",
        date: "2024-04-04",
        rating: 4,
        likes: 7,
        dislikes: 1,
        title: "Comfortable Ride!",
        message: "The Green Udaan Electric Scooter has been a game-changer for my daily commute. The wider deck makes for a comfortable ride, and I really appreciate the ease of use. The scooter accelerates smoothly, and the battery lasts for my entire work commute without needing a recharge. The only downside is that it could use a little more power for steep inclines, but for flat surfaces, it’s fantastic. I’m very pleased with my purchase and would recommend it to others!"
    },
    {
        product_id: new mongoose.Types.ObjectId("670b90f849af9bf770efd3da"),
        user_id: new mongoose.Types.ObjectId("670bace596392ddfc980cc57"),
        name: "Ravindra Kumar",
        date: "2024-04-05",
        rating: 2,
        likes: 2,
        dislikes: 4,
        title: "Not Impressed",
        message: "Unfortunately, I was disappointed with the Green Udaan Electric Scooter. While I liked the design, I found the performance lacking. The range is okay, but the speed does not feel powerful enough for city rides. I often found myself waiting for the battery to charge, and on some occasions, it didn’t last as long as advertised. I was also hoping for a smoother ride, as it feels a bit shaky on uneven roads. I think I’ll be looking for a different model in the future."
    },
    {
        product_id: new mongoose.Types.ObjectId("670b90f849af9bf770efd3da"),
        user_id: new mongoose.Types.ObjectId("670bace596392ddfc980cc58"),
        name: "Ankit Kumar",
        date: "2024-04-06",
        rating: 4,
        likes: 5,
        dislikes: 1,
        title: "Great for Short Commutes",
        message: "I’ve been using the Green Udaan Electric Scooter for a few weeks now, and I really enjoy it! It’s perfect for short commutes, and the portability of the battery is a big plus for me. The scooter is lightweight and easy to handle, making it a breeze to park and store. My only complaint is that I wish the scooter could handle longer distances without needing a recharge. But for my daily runs, it works perfectly. I’d recommend it to anyone looking for an efficient commuting option!"
    },
    {
        product_id: new mongoose.Types.ObjectId("670b90f849af9bf770efd3da"),
        user_id: new mongoose.Types.ObjectId("670bace596392ddfc980cc59"),
        name: "Sri Srinath",
        date: "2024-04-07",
        rating: 5,
        likes: 9,
        dislikes: 0,
        title: "Fantastic Experience!",
        message: "The Green Udaan Electric Scooter has exceeded my expectations! From the moment I took it for a ride, I was impressed with its speed and comfort. The wider deck is perfect for stability, and the fact that it doesn’t require RTO registration is a huge bonus. I love the stylish blue color and how smooth the ride feels. I can easily travel 30 km on a single charge, making it ideal for my daily needs. Overall, I highly recommend this scooter to anyone looking for an enjoyable and efficient mode of transportation!"
    },
    {
        product_id: new mongoose.Types.ObjectId("670b90f849af9bf770efd3db"),
        user_id: new mongoose.Types.ObjectId("670bace596392ddfc980cc53"),
        name: "Rajesh Bhatia",
        date: "2024-04-01",
        rating: 4,
        likes: 8,
        dislikes: 1,
        title: "Great Phone for the Price",
        message: "The POCO C65 has impressed me so far! The 4GB RAM and 128GB storage provide plenty of space and smooth performance for daily tasks. The phone handles multitasking well, and I haven’t experienced much lag. The display quality is decent, with good colors, although it could be a bit brighter for outdoor use. Battery life is solid, easily lasting a full day with moderate use. Overall, this is a fantastic budget option for anyone looking for reliable performance at an affordable price."
    },
    {
        product_id: new mongoose.Types.ObjectId("670b90f849af9bf770efd3db"),
        user_id: new mongoose.Types.ObjectId("670bace596392ddfc980cc54"),
        name: "Sahil Singh",
        date: "2024-04-02",
        rating: 5,
        likes: 12,
        dislikes: 0,
        title: "Excellent Value for Money",
        message: "I’m thrilled with my purchase of the POCO C65! It’s packed with features and offers incredible value for the price. The storage capacity is more than enough, and the phone feels quite responsive. I also appreciate the matte black finish, which looks sleek and doesn’t attract fingerprints. The camera quality is surprisingly good for this price range, and I’m happy with the photos it takes. Highly recommend this phone to anyone on a budget who doesn’t want to compromise on quality."
    },
    {
        product_id: new mongoose.Types.ObjectId("670b90f849af9bf770efd3db"),
        user_id: new mongoose.Types.ObjectId("670bace596392ddfc980cc55"),
        name: "Saheli Roy",
        date: "2024-04-03",
        rating: 3,
        likes: 5,
        dislikes: 3,
        title: "Average Performance",
        message: "The POCO C65 is an okay phone, but I had higher expectations. The 4GB RAM handles basic tasks well, but I noticed some lag when switching between apps. The display is decent, though the colors feel a bit muted. I do like the storage space, which is more than enough for my apps and photos. Battery life is good, but the phone does heat up slightly with extended use. For the price, it’s not bad, but there are a few areas for improvement."
    },
    {
        product_id: new mongoose.Types.ObjectId("670b90f849af9bf770efd3db"),
        user_id: new mongoose.Types.ObjectId("670bace596392ddfc980cc56"),
        name: "Ramesh",
        date: "2024-04-04",
        rating: 4,
        likes: 9,
        dislikes: 2,
        title: "Impressive Battery Life",
        message: "The battery life on the POCO C65 is amazing! It easily lasts me a day and a half, even with moderate usage. The phone’s performance is quite good for basic tasks and social media browsing. I love the storage capacity—it’s enough to store all my photos and apps without issues. The only downside is that the camera quality isn’t as sharp as I’d like. However, given the price, I’d say this phone is an excellent choice for budget-conscious users."
    },
    {
        product_id: new mongoose.Types.ObjectId("670b90f849af9bf770efd3db"),
        user_id: new mongoose.Types.ObjectId("670bace596392ddfc980cc57"),
        name: "Ravindra Kumar",
        date: "2024-04-05",
        rating: 2,
        likes: 3,
        dislikes: 6,
        title: "Not the Best Experience",
        message: "I was a bit disappointed with the POCO C65. While it’s affordable, the performance doesn’t quite meet my expectations. I found that the phone lags during multitasking, and the screen brightness isn’t great for outdoor use. The camera is also subpar, with photos coming out grainy, especially in low light. I expected a bit more for this price, and I’ll likely be looking at other options next time. It’s okay for basic use, but not much beyond that."
    },
    {
        product_id: new mongoose.Types.ObjectId("670b90f849af9bf770efd3db"),
        user_id: new mongoose.Types.ObjectId("670bace596392ddfc980cc58"),
        name: "Ankit Kumar",
        date: "2024-04-06",
        rating: 4,
        likes: 7,
        dislikes: 1,
        title: "Good Budget Phone",
        message: "I’m pretty happy with the POCO C65. It’s a solid phone for everyday tasks like browsing, streaming, and social media. The 128GB storage is excellent—I no longer have to worry about running out of space. I also like the matte black finish, which gives it a premium look. The only thing I’d improve is the speaker quality, as it sounds a bit tinny. All in all, though, it’s a great option for anyone on a budget!"
    },
    {
        product_id: new mongoose.Types.ObjectId("670b90f849af9bf770efd3db"),
        user_id: new mongoose.Types.ObjectId("670bace596392ddfc980cc59"),
        name: "Sri Srinath",
        date: "2024-04-07",
        rating: 5,
        likes: 11,
        dislikes: 0,
        title: "Fantastic Phone at a Great Price!",
        message: "The POCO C65 has been a fantastic choice for me! The performance is smooth, and the phone feels responsive even with multiple apps open. I love the storage capacity, which allows me to download and store all the apps and media I need. The battery life is also impressive, easily lasting a full day. The design is sleek, and the matte black finish is a nice touch. I’d definitely recommend this phone to anyone looking for an affordable yet feature-packed device."
    },

    {
        product_id: new mongoose.Types.ObjectId("670b90f849af9bf770efd3dc"),
        user_id: new mongoose.Types.ObjectId("670bace596392ddfc980cc53"),
        name: "Rajesh Bhatia",
        date: "2024-04-01",
        rating: 5,
        likes: 10,
        dislikes: 0,
        title: "Excellent Smartwatch with Great Features",
        message: "The Fire-Boltt Apollo 2 Smartwatch is truly amazing! The 1.43-inch AMOLED display is sharp and bright, making it easy to read even in bright sunlight. The Bluetooth calling feature works perfectly, and I can answer calls directly from my wrist, which is super convenient. I also love the variety of sports modes available, and the health suite helps me keep track of my fitness goals. Overall, this watch is packed with features, and I highly recommend it to anyone looking for a reliable and stylish smartwatch."
    },
    {
        product_id: new mongoose.Types.ObjectId("670b90f849af9bf770efd3dc"),
        user_id: new mongoose.Types.ObjectId("670bace596392ddfc980cc54"),
        name: "Sahil Singh",
        date: "2024-04-02",
        rating: 4,
        likes: 8,
        dislikes: 1,
        title: "Very Satisfied with My Purchase",
        message: "I'm very happy with the Fire-Boltt Apollo 2! The AMOLED display is stunning, and the watch is very responsive. I use the voice assistant frequently, and it works well for setting reminders and checking the weather. The IP67 water resistance gives me peace of mind, and I've even taken it with me for a swim without any issues. The battery life could be a bit longer, but overall, it's a fantastic smartwatch for the price."
    },
    {
        product_id: new mongoose.Types.ObjectId("670b90f849af9bf770efd3dc"),
        user_id: new mongoose.Types.ObjectId("670bace596392ddfc980cc55"),
        name: "Saheli Roy",
        date: "2024-04-03",
        rating: 3,
        likes: 5,
        dislikes: 2,
        title: "Good But Has Some Drawbacks",
        message: "I’ve been using the Fire-Boltt Apollo 2 for a few weeks now, and while it’s good, there are a few things that could be improved. The watch looks great, and the display is beautiful, but I find that the battery drains quite quickly, especially with Bluetooth calling enabled. I also noticed that some of the sports modes don't track as accurately as I’d like. It’s a good watch, but it could use some tweaks to make it even better."
    },
    {
        product_id: new mongoose.Types.ObjectId("670b90f849af9bf770efd3dc"),
        user_id: new mongoose.Types.ObjectId("670bace596392ddfc980cc56"),
        name: "Ramesh",
        date: "2024-04-04",
        rating: 4,
        likes: 7,
        dislikes: 1,
        title: "Solid Watch for Fitness Enthusiasts",
        message: "The Fire-Boltt Apollo 2 has been a great addition to my fitness routine. I love the range of sports modes—it covers everything I need from running to cycling. The heart rate monitor and sleep tracking features are accurate, and the health suite is comprehensive. The watch is comfortable to wear, and the AMOLED display is crisp. The only drawback is that the screen can be a little hard to see in direct sunlight. Overall, though, I’m very happy with this purchase."
    },
    {
        product_id: new mongoose.Types.ObjectId("670b90f849af9bf770efd3dc"),
        user_id: new mongoose.Types.ObjectId("670bace596392ddfc980cc57"),
        name: "Ravindra Kumar",
        date: "2024-04-05",
        rating: 2,
        likes: 3,
        dislikes: 4,
        title: "Not Quite What I Expected",
        message: "I was excited to try the Fire-Boltt Apollo 2, but I’ve been a bit disappointed. The design is nice, and the display is good, but the battery life is shorter than advertised. I also found the Bluetooth calling feature a bit unreliable at times, with occasional disconnects. I expected better tracking accuracy for the sports modes as well. I think there are better options out there in this price range."
    },
    {
        product_id: new mongoose.Types.ObjectId("670b90f849af9bf770efd3dc"),
        user_id: new mongoose.Types.ObjectId("670bace596392ddfc980cc58"),
        name: "Ankit Kumar",
        date: "2024-04-06",
        rating: 4,
        likes: 6,
        dislikes: 1,
        title: "Great Value for Money",
        message: "The Fire-Boltt Apollo 2 is definitely worth the money. I love the sleek design and the responsive AMOLED display. The watch has all the features I need, including Bluetooth calling, which works well most of the time. The voice assistant is a nice touch, and I use it often for quick tasks. I only wish the battery lasted a bit longer, but overall, I’m very pleased with this smartwatch."
    },
    {
        product_id: new mongoose.Types.ObjectId("670b90f849af9bf770efd3dc"),
        user_id: new mongoose.Types.ObjectId("670bace596392ddfc980cc59"),
        name: "Sri Srinath",
        date: "2024-04-07",
        rating: 5,
        likes: 11,
        dislikes: 0,
        title: "Outstanding Smartwatch!",
        message: "The Fire-Boltt Apollo 2 has exceeded my expectations. The build quality is excellent, and the watch feels very comfortable on my wrist. The display is fantastic, with vibrant colors and smooth transitions. The Bluetooth calling feature is a game-changer, and I can make calls without reaching for my phone. I also appreciate the IP67 rating—I don’t have to worry about getting it wet. This is an outstanding smartwatch, and I highly recommend it to anyone looking for a premium experience at a reasonable price."
    },
]