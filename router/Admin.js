// const router = require('express').Router();
// const auth = require('../middleware/Authentication.js');
// const File = require('../middleware/ImagesandVideosData');
// const { 
//     Register_New_User ,
//     LoginRegisteredUser , 
//     VerifyRegisteredUser,
//     Update_Existing_User,
//     Delete_Existing_User_Permanently,
//     User_Forget_Password,
//     OTP_Verification,
//     User_Reset_Password,
//     Delete_and_Blocked_Existing_User_Temporaray,
//     Turn_on_or_off_Notifications,
//     Logout_Existing_User,
//     Complete_Profile,
//     Register_With_Social_Login,
//     Edit_Profile
// } = require('../controllers/Users')

// router.post('/create_new_User' , File.user , Register_New_User);
// router.post('/login' ,  File.upload ,LoginRegisteredUser);
// router.get('/profile' ,auth ,File.upload ,VerifyRegisteredUser );
// router.put('/edit_profile' , auth , File.user, Edit_Profile  );
// router.put('/update',auth ,File.upload , Update_Existing_User );
// router.delete('/delete',auth , File.upload  , Delete_Existing_User_Permanently );
// router.put('/softdelete' , Delete_and_Blocked_Existing_User_Temporaray )
// router.post('/forget_password' , File.upload , User_Forget_Password );
// router.post('/otp_verify' , File.upload , OTP_Verification);
// router.post('/reset_password' , File.upload , User_Reset_Password)
// router.put('/isnotify' , auth , File.upload ,  Turn_on_or_off_Notifications );
// router.post('/logout' , auth , Logout_Existing_User );
// router.post('/complete_profile' ,File.user , Complete_Profile );
// router.post('/create_social_login_user' , File.user , Register_With_Social_Login );

// module.exports = router