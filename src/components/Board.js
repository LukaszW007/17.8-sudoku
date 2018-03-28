import React from 'react';
import Tile from './Tile.js';

class Board extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            tileValue: '',
            tileNewValue: ''//czy potrzebna ten stan?
        }
    }

    render() {

        const tiles = this.props.board.map((singleTile) => {
                if (singleTile === '.') {
                    return('');
                } else {
                    return(singleTile)
                }

                return (
                    <li>
                        <Tile key={singleTile.id} valueOfTile={this.state.tileValue}
                              changedValue={(newValueFromTile) => this.props.onChangeValue(singleTile.id, newValueFromTile)}
                        />
                    </li>
                )
            },
            // console.log(this.state.tileValue)
        );

        return (
            <ul>
                {tiles}
            </ul>
        )
    }

}

export default Board;