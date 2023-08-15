import { useParams } from 'react-router';
import CardFinishedVersion from '../components/card/CardFinishedVersion';
import { useAppSelector, useThunkDispatch } from '../redux/hooks';
import { useEffect, useMemo } from 'react';
import { getReceivedLetterApi } from '../redux/thunks/letterSetting';
import { LetterState } from '@/redux/slices/letterSlice';

export default function CardShare() {
    const { cardId, uid } = useParams();
    const dispatch = useThunkDispatch();
    const letters = useAppSelector((state) => state.letters.letters);
  
    const params = useMemo(() => {
        if (!uid) return;
        return ({ uid: uid as string })
    }, [uid]);
    
    

    useEffect(() => {
       dispatch(getReceivedLetterApi(params!));
    }, [dispatch, params]);

    const letter = useMemo(() => {
        if (!letters) return;
        return letters[letters.length - 1]
    }, [letters])


    return (
        <section className='w-full h-full flex flex-col justify-center items-center'>
            <h2 className='font-mono mt-2 -mb-5 animate-fadeIn'>편지가 완성되었습니다.</h2>
            <div className='lg:w-2/5 md:w-3/5 w-11/12 h-full flex flex-col justify-center items-center -mt-16'>
                {(cardId && uid) && <CardFinishedVersion cardId={cardId} uid={uid} letter={letter as LetterState} />}
            </div>    
         </section>
    );
}

