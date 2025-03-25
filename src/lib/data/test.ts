import { type TestMuseo } from '@/types.d'

export const data: TestMuseo[] = [
  {
    id: 'tezozomoc',
    name: 'Museo Tezozómoc',
    address: 'Av. Zempoaltecas s/n esq. Av. Manuel Salazar, Col. Ex Hacienda El Rosario, CP 02420, Azcapotzalco, Ciudad de México',
    zone: 'Norte',
    theme: 'Historia',
    days: ['Martes', 'Miercoles', 'Jueves', 'Viernes', 'Sabado', 'Domingo'],
    schedule: [
      'Martes a viernes: 9:00 - 17:00',
      'Sábado y domingo: 10:00 - 15:30'
    ],
    price: {
      regular: 30,
      promo: {
        price: 20,
        description: 'Estudiantes y maestros con credencial vigente, adultos mayores con credencial vigente, INAPAM, niños menores de 12 años y personas con discapacidad'
      }
    }
  },
  {
    id: 'azcapotzalco',
    name: 'Museo de Azcapotzalco',
    address: 'Hacienda del Rosario s/n, Col. Prados del Rosario, CP 02420, Azcapotzalco, Ciudad de México',
    zone: 'Norte',
    theme: 'Historia',
    days: ['Martes', 'Miercoles', 'Jueves', 'Viernes', 'Sabado', 'Domingo'],
    schedule: [
      'Martes a domingo: 10:00 - 17:00'
    ],
    price: {
      regular: 0
    }
  },
  {
    id: 'retratoHablado',
    name: 'Museo del Retrato Hablado',
    address: 'Av. Universidad 1330, Col. Del Carmen, CP 04100, Coyoacán, Ciudad de México',
    zone: 'Sur',
    theme: 'Arte',
    days: ['Lunes', 'Martes', 'Miercoles', 'Jueves', 'Viernes'],
    schedule: [
      'Lunes a viernes: 16:00 - 19:00'
    ],
    price: {
      regular: 0
    }
  },
  {
    id: 'leonTrotsky',
    name: 'Instituto del Derecho de Asilo Museo Casa de León Trotsky',
    address: 'Av. Río Churubusco 410, Col. Del Carmen Coyoacán, CP 04100, Coyoacán, Ciudad de México',
    zone: 'Sur',
    theme: 'Historia',
    days: ['Martes', 'Miercoles', 'Jueves', 'Viernes', 'Sabado', 'Domingo'],
    schedule: [
      'Martes a domingo: 10:00 - 17:00'
    ],
    price: {
      regular: 70,
      promo: {
        price: 50,
        description: 'Estudiantes, maestros, personas de la tercera edad'
      }
    }
  },
  {
    id: 'anahuacalli',
    name: 'Museo Anahuacalli',
    address: 'Museo 150, Col. San Pablo Tepetlapa, CP 04620, Coyoacán, Ciudad de México',
    zone: 'Sur',
    theme: 'Cultura',
    days: ['Martes', 'Miercoles', 'Jueves', 'Viernes', 'Sabado', 'Domingo'],
    schedule: [
      'Martes a domingo: 11:00 - 18:00'
    ],
    price: {
      regular: 100,
      promo: {
        price: 35,
        description: 'Estudiantes, maestros'
      }
    }
  }
]
