const Producto = ({producto, carrito, agregarProducto, productos}) => {
    const { nombre, precio, id} = producto

    const seleccionarProducto = id => {
        const producto = productos.filter(producto => (producto.id === id))[0]
        agregarProducto([
        ...carrito,
        producto] );
    } 

    const eliminarProducto = id => {
        const productos = carrito.filter(producto => producto.id !== id)
        agregarProducto(productos)
    }


	return (
        <div>
            <h2>{nombre}</h2>
            <h3>${precio}</h3>
            {productos
            ?
            <button
              type="button"
              onClick={() => seleccionarProducto(id)}
              >
                  Comprar
              </button>
              :
            <button
              type="button"
              onClick={() => eliminarProducto(id)}
              >
                  Eliminar
              </button>
            }
        </div>
	)
}

export default Producto
