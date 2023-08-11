import { useAppSelector } from '@/redux/hooks';
import { Navigate } from "react-router-dom";

interface Props{
    children:JSX.Element
}
export default function AuthRequiredLayout({children}:Props) {
    const user = useAppSelector((state)=>state.user.user);
  
   
    if (user) {
        return children;
    }

    if (user == null) {
        return  (<Navigate to="/" replace={true} />)
    }
   
}

