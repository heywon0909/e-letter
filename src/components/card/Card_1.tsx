import { useCallback } from 'react';
import { LetterState } from '../../redux/slices/letterSlice';

interface Props{
    isComplete: boolean,
    AddLetter?: (letter: Partial<LetterState>) => void,
    letter?:Partial<LetterState>
}
export default function Card_1({ AddLetter, letter,isComplete }: Props) {
    const setToName = useCallback((event: React.ChangeEvent<HTMLInputElement>) => {
        if (AddLetter==null) return;
        AddLetter({ to: event.target.value });
    }, [AddLetter]);
    const setToContent = useCallback((event: React.ChangeEvent<HTMLTextAreaElement>) => {
        if (AddLetter==null) return;
        AddLetter({ content: event.target.value });
    }, [AddLetter]);
    return (
        <article className="w-full overflow-hidden rounded-lg shadow-lg p-4 h-4/6 bg-cover" style={{ backgroundImage: `${letter?.bg ? `url(${letter.bg})`: `url(https://picsum.photos/600/400/?random)`}` }}>
            <div className="flex flex-col items-center justify-between  h-full">
                <div className='mt-10'>
                   {!isComplete &&  <input type="text" placeholder='00에게' className='text-sm bg-purple-200 p-2 text-center placeholder-gray-600 font-semibold bg-transparent' defaultValue={letter?.to || ''} onInput={setToName} />}
                   {isComplete &&  <p className='text-sm p-2 text-center placeholder-gray-600 font-mono focus:outline-none bg-transparent border-b-2 border-gray-500'>{letter?.to || ''}</p>}
                </div>     
                {!isComplete && <textarea className="w-full p-2 bg-transparent outline-none placeholder-gray-600 resize-none h-4/5"  placeholder="여기부터 편지를 써주세요" defaultValue={letter?.content || ''} onInput={setToContent}></textarea>}
                {isComplete &&  <div className="w-full p-2 bg-transparent outline-none placeholder-gray-600 resize-none h-4/5" >{letter?.content || ''}</div>}   
            </div>
        </article>
    );
}

