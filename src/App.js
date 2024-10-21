import Clock from './components/clock';
import './App.css';
import { useEffect, useState } from 'react';

function App() {
  const[time, setTime] = useState(new Date());

  useEffect (()=> {
    setInterval(()=>setTime(new Date()),1000)
  },[])

  return (
    <div className="App">
      <p className='p'>{time.toLocaleTimeString()}</p>
      <Clock/>
    </div>
  );
}

export default App;
