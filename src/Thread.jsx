import React, { useState } from 'react';
import Message from './Message';

function Thread({ messages }) {
    const [isExpanded, setExpanded] = useState(false);
    const [score, setScore] = useState('');
    const hasMultipleMessages = messages.length > 1;

    const toggleExpand = () => {
      if (hasMultipleMessages){
        setExpanded(true);
      }
    }

    return (
        <div
         className={`thread ${isExpanded ? 'expanded' : 'collapsed'}`}
         onClick={toggleExpand}
         style={{cursor: hasMultipleMessages ? 'pointer' : 'default'}}
        >
            {isExpanded || !hasMultipleMessages ? 
                messages.map((message, index) => (
                    <Message key={message.id} data={message} index={index} setScore={setScore} />
                )) : 
                <Message key={messages[0].id} data={messages[0]} index={0} messagesCount={messages.length} setScore={setScore} />
            }
            {!isExpanded && hasMultipleMessages && (
                <div 
                className="thread__tag" 
                style={{
                  backgroundColor: score === 'high' ? 'var(--message-count-high)' : 'var(--message-count-low)'
                }}
              >
                {messages.length} messages
              </div>
            )}
        </div>
    );
}

export default Thread;