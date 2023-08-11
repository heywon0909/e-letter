
import { useCallback, useEffect, useState } from 'react';
import EditBut from '../EditBut';
import { v4 as uuidv4 } from 'uuid';
import Card_1 from './Card_1';
import Card_2 from './Card_2';
import Card_3 from './Card_3';
import { LetterState } from '../../redux/slices/letterSlice';
import { addLetterApi } from '../../redux/thunks/letterSetting';
import { UserType } from '../../redux/slices/userSlice';
import { useThunkDispatch } from '../../redux/hooks';
import { useNavigate } from 'react-router';
import BgUploadBut from '../BgUploadBut';
interface Props{
    cardId: string;
    cardImgNum: string;
}


export default function CardTemplate({cardId,cardImgNum}:Props) {
    const [letter, setLetter] = useState<Partial<LetterState>>();
    const dispatch = useThunkDispatch();

    const navigate = useNavigate();
   
    const AddLetter = useCallback((letter: Partial<LetterState>) => {   
        if (letter === undefined) return;
        setLetter(prev => {
            return ({ ...prev, ...letter });
        });
    }, []);
    
    
    
    useEffect(() => {
        if (!cardId && !cardImgNum) return;
        AddLetter({ type: parseInt(cardId),bg:`/assets/img/sample${cardImgNum}.jpg` });
    },[AddLetter, cardId, cardImgNum])


    

    const OnAddLetter = useCallback(async (user:UserType) => {
        if (!user) return;
    
        const keys: (keyof LetterState)[] = ['bg','content','id','from','to'];
        const newLetter: Partial<LetterState> = { ...letter };
        
        for (const key of keys) {
            console.log('key',key,newLetter[`${key}`])
            if (newLetter[`${key}`]==null) {
                console.log('key', key);
                switch (key) {
                    case 'id': newLetter.id = uuidv4() as unknown as number;
                        break;
                    case 'from': newLetter.from = user; break;
                    case 'to':
                    case 'content': console.log('입력필수'); break;
                    case 'bg': newLetter.bg = ''; break;
                    default: throw new Error('not found');
                }
                
            }
        }

        
      
        await dispatch(addLetterApi({ userId: user.id, letter: newLetter as LetterState })).then(result => {
            console.log('result', result);
            const { type } = result;
            if (type.includes('fulfilled')) {
                const url = `/card/complete/${newLetter.type}/${newLetter.id}`
                navigate(url,{replace:true});
            }
            
           
        })
    }, [letter, dispatch, navigate]);
    

    const setToName = useCallback((event: React.ChangeEvent<HTMLInputElement>) => {
        if (AddLetter==null) return;
        AddLetter({ to: event.target.value });
    }, [AddLetter]);
    const setToContent = useCallback((event: React.ChangeEvent<HTMLTextAreaElement>) => {
        if (AddLetter==null) return;
        AddLetter({ content: event.target.value });
    }, [AddLetter]);

    const setToBg = useCallback((url: string) => {
        
        if (AddLetter == null) return;
    
        AddLetter({ bg: url });
       
       
    }, [AddLetter]);
    

    if (!cardId) return (<div></div>);
    if (cardId === '1') return (
        <>
            <BgUploadBut setToBg={setToBg} />
            <Card_1 setToName={setToName} setToContent={setToContent}  letter={letter} isComplete={false} />
            <EditBut onAddLetter={OnAddLetter} letter={letter} />
        </>);
    else if (cardId === '2') return (
        <>
            <BgUploadBut  setToBg={setToBg}/>
            <Card_2 setToName={setToName} setToContent={setToContent}  letter={letter} isComplete={false} />
            <EditBut onAddLetter={OnAddLetter} letter={letter} />
        </>);
    else if (cardId === '3') return  (
        <>
            <BgUploadBut  setToBg={setToBg}/>
            <Card_3 setToName={setToName} setToContent={setToContent}  letter={letter} isComplete={false}/>
            <EditBut onAddLetter={OnAddLetter} letter={letter} />
        </>);
    else return(<div></div>)
}


