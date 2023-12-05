import { createSlice } from "@reduxjs/toolkit"



const initialState = {
    value: []
}


const basketSlice = createSlice({
    name: "counter",
    initialState,
    reducers: {
        addBasket: (state, action) => {
            state.value.push(action.payload)
        },
        deleteBasket: (state,action) => {
                state.value=state.value.filter(basket=>basket.id!==action.payload)
        },
        deleteAll: (state, action) => {
            state.value = state.value + action.payload
        }


    }
})


export const { addBasket, deleteBasket} = basketSlice.actions

export default basketSlice.reducer