import React, { useState } from 'react'
import PostRequestContext from './CreatePostContext'
const PostRequest = (props) => {

const [data,setData] = useState('')
  const compile = async (language,script) => {
    console.log(JSON.stringify({language,script}))
    const response = await fetch(`http://localhost:3000/api/execute/`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({language, script}),
    });
    
    const json = await response.json()
   setData(json)

  }
  return (
    <div>
      <PostRequestContext.Provider value={{compile,data}}>
        {props.children}
      </PostRequestContext.Provider>
    </div>
  ) 
}

export default PostRequest
