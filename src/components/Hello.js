import React, {Component} from 'react';

// function syntax to create a component

// function Hello(props) {
//     return (
//         <h1> Hello {props.name}! </h1>
//     )
// }


// ES6 class based component

// needs the {Component} import
class Hello extends React.Component {
    render() {
        return (
            <h1> {this.props.name} </h1>
        )
    }
}

export default Hello;