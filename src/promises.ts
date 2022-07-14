import axios from 'axios';

(async() =>{
    function delay (time: number){
        const promise = new Promise<string>((resolve) =>{
            setTimeout(() =>{
                resolve("string");
            },time);
        });
        return promise;
    }

  function getProducts(){
    const promise = axios.get('https://api.escuelajs.co/api/v1/products');
    return promise;
  }

    console.log ('---'.repeat(10));
    const value = await delay(3000);
    console.log(value);

    console.log ('---'.repeat(10));

    const products = await getProducts();
    console.log(products.data);
})();
