import React from 'react'

const Output = ({result}) => {
 
  return (
    
    <textarea style={{resize:'none',height:'100%',width:'100%',backgroundColor:'black',color:'white'}} id="expandableTextarea"  className="comment" disabled placeholder='Output' value={result}></textarea>

  )
}

export default Output
