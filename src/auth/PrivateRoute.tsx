import { ReactNode } from "react";
import { Navigate } from "react-router-dom";

{/* condition redirectPath - childern  */}

interface IProps{
  isAllowed:boolean;
  redirectPath:string;
  children :ReactNode;
  data?:unknown
}

const PrivateRoute = ({isAllowed,redirectPath,children,data}:IProps) => {
    if(!isAllowed) return <Navigate  to={redirectPath} state={data}/>
    return children
}

export default PrivateRoute