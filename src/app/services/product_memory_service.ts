import {faker} from '@faker-js/faker';

import { Product } from '../models/product_model';
import { CreateProductDto, UpdateProductDto } from '../dtos/product_dto';


export class ProductMemoryService{
private products: Product[] = []; //para almacenar los datos en memoria necesitamos un objeto privado

  create  (data: CreateProductDto): Product {
    const newProduct = {
      ...data,
      id: faker.datatype.number(),
      category: {
        id: data.categoryId,
        name: faker.commerce.department(),
        image: faker.image.imageUrl(),
      }
    }
    return this.add(newProduct)
  }

  add (product : Product){
    this.products.push(product);
    return product;

  }

  update (id: Product['id'], changes: UpdateProductDto ): Product{
  const index = this.products.findIndex(item => item.id === id);
  const prevData = this.products[index];
  this.products[index] = {
    ...prevData,
    ...changes
  }
  return this.products[index];
  }

  findOne (id: Product['id']){
    return this.products.find(item => item.id === id);
  }

  getAll(){
    return this.products;
  }
}

export const products: Product[] = [];
