import { Link } from 'react-router-dom';

export default function StartBut() {
    return (
        <Link to='/select/card' className='w-full flex rounded-md justify-center bg-purple-600 hover:bg-purple-800 text-white p-2'>
            편지 쓰기
        </Link>
    );
}

