import React from 'react';
import style from './Tile.css';

class Tile extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            tilesNewValue: props.valueOfTile,
            isItNumber: props.isNumber,
            enabling: true,
            disabling: false
        };
    }

    onChange(event) {
        const inputValue = event.target.value;

        this.setState({tilesNewValue: inputValue}, function () {
            this.props.changedValue(inputValue);
            this.setState({isItNumber: false})
        });
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
                value={this.state.tilesNewValue}
                onChange={event => this.onChange(event)}
            />
        );
    }
}

export default Tile;
