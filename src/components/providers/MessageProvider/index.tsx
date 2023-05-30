import React, {createContext, ReactElement} from 'react';
import {message} from 'antd';
import {MessageInstance} from 'antd/es/message/interface';

export const MessageContext = createContext<MessageInstance | null>(null);

interface PropTypes {
    children: ReactElement;
}

export const MessageProvider = ({children}: PropTypes) => {
    const [messageApi, messageContext] = message.useMessage();

    return (
        <MessageContext.Provider value={messageApi}>
            {children}

            {messageContext}
        </MessageContext.Provider>
    );
};
