import React, { useEffect, useState } from 'react';

function Message({ data, index, messagesCount, setScore }) {
   const { score, subject, question, text, team, created_at } = data;
    const [boxShadow, setBoxShadow] = useState('');

    useEffect(() => {

      if (score >= 6 ){
        setScore('high');
      } else {
        setScore('low');
      }

      if (messagesCount > 1 && index === 0) { 
        const shadows = [];
        const color = '#f2f2f2';
        const baseColor = 'var(--background)';
    
        for (let i = 1; i < messagesCount; i++) {
          const offset = i * 10;
          shadows.push(`${12 * i}px ${offset}px 0 -3px ${baseColor}, ${12 * i}px ${offset}px ${color}`);
        }
    
        setBoxShadow(shadows.join(", "));
      }
    }, [score, setScore, messagesCount, index]);


    function formatDateString(dateString) {
      const date = new Date(dateString);
      const day = date.getDate();
      const month = date.toLocaleDateString('en-us', { month: 'short' });
      
      const suffix = (day % 10 === 1 && day !== 11) ? 'st' :
                     (day % 10 === 2 && day !== 12) ? 'nd' :
                     (day % 10 === 3 && day !== 13) ? 'rd' : 'th';
      
      return `${month} ${day}${suffix}`;
    }

  return (
    <div className="message" style={{boxShadow}}>
        <div className="message__content">
            <h4 className="message__subject">{subject}</h4>
            <p className="message__question">{question}</p>
            <p className="message__text">{text}</p>
        </div>
        <div className="message__team-container">
            <p className="message__team">{team}</p>
            <p className="message__date">{formatDateString(created_at)}</p>
        </div>
    </div>
);
}

export default Message;
