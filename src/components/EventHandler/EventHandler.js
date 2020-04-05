import React, { Component } from 'react';
import events from "../Events/events.json"
import MainPage from "../Events/Events.js"
import IndiEvents from "../IndiEvents/IndiEvents.js"

class EventHandler extends Component{
    state={
        ShowMainEvents: true,
        index: 0
      }
      
      eventToggleClickHandler = () =>{
        this.setState((prevState)=>{
          return {ShowMainEvents: !prevState.ShowMainEvents}; // for opening the sidebar
        });
      };
      closeToggleClickHandler= ()=>{
        this.setState({ShowMainEvents: false}); 
      }
      
      
      render(){
        let MianEvents; 
      if(this.state.ShowMainEvents){
        MianEvents=<MainPage eventClickHandler={this.eventToggleClickHandler}/>;
      }
      else{
        MianEvents=<IndiEvents closeHandler={this.closeToggleClickHandler} ind={this.state.index}/>
      }
      
      return (
        <div className="app">
  
         
         {MianEvents}
        
        </div>
      );
      }
    }
    
    export default EventHandler;
