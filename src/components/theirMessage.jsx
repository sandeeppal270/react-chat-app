const TheirMessage = ({lastMessage, message}) => {
    const isFirstMessageByUser = !lastMessage || lastMessage.sender.username !== message.sender.username;
    return (
        <div className="message-row">
            {isFirstMessageByUser && (
                <div 
                  className="message-avatar"
                  style = {{ backgroundImage: message.sender && 'url' }}
                
                /> 
            )}
        </div>
    )
}

export default TheirMessage;