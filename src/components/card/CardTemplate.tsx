
import { useCallback, useState } from 'react';
import EditBut from '../EditBut';
import Card_1 from './Card_1';
import Card_2 from './Card_2';
import Card_3 from './Card_3';
import { LetterState } from '../../redux/slices/letterSlice';
interface Props{
    cardId: string;
}


export default function CardTemplate({cardId}:Props) {
    const [letter, setLetter] = useState<Partial<LetterState>>();
    const AddLetter = useCallback((letter: Partial<LetterState>) => {
        if (letter === undefined) return;
        console.log('letter',letter)
        setLetter(prev => {
            return ({ ...prev, ...letter });
        });
    }, []);
    

    if (!cardId) return (<div></div>);
    if (cardId === '1') return (
        <>
            <Card_1 AddLetter={AddLetter} letter={letter} />
            <EditBut AddLetter={AddLetter} letter={letter} />
        </>);
    else if (cardId === '2') return (
        <>
            <Card_2 />
            <EditBut AddLetter={AddLetter} letter={letter} />
        </>);
    else if (cardId === '3') return  (
        <>
            <Card_3 />
            <EditBut AddLetter={AddLetter} letter={letter} />
        </>);
    else return(<div></div>)
}


