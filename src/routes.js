import Home from "./Pages/Home/Home";
import UserProfile from "./Pages/UserProfile/UserProfile";
import UserSignup from "./Pages/UserSignup/UserSignup";
const routes = [
    {path:"/home" , element :<Home></Home> },
    {path:"/user-signup" , element :<UserSignup/> },
    {path:"/user-profile" , element :<UserProfile/> },

];
export default routes;
