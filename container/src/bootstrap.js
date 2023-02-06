import { mount as productMount } from 'products/ProductsIndex';
import { mount as cartMount } from 'cart/CartIndex';

console.log('Container!!');

productMount(document.querySelector('#my-products'));
cartMount(document.querySelector('#my-cart'));