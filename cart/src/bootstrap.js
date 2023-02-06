import faker from 'faker';

const mount = el => {
  const number = faker.random.number(); 
  el.innerHTML = `<div>You have ${number} item in the cart.</div>`;
}

if(process.env.NODE_ENV === 'development') {
  const el = document.querySelector('#dev-cart');
  if(el) {
    mount(el)
  }
}

export { mount }
  