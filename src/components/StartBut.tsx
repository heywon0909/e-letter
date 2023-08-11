import { useNavigate } from 'react-router-dom';
import { useAppSelector } from '../redux/hooks';

export default function StartBut() {
    const user = useAppSelector((state) => state.user.user);
    const navigate = useNavigate();

    const goSelectLetter = () => {
        if (user) {
            navigate('/select/card')
        } else {
            // eslint-disable-next-line @typescript-eslint/ban-ts-comment
            //@ts-ignore
            Kakao.Auth.authorize({
                redirectUri: 'http://127.0.0.1:5173/e-letter/login/oauth',
                scope:"profile_nickname,account_email,gender,profile_image"
            });
        }
    }

    return (
        <button onClick={goSelectLetter} className='w-full flex rounded-md justify-center bg-purple-600 hover:bg-purple-800 text-white p-2'>
            편지 쓰기
        </button>
    );
}

