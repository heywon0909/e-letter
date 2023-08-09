import Banner from '../components/Banner';
import StartBut from '../components/StartBut';

export default function HomePage() {
    
    const Login = () => {
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        //@ts-ignore
        Kakao.Auth.authorize({
            redirectUri: 'http://127.0.0.1:5173/login/oauth',
            scope:"profile_nickname,account_email,gender,profile_image"
       });
    }


    return (
       <section className='h-3/4 w-full flex flex-col justify-center items-center'> 
        <div className='flex flex-col space-y-3'>
            <Banner />
            <StartBut />
            <button onClick={Login}>테스트</button>    
        </div>
        </section>    
    );
}

