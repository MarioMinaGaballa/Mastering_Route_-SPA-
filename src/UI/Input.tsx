import { FC, InputHTMLAttributes } from "react"

interface IProps extends InputHTMLAttributes<HTMLInputElement>{}

const Input :FC<IProps>  = ({...rest}) => {
  return (
  <input 
  className="border-[1px] border-gray-300 shadow-md focus:border-[#149eca] foucs:outline-none foucs-ring-1" {...rest} />
  )
}

export default Input