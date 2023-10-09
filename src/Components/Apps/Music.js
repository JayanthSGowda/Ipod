import React from "react";
import Menu from "../Interfaces/Menu";
import bg from "../../assets/images/wallpaper.jpeg"

export default class Music extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            menuItems: ["All Songs","Artists","Albums"],
            active:0,
        }
    }   
    componentDidMount(){
        const center = document.getElementById("center");
        center.addEventListener("click",()=>{
            this.props.navigate("/music/player");
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
            <div>
                <img src={bg} alt="bg" className="bg-image"></img>
                <Menu menuItems={this.state.menuItems} active = {this.state.active} heading="Music"/>
            </div>
        );
    }
}