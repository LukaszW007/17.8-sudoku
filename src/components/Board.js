import React from 'react';
import Tile from './Tile.js';
import style from './Board.css';

class Board extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isNumber: false
        };
    }
    isItNumber(value){
        console.log('BOARD: wartosc kafelka to '+value);
        if (value==='.'){
            this.setState({isNumber:false})
        }else this.setState({isNumber:true})
    }

    render() {
        const typeOfTile = (singleTile, index) => (
            <li key={index} className={style.boardTile}>
                <Tile
                    colorOfInitialTile={this.isItNumber(singleTile)}
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
