import React from 'react';
import style from './Tile.css';

class Tile extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            tilesNewValue: props.valueOfTile,
        };
    }
    onChange(event) {
        const inputValue = event.target.value;

        this.setState({ tilesNewValue: inputValue }, function() {
            this.props.changedValue(this.state.inputValue);

        });
    }
    checkColor(value){
        console.log('wartosc kafelka to '+value);
        if (value==='.'){
            return style.tile
        }else return style.tileRed
    }
    render() {
        return (
            <input
                className={this.checkColor(this.state.tilesNewValue)}
                maxLength={1}
                type={'number'}
                max={9}
                min={1}
                value={this.state.tilesNewValue}
                onChange={event => this.onChange(event)}
            />
        );
    }
}

export default Tile;
