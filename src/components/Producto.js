import { Component } from 'react';
import Button from './Button';

const styles = {
    producto: {
        border: 'solid 1px #eee',
        boxShadow: '0 5px 5px rgb(0,0,0, 0.1)',
        width: '30%',
        height: '30%',
        padding: '10px 15px',
        borderRadius: '5px'
    },
    img: {
        height: '300px'
    }
}

export default class Producto extends Component {
    render() {
        const { producto, agregarAlCarro } = this.props;
        return(
            <div style={styles.producto}>
                <img style={styles.img} alt={producto.nombre} src={producto.img}/>
                <h3>{producto.nombre}</h3>
                <h3>{producto.precio}</h3>
                <Button onClick={() => agregarAlCarro(producto) } />
            </div>
        );
    }
}