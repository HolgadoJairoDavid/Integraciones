import './App.css';
import io from 'socket.io-client'
import {useState,useEffect} from 'react'

const socket =  io('http://localhost:4001')

function App() {
  
  const [message, setMessage] = useState('')
  const [messages, setMessages] = useState([ ])

  const handleSubmit = (e) => {
    e.preventDefault()
    socket.emit('message',message)
    const newMessage = {
      from: 'Me',
      body: message
    }
    setMessages([newMessage, ...messages])
    setMessage('')
  }

  useEffect(() => {

    const receiveMessage = (message) => {
      setMessages([message,...messages])
    }

    socket.on('message', receiveMessage)

    return () => {
      socket.off('message', receiveMessage)
    }

  },[messages])

  return (
    <div className="App">
      <form onSubmit={handleSubmit}>
        <input type="text" value={message} onChange={e => setMessage(e.target.value)}/> 
        <button>Send</button>
      </form>
      {
        messages.map((m,i) => {
          return (
            <div key={i}>
              <p>{m.from}: {m.body}</p>
            </div>
          )
        })
      }
    </div>
  );
}

export default App;
