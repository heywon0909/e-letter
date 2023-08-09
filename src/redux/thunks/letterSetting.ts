import { createAsyncThunk } from '@reduxjs/toolkit';
import { addLetters } from '../../firebase/firebase';
import { LetterState, createLetter } from '../slices/letterSlice';

export const addLetterApi = createAsyncThunk('letter/createLetter',
    async (value:{ userId: number, letter: LetterState }, thunkApi) => {
        const { userId, letter } = value;
        let result = null;
        try {
            console.log('api')
            result = await addLetters(userId, letter);
            thunkApi.dispatch(createLetter(letter));

        } catch (error) {
            result = error;
            console.error(error);
        }
        return result;
    })
    
