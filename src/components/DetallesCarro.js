import { Component } from 'react';

const styles = {
    detallesCarro: {
        backgroundColor: '#fff',
        position: 'absolute',
        marginTop: 10,
        boxShadow: '1px 5px 5px rgb(0,0,0, 0.3)',
        borderRadius: '5px',
        width: '300px',
        right: 50
    },
    ul: {
        margin: 0,
        padding: 0
    },
    producto: {
        listStyleType: 'none',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: '5px 10px',
        borderBottom: 'solid 1px #aaa'
    }
}

export default class DetallesCarro extends Component {
    render() {
        console.log(this.props.carro);
        const { carro } = this.props;
        return(
            <div style={styles.detallesCarro}>
                <ul style={styles.ul}>
                    {carro.map((el,i) => 
                    <li key={i} style={styles.producto}> 
                        <img src={el.img} alt={el.nombre} width='40' height='32'/>
                        {el.nombre} <span> {el.cantidad} </span>
                    </li>)}
                </ul>
            </div>
        );
    }
}
