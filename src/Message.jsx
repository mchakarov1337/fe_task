import React, { useEffect, useState } from 'react';

function Message({ data, index, messagesCount }) {
    const [boxShadow, setBoxShadow] = useState('');

    function formatDateString(dateString) {
      const date = new Date(dateString);
      const day = date.getDate();
      const month = date.toLocaleDateString('en-us', { month: 'short' });
      
      const suffix = (day % 10 === 1 && day !== 11) ? 'st' :
                     (day % 10 === 2 && day !== 12) ? 'nd' :
                     (day % 10 === 3 && day !== 13) ? 'rd' : 'th';
      
      return `${month} ${day}${suffix}`;
    }

    useEffect(() => {
      if (messagesCount !== undefined && messagesCount > 1 && index === 0) {
          const shadows = [];

          for (let i = 1; i < messagesCount; i++) {
              let colorIndex = i - 1;
              let color = ['#f2f2f2', '#f2f2f2', '#f2f2f2', '#f2f2f2'][colorIndex % 4];
              let horizontalOffset = 12 * i;
              let verticalOffset = 10 * i;
              shadows.push(`${horizontalOffset}px ${verticalOffset}px 0 -3px var(--background), ${horizontalOffset}px ${verticalOffset}px ${color}`);
          }
          setBoxShadow(shadows.join(", "));
      }
  }, [messagesCount, index]);

    return (
        <div
         className="message"
         style={{boxShadow}}
        >
            <h4 className="message__subject">{data.subject}</h4>
            <p className="message__question">{data.question}</p>
            <p className="message__text">{data.text}</p>
            <div className="message__team-container">
              <p className="message__team">{data.team}</p>
              <p className="message__date">{formatDateString(data.created_at)}</p>
            </div>
        </div>
    );
}

export default Message;
