class ProductManager {
    constructor() {
      this.products = [];
      this.productIdCounter = 1;
    }
  
    addProduct(productData) {
      if (
        !productData.title ||
        !productData.description ||
        !productData.price ||
        !productData.thumbnail ||
        !productData.code ||
        !productData.stock
      ) {
        console.error('Todos los campos son obligatorios.');
        return;
      }
  
      const codeExists = this.products.some(product => product.code === productData.code);
      if (codeExists) {
        console.error('El código del producto ya existe.');
        return;
      }
  
   
      const newProduct = {
        id: this.productIdCounter++,
        title: productData.title,
        description: productData.description,
        price: productData.price,
        thumbnail: productData.thumbnail,
        code: productData.code,
        stock: productData.stock,
      };
  
      this.products.push(newProduct);
      console.log('Producto agregado:', newProduct);
    }
  
    getProducts() {
      return this.products;
    }
  
    getProductById(productId) {
      const product = this.products.find(product => product.id === productId);
      if (product) {
        return product;
      } else {
        console.error('Producto no encontrado');
      }
    }
  }
  

  const manager = new ProductManager();
  
  manager.addProduct({
    title: 'Producto 1',
    description: 'Descripción del producto 1',
    price: 10.99,
    thumbnail: 'imagen1.jpg',
    code: 'ABC123',
    stock: 100,
  });
  
  manager.addProduct({
    title: 'Producto 2',
    description: 'Descripción del producto 2',
    price: 15.99,
    thumbnail: 'imagen2.jpg',
    code: 'XYZ456',
    stock: 50,
  });
  
  console.log('Todos los productos:', manager.getProducts());
  
  const productById = manager.getProductById(2); // Cambiar el número al id deseado
  if (productById) {
    console.log('Producto encontrado:', productById);
  }
  