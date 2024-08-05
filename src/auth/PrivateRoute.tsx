import { ReactNode } from "react";
import { Navigate } from "react-router-dom";

{/* condition redirectPath - childern  */}

interface IProps{
  isAllowed:boolean;
  redirectPath:string;
  children :ReactNode;
}

const PrivateRoute = ({isAllowed,redirectPath,children}:IProps) => {
    if(!isAllowed) return <Navigate  to={redirectPath}/>
    return children
}

export default PrivateRoute