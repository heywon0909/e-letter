import { LetterState } from '../../redux/slices/letterSlice';

interface Props{
    isComplete: boolean,
    setToName?: (e: React.ChangeEvent<HTMLInputElement>) => void,
    setToContent?:(e: React.ChangeEvent<HTMLTextAreaElement>) => void,
    letter?:Partial<LetterState>
}
export default function Card_1({ setToName,setToContent, letter,isComplete }: Props) {
    return (
        <article className="w-full overflow-hidden rounded-lg shadow-lg p-4 h-4/6 bg-cover" style={{ backgroundImage: `url(${letter?.bg})` }}>
            <div className="flex flex-col items-center justify-between  h-full">
                <div className='mt-10'>
                   {!isComplete &&  <input type="text" placeholder='00에게' className='text-sm bg-purple-200 p-2 text-center placeholder-gray-600 font-semibold bg-transparent' defaultValue={letter?.to || ''} onInput={setToName} />}
                   {isComplete &&  <p className='text-sm p-2 text-center placeholder-gray-600 font-mono focus:outline-none bg-transparent border-b-2 border-gray-500'>{letter?.to || ''}</p>}
                </div>     
                {!isComplete && <textarea className="w-full p-2 bg-transparent outline-none placeholder-gray-600 resize-none h-4/5 bg-white opacity-50"  placeholder="여기부터 편지를 써주세요" defaultValue={letter?.content || ''} onInput={setToContent}></textarea>}
                {isComplete &&  <div className="w-full p-2 bg-transparent outline-none placeholder-gray-600 resize-none h-4/5 bg-white opacity-50" >{letter?.content || ''}</div>}   
            </div>
        </article>
    );
}

