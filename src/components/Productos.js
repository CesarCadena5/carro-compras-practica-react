import { Component } from "react";
import Producto from "./Producto";

const styles = {
    productos: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between'
    }
}

export default class Productos extends Component {
    render() {
        const {productos, agregarAlCarro} = this.props;
        return(
            <div style={styles.productos}>
                {productos.map((prod, i) => 
                    <Producto
                        agregarAlCarro={agregarAlCarro}
                        key={i}
                        producto={prod}
                    />
                )}
            </div>
        )
    }
}