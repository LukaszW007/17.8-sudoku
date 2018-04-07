import React from 'react';
import style from './Tile.css';

class Tile extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            initValue: props.valueOfTile,
            // tilesNewValue: '',
            isItNumber: props.isNumber,
            enabling: true,
            disabling: false
        };
    }

/*    whatIsValue(){
        if(!this.state.tilesNewValue){
            console.log('wartosc z board');
            return this.state.initValue
        }else{
            console.log('nowa wartosc po zmianie');
            return this.state.tilesNewValue;
        }

    }*/
    onChange(event) {
        const inputValue = event.target.value;
        console.log('nowa wartosc kafelka z Tile.js '+inputValue);
        this.setState({tilesNewValue: inputValue}, function () {
            this.props.changedValue(inputValue);
            this.setState({isItNumber: false})
        });
        console.log('a nowa wartosc state.tilesNewValue z Tile.js '+this.state.tilesNewValue);
    }

    checkColor(value) {
        if (value === false) {
            return style.tile
        } else {
            return style.tileRed;
        }
    }

    render() {
        return (
            <input
                className={this.checkColor(this.state.isItNumber)}
                maxLength={1}
                type={'number'}
                max={9}
                min={1}
                // value={this.whatIsValue()}
                value={this.state.initValue}
                onChange={event => this.onChange(event)}
            />
        );
    }
}

export default Tile;
