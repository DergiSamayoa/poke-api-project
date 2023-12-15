import { configureStore } from "@reduxjs/toolkit";
import trainerName from "./slices/trainerName";

export default configureStore({
    reducer: {
        trainerName: trainerName,
    }
})

//export default configureStore