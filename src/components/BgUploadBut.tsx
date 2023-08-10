interface Props{
    setToBg: (event: React.ChangeEvent<HTMLInputElement>) => void;
}
export default function BgUploadBut({setToBg}:Props) {
    return (
        <div className='w-full mb-2' id="filebox">
           <label className="block mb-2 text-xs font-mono text-gray-900 dark:text-white" htmlFor="file_input" >배경 이미지 변경하기</label>
           <input className="block w-full text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400" id="file_input" type="file" onChange={setToBg}></input> 
        </div>
    );
}

