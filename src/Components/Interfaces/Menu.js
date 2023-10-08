import React from "react";
import "../../css/menu.css";
export default class Menu extends React.Component {
  render() {
    const {menuItems , heading ,active} = this.props;
    return (
        <div className="menu-container">
            <div className="heading">
                <h2>{heading}</h2>
            </div>
           <div className="menu">
        <ul>
          {menuItems.map((item,index) => (
            <li key={index} className={index === active ? "active":""}>
              <p>{item}</p>
            </li>
          ))}
        </ul>
      </div>
      </div>
    ); 

  }
}