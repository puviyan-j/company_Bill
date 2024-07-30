import {configureStore} from "@reduxjs/toolkit";
import  userSlice  from "./slice/userslice";

const store = configureStore({
    reducer:{ 
        userdata :userSlice}
})

export default store
