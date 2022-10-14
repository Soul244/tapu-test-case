import { faker } from '@faker-js/faker'

faker.setLocale('tr')

const createMockData = (itemCount) => {
  const mockData = []
  for (let index = 0; index < itemCount; index++) {
    mockData.push({
      id: mockData.length + 1,
      img: faker.image.image(224, 322, true),
      title: faker.commerce.product().slice(0, 25),
      description: faker.lorem.words(35),
      star: Math.floor(Math.random() * 5),
      distance: Math.floor(Math.random() * 25),
      price: parseInt(faker.commerce.price(500, 1500, 2), 10),
    })
  }
  return mockData
}

export default createMockData
