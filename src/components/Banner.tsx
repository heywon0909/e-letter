
import letter from '../../public/img/letter.png'
export default function Banner() {
    return (
        <div id="banner" className='w-full flex flex-col justify-center items-center animate-fadeIn'>
            <div className='w-52 flex justify-center items-center'>
            <img src={letter} />
            </div>
            <h2 className='font-mono mt-2'>누군가에게 진심을 전해보세요.</h2>
        </div>           
    );
}

