import { ProductMemoryService } from "./services/product_memory_service";

const productService = new ProductMemoryService();

productService.create({
title: 'Product 1',
price : 100,
description: 'First product created with classes',
categoryId: 1,
images:[],
});

const products = productService.getAll()
console.log(products);
const productId = products[0].id;

productService.update(productId,{
  description: 'new description of product',
});

const rta = productService.findOne(productId);
console.log(rta);
