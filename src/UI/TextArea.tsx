import { FC, TextareaHTMLAttributes } from "react"

interface IProps extends TextareaHTMLAttributes<HTMLTextAreaElement>{}

const TextArea : FC <IProps> = ({...rest}) => {
  return (
  <textarea className="border-[1px] border-gray-300 shadow-md foucs:border-[#149eca] foucs:outline-none foucs-ring-1" 
  rows={6}
  
  {...rest}
  />
  )
}

export default TextArea