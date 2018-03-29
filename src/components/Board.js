import React from 'react';
import Tile from './Tile.js';

class Board extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            tileValue: '',
            tileNewValue: '', //czy potrzebna ten stan?
        };
    }

    render() {
        const typeOfTile = (singleTile, index) => (
            <li key={index}>
                <Tile
                    valueOfTile={singleTile}
                    changedValue={newValueFromTile =>
                        this.props.onChangeValue(
                            singleTile.id,
                            newValueFromTile
                        )
                    }
                />
            </li>
        );

        return (
            <ul>
                {this.props.board.map((singleTile, index) =>
                    typeOfTile(singleTile, index)
                )}
            </ul>
        );
    }
}

export default Board;
