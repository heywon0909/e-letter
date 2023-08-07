import { Outlet } from 'react-router';
import Header from '../components/Header';

export default function Root() {
    return (
        <div className='w-full h-screen'>
            <Header />
            <section className='h-3/4 flex flex-col justify-center items-center w-full'>
                <Outlet />
            </section>    
        </div>
    );
}

