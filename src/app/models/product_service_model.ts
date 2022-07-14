import { CreateProductDto,UpdateProductDto } from "../dtos/product_dto";
import {Product} from './product_model';

export interface ProductService{
  create  (data: CreateProductDto): Product| Promise<Product>;
  update (id: Product['id'], changes: UpdateProductDto ): Product | Promise<Product>;
  findOne (id: Product['id']): Product| undefined| Promise<Product|undefined>;
  getAll(): Product[] | Promise<Product[]>;
}
