import {  useCallback, useState } from 'react';
import { useAppSelector, useThunkDispatch } from '../redux/hooks';
import { kakaoUserLogout } from '@/redux/thunks/kakaoUserSetting';
import { Link } from 'react-router-dom';

export default function Header() {
    const user = useAppSelector((state) => state.user.user);
    const [popOpen, setPopOpen] = useState(false); 
    const handlePopOver = () => setPopOpen(prev => !prev);
    
    const dispatch = useThunkDispatch();
    
    const onLogOutUser = useCallback(() => {
        if (!user) return;
        
        dispatch(kakaoUserLogout(user));
    }, [dispatch, user]);
    

    return (
        <header className='w-full text-3xl p-2 flex  justify-between'>
            <Link className='underline font-mono' to='/'>e-letter</Link>
            {user && 
                (<div id="popOver">
                    <button className='w-32 flex shadow-md justify-center items-center hover:shadow-lg h-10' type='button' id='userBut' onClick={handlePopOver}>
                        <p className='text-sm mt-1 font-mono'>{user.name}님</p>
                        <img src={user.image} className='w-7 h-7 rounded-full' />
                    </button>
                <div role="tooltip" className={`absolute right-0 top-12 inline-block transition-opacity duration-300 w-48 text-sm text-gray-500 bg-white border border-gray-200 rounded-lg shadow-sm  dark:text-gray-400 dark:bg-gray-800 dark:border-gray-600 h-auto p-2 ${popOpen ? 'opacity-100':'opacity-0'}`} >
                    <div className='font-mono flex justify-end'>현재 로그인 상태입니다.</div>
                    <div className='mt-2 flex justify-end'>
                        <button className='w-20 h-6 bg-purple-500 text-white rounded-sm' onClick={onLogOutUser}>로그아웃</button>
                    </div>
                </div>
                </div>)
            }
            
        </header>
    );
}

