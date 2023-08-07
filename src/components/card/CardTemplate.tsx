
import Card_1 from './Card_1';
import Card_2 from './Card_2';
import Card_3 from './Card_3';
interface Props{
    cardId: string;
}

export default function CardTemplate({cardId}:Props) {


    if (!cardId) return <div></div>;
    if (cardId === '1') return <Card_1/>;
    else if (cardId === '2') return <Card_2/>;
    else if (cardId === '3') return <Card_3/>;
    else return(<div></div>)
}


