import axios from 'axios';
import {Product} from './models/product_model'
import {Category} from './models/category_model'

(async() =>{
    function delay (time: number){
        const promise = new Promise<string>((resolve) =>{
            setTimeout(() =>{
                resolve("string");
            },time);
        });
        return promise;
    }

    async function getProducts(){
    const {data} = await axios.get<Product[]>('https://api.escuelajs.co/api/v1/products');
    return data;
  }

    console.log ('---'.repeat(10));
    const value = await delay(3000);
    console.log(value);

    console.log ('---'.repeat(10));

    const products = await getProducts();
    console.log(products.map(item => `${item.id} - ${item.title}`));
})();
