import { createSlice } from '@reduxjs/toolkit';


export interface UserType {
    id:number,
    name: string,
    image: string,
    token:string,
    email?: string,
    gender?:string
}
interface UserState {
    user: UserType | null
}
const initialState:UserState = {
  user: null
}

export const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        setUser: (state, action) => {
            const user = action.payload;
            state.user = user;
            return state;
        },
        outUser: (state, action) => {
            const user = action.payload;
            state.user = user;
            return state;
        }
    },
});

export const { setUser,outUser } = userSlice.actions;
export default userSlice.reducer;