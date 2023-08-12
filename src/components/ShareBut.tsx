import { RiKakaoTalkFill } from 'react-icons/ri';

export default function ShareBut() {
   
        

    const shareMessage = () => {
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        //@ts-ignore   
     Kakao.Share.sendDefault({
  objectType: 'feed',
  content: {
    title: '오늘의 디저트',
    description: '아메리카노, 빵, 케익',
    imageUrl:
      'https://mud-kage.kakao.com/dn/NTmhS/btqfEUdFAUf/FjKzkZsnoeE4o19klTOVI1/openlink_640x640s.jpg',
    link: {
      mobileWebUrl: 'https://developers.kakao.com',
      webUrl: 'https://developers.kakao.com',
    },
  },
  itemContent: {
    profileText: 'Kakao',
    profileImageUrl: 'https://mud-kage.kakao.com/dn/Q2iNx/btqgeRgV54P/VLdBs9cvyn8BJXB3o7N8UK/kakaolink40_original.png',
    titleImageUrl: 'https://mud-kage.kakao.com/dn/Q2iNx/btqgeRgV54P/VLdBs9cvyn8BJXB3o7N8UK/kakaolink40_original.png',
    titleImageText: 'Cheese cake',
    titleImageCategory: 'Cake',
    items: [
      {
        item: 'Cake1',
        itemOp: '1000원',
      },
      {
        item: 'Cake2',
        itemOp: '2000원',
      },
      {
        item: 'Cake3',
        itemOp: '3000원',
      },
      {
        item: 'Cake4',
        itemOp: '4000원',
      },
      {
        item: 'Cake5',
        itemOp: '5000원',
      },
    ],
    sum: '총 결제금액',
    sumOp: '15000원',
  },
  social: {
    likeCount: 10,
    commentCount: 20,
    sharedCount: 30,
  },
  buttons: [
    {
      title: '웹으로 이동',
      link: {
        mobileWebUrl: 'https://developers.kakao.com',
        webUrl: 'https://developers.kakao.com',
      },
    },
    {
      title: '앱으로 이동',
      link: {
        mobileWebUrl: 'https://developers.kakao.com',
        webUrl: 'https://developers.kakao.com',
      },
    },
  ],
});
    }

    return (
        <a id="kakaotalk-sharing-btn" onClick={shareMessage} className='w-40 flex rounded-md justify-center items-center bg-yellow-400 hover:bg-yellow-500 text-white h-10 mt-5'>
        <RiKakaoTalkFill size={30} />공유하기
        </a>
    );
}
