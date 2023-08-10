import { useNavigate } from 'react-router';
import sample1 from '/assets/img/sample1.jpg'
import sample2 from '/assets/img/sample2.jpg';
import sample3 from '/assets/img/sample3.jpg';
import sample4 from '/assets/img/sample4.jpg';
import sample5 from '/assets/img/sample5.jpg';
import sample6 from '/assets/img/sample6.jpg';
import { useCallback, useEffect, useMemo, useRef, useState } from 'react';

const randomNumber = () => (Math.floor(Math.random() * 5) + 1);

export default function CardSelect() {
    const randomNum = useRef(0);
    const [url, setUrl] = useState('');
    const imgArr = [sample1, sample2, sample3, sample4, sample5, sample6];
    randomNum.current = useMemo(() => randomNumber(), []);
    
    const navigate = useNavigate();

    useEffect(() => {
        navigate(url);
    }, [navigate, url]);

    const goTemplate = useCallback((id: number) => {
        setUrl(`/card/${id}/${randomNum.current+1}`);
    },[])

    return (
       <section className='w-full md:h-full flex flex-col justify-center items-center'>  
        <h2 className='font-mono mt-2 text-base'>편지지 양식을 골라주세요.</h2>
        <div className='md:w-3/4 w-11/12 flex justify-center space-y-3'>
            <ul className='grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-3 my-4 h-70 w-full'>
               <article className="overflow-hidden rounded-lg shadow-lg h-72 p-4 transition-all hover:scale-90" onClick={()=>goTemplate(1)} style={{backgroundImage:`url(${imgArr[randomNum.current]})`}}>
                <div className="flex flex-col items-center justify-center bg-white h-full opacity-70">
                    <h1 className="text-sm p-4 font-semibold">
                        ooo에게
                    </h1>
                    <p className="text-grey-darker text-sm w-full break-words h-60 flex justify-center items-center bg-purple-200 p-2">
                        편지 글
                    </p>
                            
                </div>

                

                </article>
                <article className="overflow-hidden rounded-lg shadow-lg h-72 transition-all hover:scale-90" onClick={()=>goTemplate(2)}>

                <a>
                    <img alt="Placeholder" className="block h-3/5 w-full" src={imgArr[randomNum.current]} />
                </a>

                <div className="flex items-center justify-between leading-tight p-2">
                    <h1 className="text-sm">
                        <a className="no-underline hover:underline text-black" href="#">
                            ooo에게
                        </a>
                    </h1>
                </div>

                <div className="flex items-center justify-between p-2 md:p-4 h-28 bg-purple-200">
                    <a className="flex items-center no-underline hover:underline text-black" href="#">
                      
                        <p className="ml-2 text-sm -mt-5">
                            편지글
                        </p>
                    </a>
                </div>

                </article>
                <article className="overflow-hidden rounded-lg shadow-lg h-72 transition-all hover:scale-90" onClick={()=>goTemplate(3)}>

                <a className='w-full flex justify-center'>
                    <img alt="Placeholder" className="block rounded-full w-28 h-28" src={imgArr[randomNum.current]}   />
                </a>

                <div className="flex items-center justify-between leading-tight p-2 md:p-4">
                    <h1 className="text-lg">
                        <a className="no-underline hover:underline text-black" href="#">
                            ooo에게
                        </a>
                    </h1>
                </div>

                <div className="flex items-center justify-between leading-none p-2 md:p-4 bg-purple-200 h-40">
                    <a className="flex items-center justify-center no-underline hover:underline text-black" href="#">
                        <p className="ml-2 text-sm -mt-5">
                            편지글
                        </p>
                    </a>
                </div>

               </article>
            </ul>
            </div>
        </section>    
    );
}

