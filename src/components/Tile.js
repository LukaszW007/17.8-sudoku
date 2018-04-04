import React from 'react';
import style from './Tile.css';

class Tile extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            tilesNewValue: props.valueOfTile,
            isItNumber: props.isNumber
        };
    }
    onChange(event) {
        const inputValue = event.target.value;

        this.setState({ tilesNewValue: inputValue }, function() {
            this.props.changedValue(this.state.inputValue);
            this.setState({isItNumber:false})
        });
    }
    checkColor(value){
        console.log('wartosc kafelka to '+value);
        if (value===false){
            // this.setState({isItNumber:false});
            return style.tile
        }else {
            // this.setState({isItNumber:true});
            return style.tileRed;
        }
        // console.log('czy jest liczba: '+this.state.isItNumber);
    }
    render() {
        return (
            <input
                className={this.checkColor(this.state.isItNumber)}
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
