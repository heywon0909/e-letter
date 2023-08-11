import { configureStore } from '@reduxjs/toolkit';
import {encryptData,decryptData} from '../api/cryptojs/crypto.ts'
import sessionStorage from 'redux-persist/es/storage/session';
import rootReducer from './reducer';
import {
    persistReducer,
    persistStore,
    FLUSH,
    REHYDRATE,
    PAUSE,
    PERSIST,
    PURGE,
    REGISTER
} from 'redux-persist';
import { UserType } from './slices/userSlice.ts';



const persistConfig = {
    key: "auth",
    storage: sessionStorage,
    whitelist: ["user"],
    transforms: [
        {
        // 데이터를 저장하기 전에 암호화
        in: (state:UserType) => (encryptData(state)),
        // 데이터를 가져온 후에 복호화
        out: (state: string) => (decryptData(state)),
        },
    ],
}

const persistedReducer = persistReducer(persistConfig,rootReducer)

export const store = configureStore({
    reducer: persistedReducer,
    middleware: (getDefaultMiddleware) => {
        const defaultMiddleware = getDefaultMiddleware({
            serializableCheck: {
                ignoredActions: [
                    FLUSH,
                    REHYDRATE,
                    PAUSE,
                    PERSIST,
                    PURGE,
                    REGISTER
                ]
            }
        });
        return [...defaultMiddleware];
    }
});



export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

 
export const persistor = persistStore(store);
export default store;

