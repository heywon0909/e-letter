
import { useCallback, useState } from 'react';
import EditBut from '../EditBut';
import { v4 as uuidv4 } from 'uuid';
import Card_1 from './Card_1';
import Card_2 from './Card_2';
import Card_3 from './Card_3';
import { LetterState } from '../../redux/slices/letterSlice';
import { addLetterApi } from '../../redux/thunks/letterSetting';
import { UserType } from '../../redux/slices/userSlice';
import { useThunkDispatch } from '../../redux/hooks';
interface Props{
    cardId: string;
}


export default function CardTemplate({cardId}:Props) {
    const [letter, setLetter] = useState<Partial<LetterState>>();
    const dispatch = useThunkDispatch();

    const AddLetter = useCallback((letter: Partial<LetterState>) => {
        if (letter === undefined) return;
        console.log('letter',letter)
        setLetter(prev => {
            console.log('prev',prev,letter)
            return ({ ...prev, ...letter });
        });
    }, []);

    const OnAddLetter = useCallback(async (user:UserType) => {
        if (!user) return;
        const keys: (keyof LetterState)[] = ['bg','content','id','from','to'];
        const newLetter: Partial<LetterState> = { ...letter };
        
        for (const key of keys) {
            console.log('key',key,newLetter[`${key}`])
            if (newLetter[`${key}`]==null) {
                console.log('key', key);
                switch (key) {
                    case 'id': newLetter.id = uuidv4();break;
                    case 'from': newLetter.from = user.name; break;
                    case 'to':
                    case 'content': console.log('입력필수'); break;
                    case 'bg': newLetter.bg = ''; break;
                    default: throw new Error('not found');
                }
                
            }
        }

        
        console.log('타니',newLetter)
        dispatch(addLetterApi({ userId: user.id, letter: newLetter as LetterState }));
    }, [letter,dispatch]);

    if (!cardId) return (<div></div>);
    if (cardId === '1') return (
        <>
            <Card_1 AddLetter={AddLetter} letter={letter} />
            <EditBut onAddLetter={OnAddLetter} letter={letter} />
        </>);
    else if (cardId === '2') return (
        <>
            <Card_2 />
            <EditBut onAddLetter={OnAddLetter} letter={letter} />
        </>);
    else if (cardId === '3') return  (
        <>
            <Card_3 />
            <EditBut onAddLetter={OnAddLetter} letter={letter} />
        </>);
    else return(<div></div>)
}


