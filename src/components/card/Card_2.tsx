import { useCallback } from 'react';
import { LetterState } from '../../redux/slices/letterSlice';

interface Props{
    isComplete: boolean,
    AddLetter?: (letter: Partial<LetterState>) => void,
    letter?:Partial<LetterState>
}
export default function Card_2({ AddLetter, isComplete, letter }: Props) {
    const setToName = useCallback((event: React.ChangeEvent<HTMLInputElement>) => {
        if (AddLetter==null) return;
        AddLetter({ to: event.target.value });
    }, [AddLetter]);
    const setToContent = useCallback((event: React.ChangeEvent<HTMLTextAreaElement>) => {
        if (AddLetter==null) return;
        AddLetter({ content: event.target.value });
    }, [AddLetter]);
    return (
        <article className="w-full overflow-hidden rounded-lg shadow-lg h-4/6 max-h-min">

                <a href="#">
                    <img alt="Placeholder" className="block h-3/5 w-full max-h-fit" src="https://picsum.photos/600/400/?random" />
                </a>

                <div className="flex items-center w-full justify-between leading-tight p-2 md:p-4">
                <h1 className="text-sm w-full">
                    {!isComplete && <input type='text' className="text-black focus:outline-none" defaultValue={letter?.to || ''} onInput={setToName} placeholder='00에게' />}
                    {isComplete && <p className="text-black focus:outline-none">{letter?.to || ''}</p>}
                    </h1>
                </div>

                <div className="flex items-center justify-between leading-none p-2 md:p-4 h-full">
                    {!isComplete && <textarea className="w-full p-2 bg-transparent outline-none placeholder-gray-600 resize-none h-full"  placeholder="여기부터 편지를 써주세요" defaultValue={letter?.content || ''} onInput={setToContent}></textarea>}
                    {isComplete &&  <div className="w-full p-2 bg-transparent outline-none placeholder-gray-600 resize-none h-full">{letter?.content || ''}</div>}   
                </div>

                </article>
    );
}

