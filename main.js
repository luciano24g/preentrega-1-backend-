const ProductManager = require('./productManager');
const { loadProductsFromFile, saveProductsToFile } = require('./fileHandler');
const filePath = 'productos.json'; // Cambia 'productos.json' por el nombre del archivo que quieras usar

const manager = new ProductManager(filePath);
manager.products = loadProductsFromFile(filePath);

// Ejemplo de uso
manager.addProduct({
  title: 'Producto de ejemplo',
  description: 'Descripción de ejemplo',
  price: 19.99,
  thumbnail: 'ejemplo.jpg',
  code: 'EJ123',
  stock: 10,
});

console.log('Todos los productos:', manager.getProducts());

// Más código para manipular productos si es necesario

process.on('exit', () => {
  saveProductsToFile(filePath, manager.products);
});
