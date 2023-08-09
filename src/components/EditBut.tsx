import { useAppSelector } from '../redux/hooks';
import { LetterState } from '../redux/slices/letterSlice';
import { UserType } from '../redux/slices/userSlice';

interface Props{
    onAddLetter: (user:UserType) => void,
    letter?:Partial<LetterState>
}



export default function EditBut({ onAddLetter,letter }: Props) {
    const user = useAppSelector((state) => state.user.user);
    const onCheckAddLetter = (user:UserType)=>{
        if (!user) return;
        console.log('반응')
        onAddLetter(user)
    }
    return (
        <div className='w-full mt-2 flex justify-end'>
         <button className="w-40 rounded-md font-mono bg-purple-600 hover:bg-purple-800 text-white p-2" onClick={()=>onCheckAddLetter(user as UserType)}>편지 작성 완료</button >            
        </div>
    );
}

