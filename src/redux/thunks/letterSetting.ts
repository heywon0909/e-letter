import { createAsyncThunk } from '@reduxjs/toolkit';
import { addLetter, addUserLetter, getCompletedLetter, getLetters } from '../../api/firebase/firebase';
import { LetterState, createLetter } from '../slices/letterSlice';

export const addLetterApi = createAsyncThunk('letter/createLetter',
    async (value:{ userId: number, letter: LetterState }) => {
        const { userId, letter } = value;
        let result = null;
        try {
           
            result = await addUserLetter(userId, letter);
            await addLetter(letter);
            

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
            result = await getLetters(userId, uid);
            thunkApi.dispatch(createLetter(result));

        } catch (error) {
            result = error;
            console.error(error);
        }
        return result;
    })
    
export const getReceivedLetterApi = createAsyncThunk('letter/receivedLetter',
  async (value:{  uid:string }, thunkApi) => {
        const { uid } = value;
        let result = null;
        try {
            result = await getCompletedLetter(uid);
            console.log('result',result)
            thunkApi.dispatch(createLetter(result));

        } catch (error) {
            result = error;
            console.error(error);
        }
        return result;
    })