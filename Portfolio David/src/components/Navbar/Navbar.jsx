import { Component } from 'react'
import './Navbar.css'
import logo from '../../assets/code.png'


class Navbar extends Component {
  state = {clicked: false};
  handleCLick = () => {
    this.setState({clicked: !this.state.clicked})
  }
  render() {
    return (
      <>
        <div className='navbar'>
          <div className='left'>
            <img src={logo} alt="" className='logo'/>
            <p className='title'>David</p>
          </div>
          
          <ul id='items' className={this.state.clicked?'#items active':'#items'}>
            <li><a href="" className='active'>Home</a></li>
            <li><a href="">Skills</a></li>
            <li><a href="">Education</a></li>
            <li><a href="">Proyects</a></li>
            <li><a href="">Contact</a></li>
          </ul>
          <div id='mobile' onClick={this.handleCLick}>
            <i id='bar' className={this.state.clicked ? 'fas fa-times' : 'fas fa-bars'}></i>
          </div>
        </div>
      </>
      
    )
  }
  
}

export default Navbar