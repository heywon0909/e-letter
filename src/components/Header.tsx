import { useAppSelector } from '../redux/hooks';

export default function Header() {
    const user = useAppSelector((state)=>state.user.user);
    return (
        <header className='w-full text-3xl p-2 flex  justify-between'>
            <div className='underline font-mono'>e-letter</div>
            {user && 
                <div className='flex p-2'>
                    <p className='text-sm pt-1 font-mono'>{user.name}님</p>
                    <img src={user.image} className='w-7 h-7 rounded-full' />
                </div>
            }
        </header>
    );
}

