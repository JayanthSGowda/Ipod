import { Component } from 'react'
export default class MenuList extends Component {
  render() {
    return (
      <div style={{
        width: '125px',
        height: '100%',
      }}>
        <div style={{
            height:'20%',
        }}>
           <h1>iPod.js</h1> 
        </div>
        <div style={{
            display: 'flex-row',
            padding: '8px',
            height:'80%',
        }}>
           <div style={{
            backgroundColor:'blue'
           }}><h3> CoverFlow</h3></div>
            <h3>Music</h3> 
            <h3>Games</h3> 
            <h3>Settings</h3>   
        </div>

         
      </div>
    );
  }
}