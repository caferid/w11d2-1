import { createSlice } from "@reduxjs/toolkit"



const initialState = {
    value: []
}


const basketSlice = createSlice({
    name: "basket",
    initialState,
    reducers: {
        addBasket: (state, action) => {
            const find = state.value.find(x=>x.id===action.payload.id)
            if (find) {
                find.count++
                return
            }else{

                state.value.push(action.payload)
            }
        },
        deleteBasket: (state,action) => {
                state.value=state.value.filter(category=>category.id!==action.payload)
        },
        deleteAll: (state, action) => {
            state.value = state.value + action.payload
        },
        increment:(state,action)=>{
            const find = state.value.find(x=>x.id===action.payload.id)
            if (find) {
                find.count++
            }
        }


    }
})


export const { addBasket, deleteBasket,increment} = basketSlice.actions

export default basketSlice.reducer