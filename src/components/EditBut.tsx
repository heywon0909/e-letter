import { LetterState } from '../redux/slices/letterSlice';

interface Props{
    AddLetter: (letter: Partial<LetterState>) => void,
    letter?:Partial<LetterState>
}
export default function EditBut({AddLetter,letter}: Props) {
    return (
        <div className='w-full mt-2 flex justify-end'>
         <button className="w-40 rounded-md font-mono bg-purple-600 hover:bg-purple-800 text-white p-2" onClick={()=>AddLetter(letter as Partial<LetterState>)}>편지 작성 완료</button >            
        </div>
    );
}

