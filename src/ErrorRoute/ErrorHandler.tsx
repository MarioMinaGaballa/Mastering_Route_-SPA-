import { FC } from "react";

interface IProps{
  statusCode?:number;
  title?: string
}

const ErrorHandler : FC<IProps> = ({statusCode=500,title="Server Error"}) => {
  return (
    <>
    <h2>
      {statusCode},{title}

    </h2>
    </>
  )
}

export default ErrorHandler


// Status Code (404,500) - Error Message