import { createSlice } from "@reduxjs/toolkit";

const settingsPageSlice = createSlice({
    name: "settingsPage",
    initialState: false,
    reducers:{
        setShowSettingsPage: (state, action) => {
            const newShowSettingsPage = action.payload
            return newShowSettingsPage
        }
    }
})


export const { setShowSettingsPage } = settingsPageSlice.actions

export default settingsPageSlice.reducer