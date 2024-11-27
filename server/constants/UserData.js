// export particular review of the user pertaining to partiular ordered product

import mongoose from 'mongoose';

export const UserData = [
    {
        id: "1",
        name: 'Rajesh Bhatia',
        email: 'raj983567@gmail.com',
        phone: '9877234092',
        address: 'VPO Naurali, District Bhavnagar, Uttar Pradesh (188390)',
        password: 'retet4re',
        cart: [
            {
                product_id: new mongoose.Types.ObjectId("670b90f849af9bf770efd3ce"),
                quantity: 4,
            },
            {
                product_id: new mongoose.Types.ObjectId("670b90f849af9bf770efd3cf"),
                quantity: 2,
            },
            {
                product_id: new mongoose.Types.ObjectId("670b90f849af9bf770efd3ce"),
                quantity: 4,
            },
            {
                product_id: new mongoose.Types.ObjectId("670b90f849af9bf770efd3d2"),
                quantity: 3,
            },
            {
                product_id: new mongoose.Types.ObjectId("670b90f849af9bf770efd3d4"),
                quantity: 2,
            },
            {
                product_id: new mongoose.Types.ObjectId("670b90f849af9bf770efd3db"),
                quantity: 1,
            },
        ],
        reviewsaction: [
            {
                product_id: new mongoose.Types.ObjectId("670b90f849af9bf770efd3ce"),
                user_id: new mongoose.Types.ObjectId("670bace596392ddfc980cc54"),
                action: "disliked"
            },
            {
                product_id: new mongoose.Types.ObjectId("670b90f849af9bf770efd3ce"),
                user_id: new mongoose.Types.ObjectId("670bace596392ddfc980cc55"),
                action: "liked"
            },
            {
                product_id: new mongoose.Types.ObjectId("670b90f849af9bf770efd3ce"),
                user_id: new mongoose.Types.ObjectId("670bace596392ddfc980cc56"),
                action: "liked"
            },
            {
                product_id: new mongoose.Types.ObjectId("670b90f849af9bf770efd3cf"),
                user_id: new mongoose.Types.ObjectId("670bace596392ddfc980cc5b"),
                action: "liked"
            },
            {
                product_id: "3",
                user_id: new mongoose.Types.ObjectId("670bace596392ddfc980cc5a"),
                action: "liked"
            }
        ],
        orders: [
            {
                product_id: new mongoose.Types.ObjectId("670b90f849af9bf770efd3ce"),
                quantity: 1,
                price: 22999,
                delivery_charge: 0,
                delivery_date: '2024-01-14',
                delivered: true
            },
            {
                product_id: new mongoose.Types.ObjectId("670b90f849af9bf770efd3cf"),
                quantity: 2,
                price: 500,
                delivery_charge: 50,
                delivery_date: '2024-03-08',
                delivered: true
            },
            {
                product_id: new mongoose.Types.ObjectId("670b90f849af9bf770efd3da"),
                quantity: 1,
                price: 25000,
                delivery_charge: 800,
                delivery_date: '2025-01-08',
                delivered: false
            },
        ],
        QaAction: [
            {
                product_id: new mongoose.Types.ObjectId("670b90f849af9bf770efd3ce"),
                question_id: new mongoose.Types.ObjectId("670babb0d14d5d29c0733af5"),
                action: "disliked"
            },
            {
                product_id: new mongoose.Types.ObjectId("670b90f849af9bf770efd3ce"),
                question_id: new mongoose.Types.ObjectId("670babb0d14d5d29c0733af6"),
                action: "liked"
            },
            {
                product_id: new mongoose.Types.ObjectId("670b90f849af9bf770efd3ce"),
                question_id: new mongoose.Types.ObjectId("670babb0d14d5d29c0733af7"),
                action: "liked"
            }
        ]
    },

    {
        id: "2",
        name: 'Sahil Singh',
        email: 'rahul4567@gmail.com',
        phone: '9876543210',
        address: 'H.No 123, Sector 15, Chandigarh (160015)',
        password: 'qwerty12',
        cart: [],
        reviewsaction: [],
        orders: [],
        QaAction: [],
    },

    {
        id: "3",
        name: 'Saheli Roy',
        email: 'priya9323@gmail.com',
        phone: '9834521109',
        address: 'House No. 45, Janakpuri, New Delhi (110058)',
        password: 'pri78djf',
        cart: [],
        reviewsaction: [],
        orders: [],
        QaAction: [],
    },

    {
        id: "4",
        name: 'Ramesh',
        email: 'vishalp92@gmail.com',
        phone: '9987462215',
        address: 'Flat No. 12, Gandhi Road, Jaipur, Rajasthan (302001)',
        password: 'rocky890',
        cart: [],
        reviewsaction: [],
        orders: [],
        QaAction: [],
    },

    {
        id: "5",
        name: 'Ravindra Kumar',
        email: 'meena8232@gmail.com',
        phone: '9456129087',
        address: 'Gali No. 4, Patel Nagar, Agra, Uttar Pradesh (282007)',
        password: 'asdf1234',
        cart: [],
        reviewsaction: [],
        orders: [],
        QaAction: [],
    },

    {
        id: "6",
        name: 'Ankit Kumar',
        email: 'suresh9102@gmail.com',
        phone: '9786543092',
        address: 'Apt 30, Green Avenue, Ludhiana, Punjab (141012)',
        password: 'lionking7',
        cart: [],
        reviewsaction: [],
        orders: [],
        QaAction: [],
    },

    {
        id: "7",
        name: 'Sri Srinath',
        email: 'nisha7652@gmail.com',
        phone: '9873452110',
        address: '14th Floor, Tower B, Hinjewadi, Pune, Maharashtra (411057)',
        password: 'pass2020',
        cart: [],
        reviewsaction: [],
        orders: [],
        QaAction: [],
    },

    {
        id: "8",
        name: 'Rajendra Sahoo',
        email: 'amit6738@gmail.com',
        phone: '9234789211',
        address: 'B-102, Vivekananda Marg, Bhubaneswar, Odisha (751001)',
        password: 'welcome91',
        cart: [],
        reviewsaction: [],
        orders: [],
        QaAction: [],
    },

    {
        id: "9",
        name: 'Hamza Qureshi',
        email: 'deepak4532@gmail.com',
        phone: '9823456789',
        address: 'House No. 67, Nariman Point, Mumbai, Maharashtra (400021)',
        password: 'oceanview1',
        cart: [],
        reviewsaction: [],
        orders: [],
        QaAction: [],
    },

    {
        id: "10",
        name: 'Vivek Reddy',
        email: 'komal9109@gmail.com',
        phone: '9483621092',
        address: 'A-55, Malviya Nagar, Jaipur, Rajasthan (302017)',
        password: 'abcxyz987',
        cart: [],
        reviewsaction: [],
        orders: [],
        QaAction: [],
    },

    {
        id: "11",
        name: 'Shivam Bansal',
        email: 'rohit5421@gmail.com',
        phone: '9856742110',
        address: 'Plot No. 12, Sector 8, Faridabad, Haryana (121001)',
        password: 'tiger45zx',
        cart: [],
        reviewsaction: [],
        orders: [],
        QaAction: [],
    },

    {
        id: "12",
        name: 'Kartik Mishra',
        email: 'lakshmi3421@gmail.com',
        phone: '9976321420',
        address: '2nd Cross, Indiranagar, Bangalore, Karnataka (560038)',
        password: 'lakshmi890',
        cart: [],
        reviewsaction: [],
        orders: [],
        QaAction: [],
    },

    {
        id: "13",
        name: 'Preeti Yadav',
        email: 'arjun2389@gmail.com',
        phone: '9765321890',
        address: 'F-15, New Friends Colony, New Delhi (110025)',
        password: 'freedom67',
        cart: [],
        reviewsaction: [],
        orders: [],
        QaAction: [],
    },

    {
        id: "14",
        name: 'Manish Patel',
        email: 'sunil9234@gmail.com',
        phone: '9812345670',
        address: 'H.No. 4, Sector 35, Gandhinagar, Gujarat (382016)',
        password: 'gujarat123',
        cart: [],
        reviewsaction: [],
        orders: [],
        QaAction: [],
    },

    {
        id: "15",
        name: 'Deepak Kulkarni',
        email: 'neha5648@gmail.com',
        phone: '9756234012',
        address: 'H.No. 89, R K Puram, Hyderabad, Telangana (500056)',
        password: 'neha21bdf',
        cart: [],
        reviewsaction: [],
        orders: [],
        QaAction: [],
    },

    {
        id: "16",
        name: 'Ravi Shankar',
        email: 'vikram7213@gmail.com',
        phone: '9812347812',
        address: 'G-4, Elgin Road, Kolkata, West Bengal (700020)',
        password: 'vikram110',
        cart: [],
        reviewsaction: [],
        orders: [],
        QaAction: [],
    },

    {
        id: "17",
        name: 'Pooja Mehta',
        email: 'anita8764@gmail.com',
        phone: '9845126738',
        address: 'H.No. 21, BTM Layout, Bangalore, Karnataka (560076)',
        password: 'anita5678',
        cart: [],
        reviewsaction: [],
        orders: [],
        QaAction: [],
    },
]