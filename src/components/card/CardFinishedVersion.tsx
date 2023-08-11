import ShareBut from '@components/ShareBut';
import { LetterState } from '../../redux/slices/letterSlice';
import Card_1 from './Card_1';
import Card_2 from './Card_2';
import Card_3 from './Card_3';

interface Props{
    cardId: string;
    uid: string;
    letter:LetterState
}

export default function CardFinishedVersion({cardId,uid,letter}:Props) {
    if (!cardId || !uid) return (<div></div>);
    
    if(cardId==='1') 
    return (
        <>
            <Card_1 isComplete={true} letter={letter} />
            <div className='w-full flex justify-end'>
                <ShareBut />
            </div>    
        </>
        );
    if(cardId==='2') 
    return (
        <>
           <Card_2 isComplete={true} letter={letter} />
           <div className='w-full flex justify-end'>
                <ShareBut />
            </div> 
        </>
        );
    if(cardId==='3') 
    return (
        <>
            <Card_3 isComplete={true} letter={letter} />
            <div className='w-full flex justify-end'>
                <ShareBut />
            </div>   
        </>
    );
}

