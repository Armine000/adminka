
import "../orders/orders.css"
const ChatUser= ({ user, handleRecipientSelect }:any) => {

    return (
        <div>
            {user.map((use:any) => {
                return (
                    <p
                        className="userName"
                        key={use.id}
                        onClick={() => handleRecipientSelect(use.name)}
                    >
                        {use.name}
                    </p>
                );
            })}
        </div>
    );
};

export default ChatUser;