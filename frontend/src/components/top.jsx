import PostRequestContext from '../context/postman/CreatePostContext';
import React, { useContext } from 'react'

const Top = ({value,setrunCount,language,runCount}) => {
  const context = useContext(PostRequestContext)
  const { compile } = context
  const compileCode = ()=>{
    compile(language,value)
    setrunCount(runCount = runCount +1)
  }
  return (
    <div style={{width :"100%",marginTop:'3rem'}}>
      <nav className="navbar bg-body-tertiary  ">
        <div className="container-fluid">
          <span className="navbar-brand  mb-0 h1 " style={{justifyContent:'center'}}>{language==="nodejs"?'Javascript':'Python'} HelloWorld!</span>
          <div className="mx-2" >
            <button className="btn btn-secondary  " type="button" onClick={compileCode} >Run<i className="bi bi-play-fill"></i><img alt = "" src='./images/play-fill.svg'></img></button>
          </div>
        </div>
      </nav>
    </div>
  )
}

export default Top
