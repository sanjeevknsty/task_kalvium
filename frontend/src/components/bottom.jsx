import React from 'react'

const Bottom = ({bottomData}) => {
  return (
    <div style={{width :"100%"}}>
      <nav className="navbar bg-body-tertiary  ">
        <div className="container-fluid d-flex justify-content-evenly">
          <span className="navbar-brand mb-0 h1 " >StatusCode : {bottomData.status_code}</span>
          <span className="navbar-brand mb-0 h1 " >Memory : {bottomData.memory }</span>
          <span className="navbar-brand mb-0 h1 " > CpuTime : {bottomData.cpu_time}</span>
          <span className="navbar-brand mb-0 h1 " > ExecuteTime : {bottomData.execute_time}</span>
          <span className="navbar-brand mb-0 h1 " > Error : {bottomData.error}</span>
          
        </div>
      </nav>
    </div>
  )
}

export default Bottom
