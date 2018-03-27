import React from 'react';
import './App.css';


class App extends React.Component {
    constructor (props){
        super(props);

    }
  render() {
    return (
        <div className="App">
            <h1>Sudoku</h1>
            <Board />
            <Tile type={}/>
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
