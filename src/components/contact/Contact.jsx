import { useState } from "react"
import "./Contact.scss"

export default function Contact() {
  const [message,setMessage]=useState(false);
  const handleSubmit = (e)=>{

    setMessage(true);//!message
    e.preventDefault()
  }
  return (
    <div className='contact' id="contact">
      <div className="left">
      <img src="assets/message.png" alt=""/>
      </div>
      <div className="right">
      <h2>Contact.</h2>
      <form onSubmit={handleSubmit}>
        <input type="text" placeholder="email"></input>
        <textarea placeholder="Message"></textarea>
        <button type="submit">Bas</button>
        {message && <span>Thanks, Dude</span>}
      </form>
      </div>
    </div>
  )
}
