import React from "react";
import Menu from "../Interfaces/Menu";
import bg from "../../assets/images/wallpaper.jpeg"

export default class Home extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            links:['/coverflow','/music','/games','/settings'],
            menuItems: ["Cover Flow","Music","Games","Settings"],
            active:0,
        }
    }   
    
    // componentDidUpdate(){
    //     console.log(this.state);

    // }
    componentDidMount(){
        const center = document.getElementById("center");
        center.addEventListener("click",()=>{
            this.props.navigate(this.state.links[this.state.active]);
        })
    }
    shouldComponentUpdate(props,state){
        
        if(this.props.value > props.value && state.active > 0){
            this.setState({active:state.active-1});
        }else if(this.props.value < props.value && state.active < this.state.menuItems.length-1){
            this.setState({active:state.active+1});
        }
        

        return true;
    
        
    }
    
    render(){
        return (
            <div className="lock-display">
                <img src={bg} alt="bg" className="bg-image"></img>
                <Menu active={this.state.active} menuItems={this.state.menuItems} heading="iPod.js"/>
            </div>
        );
    }
}