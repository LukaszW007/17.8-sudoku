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
        console.log('initialBoard to: ' + typeof this.state.initialBoard);
        console.log('board to: ' + typeof this.state.board);
    }

    editTileValue(id, value) {
        console.log('id: ' + id + ' wartosc: ' + value);
        console.log('dlugosc board przed zmiana ' + this.state.board.length);
        const newBoard = this.state.board.splice(id, 1, value);
        this.setState({board: [...this.state.board]});
        console.log('to jest nowa tablica ' + this.state.board + ' a to rodzaj: ' + typeof this.state.board);
        console.log('dlugosc board po zmianie ' + this.state.board.length);

    }

    solve() {
        if (!sudoku.solve(this.state.board)) {
            console.log('Podążasz w złym kierunku')
        } else {
            console.log('Podążasz w dobrym kierunku')
        }
    }

    checkGame() {
        if (!sudoku.solve(this.state.board)) {
            console.log('Nie da sie rozwiazac')
        } else {
            const solvedSudoku=sudoku.solve(this.state.board);
            console.log (typeof solvedSudoku+' rozwiazana tablica: '+solvedSudoku);
            this.setState({board:solvedSudoku.split('') })
        }
    }

    newGame() {
        this.setState({initialBoard: sudoku.generate("medium")}, () => this.stringToArray());
    }

    restartGame() {
        this.stringToArray();
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
                    <button onClick={() => this.checkGame()}>Check</button>
                    <button onClick={() => this.newGame()}>New Game</button>
                    <button onClick={() => this.solve()}>Solve</button>
                    <button onClick={() => this.restartGame()}>Restart</button>
                </div>
            </div>
        );
    }
}

export default App;
