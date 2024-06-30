import React from 'react'

const header = ({setChoice}) => {

  return (
    <div style={{width :"100%",position:"fixed",zIndex:"9",top:"0"}}>
      <nav className="navbar bg-body-tertiary  ">
        <div className="container-fluid">
          <span className="navbar-brand mb-0 h1 " style={{justifyContent:'center'}}>Compiler</span>
          <div className="dropdown ml-4">
            <button className="btn btn-secondary dropdown-toggle " type="button" data-bs-toggle="dropdown" aria-expanded="false">
             Languages
            </button>
            <ul className="dropdown-menu">
              <li><a className="dropdown-item" href="/" onClick={(e)=>{e.preventDefault() 
                setChoice('javascript')}}>JavaScript</a></li>
              <li><a className="dropdown-item" href="/"  onClick={(e)=>{e.preventDefault()
                setChoice('python')}}>python</a></li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  )
}

export default header
