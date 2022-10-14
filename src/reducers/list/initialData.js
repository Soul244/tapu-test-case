import createMockData from 'createMockData'

let initialProducts = JSON.parse(localStorage.getItem('products'))
let initialBasket = JSON.parse(localStorage.getItem('basket')) || []

if (!initialProducts) {
  initialProducts = createMockData(32)
  localStorage.setItem('products', JSON.stringify(initialProducts))
}

const initialData = {
  products: initialProducts,
  basket: initialBasket,
}

export default initialData
