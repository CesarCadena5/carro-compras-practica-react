import { Component } from "react";

const styles = {
    button: {
        backgroundColor: '#0A283E',
        color: '#fff',
        border: 'none',
        cursor: 'pointer',
        borderRadius: '5px',
        padding: '15px 20px'
    }
};

export default class Button extends Component {
    render() {
        return(
            <button {...this.props} style={styles.button}>Agregar al Carro</button>
        );
    }
}