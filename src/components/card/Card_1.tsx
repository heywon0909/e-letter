
export default function Card_1() {
    return (
         <article className="w-full overflow-hidden rounded-lg shadow-lg bg-template p-4 h-4/6 bg-cover" >
            <div className="flex flex-col items-center justify-between bg-white h-full opacity-70">
                <div className='mt-10'>
                    <input type="text"  placeholder='00에게' className='text-sm bg-purple-200 p-2 text-center placeholder-gray-600 font-semibold'/>
                </div>     
                    <textarea class="w-full p-2 bg-transparent outline-none placeholder-gray-600 resize-none h-4/5" rows="4" placeholder="여기부터 편지를 써주세요"></textarea>
                </div>
        </article>
    );
}

