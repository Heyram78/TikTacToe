import React from "react";

class GridItem extends React.Component{
    constructor(props){
        super(props);
    }
    render(){
        return(
            <>         
                 <div className="grid-item" onClick={()=>{
                     this.props.updategame(this.props.rowIndex ,this.props.colIndex);
                 }}>
                 {this.props.gamestate[this.props.rowIndex][this.props.colIndex]}
                 </div>
                 
            </>
        )
    }
}
export default GridItem;