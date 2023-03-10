import React from 'react'
import { Link } from "react-router-dom";


const Navbar = () => {

  function MouseOver(event){
    event.target.style.background='rgba(0,0,0,0.7)'
  }
  function MouseOut(event){
    event.target.style.background='none'
    
  }

  const navstyle = {
    lineHeight: '20px',
    marginTop: '10px',
    color: '#fff',
    padding: '12px 30px',
    textDecoration: 'none',
    fontSize: '14px',
    fontWeight: 'bold',
    textTransform: 'uppercase',
    display:"flex"
  }

  return (
    <div>
      <nav className="navbar fixed-top navbar-expand-sm" style={{ top: '0', left: '0', width: '100%', height: '100px', padding: '10px 90px', background: 'rgba(0,0,0,1)', borderBottom: '1px solid #fff', boxSizing: 'border-box', display:'flex'}}>
        <div className="container-fluid">
          <span className="navbar-brand" style={{ padding: '22px 20px', height: '80px', float: 'left', fontSize: '24px', fontWeight: 'bold', textTransform: 'uppercase', color: '#fff' }}>Newsify</span>
        </div>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>

  <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav mr-auto me-auto mb-2 mb-lg-0" style={{ float: 'right', margin: '0', padding: '0', listStyle: 'none' }}>
          <li className="nav-item" >
            <Link className="nav-link" to="/general" style={navstyle} onMouseOver={MouseOver} onMouseOut={MouseOut} >Home</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/business" style={navstyle} onMouseOver={MouseOver} onMouseOut={MouseOut}>Business</Link>
          </li>
          <li className="nav-item" >
            <Link className="nav-link" to="/entertainment" style={navstyle} onMouseOver={MouseOver} onMouseOut={MouseOut}>Entertainment</Link>
          </li>
          <li className="nav-item" >
            <Link className="nav-link" to="/sports" style={navstyle} onMouseOver={MouseOver} onMouseOut={MouseOut}>Sports</Link>
          </li>
          <li className="nav-item" >
            <Link className="nav-link" to="/health" style={navstyle} onMouseOver={MouseOver} onMouseOut={MouseOut}>Health</Link>
          </li>
          <li className="nav-item" >
            <Link className="nav-link" to="/science" style={navstyle} onMouseOver={MouseOver} onMouseOut={MouseOut}>Science</Link>
          </li>
          <li className="nav-item" >
            <Link className="nav-link" to="/technology" style={navstyle} onMouseOver={MouseOver} onMouseOut={MouseOut}>Technology</Link>
          </li>
        </ul>
        </div>
      </nav>
    </div>
  )
}

export default Navbar;


//For class-based component

/*export default class Navbar extends Component {
render() {
Content here
}
}*/

