import axios from 'axios'
import React, { useEffect, useState } from 'react'

export default function Chatpage() {
  const [chats,setChats] = useState([]);
  const fetchchats = ()=>{
    axios.get("http://localhost:5000/chat")
    .then((result)=>{setChats(result.data)})
    .catch((e)=>{console.log(e)})
    // console.log(data);
  }
  useEffect(()=>{



    h
    fetchchats()
  },[])
  return (
    <div>
      {/* {chats.map((chat) => (
        <div key={chat._id}>{chat.name}</div>
      ))}         */}
      

    </div>
  );
}
