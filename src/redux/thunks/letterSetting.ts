import { createAsyncThunk } from '@reduxjs/toolkit';
import { addLetters, getLetters } from '../../api/firebase/firebase';
import { LetterState, createLetter } from '../slices/letterSlice';

export const addLetterApi = createAsyncThunk('letter/createLetter',
    async (value:{ userId: number, letter: LetterState }) => {
        const { userId, letter } = value;
        let result = null;
        try {
            console.log('api')
            result = await addLetters(userId, letter);
            // thunkApi.dispatch(createLetter(letter));

        } catch (error) {
            result = error;
            console.error(error);
        }
        return result;
    })
    
export const getLetterApi = createAsyncThunk('letter/getLetter',
    async (value:{ userId: number, uid:string }, thunkApi) => {
        const { userId, uid } = value;
        let result = null;
        try {
            console.log('api')
            result = await getLetters(userId, uid);
            thunkApi.dispatch(createLetter(result));

        } catch (error) {
            result = error;
            console.error(error);
        }
        return result;
    })
    
