import { CreateProductDto, UpdateProductDto } from "../dtos/product_dto";
import { Product } from "../models/product_model";
import { ProductService } from "../models/product_service_model";
import axios, { Axios } from "axios";

export class ProductHttpService implements ProductService{
  private url = 'https://api.escuelajs.co/api/v1/products';

  async create(dto: CreateProductDto) {
    const {data} = await axios.post(`${this.url}`,dto)
    return data;
  }
  async update(id: Product['id'], changes: UpdateProductDto){
    const {data} = await axios.put(`${this.url}/${id}`,changes)
    return data;
  }

  async findOne(id: Product['id']) {
    const {data} = await axios.get(`${this.url}/${id}`)
    return data;
  }
  async getAll() {
    const {data} = await axios.get<Product[]>('');
  return data;
  }

}
