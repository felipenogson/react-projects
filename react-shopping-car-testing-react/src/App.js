import { Fragment, useState } from 'react';
import Header from './components/Header'
import Footer from './components/Footer'
import Producto from './components/Producto'
import Carrito from './components/Carrito'

const fecha = new Date().getFullYear();
function App() {
  const [ productos, guardarProductos] = useState([
    {id: 1, nombre: 'Camiseta ReactJS', precio: 50 },
    {id: 2, nombre: 'Camiseta Angular', precio: 40 },
    {id: 3, nombre: 'Camiseta Vue', precio: 30 },
    {id: 4, nombre: 'Camiseta Node.js', precio: 20 },
    {id: 5, nombre: 'Camiseta Javascript', precio: 10 },
  ])

  // state para el carrito de compras
  const [carrito, agregarProducto] = useState([])
  return (
    <Fragment>
      <Header 
        titulo='Tienda Virtual' />

       <h1> Lista de productos</h1>
       { productos.map( producto => ( 
         <Producto 
           key={producto.id}
           productos={productos}
           producto={producto} 
           carrito = {carrito}
           agregarProducto = {agregarProducto} />
       ))}

       <Carrito 
         carrito={carrito}
         agregarProducto = {agregarProducto} />

      <Footer 
        fecha={fecha}/>
    </Fragment>
  );
}


export default App;
