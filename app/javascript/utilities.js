export const lineItemConstructor = (product) => ({ ...product, count: 1 })

export const getTotalPrice = (items) => items.reduce((res, cur) => res += cur.count * cur.price, 0)

export const getProducts = () => {
  return ([
    {
      id: 1,
      image_url: '1.jpg',
      name: 'Bansai',
      price: 12.0,
      inCart: false
    },
    {
      id: 2,
      image_url: '2.png',
      name: 'Hello wolrd',
      price: 4.0,
      inCart: false
    },
    {
      id: 3,
      image_url: '3.jpg',
      name: 'Spaceship',
      price: 10.0,
      inCart: false
    }
  ])
}
