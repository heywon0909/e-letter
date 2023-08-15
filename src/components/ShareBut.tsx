import { LetterState } from '@/redux/slices/letterSlice';
import { useEffect, useReducer } from 'react';
import { RiKakaoTalkFill } from 'react-icons/ri';

interface Props{
  letter:LetterState
}

const objectType = 'feed' as const;
type buttonTitle = string;
interface contentObj {
  title: string,
  description: string,
  imageUrl: string,
  link: {
    mobileWebUrl: string,
    webUrl:string
  }
}
type itemObj = {
  item: string,
  itemOp:string
}
interface itemContentObj {
    profileText: string,
    profileImageUrl:string,
    titleImageUrl?:string,
    titleImageText?: string,
    titleImageCategory?: string,
    items?: itemObj[],
    sum?:string,
    sumOp?: '15000원',
}
interface ReducerState{
  objectType: typeof objectType,
  content?: contentObj,
  itemContent?:itemContentObj,
  buttonTitle:buttonTitle,
}

const initialState: ReducerState = {
  objectType: 'feed',
  buttonTitle:'편지 보러가기'
}

export const CREATE_STATE = "CREATE_STATE" as const;

interface CreateStateAction {
  type: typeof CREATE_STATE;
  content: contentObj,
  itemContent:itemContentObj
}

export const createState = (
   content: contentObj,
  itemContent:itemContentObj
): CreateStateAction => {
  return {
    type:CREATE_STATE,
    content,itemContent
  }
}

type ReducerActions = CreateStateAction

const reducer = (state = initialState, action: ReducerActions): ReducerState => {
  switch (action.type) {
    case CREATE_STATE:
      return {
        ...state,
        content: action.content,
        itemContent: action.itemContent
      }
    default:
      return state;
  }
}

export default function ShareBut({letter}:Props) {
  const [state, dispatch] = useReducer(reducer, initialState);
  console.log('state', state);


  useEffect(() => {
    if (!letter) return;
    const { from, to, bg, id, type } = letter;
    
    const content = {
      title: `${from.name}님께서 ${to} 쓴 편지가 도착했습니다 📑`,
      description: 'custom 편지지 e-letter 📩',
      imageUrl: bg as string,
      link: {
        mobileWebUrl:`https://heywon0909.github.io/e-letter/card/share/${id}/${type}`,
        webUrl:`https://heywon0909.github.io/e-letter/card/share/${id}/${type}`
      }
    }
    const itemContent = {
      profileText: 'e-letter',
      profileImageUrl: `https://user-images.githubusercontent.com/50330312/259959122-a9542ade-8245-4d62-88c3-cccdae752202.png`,
    }
    dispatch(createState(content, itemContent));
  },[letter]);
        

    const shareMessage = () => {
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        //@ts-ignore   
    Kakao.Share.sendDefault(state);
    }

    return (
        <a id="kakaotalk-sharing-btn" onClick={shareMessage} className='w-40 flex rounded-md justify-center items-center bg-yellow-400 hover:bg-yellow-500 text-white h-10 mt-5'>
        <RiKakaoTalkFill size={30} />공유하기
        </a>
    );
}

