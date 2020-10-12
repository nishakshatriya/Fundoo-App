import {ApiCall} from "./apiCalls";
const URL = "http://fundoonotes.incubation.bridgelabz.com/api/user/";

class Userservice { 
      
    resetWithEmailId(user){
        return ApiCall(user, `${URL}/reset`,"POST","application/json");
    }

    createUserAccount(user){
        return ApiCall(user, `${URL}/userSignUp`, "POST","application/json");
    }

    loginWithCredentials(user){
        return ApiCall(user, `${URL}/login`, "POST","application/json");
    }

    resetWithToken(user,token){
        return ApiCall(user, `${URL}/reset-password?access_token=${token}`,"POST","application/json");
        // reset-password?access_token=${location.split("/")[2]}`,"POST"
    } 
}
export default new Userservice();


// export const  resetWithEmailId = (user, callback)=>{
//   return  Axios.post(
//     `${baseUrl}/user/reset`,
//     user
//   )
//     .then((response) => {
//       callback(response.data.message);
//     })
//     .catch((error) => {
//       callback(error.response.data.error.message);
//     });
// }

// export const createUserAccount =  (user,callback) => {
//  return Axios.post(
//     `${baseUrl}user/userSignUp`,
//     user
//   )
//     .then((response) => {
//       callback(response.data.data.message);
//     })
//     .catch((error) => {
//       // handle error
//       callback(error.response.data.error.message);
//     });
// }

// export const  loginWithCredentials = async (user,callback) => {
// return await Axios.post(
//     `${baseUrl}user/login`,
//     user
//   )
//     .then((response) => {
//       callback(response);
//     })
//     .catch((error) => {
//       callback(error);
//     });
// }

// export const resetWithToken = (user, token, callback) => {
//  return Axios.post(
//     `${baseUrl}/user/reset-password?access_token=` +
//       token,
//     user,{header:{
//       'content-type':'application/json'
//     }}
//   )
//     .then((response) => {
//       let messageSnackbar =
//         response.status === 204 ? "Password successfully reset!" : "Cannot Reset!";
//       callback(messageSnackbar);
//     })
//     .catch((error) => {
//       callback(error.response.data.error.message);
//     });
// }