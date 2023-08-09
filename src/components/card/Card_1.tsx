import { useCallback } from 'react';
import { LetterState } from '../../redux/slices/letterSlice';

interface Props{
    AddLetter: (letter: Partial<LetterState>) => void,
    letter?:Partial<LetterState>
}
export default function Card_1({ AddLetter, letter }: Props) {
    const setToName = useCallback((event: React.ChangeEvent<HTMLInputElement>) => {
        AddLetter({ to: event.target.value });
    }, [AddLetter]);
    const setToContent = useCallback((event: React.ChangeEvent<HTMLTextAreaElement>) => {
        AddLetter({ content: event.target.value });
    }, [AddLetter]);
    return (
        <article className="w-full overflow-hidden rounded-lg shadow-lg p-4 h-4/6 bg-cover" style={{ backgroundImage: `${letter?.bg ? `url(${letter.bg})`: `url(https://picsum.photos/600/400/?random)`}` }}>
            <div className="flex flex-col items-center justify-between bg-white h-full opacity-70">
                <div className='mt-10'>
                    <input type="text" placeholder='00에게' className='text-sm bg-purple-200 p-2 text-center placeholder-gray-600 font-semibold' value={letter?.to || ''} onInput={setToName} />
                </div>     
                    <textarea className="w-full p-2 bg-transparent outline-none placeholder-gray-600 resize-none h-4/5" rows="4" placeholder="여기부터 편지를 써주세요" value={letter?.content || ''} onInput={setToContent}></textarea>
                </div>
        </article>
    );
}

