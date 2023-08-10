import { useParams } from 'react-router';
import CardTemplate from '../components/card/CardTemplate';



export default function Card() {
    const { cardId,cardImgNum } = useParams();
    return (
         <section className='w-full h-full flex flex-col justify-center items-center'>
            <div className='lg:w-2/5 md:w-3/5 w-11/12 h-full flex flex-col justify-center items-center -mt-16'>
                {cardId && <CardTemplate cardId={cardId} cardImgNum={cardImgNum as string} />}
            </div>    
         </section>
    );
}

