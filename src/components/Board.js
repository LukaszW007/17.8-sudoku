import React from 'react';
import Tile from './Tile.js';

class Board extends React.Component {
    constructor () {
        super(props);
        this.state = {
            tileValue:''
        }
    }

    render () {

        const tiles = this.props.board.map{(SingleTile) =>
            if(singleTile==='.'){
            this.setState.tileValue('');
            }else{
                this.setState.tileValue(singleTile)
            }
                <li>
                    <Tile valueOfTile = {this.state.tileValue}/>
                </li>
        };

        return(
            <ul>
                {tiles}
            </ul>
        )
    }

}
export default Board;