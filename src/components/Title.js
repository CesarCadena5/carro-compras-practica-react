import { Component } from 'react';

const styles = {
    titulo: {
        marginBottom: '30px',
    }
}

export default class Title extends Component {
    render() {
        return(
            <h1 style={styles.titulo}>Tienda</h1>
        );
    }
}
