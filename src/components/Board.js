import React from 'react';
import Tile from './Tile.js';
import style from './Board.css';

class Board extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            tileValue: ''
        };
    }

    render() {
        const typeOfTile = (singleTile, index) => (
            <li key={index} className={style.boardTile}>
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
            <ul className={style.boardList}>
                {this.props.board.map((singleTile, index) =>
                    typeOfTile(singleTile, index)
                )}
            </ul>
        );
    }
}

export default Board;
