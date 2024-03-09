import { createSlice } from "@reduxjs/toolkit";

const initialState ={
    value:{
        name:''
    }
}

const userSlice= createSlice({
    name: 'userTitle',
    initialState,
    reducers:{
        userName(state, action){
            state.value=action.payload
        }
    }
})

export const {userName} = userSlice.actions
export default userSlice.reducer