import React from 'react';
import Board from '../components/Board.js';
import Tile from '../components/Tile.js'
import './App.css';


class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            initialBoard: '4.51..9787184.96.56.9875...174253869856917...3926.45179.134.756267591….43768192',
            board: []
        }
    }

    stringToArray() {
        this.setState({board: this.state.initialBoard.split()});
        // console.log(this.state.board);
    }

    editTileValue(id, value) {
        const newBoard = this.board.splice(id, 1, value);
        this.setState({board:newBoard})
    }

    checkGame() {

    }

    newGame() {

    }

    render() {
        this.stringToArray();
        return (
            <div className="App">
                <h1>Sudoku</h1>
                <Board board={this.state.board}/>
                <Tile onChangeValue={(id, value) => this.editTileValue(id, value)}/>
                <div className="buttons">
                    <button>Check</button>
                    <button>New Game</button>
                    <button>Solve</button>
                    <button>Restart</button>
                </div>
            </div>
        );
    }
}

export default App;
