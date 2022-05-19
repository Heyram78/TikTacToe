import React from "react";
import "./App.css";
import GridRow from "./components/GridRow";

class App extends React.Component{
  constructor(){
    super();
    this.state={
     gamestate: [
                 ["","",""],
                 ["","",""],
                 ["","",""]
                ],
                 turn:"x"
               };
  }
  updategame=(row , col )=>{
    const arr = this.state.gamestate;
    arr[row][col]=this.state.turn;
    this.setState({
      turn:this.state.turn==="x"?"o":"x",
      gamestate:arr
    })
  }
  render(){
    return(<>
    <div className="container">
       
       {[0,1,2].map((row)=>{
         return <GridRow 
                  index={row}
                  gamestate={this.state.gamestate}
                  updategame={this.updategame}
                />
       })}
    </div>
    </>)
  }
}

export default App;