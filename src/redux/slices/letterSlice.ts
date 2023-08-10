import { createSlice } from '@reduxjs/toolkit';

export interface LetterState {
    type:number,
    id:number,
    from: string,
    to: string,
    content: string,
    bg?:string
}

interface LettersType {
    letters: LetterState[]
}

const initialState:LettersType= {
    letters:[]
}

export const letterSlice = createSlice({
    name: 'letter',
    initialState,
    reducers: {
        createLetter: (state, action) => {
            const newLetter = action.payload;
            const oldIndex = state.letters.find(letter => letter.id === newLetter.id);
            if (!oldIndex) {
                state.letters.push({
                    id: state.letters.length + 1,
                    ...newLetter
                })
            }
            
        },
    }
});

export const { createLetter } = letterSlice.actions;

export default letterSlice.reducer;