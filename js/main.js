//Tienda de informatica
//Tenemos una lista de productos, con la que vamos a:
//- Mostrar la lista de productos

//tipo de componente, marca, modelo, cantidad, precio
//El producto 1 es una placa base de g... modelo .... Hay x en stock y su precio es 120
const productos = [
    { tipo: "Placa base", marca: "gygabite", modelo:"GY49869", cantidad: 10, precio:120 },
    { tipo: "Placa base", marca: "nvidia", modelo:"N68569", cantidad: 15, precio:100 },
    { tipo: "memoria", marca: "asus", modelo:"RD-2", cantidad: 20, precio:30 },
    { tipo: "memoria", marca: "hp", modelo:"R-20", cantidad: 10, precio:40 },
    { tipo: "disco duro", marca: "Sea", modelo:"F987h", cantidad: 30, precio:50 },
    { tipo: "disco duro", marca: "hp", modelo:"P983", cantidad: 15, precio:60 },
    { tipo: "monitor", marca: "lenovo", modelo:"1234", cantidad: 20, precio:120 },
]

//for(let i = 0; i<productos.length; i++)
//productos[i].tipo
productos.forEach((producto, i) => {
    console.log(`El producto ${i+1} es un/a ${producto.tipo} de ${producto.marca} modelo ${producto.modelo}. Hay ${producto.cantidad} en stock y cuesta ${producto.precio}€`)
})