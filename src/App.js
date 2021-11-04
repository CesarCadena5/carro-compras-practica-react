import {Component} from 'react';
import Title from './components/Title';
import Layout from './components/Layout';
import Navbar from './components/Navbar';
import Productos from './components/Productos';

class App extends Component {
  state = {
    productos: [
      {nombre: 'Bicicleta MTB', precio: 2500000, img: '/productos/cicla.jpg'},
      {nombre: 'Guayos Nike', precio: 250000, img: '/productos/guayos.jpg'},
      {nombre: 'Motocicleta Duke', precio: 12000000, img: '/productos/moto.png'},
    ],
    carro: [],
    esCarroVisible: false
  }

  mostrarCarro = () => {
    if(!this.state.carro.length) return;
    
    this.setState({ esCarroVisible: !this.state.esCarroVisible })
  };

  agregarAlCarro = (producto) => {
    const { carro } = this.state;

    if(carro.find(c => c.nombre === producto.nombre)) {
      const newCarro = carro.map(x => x.nombre === producto.nombre 
        ? ({
          ...x,
          cantidad: x.cantidad + 1
        })
        : x);

        return this.setState({ carro: newCarro });
    }

    return this.setState({
      carro: this.state.carro.concat({
        ...producto,
        cantidad: 1
      })
    });
  };

  render() {
    const { esCarroVisible } = this.state;
    return(
      <div>
        <Navbar 
          carro={this.state.carro} 
          esCarroVisible={esCarroVisible} 
          mostrarCarro={this.mostrarCarro}/>
        <Layout>
          <Title/>
          <Productos
            agregarAlCarro={this.agregarAlCarro}
            productos={this.state.productos}
          />
          </Layout>
      </div>
    )
  }
}

export default App;
