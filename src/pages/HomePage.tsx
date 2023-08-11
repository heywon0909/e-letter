import Banner from '../components/Banner';
import StartBut from '../components/StartBut';

export default function HomePage() {

    return (
       <section className='h-full w-full flex flex-col justify-center items-center'> 
        <div className='flex flex-col space-y-3'>
            <Banner />
            <StartBut />
        </div>
        </section>    
    );
}

