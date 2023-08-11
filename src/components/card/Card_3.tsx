import { LetterState } from '../../redux/slices/letterSlice';

interface Props{
    isComplete: boolean,
    setToName?: (e: React.ChangeEvent<HTMLInputElement>) => void,
    setToContent?:(e: React.ChangeEvent<HTMLTextAreaElement>) => void,
    letter?:Partial<LetterState>
}
export default function Card_3({ isComplete, setToName,setToContent, letter }: Props) {
    return (
       <article className="w-full overflow-hidden rounded-lg shadow-lg h-4/6">

                <a className='w-full flex justify-center'>
                    <img alt="Placeholder" className="block rounded-full w-28 h-28" src={letter?.bg ? letter.bg : "https://picsum.photos/600/400/?random"} />
                </a>

                <div className="flex items-center justify-between leading-tight p-2 md:p-4 w-full">
                    <h1 className="text-lg">
                       {!isComplete &&  <input type='text' className="no-underline text-black"  defaultValue={letter?.to || ''} onInput={setToName} placeholder='00에게'/>}
                        {isComplete &&  <p className="no-underline hover:underline text-black">{letter?.to || ''}</p> }
                    </h1>
                </div>

                <div className="flex items-center justify-between leading-none p-2 md:p-4 h-full">
                      {!isComplete && <textarea className="w-full p-2 bg-transparent outline-none placeholder-gray-600 resize-none h-full"  placeholder="여기부터 편지를 써주세요" defaultValue={letter?.content || ''} onInput={setToContent}></textarea>}
                    {isComplete &&  <textarea className="w-full p-2 bg-transparent outline-none placeholder-gray-600 resize-none h-full"  placeholder="여기부터 편지를 써주세요" defaultValue={letter?.content || ''} readOnly></textarea>}   
                </div>

               </article>
    );
}

