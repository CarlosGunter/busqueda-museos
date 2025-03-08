export interface Museo {
  name: string
  address: string
  url: string
}

export interface TestMuseo {
  id: string
  name: string
  address: string
  zone: string
  type: string
  days: string[]
  schedule: Array<string>
  price: {
    regular: number
    promo?: {
      price: number
      description: string
    }
  }
}