import { useContext } from 'react'
import Message from '../../public/message-square-lines-svgrepo-com.svg'
import { ChatContext } from '../context/Context';
import Image from 'next/image';

export default function ChatUs() {
    const chatContext = useContext(ChatContext)
    const message = () => {
        chatContext.toggleChat()
    }

    return (
        <div onClick={message} className="fixed hover:cursor-pointer w-16 h-16 z-10 flex justify-center items-center right-2 bottom-20 bg-green-100 p-2 rounded-full ">
            <Image width={40} height={40} src={Message} alt="" />
        </div>
    )
}