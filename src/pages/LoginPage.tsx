import { useCallback, useEffect } from 'react';
// import  axios  from 'axios';
import { kakaoUserLogin } from '../redux/thunks/kakaoUserSetting';
import { useThunkDispatch } from '../redux/hooks';
import { useNavigate } from 'react-router';


export default function LoginPage() {
    const dispatch = useThunkDispatch();
    const navigate = useNavigate();

    const KaKaoLoginApi = useCallback(async (code: string) => {
        const result = await dispatch(kakaoUserLogin(code));
        if (result) {
            navigate('/') 
        }
    }, [dispatch, navigate]);
    
    
    useEffect(() => {
        const urlParams = new URL(location.href).searchParams;
        const code = urlParams.get('code');
        if (code) {
         KaKaoLoginApi(code);
        }
    }, [KaKaoLoginApi, dispatch]);
    return (
        <div className='w-full h-4/6 flex justify-center items-center flex-col'>
            <div className='flex p-2 justify-between w-36' id="bouncing-loader">
                <div className='w-7 h-7 bg-purple-500 rounded-full'></div>
                <div className='w-7 h-7 bg-purple-500 rounded-full'></div>
                <div className='w-7 h-7 bg-purple-500 rounded-full'></div>
            </div>
            <h2 className='font-mono mt-2'>로그인 중입니다 잠시만 기다려주세요.</h2>
        </div>
    );
}

