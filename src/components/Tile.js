import React from 'react';

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
            this.props.changedValue(this.state.inputValue); //czy mozna zrobic callbacka bez uzycia metody setState(tilesNewValue) i uzycia stanu tilesNewValue?
        });
    }
    render() {
        return (
            <input
                type='number'
                max=9
                min=1
                value={this.state.tilesNewValue}
                onChange={event => this.onChange(event)}
            />
        );
    }
}

export default Tile;
