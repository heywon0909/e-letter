import Banner from '../components/Banner';
import StartBut from '../components/StartBut';

export default function HomePage() {
    return (
        <div className='flex flex-col space-y-3 justify-between'>
            <Banner />
            <StartBut/>
        </div>
    );
}

