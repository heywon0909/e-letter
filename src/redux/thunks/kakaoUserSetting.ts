import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios'
import { UserType, outUser, setUser } from '../slices/userSlice';
import { signWithKakaoLogin } from '../../api/firebase/firebase';

export const kakaoUserLogin = createAsyncThunk('user/setUser',
    async (code:string, thunkApi) => {
        const grant_type = "authorization_code";
        return axios.post(`https://kauth.kakao.com/oauth/token?grant_type=${grant_type}&client_id=${import.meta.env.KAKAO_REST_API_KEY}&redirect_uri=${import.meta.env.KAKAO_REDIRECT_URI}&response_type=code&scope=account_email,gender&code=${code}`, {
            headers: {
                'Content-type':'application/x-www-form-urlencoded;charset=utf-8'
            }
        }).then(result => {
            // console.log('result1', result);
            const { access_token } = result.data;
            // console.log('access',access_token)
            axios.get('https://kapi.kakao.com/v2/user/me', {
                headers: {
                    'Authorization': `Bearer ${access_token}`,
                    'Content-type':' application/x-www-form-urlencoded;charset=utf-8'
                }
            }).then(result => {
                // console.log('result2', result);
                const { properties } = result.data;
                const { kakao_account } = result.data;
                const user = {
                    id: result.data.id,
                    token:access_token,
                    name: properties?.nickname,
                    image: properties?.profile_image,
                    email: kakao_account?.email,
                    gender: kakao_account?.gender
                }


                thunkApi.dispatch(setUser(user));
                signWithKakaoLogin(user);
            })
        })
    })

 export const kakaoUserLogout = createAsyncThunk('user/outUser',
    async (user:UserType,thunkApi) => {
        return axios.post(`https://kapi.kakao.com/v1/user/logout`, {
            'target_id_type': 'user_id',
            'target_id': user.id
        }, {
            headers: {
                'Content-type': 'application/x-www-form-urlencoded',
                'Authorization':`Bearer ${user.token}`
                
            }
        }).then(() => {
            // console.log('result1', result);
            thunkApi.dispatch(outUser(null));
             
            })
})

       