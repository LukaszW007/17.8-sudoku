import React from 'react';
import Board from '../components/Board.js';
import Tile from '../components/Tile.js';
import './App.css';
import sudoku from 'sudoku-umd';

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            initialBoard:
                '4.51..9787184.96.56.9875...174253869856917...3926.45179.134.756267591....43768192',
            board: [],
        };
    }

    componentWillMount() {
        this.stringToArray();
    }

    stringToArray() {
        this.setState({board: this.state.initialBoard.split('')});
        console.log('initialBoard to: '+typeof this.state.initialBoard);
        console.log('board to: '+typeof this.state.board);
    }

    editTileValue(id, value) {
        console.log('id: ' + id + ' wartosc: ' + value);
        const newBoard = this.state.board.splice(id, 1, value);
        // console.log('newboard 0 element '+newBoard[1]);
        // console.log('newboard 1 element '+newBoard[0]);
        // const arr = Object.keys(newBoard).map(function (key) { return newBoard[key]; });
        // console.log('arr rodzaj: ' + typeof newBoard[0]);
        this.setState({board: newBoard});
        console.log('to jest nowa tablica ' + this.state.board + ' a to rodzaj: ' + typeof this.state.board);
        this.componentWillMount();
    }

    checkGame() {
    }

    newGame() {
        this.setState({initialBoard: sudoku.generate})
    }

    restartGame() {
        this.setState({board: this.state.initialBoard});
    }

    render() {
        console.log('app.js', this.state.board);
        return (
            <div className="App">
                <h1>Sudoku</h1>
                <Board board={this.state.board} onChangeValue={(id, value) => {
                    this.editTileValue(id, value)
                }}/>
                <div className="buttons">
                    <button>Check</button>
                    <button onClick={this.newGame}>New Game</button>
                    <button>Solve</button>
                    <button onClick={this.state.restartGame}>Restart</button>
                </div>
            </div>
        );
    }
}

export default App;
