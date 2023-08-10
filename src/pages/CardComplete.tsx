import { useParams } from 'react-router';
import CardFinishedVersion from '../components/card/CardFinishedVersion';
import { useAppSelector, useThunkDispatch } from '../redux/hooks';
import { useEffect } from 'react';
import { getLetterApi } from '../redux/thunks/letterSetting';
// import { LetterState } from '../redux/slices/letterSlice';

export default function CardComplete() {
    const { cardId, uid } = useParams();
    const dispatch = useThunkDispatch();
    const user = useAppSelector((state) => state.user.user);
    const letters = useAppSelector((state) => state.letters.letters);
    // const [letter, setLetter] = useState<LetterState>();

    useEffect(() => {
        if (!user) return;
        const result =dispatch(getLetterApi({ userId:user.id as number, uid:uid as string }))
        console.log('result', result);
    }, [dispatch, uid, user]);

    return (
        <section className='w-full h-full flex flex-col justify-center items-center'>
            <h2 className='font-mono mt-2 -mb-5 animate-fadeIn'>편지가 완성되었습니다.</h2>
            <div className='lg:w-2/5 md:w-3/5 w-11/12 h-full flex flex-col justify-center items-center -mt-16'>
                {(cardId && uid) && <CardFinishedVersion cardId={cardId} uid={uid} letter={letters[letters.length - 1]} />}
            </div>    
         </section>
    );
}

