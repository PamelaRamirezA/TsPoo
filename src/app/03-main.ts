import { ProductHttpService } from "./services/product_http_service";

(async ()=>{
  const productService = new ProductHttpService();

  try{
    console.log('---'.repeat(10));
    console.log('GetAll');
    const products = await productService.getAll();
    console.log('quantity of products',products.length);
    console.log(products.map(item => item.price));

    const prodId = products[0].id;
    console.log('---'.repeat(10));
    console.log('Update');

    await productService.update(prodId, {
      price: 10000,
      title: 'new title',
      description: 'new description',
    })
    console.log('---'.repeat(10));
    console.log('FindOne');
    const productMod = await productService.findOne(prodId);
    console.log(productMod);
  } catch (error) {
    console.error(error);
  }

  
})();
