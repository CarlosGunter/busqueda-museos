/** Props de Museo */
export interface Museo {
  name: string
  address: string
  url: string
}

/** Props del Test */
export interface TestMuseo {
  /** Identificador único del museo */
  id: string
  /** Nombre del museo */
  name: string
  /** Dirección del museo */
  address: string
  /** Zona del museo */
  zone: string
  /** Tema del museo */
  theme: string
  /** Días de apertura del museo */
  days: string[]
  /** Horario del museo */
  schedule: string[]
  /** Precio del museo */
  price: {
    /** Precio regular del museo */
    regular: number
    /** Promociones del museo */
    promo?: {
      /** Precio promocional del museo */
      price: number
      /** Descripción de la promoción */
      description: string
    }
  }
}
