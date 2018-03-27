import React from 'react';


class Tile extends React.Component{
    constructor (){
        super();
        this.state ={
            data:0
        }
    }
    onChange(){

    }
    render(){
        return(
            <input type = "number" max={9} min={1} value={}/>
        )
    }
}