import { useState, useEffect } from 'react';
import Thread from './components/Thread';
import './styles.scss';

function App() {
  const [threads, setThreads] = useState([]);

  useEffect(() => {
    fetch('http://localhost:5000/threads')
    .then((res) => res.json())
    .then((data) => setThreads(data));
  }, []);

  return (
    <div className="container">
      {threads.map((thread, index) => (
        <Thread key={index} messages={thread} />
      ))}
    </div>
  );
}

export default App;

