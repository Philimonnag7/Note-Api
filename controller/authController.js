const User = require("../models/user");
const catchAsync = require("../utils/catchAsync");




exports.signup = catchAsync(async (req, res, next) => {
    const newUser = await User.create(req.body);

    res.status(201).json({
        status: "success",
        data: { newUser }
    });
});

// exports.signup = async (req, res, next) => {
//     const newUser = await User.create(req.body);
//     res.status(201).json({ status: 1, message: "User created",result:newUser})
// }
// exports.signin = async (req, res, next) => {

//     try {
//         const user = await User.find({
//             email: req.body.email,
//         });
        

//         if (!user) { res.status(500).json({
//             status: 0, 
//             message: "User not found",
//         });}

//         if (user.password == req.body.password) { 
//             res.status(200).json({
//                 status: 1,
//                 message: "Login succesfull",
//             });
//         }
        
//     } catch (error) {
//         res.status(500).json({
//             status: 0,
//             message: "User not found",
//         });
//     }
// }