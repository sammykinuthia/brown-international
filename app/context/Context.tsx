// import { createContext, useState } from "react";

// export const ChatContext = createContext(false)


// export default function Context({ children }:any) {
//     const [openModal, setOpenModal] = useState (false );
//     function toggleChat(){
//         setOpenModal(openModal => !openModal)
//     }
//     const props = { openModal, toggleChat };

//     return (
//         <ChatContext.Provider value={props}>
//             {children}
//         </ChatContext.Provider>
//     )
// }

import { createContext, useState, ReactNode } from "react";

type ContextProps = {
  openModal: boolean;
  toggleChat: () => void;
};

export const ChatContext = createContext<ContextProps>({
  openModal: false,
  toggleChat: () => {},
});

type ContextPropsWithChildren = {
  children: ReactNode;
};

export default function Context({ children }: ContextPropsWithChildren) {
  const [openModal, setOpenModal] = useState(false);

  function toggleChat() {
    setOpenModal((prevOpenModal) => !prevOpenModal);
  }

  const props: ContextProps = { openModal, toggleChat };

  return (
    <ChatContext.Provider value={props}>
      {children}
    </ChatContext.Provider>
  );
}
