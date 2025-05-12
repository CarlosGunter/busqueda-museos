import type { Museum } from '@/types'

export const data: Museum[] = [
  {
    id: 'tezozomoc',
    name: 'Museo Tezozómoc',
    address: 'Av. Zempoaltecas s/n esq. Av. Manuel Salazar, Col. Ex Hacienda El Rosario, CP 02420, Azcapotzalco, Ciudad de México',
    zone: 'Azcapotzalco',
    theme: [
      'Tecnologia'
    ],
    days: [
      'Martes',
      'Miercoles',
      'Jueves',
      'Viernes',
      'Sabado',
      'Domingo'
    ],
    schedule: [
      'Martes a viernes: 10:00 - 14:00',
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
    zone: 'Azcapotzalco',
    theme: [
      'Historia'
    ],
    days: [
      'Martes',
      'Miercoles',
      'Jueves',
      'Viernes',
      'Sabado',
      'Domingo'
    ],
    schedule: [
      'Martes a domingo: 10:00 - 17:00'
    ],
    price: {
      regular: 0
    }
  },
  {
    id: 'mormonismo',
    name: 'Museo de Historia del Mormonismo en México',
    address: 'Av. 510 núm. 79, Col. San Juan de Aragón, 1a. sección, CP 07950, Gustavo A. Madero, Ciudad de México',
    zone: 'Gustavo A. Madero',
    theme: [
      'Religión',
      'Historia'
    ],
    days: [
      'Martes',
      'Miércoles',
      'Jueves',
      'Viernes',
      'Sábado'
    ],
    schedule: [
      'Martes a sábado: 10:00 - 16:00'
    ],
    price: {
      regular: 0,
      promo: {
        price: 0,
        description: 'Entrada libre para todo el público'
      }
    }
  },
  {
    id: 'planetarioErro',
    name: 'Planetario Luis Enrique Erro',
    address: 'Av. Wilfrido Massieu s/n, Unidad Profesional Adolfo López Mateos, Zacatenco, CP 07738, Gustavo A. Madero, Ciudad de México',
    zone: 'Gustavo A. Madero',
    theme: [
      'Astronomía',
      'Ciencia'
    ],
    days: [
      'Martes',
      'Miércoles',
      'Jueves',
      'Viernes',
      'Sábado',
      'Domingo'
    ],
    schedule: [
      'Martes a viernes: 10:00 - 18:00',
      'Sábado y domingo: 10:00 - 17:00'
    ],
    price: {
      regular: 65,
      promo: {
        price: 45,
        description: 'Estudiantes, docentes y adultos mayores con credencial vigente'
      }
    }
  },
  {
    id: 'ceraVilla',
    name: 'Museo de Figuras de Cera de la Villa',
    address: 'Calzada de los Misterios 880, Col. Tepeyac Insurgentes, CP 07020, Gustavo A. Madero, Ciudad de México',
    zone: 'Gustavo A. Madero',
    theme: [
      'Cultura Popular'
    ],
    days: [
      'Lunes',
      'Martes',
      'Miércoles',
      'Jueves',
      'Viernes',
      'Sábado',
      'Domingo'
    ],
    schedule: [
      'Lunes a domingo: 09:30 - 19:00'
    ],
    price: {
      regular: 20,
      promo: {
        price: 10,
        description: 'Niños menores de 6 años y adultos mayores'
      }
    }
  },
  {
    id: 'geologiaPaleontologia',
    name: 'Museo de Geología y Paleontología',
    address: 'Av. Ticomán 600, Col. San José Ticomán, CP 07340, Gustavo A. Madero, Ciudad de México',
    zone: 'Gustavo A. Madero',
    theme: [
      'Geología',
      'Paleontología'
    ],
    days: [
      'Lunes',
      'Martes',
      'Miércoles',
      'Jueves',
      'Viernes'
    ],
    schedule: [
      'Lunes a viernes: 09:00 - 16:00'
    ],
    price: {
      regular: 0,
      promo: {
        price: 0,
        description: 'Entrada libre para todo el público'
      }
    }
  },
  {
    id: 'basilicaGuadalupe',
    name: 'Museo de la Basílica de Guadalupe',
    address: 'Plaza de las Américas 1, Col. Villa de Guadalupe, CP 07050, Gustavo A. Madero, Ciudad de México',
    zone: 'Gustavo A. Madero',
    theme: [
      'Arte Sacro',
      'Historia Religiosa'
    ],
    days: [
      'Martes',
      'Miércoles',
      'Jueves',
      'Viernes',
      'Sábado',
      'Domingo'
    ],
    schedule: [
      'Martes a domingo: 10:00 - 17:00'
    ],
    price: {
      regular: 10,
      promo: {
        price: 5,
        description: 'Estudiantes con credencial vigente y adultos mayores con credencial INAPAM'
      }
    }
  },
  {
    id: 'ferrocarrileros',
    name: 'Museo de los Ferrocarrileros',
    address: 'Alberto Herrera s/n, esquina Hidalgo y Aquiles Serdán, Col. Aragón La Villa, CP 07000, Gustavo A. Madero, Ciudad de México',
    zone: 'Gustavo A. Madero',
    theme: [
      'Historia del Ferrocarril'
    ],
    days: [
      'Martes',
      'Miércoles',
      'Jueves',
      'Viernes',
      'Sábado',
      'Domingo'
    ],
    schedule: [
      'Martes a domingo: 10:00 - 17:00'
    ],
    price: {
      regular: 0,
      promo: {
        price: 0,
        description: 'Entrada libre para todo el público'
      }
    }
  },
  {
    id: 'museoArteAzucar',
    name: 'Museo de Arte en Azúcar México',
    address: 'Av. Cuauhtémoc 950, Col. Narvarte, CP 03020, Benito Juárez, Ciudad de México',
    zone: 'Benito Juárez',
    theme: [
      'Arte',
      'Gastronomía'
    ],
    days: [
      'Lunes',
      'Martes',
      'Miércoles',
      'Jueves',
      'Viernes',
      'Sábado',
      'Domingo'
    ],
    schedule: [
      'Solo con cita previa'
    ],
    price: {
      regular: 50,
      promo: {
        price: 0,
        description: 'Cuota voluntaria en algunos eventos especiales'
      }
    }
  },
  {
    id: 'museoMetro',
    name: 'Museo del Metro',
    address: 'Av. Revolución esquina Extremadura, Col. Insurgentes Mixcoac, CP 03920, Benito Juárez, Ciudad de México',
    zone: 'Benito Juárez',
    theme: [
      'Transporte',
      'Historia Urbana'
    ],
    days: [
      'Martes',
      'Miércoles',
      'Jueves',
      'Viernes',
      'Sábado',
      'Domingo'
    ],
    schedule: [
      'Martes a viernes: 10:00 - 18:00',
      'Sábado y domingo: 11:00 - 14:00'
    ],
    price: {
      regular: 0,
      promo: {
        price: 0,
        description: 'Entrada libre para todo el público'
      }
    }
  },
  {
    id: 'planetarioGallo',
    name: 'Planetario Joaquín Gallo',
    address: 'Av. División del Norte s/n esquina Miguel Laurent, Parque Francisco Villa (Parque de los Venados), Col. Santa Cruz Atoyac, CP 03310, Benito Juárez, Ciudad de México',
    zone: 'Benito Juárez',
    theme: [
      'Astronomía',
      'Ciencia'
    ],
    days: [
      'Sábado',
      'Domingo'
    ],
    schedule: [
      'Sábado: 13:00 - 16:00',
      'Domingo: 12:00 - 15:30'
    ],
    price: {
      regular: 0,
      promo: {
        price: 0,
        description: 'Entrada libre para todo el público'
      }
    }
  },
  {
    id: 'polyforumSiqueiros',
    name: 'Museo Polyforum Siqueiros',
    address: 'Insurgentes Sur 701, Col. Nápoles, CP 03810, Benito Juárez, Ciudad de México',
    zone: 'Benito Juárez',
    theme: [
      'Arte Contemporáneo'
    ],
    days: [
      'Cerrado por remodelación'
    ],
    schedule: [
      'Cerrado por remodelación'
    ],
    price: {
      regular: 15,
      promo: {
        price: 10,
        description: 'Estudiantes, maestros e INAPAM con credencial vigente'
      }
    }
  },
  {
    id: 'museoEstelar',
    name: 'Museo Estelar',
    address: 'Santa Margarita 519, Col. Insurgentes San Borja, CP 03100, Benito Juárez, Ciudad de México',
    zone: 'Benito Juárez',
    theme: [
      'Cultura Pop',
      'Ciencia Ficción'
    ],
    days: [
      'Miércoles',
      'Jueves',
      'Viernes',
      'Sábado',
      'Domingo'
    ],
    schedule: [
      'Miércoles a sábado: 10:00 - 18:00',
      'Domingo: 12:00 - 17:00'
    ],
    price: {
      regular: 0,
      promo: {
        price: 0,
        description: 'Entrada gratuita con registro previo'
      }
    }
  },
  {
    id: 'casaBenitaGaleana',
    name: 'Casa Museo Benita Galeana',
    address: 'Cerrada de Zutano 11, Col. Periodista, CP 03620, Benito Juárez, Ciudad de México',
    zone: 'Benito Juárez',
    theme: [
      'Historia Social',
      'Feminismo'
    ],
    days: [
      'Lunes',
      'Martes',
      'Miércoles',
      'Jueves',
      'Viernes'
    ],
    schedule: [
      'Lunes a viernes: 09:00 - 15:00'
    ],
    price: {
      regular: 0,
      promo: {
        price: 0,
        description: 'Entrada libre para todo el público'
      }
    }
  },
  {
    id: 'museoMixcoac',
    name: 'Museo de Sitio de la Zona Arqueológica de Mixcoac',
    address: 'Pirámide 7, Col. San Pedro de los Pinos, CP 03800, Benito Juárez, Ciudad de México',
    zone: 'Benito Juárez',
    theme: [
      'Arqueología',
      'Historia Prehispánica'
    ],
    days: [
      'Martes',
      'Miércoles',
      'Jueves',
      'Viernes',
      'Sábado',
      'Domingo'
    ],
    schedule: [
      'Martes a domingo: 09:00 - 17:00'
    ],
    price: {
      regular: 0,
      promo: {
        price: 0,
        description: 'Entrada libre para todo el público'
      }
    }
  },
  {
    id: 'fundacionGarcia',
    name: 'Fundación María y Héctor García',
    address: 'Cumbres de Maltrata 581, Col. 2da del Periodista, CP 03620, Benito Juárez, Ciudad de México',
    zone: 'Benito Juárez',
    theme: [
      'Fotografía',
      'Memoria Histórica'
    ],
    days: [
      'Lunes',
      'Martes',
      'Miércoles',
      'Jueves',
      'Viernes'
    ],
    schedule: [
      'Lunes a viernes: 10:30 - 15:30'
    ],
    price: {
      regular: 0,
      promo: {
        price: 0,
        description: 'Entrada libre para todo el público'
      }
    }
  },
  {
    id: 'museoRadioMetro',
    name: 'Museo de la Radio del STC Metro',
    address: 'Estación Parque de los Venados, Línea 12, Col. Santa Cruz Atoyac, CP 03310, Benito Juárez, Ciudad de México',
    zone: 'Benito Juárez',
    theme: [
      'Medios de Comunicación'
    ],
    days: [
      'Lunes',
      'Martes',
      'Miércoles',
      'Jueves',
      'Viernes',
      'Sábado',
      'Domingo'
    ],
    schedule: [
      'Lunes a viernes: 05:00 - 24:00',
      'Sábado: 06:00 - 24:00',
      'Domingo: 07:00 - 24:00'
    ],
    price: {
      regular: 0,
      promo: {
        price: 0,
        description: 'Entrada libre para todo el público'
      }
    }
  },
  {
    id: 'museoAnahuacalli',
    name: 'Museo Anahuacalli',
    address: 'Museo 150, San Pablo Tepetlapa, CP 04620, Coyoacán, Ciudad de México',
    zone: 'Coyoacán',
    theme: [
      'Arte Prehispánico'
    ],
    days: [
      'Martes',
      'Miércoles',
      'Jueves',
      'Viernes',
      'Sábado',
      'Domingo'
    ],
    schedule: [
      'Martes a domingo: 11:00 - 17:30'
    ],
    price: {
      regular: 100,
      promo: {
        price: 50,
        description: 'Estudiantes, profesores, personas con discapacidad y adultos mayores con credencial'
      }
    }
  },
  {
    id: 'museoAnatomopatologiaVeterinaria',
    name: 'Museo de Anatomopatología Veterinaria Manuel H. Sarvide',
    address: 'Facultad de Medicina Veterinaria y Zootecnia, UNAM, Ciudad Universitaria, Coyoacán, Ciudad de México',
    zone: 'Coyoacán',
    theme: [
      'Ciencia Veterinaria'
    ],
    days: [
      'Lunes',
      'Martes',
      'Miércoles',
      'Jueves',
      'Viernes'
    ],
    schedule: [
      'Lunes a viernes: 09:00 - 16:00'
    ],
    price: {
      regular: 0,
      promo: {
        price: 0,
        description: 'Entrada libre con cita previa'
      }
    }
  },
  {
    id: 'museoRetratoHablado',
    name: 'Museo del Retrato Hablado (Cerrado por remodelación)',
    address: 'Calle Zarco 14, Col. Guerrero, CP 06300, Cuauhtémoc, Ciudad de México',
    zone: 'Cuauhtémoc',
    theme: [
      'Criminología'
    ],
    days: [

    ],
    schedule: [
      'Cerrado por remodelación'
    ],
    price: {
      regular: 0,
      promo: {
        price: 0,
        description: 'Actualmente cerrado por remodelación'
      }
    }
  },
  {
    id: 'muca',
    name: 'Museo Universitario de Ciencias y Artes (MUCA)',
    address: 'Insurgentes Sur 3000, Circuito Centro Cultural, Coyoacán, Ciudad de México',
    zone: 'Coyoacán',
    theme: [
      'Arte Contemporáneo'
    ],
    days: [
      'Martes',
      'Miércoles',
      'Jueves',
      'Viernes',
      'Sábado',
      'Domingo'
    ],
    schedule: [
      'Martes a domingo: 10:00 - 18:00'
    ],
    price: {
      regular: 0,
      promo: {
        price: 0,
        description: 'Entrada libre'
      }
    }
  },
  {
    id: 'muac',
    name: 'Museo Universitario de Arte Contemporáneo (MUAC)',
    address: 'Insurgentes Sur 3000, Centro Cultural Universitario, Coyoacán, Ciudad de México',
    zone: 'Coyoacán',
    theme: [
      'Arte Contemporáneo'
    ],
    days: [
      'Miércoles',
      'Jueves',
      'Viernes',
      'Sábado',
      'Domingo'
    ],
    schedule: [
      'Miércoles, viernes y domingo: 11:00 - 18:00',
      'Jueves y sábado: 11:00 - 20:00'
    ],
    price: {
      regular: 40,
      promo: {
        price: 20,
        description: 'Estudiantes, maestros y adultos mayores con credencial'
      }
    }
  },
  {
    id: 'casaIndioFernandez',
    name: 'Casa Fuerte del Indio Fernández',
    address: 'Zacatépetl 25, Col. Santa Catarina, CP 04010, Coyoacán, Ciudad de México',
    zone: 'Coyoacán',
    theme: [
      'Cine',
      'Cultura'
    ],
    days: [
      'Sábado',
      'Domingo'
    ],
    schedule: [
      'Sábado y domingo: 12:00 - 17:00'
    ],
    price: {
      regular: 200,
      promo: {
        price: 150,
        description: 'Estudiantes y adultos mayores'
      }
    }
  },
  {
    id: 'culturasPopulares',
    name: 'Museo Nacional de Culturas Populares',
    address: 'Av. Miguel Hidalgo 289, Col. Del Carmen, CP 04100, Coyoacán, Ciudad de México',
    zone: 'Coyoacán',
    theme: [
      'Culturas Populares'
    ],
    days: [
      'Martes',
      'Miércoles',
      'Jueves',
      'Viernes',
      'Sábado',
      'Domingo'
    ],
    schedule: [
      'Martes a domingo: 10:00 - 18:00'
    ],
    price: {
      regular: 20,
      promo: {
        price: 10,
        description: 'Estudiantes, profesores, adultos mayores y personas con discapacidad'
      }
    }
  },
  {
    id: 'museoAcuarela',
    name: 'Museo Nacional de la Acuarela Alfredo Guati Rojo',
    address: 'Salvador Novo 88, Barrio de Santa Catarina, CP 04010, Coyoacán, Ciudad de México',
    zone: 'Coyoacán',
    theme: [
      'Arte',
      'Acuarela'
    ],
    days: [
      'Martes',
      'Miércoles',
      'Jueves',
      'Viernes',
      'Sábado',
      'Domingo'
    ],
    schedule: [
      'Martes a domingo: 10:00 - 18:00'
    ],
    price: {
      regular: 0,
      promo: {
        price: 0,
        description: 'Entrada libre'
      }
    }
  },
  {
    id: 'intervenciones',
    name: 'Museo Nacional de las Intervenciones',
    address: '20 de Agosto s/n, Churubusco, CP 04120, Coyoacán, Ciudad de México',
    zone: 'Coyoacán',
    theme: [
      'Historia de México'
    ],
    days: [
      'Martes',
      'Miércoles',
      'Jueves',
      'Viernes',
      'Sábado',
      'Domingo'
    ],
    schedule: [
      'Martes a domingo: 09:00 - 18:00'
    ],
    price: {
      regular: 90,
      promo: {
        price: 0,
        description: 'Domingo entrada libre para nacionales'
      }
    }
  },
  {
    id: 'universum',
    name: 'Universum Museo de las Ciencias',
    address: 'Circuito Cultural de Ciudad Universitaria, Coyoacán, Ciudad de México',
    zone: 'Coyoacán',
    theme: [
      'Ciencia',
      'Tecnología'
    ],
    days: [
      'Miércoles',
      'Jueves',
      'Viernes',
      'Sábado',
      'Domingo'
    ],
    schedule: [
      'Miércoles a domingo: 10:00 - 16:00'
    ],
    price: {
      regular: 90,
      promo: {
        price: 80,
        description: 'Estudiantes y profesores con credencial'
      }
    }
  },
  {
    id: 'pabellonBiodiversidad',
    name: 'Pabellón Nacional de la Biodiversidad. Museo interactivo y espacio de investigación',
    address: 'Circuito Centro Cultural, Ciudad Universitaria, Coyoacán, Ciudad de México',
    zone: 'Coyoacán',
    theme: [
      'Ciencia',
      'Naturaleza'
    ],
    days: [
      'Martes',
      'Miércoles',
      'Jueves',
      'Viernes',
      'Sábado',
      'Domingo'
    ],
    schedule: [
      'Martes a domingo: 10:00 - 18:00'
    ],
    price: {
      regular: 0,
      promo: {
        price: 0,
        description: 'Entrada libre'
      }
    }
  },
  {
    id: 'museoEjercitoFuerzaAerea',
    name: 'Museo del Ejército y Fuerza Aérea',
    address: 'Avenida Industria Militar s/n, Col. Lomas de Sotelo, Miguel Hidalgo, Ciudad de México',
    zone: 'Miguel Hidalgo',
    theme: [
      'Historia Militar'
    ],
    days: [
      'Martes',
      'Miércoles',
      'Jueves',
      'Viernes',
      'Sábado',
      'Domingo'
    ],
    schedule: [
      'Martes a domingo: 09:00 - 16:00'
    ],
    price: {
      regular: 0,
      promo: {
        price: 0,
        description: 'Entrada libre'
      }
    }
  },
  {
    id: 'casaLeonTrotsky',
    name: 'Instituto del Derecho de Asilo Museo Casa de León Trotsky',
    address: 'Río Churubusco 410, Del Carmen, CP 04100, Coyoacán, Ciudad de México',
    zone: 'Coyoacán',
    theme: [
      'Historia',
      'Política'
    ],
    days: [
      'Martes',
      'Miércoles',
      'Jueves',
      'Viernes',
      'Sábado',
      'Domingo'
    ],
    schedule: [
      'Martes a domingo: 10:00 - 17:00'
    ],
    price: {
      regular: 50,
      promo: {
        price: 30,
        description: 'Estudiantes, maestros y adultos mayores'
      }
    }
  },
  {
    id: 'museoFridaKahlo',
    name: 'Museo Frida Kahlo',
    address: 'Londres 247, Del Carmen, CP 04100, Coyoacán, Ciudad de México',
    zone: 'Coyoacán',
    theme: [
      'Arte',
      'Vida de Frida Kahlo'
    ],
    days: [
      'Martes',
      'Miércoles',
      'Jueves',
      'Viernes',
      'Sábado',
      'Domingo'
    ],
    schedule: [
      'Martes a domingo: 10:00 - 18:00'
    ],
    price: {
      regular: 300,
      promo: {
        price: 150,
        description: 'Estudiantes, maestros y adultos mayores con credencial vigente'
      }
    }
  },
  {
    id: 'museoMiguelHidalgo',
    name: 'Museo Miguel Hidalgo',
    address: 'Av. Juárez s/n esq. Veracruz, Centro, CP 05000, Cuajimalpa de Morelos, Ciudad de México',
    zone: 'Cuajimalpa de Morelos',
    theme: [
      'Historia'
    ],
    days: [
      'Lunes',
      'Martes',
      'Miércoles',
      'Jueves',
      'Viernes',
      'Sábado',
      'Domingo'
    ],
    schedule: [
      'Lunes a viernes: 09:00 - 18:00',
      'Sábados y domingos: 09:00 - 17:00'
    ],
    price: {
      regular: 0,
      promo: {
        price: 0,
        description: 'Entrada libre'
      }
    }
  },
  {
    id: 'museoPedroInfante',
    name: 'Museo Centro Cultural Nacional Pedro Infante',
    address: 'Av. Juárez s/n esq. Veracruz, San Pedro Cuajimalpa, CP 05000, Cuajimalpa de Morelos, Ciudad de México',
    zone: 'Cuajimalpa de Morelos',
    theme: [
      'Cine',
      'Cultura Popular'
    ],
    days: [
      'Martes',
      'Miércoles',
      'Jueves',
      'Viernes',
      'Sábado',
      'Domingo'
    ],
    schedule: [
      'Martes a domingo: 10:00 - 17:00'
    ],
    price: {
      regular: 0,
      promo: {
        price: 0,
        description: 'Entrada libre'
      }
    }
  },
  {
    id: 'museoBicentenarioDesiertoLeones',
    name: 'Museo Bicentenario del Ex Convento del Desierto de los Leones',
    address: 'Carretera México-Toluca s/n, Col. La Venta, CP 05020, Cuajimalpa de Morelos, Ciudad de México',
    zone: 'Cuajimalpa de Morelos',
    theme: [
      'Historia',
      'Patrimonio'
    ],
    days: [
      'Martes',
      'Miércoles',
      'Jueves',
      'Viernes',
      'Sábado',
      'Domingo'
    ],
    schedule: [
      'Martes a domingo: 10:00 - 17:00'
    ],
    price: {
      regular: 20,
      promo: {
        price: 0,
        description: 'Entrada libre para menores de edad y adultos mayores con credencial vigente'
      }
    }
  },
  {
    id: 'museoDiablos',
    name: 'Museo Diablos: Una Historia Incomparable',
    address: 'Avenida Río Churubusco 1001, Colonia Ex-Ejidos de la Magdalena Mixhuca, CP 08010, Iztacalco, Ciudad de México',
    zone: 'Iztacalco',
    theme: [
      'Deporte',
      'Arte'
    ],
    days: [
      'Martes',
      'Miércoles',
      'Jueves',
      'Viernes',
      'Sábado',
      'Domingo'
    ],
    schedule: [
      'Martes a viernes: 11:00 - 19:20',
      'Sábado: 10:00 - 17:20',
      'Domingo: 10:00 - 16:20'
    ],
    price: {
      regular: 100,
      promo: {
        price: 50,
        description: 'Estudiantes con credencial vigente y adultos mayores con credencial INAPAM'
      }
    }
  },
  {
    id: 'museoBarcoUtopia',
    name: 'Museo Barco Utopía',
    address: 'Parque Lineal Periférico Oriente y Eje 6 Sur, Unidad Habitacional Vicente Guerrero, CP 09200, Iztapalapa, Ciudad de México',
    zone: 'Iztapalapa',
    theme: [
      'Cambio Climático',
      'Tecnología'
    ],
    days: [
      'Martes',
      'Miércoles',
      'Jueves',
      'Viernes',
      'Sábado',
      'Domingo'
    ],
    schedule: [
      'Martes a domingo: 10:00 - 18:00'
    ],
    price: {
      regular: 0,
      promo: {
        price: 0,
        description: 'Entrada libre'
      }
    }
  },
  {
    id: 'museoTransportesElectricos',
    name: 'Museo del Servicio de Transportes Eléctricos',
    address: 'Av. Municipio Libre 402, piso 3, Col. San Andrés Tetepilco, CP 09440, Iztapalapa, Ciudad de México',
    zone: 'Iztapalapa',
    theme: [
      'Transporte',
      'Tecnología'
    ],
    days: [
      'Lunes',
      'Martes',
      'Miércoles',
      'Jueves',
      'Viernes'
    ],
    schedule: [
      'Lunes a viernes: 09:00 - 16:00'
    ],
    price: {
      regular: 0,
      promo: {
        price: 0,
        description: 'Entrada libre'
      }
    }
  },
  {
    id: 'planetarioKatyaEchazarreta',
    name: 'Planetario Katya Echazarreta',
    address: 'Río Nilo esq. Av. Reforma, Col. Lomas de San Lorenzo, CP 09780, Iztapalapa, Ciudad de México',
    zone: 'Iztapalapa',
    theme: [
      'Astronomía',
      'Ciencia'
    ],
    days: [
      'Martes',
      'Miércoles',
      'Jueves',
      'Viernes',
      'Sábado',
      'Domingo'
    ],
    schedule: [
      'Martes a jueves: 12:00 - 17:00',
      'Viernes a domingo: 11:00 - 17:00'
    ],
    price: {
      regular: 0,
      promo: {
        price: 0,
        description: 'Entrada libre'
      }
    }
  },
  {
    id: 'museoSanMiguelTeotongo',
    name: 'Museo Comunitario de San Miguel Teotongo',
    address: 'Armillita s/n entre Curro Rivera y Américas, Col. San Miguel Teotongo, CP 09630, Iztapalapa, Ciudad de México',
    zone: 'Iztapalapa',
    theme: [
      'Historia',
      'Cultura Comunitaria'
    ],
    days: [
      'Martes',
      'Miércoles',
      'Jueves',
      'Viernes',
      'Sábado',
      'Domingo'
    ],
    schedule: [
      'Martes a domingo: 10:00 - 17:00'
    ],
    price: {
      regular: 0,
      promo: {
        price: 0,
        description: 'Entrada libre'
      }
    }
  },
  {
    id: 'museoOIHFRa',
    name: 'Museo-Observatorio Interactivo de Hundimiento y Fracturamiento (OIHFRA)',
    address: 'Colima s/n, Col. San Sebastián Tecoloxtitlán, CP 09520, Iztapalapa, Ciudad de México',
    zone: 'Iztapalapa',
    theme: [
      'Geología Urbana',
      'Medio Ambiente'
    ],
    days: [
      'Martes',
      'Miércoles',
      'Jueves',
      'Viernes',
      'Sábado',
      'Domingo'
    ],
    schedule: [
      'Martes a domingo: 10:00 - 18:00'
    ],
    price: {
      regular: 0,
      promo: {
        price: 0,
        description: 'Entrada gratuita'
      }
    }
  },
  {
    id: 'museoCulturasIztapalapa',
    name: 'Museo de las Culturas Pasión por Iztapalapa',
    address: 'Calz. Ermita Iztapalapa 100, Barrio San Pablo, CP 09000, Iztapalapa, Ciudad de México',
    zone: 'Iztapalapa',
    theme: [
      'Historia',
      'Tradiciones Locales'
    ],
    days: [
      'Martes',
      'Miércoles',
      'Jueves',
      'Viernes',
      'Sábado',
      'Domingo'
    ],
    schedule: [
      'Martes a domingo: 10:00 - 18:00'
    ],
    price: {
      regular: 0,
      promo: {
        price: 0,
        description: 'Entrada libre'
      }
    }
  },
  {
    id: 'museoCabezaJuarez',
    name: 'Museo Cabeza de Juárez',
    address: 'Av. Guelatao s/n, U.H. Cabeza de Juárez III, CP 09227, Iztapalapa, Ciudad de México',
    zone: 'Iztapalapa',
    theme: [
      'Historia',
      'Patrimonio'
    ],
    days: [
      'Lunes',
      'Martes',
      'Miércoles',
      'Jueves',
      'Viernes',
      'Sábado',
      'Domingo'
    ],
    schedule: [
      'Lunes a viernes: 08:00 - 15:00',
      'Sábados y domingos: 11:00 - 17:00'
    ],
    price: {
      regular: 0,
      promo: {
        price: 0,
        description: 'Entrada libre'
      }
    }
  },
  {
    id: 'museoYancuic',
    name: 'Museo Yancuic',
    address: 'Ermita Iztapalapa 2325, Col. Los Ángeles, CP 09830, Iztapalapa, Ciudad de México',
    zone: 'Iztapalapa',
    theme: [
      'Arte, Ciencia',
      'Medio Ambiente'
    ],
    days: [
      'Miércoles',
      'Jueves',
      'Viernes',
      'Sábado',
      'Domingo'
    ],
    schedule: [
      'Miércoles a domingo: 10:00 - 18:00'
    ],
    price: {
      regular: 0,
      promo: {
        price: 0,
        description: 'Entrada libre'
      }
    }
  },
  {
    id: 'conventoCulhuacan',
    name: 'Antiguo Convento de San Juan Evangelista (Centro Comunitario Culhuacán)',
    address: 'Morelos 10, Col. Culhuacán, CP 09800, Iztapalapa, Ciudad de México',
    zone: 'Iztapalapa',
    theme: [
      'Historia',
      'Patrimonio Virreinal'
    ],
    days: [
      'Martes',
      'Miércoles',
      'Jueves',
      'Viernes',
      'Sábado',
      'Domingo'
    ],
    schedule: [
      'Martes a domingo: 10:00 - 17:00'
    ],
    price: {
      regular: 0,
      promo: {
        price: 0,
        description: 'Entrada libre'
      }
    }
  },
  {
    id: 'museoFuegoNuevo',
    name: 'Museo Fuego Nuevo',
    address: 'Cerro de la Estrella, Col. Santa María Aztahuacán, CP 09860, Iztapalapa, Ciudad de México',
    zone: 'Iztapalapa',
    theme: [
      'Arqueología',
      'Cultura Prehispánica'
    ],
    days: [
      'Martes',
      'Miércoles',
      'Jueves',
      'Viernes',
      'Sábado',
      'Domingo'
    ],
    schedule: [
      'Martes a domingo: 10:00 - 17:00'
    ],
    price: {
      regular: 0,
      promo: {
        price: 0,
        description: 'Entrada libre'
      }
    }
  },
  {
    id: 'museoJumex',
    name: 'Museo Jumex',
    address: 'Miguel de Cervantes Saavedra 303, Granada, Miguel Hidalgo, 11520 Ciudad de México, CDMX',
    zone: 'Miguel Hidalgo',
    theme: [
      'Arte Contemporáneo'
    ],
    days: [
      'Martes',
      'Miércoles',
      'Jueves',
      'Viernes',
      'Sábado',
      'Domingo'
    ],
    schedule: [
      'Martes a viernes: 10:00 - 17:00',
      'Sábado y domingo: 10:00 - 19:00'
    ],
    price: {
      regular: 50,
      promo: {
        price: 0,
        description: 'Domingos entrada libre; descuentos para estudiantes, maestros e INAPAM con credencial vigente'
      }
    }
  },
  {
    id: 'museoCartografia',
    name: 'Museo Nacional de la Cartografía',
    address: 'Av. Observatorio 192, Observatorio, Miguel Hidalgo, 11860 Ciudad de México, CDMX',
    zone: 'Miguel Hidalgo',
    theme: [
      'Cartografía',
      'Historia'
    ],
    days: [
      'Lunes',
      'Martes',
      'Miércoles',
      'Jueves',
      'Viernes'
    ],
    schedule: [
      'Lunes a viernes: 10:00 - 17:00'
    ],
    price: {
      regular: 0,
      promo: {
        price: 0,
        description: 'Entrada libre para todo público'
      }
    }
  },
  {
    id: 'museoGeofisica',
    name: 'Museo de Geofísica',
    address: 'Luis G. León 119, Guadalupe Victoria, Gustavo A. Madero, 07090 Ciudad de México, CDMX',
    zone: 'Gustavo A. Madero',
    theme: [
      'Ciencias de la Tierra'
    ],
    days: [
      'Lunes',
      'Martes',
      'Miércoles',
      'Jueves',
      'Viernes'
    ],
    schedule: [
      'Lunes a viernes: 09:00 - 16:00'
    ],
    price: {
      regular: 0,
      promo: {
        price: 0,
        description: 'Entrada libre con previa cita'
      }
    }
  },
  {
    id: 'museoEjercito',
    name: 'Museo del Centenario del Ejército Mexicano',
    address: 'Av. Industria Militar, Lomas de Sotelo, Miguel Hidalgo, 11200 Ciudad de México, CDMX',
    zone: 'Miguel Hidalgo',
    theme: [
      'Historia Militar'
    ],
    days: [
      'Martes',
      'Miércoles',
      'Jueves',
      'Viernes',
      'Sábado',
      'Domingo'
    ],
    schedule: [
      'Martes a domingo: 10:00 - 17:00'
    ],
    price: {
      regular: 0,
      promo: {
        price: 0,
        description: 'Entrada libre'
      }
    }
  },
  {
    id: 'museoSitioChapultepec',
    name: 'Museo de Sitio y Centro de Visitantes del Bosque de Chapultepec',
    address: '1a. Sección del Bosque de Chapultepec, Miguel Hidalgo, 11100 Ciudad de México, CDMX',
    zone: 'Miguel Hidalgo',
    theme: [
      'Medio Ambiente',
      'Historia'
    ],
    days: [
      'Martes',
      'Miércoles',
      'Jueves',
      'Viernes',
      'Sábado',
      'Domingo'
    ],
    schedule: [
      'Martes a domingo: 10:00 - 17:00'
    ],
    price: {
      regular: 0,
      promo: {
        price: 0,
        description: 'Entrada libre'
      }
    }
  },
  {
    id: 'museoFusileros',
    name: 'Museo de la Brigada de Fusileros Paracaidistas',
    address: 'Campo Militar No. 1-A, Lomas de Sotelo, Miguel Hidalgo, 11200 Ciudad de México, CDMX',
    zone: 'Miguel Hidalgo',
    theme: [
      'Militar'
    ],
    days: [
      'Lunes',
      'Martes',
      'Miércoles',
      'Jueves',
      'Viernes'
    ],
    schedule: [
      'Lunes a viernes: 09:00 - 17:00'
    ],
    price: {
      regular: 0,
      promo: {
        price: 0,
        description: 'Entrada libre'
      }
    }
  },
  {
    id: 'museoCaballeria',
    name: 'Museo de Caballería',
    address: 'Campo Militar Marte, Polanco, Miguel Hidalgo, 11560 Ciudad de México, CDMX',
    zone: 'Miguel Hidalgo',
    theme: [
      'Historia Militar'
    ],
    days: [
      'Martes',
      'Miércoles',
      'Jueves',
      'Viernes',
      'Sábado'
    ],
    schedule: [
      'Martes a sábado: 10:00 - 16:00'
    ],
    price: {
      regular: 0,
      promo: {
        price: 0,
        description: 'Entrada libre'
      }
    }
  },
  {
    id: 'mapotecaMOB',
    name: 'Mapoteca Manuel Orozco y Berra (MOB)',
    address: 'Av. Observatorio 192, Observatorio, Miguel Hidalgo, 11860 Ciudad de México, CDMX',
    zone: 'Miguel Hidalgo',
    theme: [
      'Cartografía'
    ],
    days: [
      'Lunes',
      'Martes',
      'Miércoles',
      'Jueves',
      'Viernes'
    ],
    schedule: [
      'Lunes a viernes: 09:00 - 15:00'
    ],
    price: {
      regular: 0,
      promo: {
        price: 0,
        description: 'Entrada libre con previa cita'
      }
    }
  },
  {
    id: 'casaLuisBarragan',
    name: 'La Casa Luis Barragán',
    address: 'Gral. Francisco Ramírez 12-14, Daniel Garza, Miguel Hidalgo, 11840 Ciudad de México, CDMX',
    zone: 'Miguel Hidalgo',
    theme: [
      'Arquitectura',
      'Patrimonio'
    ],
    days: [
      'Lunes',
      'Martes',
      'Miércoles',
      'Jueves',
      'Viernes',
      'Sábado'
    ],
    schedule: [
      'Lunes a sábado: 10:00 - 17:00'
    ],
    price: {
      regular: 300,
      promo: {
        price: 150,
        description: 'Estudiantes y maestros con credencial vigente'
      }
    }
  },
  {
    id: 'museoManaBiblia',
    name: 'Maná, Museo de la Biblia',
    address: 'Av. Ejército Nacional 843-B, Granada, Miguel Hidalgo, 11520 Ciudad de México, CDMX',
    zone: 'Miguel Hidalgo',
    theme: [
      'Religión',
      'Cultura Bíblica'
    ],
    days: [
      'Martes',
      'Miércoles',
      'Jueves',
      'Viernes',
      'Sábado'
    ],
    schedule: [
      'Martes a sábado: 10:00 - 18:00'
    ],
    price: {
      regular: 50,
      promo: {
        price: 25,
        description: 'Descuento para estudiantes, maestros y personas con credencial INAPAM'
      }
    }
  },
  {
    id: 'museoSoumaya',
    name: 'Museo Soumaya, Plaza Carso',
    address: 'Blvd. Miguel de Cervantes Saavedra 303, Granada, Miguel Hidalgo, 11520 Ciudad de México, CDMX',
    zone: 'Miguel Hidalgo',
    theme: [
      'Arte',
      'Cultura'
    ],
    days: [
      'Lunes',
      'Martes',
      'Miércoles',
      'Jueves',
      'Viernes',
      'Sábado',
      'Domingo'
    ],
    schedule: [
      'Todos los días: 10:30 - 18:30'
    ],
    price: {
      regular: 0,
      promo: {
        price: 0,
        description: 'Entrada libre'
      }
    }
  },
  {
    id: 'salaArteSiqueiros',
    name: 'Sala de Arte Público Siqueiros',
    address: 'Tres Picos 29, Polanco, Miguel Hidalgo, 11510 Ciudad de México, CDMX',
    zone: 'Miguel Hidalgo',
    theme: [
      'Arte Moderno',
      'Contemporáneo'
    ],
    days: [
      'Martes',
      'Miércoles',
      'Jueves',
      'Viernes',
      'Sábado',
      'Domingo'
    ],
    schedule: [
      'Martes a domingo: 10:00 - 18:00'
    ],
    price: {
      regular: 20,
      promo: {
        price: 10,
        description: 'Descuento a estudiantes, maestros y adultos mayores con credencial vigente'
      }
    }
  },
  {
    id: 'museoCasaCardenas',
    name: 'Museo Casa Presidencial Lázaro Cárdenas',
    address: '1ª Sección del Bosque de Chapultepec, Miguel Hidalgo, 11100 Ciudad de México, CDMX',
    zone: 'Miguel Hidalgo',
    theme: [
      'Historia',
      'Política'
    ],
    days: [
      'Martes',
      'Miércoles',
      'Jueves',
      'Viernes',
      'Sábado',
      'Domingo'
    ],
    schedule: [
      'Martes a domingo: 09:00 - 17:00'
    ],
    price: {
      regular: 0,
      promo: {
        price: 0,
        description: 'Entrada libre para todo público'
      }
    }
  },
  {
    id: 'cencalliCasaMaiz',
    name: 'Cencalli: Casa del Maíz y la Cultura Alimentaria',
    address: 'Antiguo Molino del Rey, 1ª Sección del Bosque de Chapultepec, Miguel Hidalgo, 11100 Ciudad de México, CDMX',
    zone: 'Miguel Hidalgo',
    theme: [
      'Cultura Alimentaria',
      'Agroindustria'
    ],
    days: [
      'Martes',
      'Miércoles',
      'Jueves',
      'Viernes',
      'Sábado',
      'Domingo'
    ],
    schedule: [
      'Martes a domingo: 10:00 - 17:00'
    ],
    price: {
      regular: 0,
      promo: {
        price: 0,
        description: 'Entrada libre para todo público'
      }
    }
  },
  {
    id: 'museoHistoriaNatural',
    name: 'Museo de Historia Natural y Cultura Ambiental',
    address: '2ª Sección del Bosque de Chapultepec, Miguel Hidalgo, 11800 Ciudad de México, CDMX',
    zone: 'Miguel Hidalgo',
    theme: [
      'Naturaleza',
      'Medio Ambiente'
    ],
    days: [
      'Martes',
      'Miércoles',
      'Jueves',
      'Viernes',
      'Sábado',
      'Domingo'
    ],
    schedule: [
      'Martes a domingo: 10:00 - 17:00'
    ],
    price: {
      regular: 32,
      promo: {
        price: 15,
        description: 'Estudiantes, maestros, personas con discapacidad y adultos mayores con credencial vigente'
      }
    }
  },
  {
    id: 'papaloteNinoChapultepec',
    name: 'Papalote Museo del Niño Chapultepec',
    address: 'Av. Constituyentes 268, Daniel Garza, Miguel Hidalgo, 11830 Ciudad de México, CDMX',
    zone: 'Miguel Hidalgo',
    theme: [
      'Ciencia',
      'Educación Infantil'
    ],
    days: [
      'Lunes',
      'Martes',
      'Miércoles',
      'Jueves',
      'Viernes',
      'Sábado',
      'Domingo'
    ],
    schedule: [
      'Todos los días: 09:00 - 17:00'
    ],
    price: {
      regular: 199,
      promo: {
        price: 149,
        description: 'Niños, adultos mayores y personas con discapacidad'
      }
    }
  },
  {
    id: 'mamArteModerno',
    name: 'Museo de Arte Moderno (MAM)',
    address: 'Paseo de la Reforma s/n, Bosque de Chapultepec 1ª Sección, Miguel Hidalgo, 11560 Ciudad de México, CDMX',
    zone: 'Miguel Hidalgo',
    theme: [
      'Arte Moderno'
    ],
    days: [
      'Martes',
      'Miércoles',
      'Jueves',
      'Viernes',
      'Sábado',
      'Domingo'
    ],
    schedule: [
      'Martes a domingo: 10:15 - 17:30'
    ],
    price: {
      regular: 85,
      promo: {
        price: 0,
        description: 'Domingo entrada libre, descuento a estudiantes, maestros y adultos mayores con credencial vigente'
      }
    }
  },
  {
    id: 'museoTamayo',
    name: 'Museo de Arte Contemporáneo Internacional Rufino Tamayo',
    address: 'Paseo de la Reforma 51, Bosque de Chapultepec I Secc, Miguel Hidalgo, 11580 Ciudad de México, CDMX',
    zone: 'Miguel Hidalgo',
    theme: [
      'Arte Contemporáneo'
    ],
    days: [
      'Martes',
      'Miércoles',
      'Jueves',
      'Viernes',
      'Sábado',
      'Domingo'
    ],
    schedule: [
      'Martes a domingo: 10:00 - 18:00'
    ],
    price: {
      regular: 85,
      promo: {
        price: 0,
        description: 'Domingos entrada gratuita; descuento con credencial vigente (estudiantes, maestros, INAPAM)'
      }
    }
  },
  {
    id: 'anfibiumAxolote',
    name: 'Anfibium: Museo del Axolote y Centro de Conservación de Anfibios',
    address: 'Antiguo Zoológico de Chapultepec, 2ª Sección del Bosque de Chapultepec, Miguel Hidalgo, 11800 Ciudad de México, CDMX',
    zone: 'Miguel Hidalgo',
    theme: [
      'Conservación Animal'
    ],
    days: [
      'Martes',
      'Miércoles',
      'Jueves',
      'Viernes',
      'Sábado',
      'Domingo'
    ],
    schedule: [
      'Martes a domingo: 10:00 - 17:00'
    ],
    price: {
      regular: 0,
      promo: {
        price: 0,
        description: 'Entrada libre para todo público'
      }
    }
  },
  {
    id: 'museoAntropologia',
    name: 'Museo Nacional de Antropología (MNA)',
    address: 'Av. Paseo de la Reforma y Calzada Gandhi S/N, Chapultepec Polanco, Miguel Hidalgo, 11560 Ciudad de México, CDMX',
    zone: 'Miguel Hidalgo',
    theme: [
      'Antropología',
      'Historia Prehispánica'
    ],
    days: [
      'Martes',
      'Miércoles',
      'Jueves',
      'Viernes',
      'Sábado',
      'Domingo'
    ],
    schedule: [
      'Martes a domingo: 09:00 - 20:00'
    ],
    price: {
      regular: 95,
      promo: {
        price: 0,
        description: 'Entrada libre los domingos para nacionales y residentes con identificación oficial'
      }
    }
  },
  {
    id: 'archivoDiseno',
    name: 'Archivo Diseño y Arquitectura',
    address: 'General Francisco Ramírez 4, Ampliación Daniel Garza, Miguel Hidalgo, 11840 Ciudad de México, CDMX',
    zone: 'Miguel Hidalgo',
    theme: [
      'Diseño',
      'Arquitectura'
    ],
    days: [
      'Miércoles',
      'Jueves',
      'Viernes',
      'Sábado'
    ],
    schedule: [
      'Miércoles a sábado: 11:00 - 17:00'
    ],
    price: {
      regular: 50,
      promo: {
        price: 25,
        description: 'Estudiantes y maestros con credencial vigente'
      }
    }
  },
  {
    id: 'museoCaracol',
    name: 'Galería de Historia, Museo del Caracol',
    address: 'Calz. Mahatma Gandhi S/N, Bosque de Chapultepec I Secc, Miguel Hidalgo, 11560 Ciudad de México, CDMX',
    zone: 'Miguel Hidalgo',
    theme: [
      'Historia de México'
    ],
    days: [
      'Martes',
      'Miércoles',
      'Jueves',
      'Viernes',
      'Sábado',
      'Domingo'
    ],
    schedule: [
      'Martes a domingo: 09:00 - 16:15'
    ],
    price: {
      regular: 85,
      promo: {
        price: 0,
        description: 'Entrada libre los domingos; descuentos a estudiantes, maestros y adultos mayores con credencial vigente'
      }
    }
  },
  {
    id: 'museoCastilloChapultepec',
    name: 'Museo Nacional de Historia Castillo de Chapultepec',
    address: 'Bosque de Chapultepec I Secc, Miguel Hidalgo, 11100 Ciudad de México, CDMX',
    zone: 'Miguel Hidalgo',
    theme: [
      'Historia de México'
    ],
    days: [
      'Martes',
      'Miércoles',
      'Jueves',
      'Viernes',
      'Sábado',
      'Domingo'
    ],
    schedule: [
      'Martes a domingo: 09:00 - 17:00'
    ],
    price: {
      regular: 95,
      promo: {
        price: 0,
        description: 'Domingo entrada libre para nacionales y residentes; descuentos con credencial vigente'
      }
    }
  },
  {
    id: 'museoCasaBola',
    name: 'Museo Casa de la Bola',
    address: 'Parque Lira 136, Tacubaya, Miguel Hidalgo, 11870 Ciudad de México, CDMX',
    zone: 'Miguel Hidalgo',
    theme: [
      'Historia',
      'Artes Decorativas'
    ],
    days: [
      'Domingo'
    ],
    schedule: [
      'Domingo: 10:00 - 17:00'
    ],
    price: {
      regular: 60,
      promo: {
        price: 30,
        description: 'Descuento para estudiantes, maestros y adultos mayores con credencial vigente'
      }
    }
  },
  {
    id: 'museoAltepepialcalli',
    name: 'Museo Regional Altepepialcalli',
    address: 'Calle 5 de Febrero 123, Colonia Centro, 56120 Valle de Chalco, Estado de México',
    zone: 'Valle de Chalco',
    theme: [
      'Historia Prehispánica',
      'Cultura Mexicana'
    ],
    days: [
      'Martes',
      'Miércoles',
      'Jueves',
      'Viernes',
      'Sábado',
      'Domingo'
    ],
    schedule: [
      'Martes a domingo: 10:00 - 18:00'
    ],
    price: {
      regular: 20,
      promo: {
        price: 10,
        description: 'Estudiantes, maestros con credencial vigente, adultos mayores y personas con discapacidad'
      }
    }
  },
  {
    id: 'museoCasaEstudioFedericoElsa',
    name: 'Museo Casa Estudio Federico & Elsa',
    address: 'Avenida Oaxaca 84, Colonia San Pedro de los Pinos, 03800 Ciudad de México, CDMX',
    zone: 'Benito Juárez',
    theme: [
      'Arte',
      'Arquitectura'
    ],
    days: [
      'Martes',
      'Miércoles',
      'Jueves',
      'Viernes',
      'Sábado',
      'Domingo'
    ],
    schedule: [
      'Martes a domingo: 10:00 - 18:00'
    ],
    price: {
      regular: 40,
      promo: {
        price: 20,
        description: 'Estudiantes, maestros y adultos mayores con credencial vigente'
      }
    }
  },
  {
    id: 'museoHeroicoColegioMilitar',
    name: 'Museo del Heroico Colegio Militar',
    address: 'Av. Heroico Colegio Militar 1, 09620 Ciudad de México, CDMX',
    zone: 'Iztacalco',
    theme: [
      'Historia Militar'
    ],
    days: [
      'Martes',
      'Miércoles',
      'Jueves',
      'Viernes',
      'Sábado',
      'Domingo'
    ],
    schedule: [
      'Martes a domingo: 09:00 - 16:00'
    ],
    price: {
      regular: 30,
      promo: {
        price: 0,
        description: 'Entrada libre para el público en general'
      }
    }
  },
  {
    id: 'museoTiempoTlalpan',
    name: 'Museo del Tiempo Tlalpan (Cerrado temporalmente)',
    address: 'Calle de la Constitución 45, Tlalpan Centro, 14000 Ciudad de México, CDMX',
    zone: 'Tlalpan',
    theme: [
      'Historia',
      'Ciencia'
    ],
    days: [
      'Martes',
      'Miércoles',
      'Jueves',
      'Viernes',
      'Sábado',
      'Domingo'
    ],
    schedule: [
      'Martes a domingo: 10:00 - 18:00'
    ],
    price: {
      regular: 25,
      promo: {
        price: 12,
        description: 'Estudiantes, maestros y adultos mayores con credencial vigente'
      }
    }
  },
  {
    id: 'museoCuicuilco',
    name: 'Museo de Sitio de Cuicuilco',
    address: 'Av. Insurgentes Sur 4000, Ciudad de México, CDMX',
    zone: 'Tlalpan',
    theme: [
      'Arqueología Prehispánica'
    ],
    days: [
      'Martes',
      'Miércoles',
      'Jueves',
      'Viernes',
      'Sábado',
      'Domingo'
    ],
    schedule: [
      'Martes a domingo: 09:00 - 17:00'
    ],
    price: {
      regular: 35,
      promo: {
        price: 15,
        description: 'Estudiantes, maestros y adultos mayores con credencial vigente'
      }
    }
  },
  {
    id: 'museoCasaCulturaUAEMex',
    name: 'Museo de la Casa de Cultura de la UAEMéx',
    address: 'Av. José María Morelos y Pavón 2001, 50100 Toluca, Estado de México',
    zone: 'Toluca',
    theme: [
      'Cultura Regional',
      'Arte'
    ],
    days: [
      'Lunes',
      'Martes',
      'Miércoles',
      'Jueves',
      'Viernes',
      'Sábado'
    ],
    schedule: [
      'Lunes a sábado: 09:00 - 16:00'
    ],
    price: {
      regular: 0,
      promo: {
        price: 0,
        description: 'Entrada libre para todo público'
      }
    }
  },
  {
    id: 'museoRegionalCuitlahuac',
    name: 'Museo Regional Comunitario Cuitláhuac',
    address: 'Cuitláhuac 132, San Juan Ixtayopan, 13580 Ciudad de México, CDMX',
    zone: 'Tláhuac',
    theme: [
      'Historia Regional',
      'Cultura Mexicana'
    ],
    days: [
      'Martes',
      'Miércoles',
      'Jueves',
      'Viernes',
      'Sábado',
      'Domingo'
    ],
    schedule: [
      'Martes a domingo: 10:00 - 18:00'
    ],
    price: {
      regular: 25,
      promo: {
        price: 10,
        description: 'Estudiantes, maestros y adultos mayores con credencial vigente'
      }
    }
  },
  {
    id: 'museoRegionalTlahuac',
    name: 'Museo Regional Tláhuac',
    address: 'Calle 16 de Septiembre, 13400 Ciudad de México, CDMX',
    zone: 'Tláhuac',
    theme: [
      'Historia Regional',
      'Cultura'
    ],
    days: [
      'Martes',
      'Miércoles',
      'Jueves',
      'Viernes',
      'Sábado',
      'Domingo'
    ],
    schedule: [
      'Martes a domingo: 09:00 - 17:00'
    ],
    price: {
      regular: 20,
      promo: {
        price: 10,
        description: 'Estudiantes, maestros y adultos mayores con credencial vigente'
      }
    }
  },
  {
    id: 'salaExposicionesTerminal2',
    name: 'Sala de Exposiciones de la Terminal 2 del Aeropuerto Internacional de la Ciudad de México Benito Juárez',
    address: 'Terminal 2, Aeropuerto Internacional de la Ciudad de México, 15620 Ciudad de México, CDMX',
    zone: 'Venustiano Carranza',
    theme: [
      'Arte',
      'Cultura Aeroportuaria'
    ],
    days: [
      'Lunes',
      'Martes',
      'Miércoles',
      'Jueves',
      'Viernes',
      'Sábado',
      'Domingo'
    ],
    schedule: [
      'Todos los días: 07:00 - 22:00'
    ],
    price: {
      regular: 0,
      promo: {
        price: 0,
        description: 'Entrada libre para todo público'
      }
    }
  },
  {
    id: 'museoLegislativoSentimientosNacion',
    name: 'Museo Legislativo Sentimientos de la Nación',
    address: 'Paseo de la Reforma 135, 06030 Ciudad de México, CDMX',
    zone: 'Venustiano Carranza',
    theme: [
      'Historia Política de México'
    ],
    days: [
      'Martes',
      'Miércoles',
      'Jueves',
      'Viernes',
      'Sábado',
      'Domingo'
    ],
    schedule: [
      'Martes a domingo: 10:00 - 17:00'
    ],
    price: {
      regular: 0,
      promo: {
        price: 0,
        description: 'Entrada libre para todo público'
      }
    }
  },
  {
    id: 'museoDoloresOlmedo',
    name: 'Museo Dolores Olmedo (cerrado temporalmente, próxima apertura)',
    address: 'Av. México 5843, La Noria, Xochimilco, 16070 Ciudad de México, CDMX',
    zone: 'Xochimilco',
    theme: [
      'Arte Mexicano',
      'Cultura Popular'
    ],
    days: [
      'Lunes',
      'Martes',
      'Miércoles',
      'Jueves',
      'Viernes',
      'Sábado',
      'Domingo'
    ],
    schedule: [
      'Lunes a domingo: 10:00 - 17:00'
    ],
    price: {
      regular: 80,
      promo: {
        price: 40,
        description: 'Estudiantes, maestros, adultos mayores con credencial vigente'
      }
    }
  },
  {
    id: 'museoFlorDeChinampas',
    name: 'Museo Flor de Chinampas (Chinampaxochitl)',
    address: 'Xochimilco, Ciudad de México, CDMX',
    zone: 'Xochimilco',
    theme: [
      'Cultura',
      'Agricultura Chinampera'
    ],
    days: [
      'Martes',
      'Miércoles',
      'Jueves',
      'Viernes',
      'Sábado',
      'Domingo'
    ],
    schedule: [
      'Martes a domingo: 09:00 - 16:00'
    ],
    price: {
      regular: 25,
      promo: {
        price: 15,
        description: 'Estudiantes, maestros, adultos mayores con credencial vigente'
      }
    }
  },
  {
    id: 'museoArqueologicoXochimilco',
    name: 'Museo Arqueológico de Xochimilco',
    address: 'Xochimilco, 16020 Ciudad de México, CDMX',
    zone: 'Xochimilco',
    theme: [
      'Arqueología',
      'Cultura Prehispánica'
    ],
    days: [
      'Martes',
      'Miércoles',
      'Jueves',
      'Viernes',
      'Sábado',
      'Domingo'
    ],
    schedule: [
      'Martes a domingo: 10:00 - 18:00'
    ],
    price: {
      regular: 30,
      promo: {
        price: 20,
        description: 'Estudiantes, maestros, adultos mayores con credencial vigente'
      }
    }
  },
  {
    id: 'museoCielitoLindo',
    name: 'Museo Cielito Lindo',
    address: 'Xochimilco, 16000 Ciudad de México, CDMX',
    zone: 'Xochimilco',
    theme: [
      'Historia',
      'Cultura de Xochimilco'
    ],
    days: [
      'Lunes',
      'Martes',
      'Miércoles',
      'Jueves',
      'Viernes',
      'Sábado',
      'Domingo'
    ],
    schedule: [
      'Lunes a domingo: 10:00 - 17:00'
    ],
    price: {
      regular: 25,
      promo: {
        price: 15,
        description: 'Estudiantes, maestros, adultos mayores con credencial vigente'
      }
    }
  },
  {
    id: 'centroCulturalIsidroFabela',
    name: 'Centro Cultural Isidro Fabela-Museo Casa del Risco',
    address: 'Avenida de la Paz 16, San Ángel, 01000 Ciudad de México, CDMX',
    zone: 'Álvaro Obregón',
    theme: [
      'Arte',
      'Cultura Mexicana'
    ],
    days: [
      'Martes',
      'Miércoles',
      'Jueves',
      'Viernes',
      'Sábado',
      'Domingo'
    ],
    schedule: [
      'Martes a domingo: 10:00 - 17:00'
    ],
    price: {
      regular: 50,
      promo: {
        price: 25,
        description: 'Estudiantes, maestros, adultos mayores con credencial vigente'
      }
    }
  },
  {
    id: 'museoCasaEstudioDiegoFrida',
    name: 'Museo Casa Estudio Diego Rivera y Frida Kahlo',
    address: 'Av. San Ángel 225, San Ángel, 01000 Ciudad de México, CDMX',
    zone: 'Álvaro Obregón',
    theme: [
      'Arte',
      'Cultura Mexicana'
    ],
    days: [
      'Martes',
      'Miércoles',
      'Jueves',
      'Viernes',
      'Sábado',
      'Domingo'
    ],
    schedule: [
      'Martes a domingo: 10:00 - 17:00'
    ],
    price: {
      regular: 50,
      promo: {
        price: 25,
        description: 'Estudiantes, maestros, adultos mayores con credencial vigente'
      }
    }
  },
  {
    id: 'museoNacionalVivienda',
    name: 'Museo Nacional de la Vivienda (Munavi)',
    address: 'Calle de General Anaya 20, Col. Villa de Cortés, 04700 Ciudad de México, CDMX',
    zone: 'Coyoacán',
    theme: [
      'Historia',
      'Arquitectura'
    ],
    days: [
      'Martes',
      'Miércoles',
      'Jueves',
      'Viernes',
      'Sábado',
      'Domingo'
    ],
    schedule: [
      'Martes a domingo: 10:00 - 17:00'
    ],
    price: {
      regular: 30,
      promo: {
        price: 20,
        description: 'Estudiantes, maestros, adultos mayores con credencial vigente'
      }
    }
  },
  {
    id: 'museoGuardiaNacional',
    name: 'Museo Interactivo de la Guardia Nacional (Cerrado temporalmente)',
    address: 'Av. 5 de Febrero 50, Centro Histórico, 06010 Ciudad de México, CDMX',
    zone: 'Venustiano Carranza',
    theme: [
      'Historia',
      'Seguridad Pública'
    ],
    days: [
      'Martes',
      'Miércoles',
      'Jueves',
      'Viernes',
      'Sábado',
      'Domingo'
    ],
    schedule: [
      'Martes a domingo: 10:00 - 16:00'
    ],
    price: {
      regular: 0,
      promo: {
        price: 0,
        description: 'Entrada libre para todo público'
      }
    }
  },
  {
    id: 'museoArteCarrilloGil',
    name: 'Museo de Arte Alvar y Carmen T. de Carrillo Gil',
    address: 'Av. Revolución 160, San Cosme, 01020 Ciudad de México, CDMX',
    zone: 'Cuauhtémoc',
    theme: [
      'Arte Contemporáneo'
    ],
    days: [
      'Martes',
      'Miércoles',
      'Jueves',
      'Viernes',
      'Sábado',
      'Domingo'
    ],
    schedule: [
      'Martes a domingo: 10:00 - 17:00'
    ],
    price: {
      regular: 55,
      promo: {
        price: 30,
        description: 'Estudiantes, maestros, adultos mayores con credencial vigente'
      }
    }
  },
  {
    id: 'museoDelAxolote',
    name: 'Museo del Axolote',
    address: 'Xochimilco, Ciudad de México, CDMX',
    zone: 'Xochimilco',
    theme: [
      'Conservación',
      'Biología'
    ],
    days: [
      'Lunes',
      'Martes',
      'Miércoles',
      'Jueves',
      'Viernes',
      'Sábado',
      'Domingo'
    ],
    schedule: [
      'Lunes a domingo: 10:00 - 17:00'
    ],
    price: {
      regular: 20,
      promo: {
        price: 15,
        description: 'Estudiantes, maestros, adultos mayores con credencial vigente'
      }
    }
  },
  {
    id: 'museoSoumayaLoreto',
    name: 'Museo Soumaya, Plaza Loreto',
    address: 'Plaza Loreto 206, San Ángel, 01000 Ciudad de México, CDMX',
    zone: 'Álvaro Obregón',
    theme: [
      'Arte',
      'Cultura'
    ],
    days: [
      'Lunes',
      'Martes',
      'Miércoles',
      'Jueves',
      'Viernes',
      'Sábado',
      'Domingo'
    ],
    schedule: [
      'Lunes a domingo: 10:00 - 18:00'
    ],
    price: {
      regular: 0,
      promo: {
        price: 0,
        description: 'Entrada libre para todo público'
      }
    }
  },
  {
    id: 'museoElCarmen',
    name: 'Museo de El Carmen',
    address: 'Av. Revolución 4, San Ángel, 01000 Ciudad de México, CDMX',
    zone: 'Álvaro Obregón',
    theme: [
      'Arte Colonial',
      'Religioso'
    ],
    days: [
      'Martes',
      'Miércoles',
      'Jueves',
      'Viernes',
      'Sábado',
      'Domingo'
    ],
    schedule: [
      'Martes a domingo: 10:00 - 17:00'
    ],
    price: {
      regular: 40,
      promo: {
        price: 20,
        description: 'Estudiantes, maestros, adultos mayores con credencial vigente'
      }
    }
  },
  {
    id: 'antiguaErmitaVascoQuiroga',
    name: 'Antigua Ermita Vasco de Quiroga',
    address: 'Vasco de Quiroga 16, Colonia Ermita, Iztapalapa, 09440 Ciudad de México, CDMX',
    zone: 'Iztapalapa',
    theme: [
      'Historia',
      'Arquitectura'
    ],
    days: [
      'Lunes',
      'Martes',
      'Miércoles',
      'Jueves',
      'Viernes',
      'Sábado',
      'Domingo'
    ],
    schedule: [
      'Lunes a domingo: 09:00 - 18:00'
    ],
    price: {
      regular: 0,
      promo: {
        price: 0,
        description: 'Entrada libre para todo público'
      }
    }
  },
  {
    id: 'museoJoseLuisCuevas',
    name: 'Museo José Luis Cuevas',
    address: 'Av. Juárez 8, Centro Histórico, 06010 Ciudad de México, CDMX',
    zone: 'Cuauhtémoc',
    theme: [
      'Arte Contemporáneo'
    ],
    days: [
      'Martes',
      'Miércoles',
      'Jueves',
      'Viernes',
      'Sábado',
      'Domingo'
    ],
    schedule: [
      'Martes a domingo: 10:00 - 18:00'
    ],
    price: {
      regular: 40,
      promo: {
        price: 20,
        description: 'Estudiantes, maestros, adultos mayores con credencial vigente'
      }
    }
  },
  {
    id: 'museoCasaMemoriaIndomita',
    name: 'Museo Casa de la Memoria Indómita',
    address: 'Calle 5 de Febrero 36, Colonia Centro, 06000 Ciudad de México, CDMX',
    zone: 'Venustiano Carranza',
    theme: [
      'Historia Contemporánea'
    ],
    days: [
      'Martes',
      'Miércoles',
      'Jueves',
      'Viernes',
      'Sábado',
      'Domingo'
    ],
    schedule: [
      'Martes a domingo: 10:00 - 18:00'
    ],
    price: {
      regular: 0,
      promo: {
        price: 0,
        description: 'Entrada libre para todo público'
      }
    }
  },
  {
    id: 'museoLuz',
    name: 'Museo de la Luz',
    address: 'Av. de la Paz 4, Centro Histórico, 01000 Ciudad de México, CDMX',
    zone: 'Coyoacán',
    theme: [
      'Ciencia',
      'Tecnología'
    ],
    days: [
      'Martes',
      'Miércoles',
      'Jueves',
      'Viernes',
      'Sábado',
      'Domingo'
    ],
    schedule: [
      'Martes a domingo: 10:00 - 17:00'
    ],
    price: {
      regular: 60,
      promo: {
        price: 30,
        description: 'Estudiantes, maestros, adultos mayores con credencial vigente'
      }
    }
  },
  {
    id: 'museoRevolucion',
    name: 'Museo Nacional de la Revolución',
    address: 'Av. Juárez 30, Centro Histórico, 06000 Ciudad de México, CDMX',
    zone: 'Cuauhtémoc',
    theme: [
      'Historia de la Revolución Mexicana'
    ],
    days: [
      'Martes',
      'Miércoles',
      'Jueves',
      'Viernes',
      'Sábado',
      'Domingo'
    ],
    schedule: [
      'Martes a domingo: 10:00 - 18:00'
    ],
    price: {
      regular: 50,
      promo: {
        price: 25,
        description: 'Estudiantes, maestros, adultos mayores con credencial vigente'
      }
    }
  },
  {
    id: 'museoBicentenario',
    name: 'Museo del Bicentenario',
    address: 'Calle Donceles 16, Centro Histórico, 06000 Ciudad de México, CDMX',
    zone: 'Cuauhtémoc',
    theme: [
      'Historia de México'
    ],
    days: [
      'Martes',
      'Miércoles',
      'Jueves',
      'Viernes',
      'Sábado',
      'Domingo'
    ],
    schedule: [
      'Martes a domingo: 10:00 - 18:00'
    ],
    price: {
      regular: 0,
      promo: {
        price: 0,
        description: 'Entrada libre para todo público'
      }
    }
  },
  {
    id: 'museoChopo',
    name: 'Museo Universitario del Chopo',
    address: 'Dr. Enrique González Martínez 10, Santa María la Ribera, 06400 Ciudad de México, CDMX',
    zone: 'Cuauhtémoc',
    theme: [
      'Arte Contemporáneo'
    ],
    days: [
      'Martes',
      'Miércoles',
      'Jueves',
      'Viernes',
      'Sábado',
      'Domingo'
    ],
    schedule: [
      'Martes a domingo: 10:00 - 18:00'
    ],
    price: {
      regular: 40,
      promo: {
        price: 20,
        description: 'Estudiantes, maestros, adultos mayores con credencial vigente'
      }
    }
  },
  {
    id: 'museoManuelTolsa',
    name: 'Museo Manuel Tolsá',
    address: 'Av. Juárez 8, Centro Histórico, 06010 Ciudad de México, CDMX',
    zone: 'Cuauhtémoc',
    theme: [
      'Escultura',
      'Arte Colonial'
    ],
    days: [
      'Martes',
      'Miércoles',
      'Jueves',
      'Viernes',
      'Sábado',
      'Domingo'
    ],
    schedule: [
      'Martes a domingo: 10:00 - 17:00'
    ],
    price: {
      regular: 30,
      promo: {
        price: 15,
        description: 'Estudiantes, maestros, adultos mayores con credencial vigente'
      }
    }
  },
  {
    id: 'museoNuestraCocinaDuqueHerdez',
    name: 'Museo Galería Nuestra Cocina Duque de Herdez',
    address: 'Calle 16 de Septiembre 51, Centro Histórico, 06000 Ciudad de México, CDMX',
    zone: 'Cuauhtémoc',
    theme: [
      'Gastronomía Mexicana'
    ],
    days: [
      'Lunes',
      'Martes',
      'Miércoles',
      'Jueves',
      'Viernes',
      'Sábado',
      'Domingo'
    ],
    schedule: [
      'Lunes a domingo: 10:00 - 18:00'
    ],
    price: {
      regular: 40,
      promo: {
        price: 20,
        description: 'Estudiantes, maestros, adultos mayores con credencial vigente'
      }
    }
  },
  {
    id: 'museoTelegrafo',
    name: 'Museo del Telégrafo',
    address: 'Av. Juárez 8, Centro Histórico, 06010 Ciudad de México, CDMX',
    zone: 'Cuauhtémoc',
    theme: [
      'Historia de la Comunicación'
    ],
    days: [
      'Martes',
      'Miércoles',
      'Jueves',
      'Viernes',
      'Sábado',
      'Domingo'
    ],
    schedule: [
      'Martes a domingo: 10:00 - 17:00'
    ],
    price: {
      regular: 20,
      promo: {
        price: 10,
        description: 'Estudiantes, maestros, adultos mayores con credencial vigente'
      }
    }
  },
  {
    id: 'museoEscuelaMedicina',
    name: 'Palacio de la Escuela de Medicina',
    address: 'República de Brasil 33, Centro Histórico, 06000 Ciudad de México, CDMX',
    zone: 'Cuauhtémoc',
    theme: [
      'Historia de la Medicina'
    ],
    days: [
      'Martes',
      'Miércoles',
      'Jueves',
      'Viernes',
      'Sábado',
      'Domingo'
    ],
    schedule: [
      'Martes a domingo: 10:00 - 17:00'
    ],
    price: {
      regular: 50,
      promo: {
        price: 25,
        description: 'Estudiantes, maestros, adultos mayores con credencial vigente'
      }
    }
  },
  {
    id: 'museoProfesa',
    name: 'Pinacoteca del Templo La Profesa (cerrada hasta nuevo aviso)',
    address: 'Av. Juárez 8, Centro Histórico, 06010 Ciudad de México, CDMX',
    zone: 'Cuauhtémoc',
    theme: [
      'Arte Religioso'
    ],
    days: [
      'Martes',
      'Miércoles',
      'Jueves',
      'Viernes',
      'Sábado',
      'Domingo'
    ],
    schedule: [
      'Martes a domingo: 10:00 - 17:00'
    ],
    price: {
      regular: 0,
      promo: {
        price: 0,
        description: 'Cerrado temporalmente'
      }
    }
  },
  {
    id: 'museoGeologia',
    name: 'Museo de Geología',
    address: 'Circuito Interior s/n, Ciudad Universitaria, Coyoacán, 04510 Ciudad de México, CDMX',
    zone: 'Coyoacán',
    theme: [
      'Ciencias de la Tierra'
    ],
    days: [
      'Martes',
      'Miércoles',
      'Jueves',
      'Viernes',
      'Sábado',
      'Domingo'
    ],
    schedule: [
      'Martes a domingo: 10:00 - 17:00'
    ],
    price: {
      regular: 40,
      promo: {
        price: 20,
        description: 'Estudiantes, maestros, adultos mayores con credencial vigente'
      }
    }
  },
  {
    id: 'museoHospitalConcepcion',
    name: 'Museo de Sitio del Antiguo Hospital Concepción Béistegui',
    address: 'Calle Concepción Béistegui 71, Colonia Del Valle, 03100 Ciudad de México, CDMX',
    zone: 'Benito Juárez',
    theme: [
      'Historia de la Medicina'
    ],
    days: [
      'Lunes',
      'Martes',
      'Miércoles',
      'Jueves',
      'Viernes'
    ],
    schedule: [
      'Lunes a viernes: 09:00 - 16:00'
    ],
    price: {
      regular: 30,
      promo: {
        price: 15,
        description: 'Estudiantes, maestros, adultos mayores con credencial vigente'
      }
    }
  },
  {
    id: 'museoPulque',
    name: 'Museo del Pulque y las pulquerías',
    address: 'Calle de la Verónica 28, Centro Histórico, 06000 Ciudad de México, CDMX',
    zone: 'Cuauhtémoc',
    theme: [
      'Cultura',
      'Bebidas Tradicionales'
    ],
    days: [
      'Martes',
      'Miércoles',
      'Jueves',
      'Viernes',
      'Sábado',
      'Domingo'
    ],
    schedule: [
      'Martes a domingo: 10:00 - 18:00'
    ],
    price: {
      regular: 50,
      promo: {
        price: 25,
        description: 'Estudiantes, maestros, adultos mayores con credencial vigente'
      }
    }
  },
  {
    id: 'museoKaluz',
    name: 'Museo Kaluz',
    address: 'Av. Paseo de la Reforma 1, 06000 Ciudad de México, CDMX',
    zone: 'Cuauhtémoc',
    theme: [
      'Arte',
      'Cultura Contemporánea'
    ],
    days: [
      'Martes',
      'Miércoles',
      'Jueves',
      'Viernes',
      'Sábado',
      'Domingo'
    ],
    schedule: [
      'Martes a domingo: 10:00 - 18:00'
    ],
    price: {
      regular: 50,
      promo: {
        price: 0,
        description: 'Domingos entrada libre'
      }
    }
  },
  {
    id: 'museoFerrocarrilero',
    name: 'Museo Ferrocarrilero Víctor Flores Morales',
    address: 'Calle 1ª de Mayo 20, Centro Histórico, 06010 Ciudad de México, CDMX',
    zone: 'Venustiano Carranza',
    theme: [
      'Historia del Ferrocarril en México'
    ],
    days: [
      'Martes',
      'Miércoles',
      'Jueves',
      'Viernes',
      'Sábado',
      'Domingo'
    ],
    schedule: [
      'Martes a domingo: 10:00 - 17:00'
    ],
    price: {
      regular: 30,
      promo: {
        price: 15,
        description: 'Estudiantes, maestros, adultos mayores con credencial vigente'
      }
    }
  },
  {
    id: 'museoMexicoIsrael',
    name: 'Museo del Instituto Cultural México Israel',
    address: 'Av. Nuevo León 66, Hipódromo, 06100 Ciudad de México, CDMX',
    zone: 'Cuauhtémoc',
    theme: [
      'Cultura Judía en México'
    ],
    days: [
      'Lunes',
      'Martes',
      'Miércoles',
      'Jueves',
      'Viernes',
      'Sábado',
      'Domingo'
    ],
    schedule: [
      'Lunes a domingo: 10:00 - 17:00'
    ],
    price: {
      regular: 40,
      promo: {
        price: 20,
        description: 'Estudiantes, maestros, adultos mayores con credencial vigente'
      }
    }
  },
  {
    id: 'laboratorioArteAlameda',
    name: 'Laboratorio Arte Alameda',
    address: 'Dr. Mora 7, Centro Histórico, 06000 Ciudad de México, CDMX',
    zone: 'Cuauhtémoc',
    theme: [
      'Arte Contemporáneo'
    ],
    days: [
      'Martes',
      'Miércoles',
      'Jueves',
      'Viernes',
      'Sábado',
      'Domingo'
    ],
    schedule: [
      'Martes a domingo: 10:00 - 18:00'
    ],
    price: {
      regular: 50,
      promo: {
        price: 25,
        description: 'Estudiantes, maestros, adultos mayores con credencial vigente'
      }
    }
  },
  {
    id: 'museoPolicia',
    name: 'Museo de la Policía de la Ciudad de México',
    address: 'Av. José María Pino Suárez 12, Centro Histórico, 06000 Ciudad de México, CDMX',
    zone: 'Cuauhtémoc',
    theme: [
      'Historia de la Policía en México'
    ],
    days: [
      'Lunes',
      'Martes',
      'Miércoles',
      'Jueves',
      'Viernes',
      'Sábado',
      'Domingo'
    ],
    schedule: [
      'Lunes a domingo: 10:00 - 18:00'
    ],
    price: {
      regular: 20,
      promo: {
        price: 10,
        description: 'Estudiantes, maestros, adultos mayores con credencial vigente'
      }
    }
  },
  {
    id: 'museoNumismatico',
    name: 'Museo Numismático Nacional',
    address: 'República de Brasil 17, Centro Histórico, 06000 Ciudad de México, CDMX',
    zone: 'Cuauhtémoc',
    theme: [
      'Historia de la Moneda'
    ],
    days: [
      'Martes',
      'Miércoles',
      'Jueves',
      'Viernes',
      'Sábado',
      'Domingo'
    ],
    schedule: [
      'Martes a domingo: 10:00 - 18:00'
    ],
    price: {
      regular: 20,
      promo: {
        price: 10,
        description: 'Estudiantes, maestros, adultos mayores con credencial vigente'
      }
    }
  },
  {
    id: 'museoAtzacoalco',
    name: 'Museo de Sitio San Sebastián Atzacoalco',
    address: 'Calle San Sebastián 42, Atzacoalco, 09100 Ciudad de México, CDMX',
    zone: 'Gustavo A. Madero',
    theme: [
      'Arqueología Prehispánica'
    ],
    days: [
      'Martes',
      'Miércoles',
      'Jueves',
      'Viernes',
      'Sábado',
      'Domingo'
    ],
    schedule: [
      'Martes a domingo: 10:00 - 16:00'
    ],
    price: {
      regular: 0,
      promo: {
        price: 0,
        description: 'Entrada libre para todo público'
      }
    }
  },
  {
    id: 'museoCharreria',
    name: 'Museo de la Charrería',
    address: 'Avenida México 285, San Ángel, 01000 Ciudad de México, CDMX',
    zone: 'Álvaro Obregón',
    theme: [
      'Charrería',
      'Tradiciones Mexicanas'
    ],
    days: [
      'Martes',
      'Miércoles',
      'Jueves',
      'Viernes',
      'Sábado',
      'Domingo'
    ],
    schedule: [
      'Martes a domingo: 10:00 - 18:00'
    ],
    price: {
      regular: 50,
      promo: {
        price: 25,
        description: 'Estudiantes, maestros, adultos mayores con credencial vigente'
      }
    }
  },
  {
    id: 'museoEstanquillo',
    name: 'Museo del Estanquillo',
    address: 'José María Pino Suárez 30, Centro Histórico, 06000 Ciudad de México, CDMX',
    zone: 'Cuauhtémoc',
    theme: [
      'Historia',
      'Cultura Popular'
    ],
    days: [
      'Martes',
      'Miércoles',
      'Jueves',
      'Viernes',
      'Sábado',
      'Domingo'
    ],
    schedule: [
      'Martes a domingo: 10:00 - 17:00'
    ],
    price: {
      regular: 35,
      promo: {
        price: 20,
        description: 'Estudiantes, maestros, adultos mayores con credencial vigente'
      }
    }
  },
  {
    id: 'museoInquisicion',
    name: 'Museo de la Inquisición',
    address: 'República de Brasil 10, Centro Histórico, 06000 Ciudad de México, CDMX',
    zone: 'Cuauhtémoc',
    theme: [
      'Historia de la Inquisición'
    ],
    days: [
      'Martes',
      'Miércoles',
      'Jueves',
      'Viernes',
      'Sábado',
      'Domingo'
    ],
    schedule: [
      'Martes a domingo: 09:00 - 17:00'
    ],
    price: {
      regular: 40,
      promo: {
        price: 20,
        description: 'Estudiantes, maestros, adultos mayores con credencial vigente'
      }
    }
  },
  {
    id: 'museoConstituciones',
    name: 'Museo de las Constituciones',
    address: 'Calle Moneda 13, Centro Histórico, 06000 Ciudad de México, CDMX',
    zone: 'Cuauhtémoc',
    theme: [
      'Historia Constitucional'
    ],
    days: [
      'Lunes',
      'Martes',
      'Miércoles',
      'Jueves',
      'Viernes'
    ],
    schedule: [
      'Lunes a viernes: 09:00 - 16:00'
    ],
    price: {
      regular: 25,
      promo: {
        price: 15,
        description: 'Estudiantes, maestros, adultos mayores con credencial vigente'
      }
    }
  },
  {
    id: 'galeriasAcademiaSanCarlos',
    name: 'Galerías de la Antigua Academia de San Carlos',
    address: 'Av. Juárez 83, Centro Histórico, 06000 Ciudad de México, CDMX',
    zone: 'Cuauhtémoc',
    theme: [
      'Arte',
      'Cultura'
    ],
    days: [
      'Martes',
      'Miércoles',
      'Jueves',
      'Viernes',
      'Sábado',
      'Domingo'
    ],
    schedule: [
      'Martes a domingo: 10:00 - 17:00'
    ],
    price: {
      regular: 40,
      promo: {
        price: 20,
        description: 'Estudiantes, maestros, adultos mayores con credencial vigente'
      }
    }
  },
  {
    id: 'museoCentroImagen',
    name: 'Museo Centro de la Imagen',
    address: 'Plaza de la Ciudadela 2, Centro Histórico, 06000 Ciudad de México, CDMX',
    zone: 'Cuauhtémoc',
    theme: [
      'Arte Contemporáneo',
      'Fotografía'
    ],
    days: [
      'Martes',
      'Miércoles',
      'Jueves',
      'Viernes',
      'Sábado',
      'Domingo'
    ],
    schedule: [
      'Martes a domingo: 10:00 - 18:00'
    ],
    price: {
      regular: 50,
      promo: {
        price: 25,
        description: 'Estudiantes, maestros, adultos mayores con credencial vigente'
      }
    }
  },
  {
    id: 'museoPadrePro',
    name: 'Museo del Padre Pro',
    address: 'Calle 5 de Febrero 1, Centro Histórico, 06000 Ciudad de México, CDMX',
    zone: 'Cuauhtémoc',
    theme: [
      'Historia Religiosa'
    ],
    days: [
      'Lunes',
      'Martes',
      'Miércoles',
      'Jueves',
      'Viernes',
      'Sábado',
      'Domingo'
    ],
    schedule: [
      'Lunes a domingo: 10:00 - 17:00'
    ],
    price: {
      regular: 40,
      promo: {
        price: 20,
        description: 'Estudiantes, maestros, adultos mayores con credencial vigente'
      }
    }
  },
  {
    id: 'museoArtePopular',
    name: 'Museo de Arte Popular',
    address: 'Revillagigedo 11, Centro Histórico, 06000 Ciudad de México, CDMX',
    zone: 'Cuauhtémoc',
    theme: [
      'Artesanía',
      'Cultura Popular'
    ],
    days: [
      'Martes',
      'Miércoles',
      'Jueves',
      'Viernes',
      'Sábado',
      'Domingo'
    ],
    schedule: [
      'Martes a domingo: 10:00 - 17:00'
    ],
    price: {
      regular: 35,
      promo: {
        price: 20,
        description: 'Estudiantes, maestros, adultos mayores con credencial vigente'
      }
    }
  },
  {
    id: 'museoTlatelolco',
    name: 'Museo de Sitio de Tlatelolco Caja de Agua',
    address: 'Av. Ricardo Flores Magón s/n, Tlatelolco, 03000 Ciudad de México, CDMX',
    zone: 'Cuauhtémoc',
    theme: [
      'Historia Prehispánica'
    ],
    days: [
      'Martes',
      'Miércoles',
      'Jueves',
      'Viernes',
      'Sábado',
      'Domingo'
    ],
    schedule: [
      'Martes a domingo: 09:00 - 17:00'
    ],
    price: {
      regular: 40,
      promo: {
        price: 20,
        description: 'Estudiantes, maestros, adultos mayores con credencial vigente'
      }
    }
  },
  {
    id: 'museoArtToys',
    name: 'Museo Art Toys',
    address: 'Calle de Madero 6, Centro Histórico, 06000 Ciudad de México, CDMX',
    zone: 'Cuauhtémoc',
    theme: [
      'Arte Contemporáneo',
      'Juguetes'
    ],
    days: [
      'Lunes',
      'Martes',
      'Miércoles',
      'Jueves',
      'Viernes',
      'Sábado',
      'Domingo'
    ],
    schedule: [
      'Lunes a domingo: 10:00 - 18:00'
    ],
    price: {
      regular: 50,
      promo: {
        price: 25,
        description: 'Estudiantes, maestros, adultos mayores con credencial vigente'
      }
    }
  },
  {
    id: 'salonPlasticaMexicana',
    name: 'Salón de la Plástica Mexicana',
    address: 'Av. Hidalgo 45, Centro Histórico, 06000 Ciudad de México, CDMX',
    zone: 'Cuauhtémoc',
    theme: [
      'Arte Mexicano'
    ],
    days: [
      'Martes',
      'Miércoles',
      'Jueves',
      'Viernes',
      'Sábado',
      'Domingo'
    ],
    schedule: [
      'Martes a domingo: 10:00 - 17:00'
    ],
    price: {
      regular: 40,
      promo: {
        price: 20,
        description: 'Estudiantes, maestros, adultos mayores con credencial vigente'
      }
    }
  },
  {
    id: 'salaOdontologiaMexicana',
    name: 'Sala de la Odontología Mexicana Dr. Samuel Fastlicht',
    address: 'Calle 16 de Septiembre 17, Centro Histórico, 06000 Ciudad de México, CDMX',
    zone: 'Cuauhtémoc',
    theme: [
      'Historia de la Odontología'
    ],
    days: [
      'Lunes',
      'Martes',
      'Miércoles',
      'Jueves',
      'Viernes'
    ],
    schedule: [
      'Lunes a viernes: 09:00 - 15:00'
    ],
    price: {
      regular: 30,
      promo: {
        price: 20,
        description: 'Estudiantes, maestros, adultos mayores con credencial vigente'
      }
    }
  },
  {
    id: 'museoUNAMHoy',
    name: 'Museo UNAM Hoy',
    address: 'Calle de Universidad 3000, Ciudad Universitaria, 04510 Ciudad de México, CDMX',
    zone: 'Coyoacán',
    theme: [
      'Historia',
      'Cultura de la UNAM'
    ],
    days: [
      'Martes',
      'Miércoles',
      'Jueves',
      'Viernes',
      'Sábado',
      'Domingo'
    ],
    schedule: [
      'Martes a domingo: 10:00 - 18:00'
    ],
    price: {
      regular: 50,
      promo: {
        price: 30,
        description: 'Estudiantes, maestros, adultos mayores con credencial vigente'
      }
    }
  },
  {
    id: 'museoSorJuana',
    name: 'Museo de Sitio Sor Juana Inés de la Cruz',
    address: 'Av. Sor Juana Inés de la Cruz s/n, Centro Histórico, 06000 Ciudad de México, CDMX',
    zone: 'Centro Histórico',
    theme: [
      'Literatura',
      'Historia'
    ],
    days: [
      'Lunes',
      'Martes',
      'Miércoles',
      'Jueves',
      'Viernes'
    ],
    schedule: [
      'Lunes a viernes: 09:00 - 17:00'
    ],
    price: {
      regular: 40,
      promo: {
        price: 25,
        description: 'Estudiantes, maestros, adultos mayores con credencial vigente'
      }
    }
  },
  {
    id: 'museoRipley',
    name: 'Museo de lo Increíble Ripley',
    address: 'Av. Juárez 16, Centro Histórico, 06000 Ciudad de México, CDMX',
    zone: 'Cuauhtémoc',
    theme: [
      'Curiosidades',
      'Fenómenos Extraordinarios'
    ],
    days: [
      'Lunes',
      'Martes',
      'Miércoles',
      'Jueves',
      'Viernes',
      'Sábado',
      'Domingo'
    ],
    schedule: [
      'Lunes a domingo: 10:00 - 20:00'
    ],
    price: {
      regular: 150,
      promo: {
        price: 100,
        description: 'Estudiantes, niños, adultos mayores'
      }
    }
  },
  {
    id: 'museoRamónLópezVelarde',
    name: 'Museo Ramón López Velarde',
    address: 'Calle Ramón López Velarde 2, Centro Histórico, 06000 Ciudad de México, CDMX',
    zone: 'Cuauhtémoc',
    theme: [
      'Literatura Mexicana'
    ],
    days: [
      'Martes',
      'Miércoles',
      'Jueves',
      'Viernes',
      'Sábado',
      'Domingo'
    ],
    schedule: [
      'Martes a domingo: 10:00 - 17:00'
    ],
    price: {
      regular: 35,
      promo: {
        price: 20,
        description: 'Estudiantes, maestros, adultos mayores con credencial vigente'
      }
    }
  },
  {
    id: 'museoBolsaMexicanaValores',
    name: 'Museo Interactivo de la Bolsa Mexicana de Valores',
    address: 'Paseo de la Reforma 255, Cuauhtémoc, 06500 Ciudad de México, CDMX',
    zone: 'Cuauhtémoc',
    theme: [
      'Economía',
      'Finanzas'
    ],
    days: [
      'Lunes',
      'Martes',
      'Miércoles',
      'Jueves',
      'Viernes'
    ],
    schedule: [
      'Lunes a viernes: 09:00 - 17:00'
    ],
    price: {
      regular: 50,
      promo: {
        price: 25,
        description: 'Estudiantes, maestros, adultos mayores con credencial vigente'
      }
    }
  },
  {
    id: 'museoVizcainas',
    name: 'Museo Vizcaínas',
    address: 'Calle de Pino Suárez 16, Centro Histórico, 06000 Ciudad de México, CDMX',
    zone: 'Cuauhtémoc',
    theme: [
      'Historia',
      'Arte Colonial'
    ],
    days: [
      'Martes',
      'Miércoles',
      'Jueves',
      'Viernes',
      'Sábado',
      'Domingo'
    ],
    schedule: [
      'Martes a domingo: 10:00 - 17:00'
    ],
    price: {
      regular: 35,
      promo: {
        price: 20,
        description: 'Estudiantes, maestros, adultos mayores con credencial vigente'
      }
    }
  },
  {
    id: 'museoMuralDiegoRivera',
    name: 'Museo Mural Diego Rivera',
    address: 'Av. Juárez 22, Centro Histórico, 06000 Ciudad de México, CDMX',
    zone: 'Cuauhtémoc',
    theme: [
      'Arte Mexicano Contemporáneo'
    ],
    days: [
      'Martes',
      'Miércoles',
      'Jueves',
      'Viernes',
      'Sábado',
      'Domingo'
    ],
    schedule: [
      'Martes a domingo: 10:00 - 17:00'
    ],
    price: {
      regular: 50,
      promo: {
        price: 25,
        description: 'Estudiantes, maestros, adultos mayores con credencial vigente'
      }
    }
  },
  {
    id: 'museoEjercitoFuerzaAerea',
    name: 'Museo del Ejército y Fuerza Aérea Mexicanos de Bethlemitas',
    address: 'Av. Prolongación Pino Suárez 1, Centro Histórico, 06000 Ciudad de México, CDMX',
    zone: 'Cuauhtémoc',
    theme: [
      'Historia Militar'
    ],
    days: [
      'Martes',
      'Miércoles',
      'Jueves',
      'Viernes',
      'Sábado',
      'Domingo'
    ],
    schedule: [
      'Martes a domingo: 09:00 - 16:00'
    ],
    price: {
      regular: 0,
      promo: {
        price: 0,
        description: 'Entrada libre'
      }
    }
  },
  {
    id: 'museoMujer',
    name: 'Museo de la Mujer',
    address: 'Av. Juárez 13, Centro Histórico, 06000 Ciudad de México, CDMX',
    zone: 'Cuauhtémoc',
    theme: [
      'Mujer',
      'Sociedad'
    ],
    days: [
      'Martes',
      'Miércoles',
      'Jueves',
      'Viernes',
      'Sábado',
      'Domingo'
    ],
    schedule: [
      'Martes a domingo: 10:00 - 18:00'
    ],
    price: {
      regular: 50,
      promo: {
        price: 30,
        description: 'Estudiantes, maestros, adultos mayores con credencial vigente'
      }
    }
  },
  {
    id: 'museoMODO',
    name: 'Museo del Objeto del Objeto (MODO)',
    address: 'Calle de Donceles 99, Centro Histórico, 06000 Ciudad de México, CDMX',
    zone: 'Cuauhtémoc',
    theme: [
      'Arte',
      'Diseño'
    ],
    days: [
      'Martes',
      'Miércoles',
      'Jueves',
      'Viernes',
      'Sábado',
      'Domingo'
    ],
    schedule: [
      'Martes a domingo: 10:00 - 18:00'
    ],
    price: {
      regular: 100,
      promo: {
        price: 50,
        description: 'Estudiantes, maestros, adultos mayores con credencial vigente'
      }
    }
  },
  {
    id: 'casaEstudioLeonora',
    name: 'Casa-Estudio Leonora Carrington (Cerrada Temporalmente)',
    address: 'Gral. Antonio León 6, Coyoacán, 04000 Ciudad de México, CDMX',
    zone: 'Coyoacán',
    theme: [
      'Arte Contemporáneo'
    ],
    days: [
      'Martes',
      'Miércoles',
      'Jueves',
      'Viernes',
      'Sábado',
      'Domingo'
    ],
    schedule: [
      'Actualmente cerrado temporalmente'
    ],
    price: {
      regular: 0,
      promo: {
        price: 0,
        description: 'Cerrado temporalmente'
      }
    }
  },
  {
    id: 'm68Memorial',
    name: 'M68, Memorial de 1968 y Movimientos sociales',
    address: 'Av. 5 de Febrero 62, Centro Histórico, 06000 Ciudad de México, CDMX',
    zone: 'Cuauhtémoc',
    theme: [
      'Historia',
      'Derechos Humanos'
    ],
    days: [
      'Martes',
      'Miércoles',
      'Jueves',
      'Viernes',
      'Sábado',
      'Domingo'
    ],
    schedule: [
      'Martes a domingo: 10:00 - 17:00'
    ],
    price: {
      regular: 50,
      promo: {
        price: 30,
        description: 'Estudiantes, maestros, adultos mayores con credencial vigente'
      }
    }
  },
  {
    id: 'museoCabildos',
    name: 'Museo Salón de Cabildos del Antiguo Palacio del Ayuntamiento',
    address: 'Calle de Correo Mayor 24, Centro Histórico, 06000 Ciudad de México, CDMX',
    zone: 'Cuauhtémoc',
    theme: [
      'Historia',
      'Política'
    ],
    days: [
      'Lunes',
      'Martes',
      'Miércoles',
      'Jueves',
      'Viernes'
    ],
    schedule: [
      'Lunes a viernes: 10:00 - 17:00'
    ],
    price: {
      regular: 35,
      promo: {
        price: 25,
        description: 'Estudiantes, maestros, adultos mayores con credencial vigente'
      }
    }
  },
  {
    id: 'museoPanteonSanFernando',
    name: 'Museo Panteón de San Fernando',
    address: 'Av. Héroes 1, San Fernando, 06000 Ciudad de México, CDMX',
    zone: 'Cuauhtémoc',
    theme: [
      'Historia Funeraria',
      'Cultura'
    ],
    days: [
      'Lunes',
      'Martes',
      'Miércoles',
      'Jueves',
      'Viernes',
      'Sábado',
      'Domingo'
    ],
    schedule: [
      'Lunes a domingo: 09:00 - 17:00'
    ],
    price: {
      regular: 50,
      promo: {
        price: 30,
        description: 'Estudiantes, maestros, adultos mayores con credencial vigente'
      }
    }
  },
  {
    id: 'mideEconomia',
    name: 'Museo Interactivo de Economía (MIDE)',
    address: 'Av. Hidalgo 17, Centro Histórico, 06000 Ciudad de México, CDMX',
    zone: 'Cuauhtémoc',
    theme: [
      'Economía',
      'Finanzas'
    ],
    days: [
      'Martes',
      'Miércoles',
      'Jueves',
      'Viernes',
      'Sábado',
      'Domingo'
    ],
    schedule: [
      'Martes a domingo: 10:00 - 18:00'
    ],
    price: {
      regular: 50,
      promo: {
        price: 30,
        description: 'Estudiantes, maestros, adultos mayores con credencial vigente'
      }
    }
  },
  {
    id: 'museoTequilaMezcal',
    name: 'Museo del Tequila y el Mezcal (MUTEM)',
    address: 'Av. Oaxaca 201, Centro Histórico, 06000 Ciudad de México, CDMX',
    zone: 'Cuauhtémoc',
    theme: [
      'Cultura Mexicana',
      'Bebidas Tradicionales'
    ],
    days: [
      'Lunes',
      'Martes',
      'Miércoles',
      'Jueves',
      'Viernes',
      'Sábado',
      'Domingo'
    ],
    schedule: [
      'Lunes a domingo: 10:00 - 18:00'
    ],
    price: {
      regular: 100,
      promo: {
        price: 50,
        description: 'Estudiantes, maestros, adultos mayores con credencial vigente'
      }
    }
  },
  {
    id: 'museoCalzadoBorcegui',
    name: 'Museo del Calzado El Borceguí',
    address: 'Av. Insurgentes Sur 1000, Centro Histórico, 06000 Ciudad de México, CDMX',
    zone: 'Cuauhtémoc',
    theme: [
      'Historia del Calzado'
    ],
    days: [
      'Lunes',
      'Martes',
      'Miércoles',
      'Jueves',
      'Viernes'
    ],
    schedule: [
      'Lunes a viernes: 10:00 - 16:00'
    ],
    price: {
      regular: 50,
      promo: {
        price: 25,
        description: 'Estudiantes, maestros, adultos mayores con credencial vigente'
      }
    }
  },
  {
    id: 'museoSanCarlos',
    name: 'Museo Nacional de San Carlos',
    address: 'Av. Juárez 50, Centro Histórico, 06000 Ciudad de México, CDMX',
    zone: 'Cuauhtémoc',
    theme: [
      'Arte',
      'Pintura Clásica'
    ],
    days: [
      'Martes',
      'Miércoles',
      'Jueves',
      'Viernes',
      'Sábado',
      'Domingo'
    ],
    schedule: [
      'Martes a domingo: 10:00 - 17:00'
    ],
    price: {
      regular: 50,
      promo: {
        price: 30,
        description: 'Estudiantes, maestros, adultos mayores con credencial vigente'
      }
    }
  },
  {
    id: 'museoCancilleria',
    name: 'Museo de la Cancillería',
    address: 'Calle de Donceles 56, Centro Histórico, 06000 Ciudad de México, CDMX',
    zone: 'Cuauhtémoc',
    theme: [
      'Historia',
      'Diplomacia'
    ],
    days: [
      'Lunes',
      'Martes',
      'Miércoles',
      'Jueves',
      'Viernes'
    ],
    schedule: [
      'Lunes a viernes: 09:00 - 18:00'
    ],
    price: {
      regular: 30,
      promo: {
        price: 0,
        description: 'Entrada libre los viernes'
      }
    }
  },
  {
    id: 'museoIndigena',
    name: 'Museo Indígena, Antigua Aduana de Peralvillo',
    address: 'Avenida Peralvillo 22, 05900 Ciudad de México, CDMX',
    zone: 'Cuauhtémoc',
    theme: [
      'Cultura',
      'Tradiciones Indígenas'
    ],
    days: [
      'Martes',
      'Miércoles',
      'Jueves',
      'Viernes',
      'Sábado',
      'Domingo'
    ],
    schedule: [
      'Martes a domingo: 10:00 - 17:00'
    ],
    price: {
      regular: 40,
      promo: {
        price: 20,
        description: 'Descuento a estudiantes y maestros'
      }
    }
  },
  {
    id: 'museoBanxico',
    name: 'Museo Banco de México',
    address: 'Av. 5 de Febrero 20, Centro Histórico, 06000 Ciudad de México, CDMX',
    zone: 'Cuauhtémoc',
    theme: [
      'Economía, Finanzas',
      'Historia'
    ],
    days: [
      'Martes',
      'Miércoles',
      'Jueves',
      'Viernes',
      'Sábado',
      'Domingo'
    ],
    schedule: [
      'Martes a domingo: 10:00 - 17:00'
    ],
    price: {
      regular: 0,
      promo: {
        price: 0,
        description: 'Entrada libre para todo público'
      }
    }
  },
  {
    id: 'museoCiudadMexico',
    name: 'Museo de la Ciudad de México',
    address: 'República de Brasil 4, Centro Histórico, 06000 Ciudad de México, CDMX',
    zone: 'Cuauhtémoc',
    theme: [
      'Historia de la Ciudad de México'
    ],
    days: [
      'Martes',
      'Miércoles',
      'Jueves',
      'Viernes',
      'Sábado',
      'Domingo'
    ],
    schedule: [
      'Martes a domingo: 10:00 - 17:00'
    ],
    price: {
      regular: 30,
      promo: {
        price: 15,
        description: 'Descuento a estudiantes, maestros y adultos mayores'
      }
    }
  },
  {
    id: 'museoRivasMercado',
    name: 'Casa Rivas Mercado',
    address: 'República de Brasil 4, Centro Histórico, 06000 Ciudad de México, CDMX',
    zone: 'Cuauhtémoc',
    theme: [
      'Historia de la Ciudad de México'
    ],
    days: [
      'Martes',
      'Miércoles',
      'Jueves',
      'Viernes',
      'Sábado',
      'Domingo'
    ],
    schedule: [
      'Martes a domingo: 10:00 - 18:00'
    ],
    price: {
      regular: 25,
      promo: {
        price: 15,
        description: 'Estudiantes, maestros, adultos mayores con credencial vigente'
      }
    }
  },
  {
    id: 'museoPatologia',
    name: 'Museo de Patología Hospital General de México Eduardo Liceaga',
    address: 'Av. Cuauhtémoc 330, Roma Sur, 06760 Ciudad de México, CDMX',
    zone: 'Cuauhtémoc',
    theme: [
      'Medicina',
      'Salud'
    ],
    days: [
      'Lunes',
      'Martes',
      'Miércoles',
      'Jueves',
      'Viernes'
    ],
    schedule: [
      'Lunes a viernes: 09:00 - 16:00'
    ],
    price: {
      regular: 0,
      promo: {
        price: 0,
        description: 'Entrada libre'
      }
    }
  },
  {
    id: 'museoSHCP',
    name: 'Galería de Arte de la SHCP',
    address: 'Av. Paseo de la Reforma 111, Juárez, 06600 Ciudad de México, CDMX',
    zone: 'Cuauhtémoc',
    theme: [
      'Arte',
      'Cultura'
    ],
    days: [
      'Lunes',
      'Martes',
      'Miércoles',
      'Jueves',
      'Viernes'
    ],
    schedule: [
      'Lunes a viernes: 10:00 - 18:00'
    ],
    price: {
      regular: 0,
      promo: {
        price: 0,
        description: 'Entrada libre'
      }
    }
  },
  {
    id: 'museoCuauhtemoc',
    name: 'Museo Recinto Homenaje a Cuauhtémoc',
    address: 'Av. Juárez 78, Centro Histórico, 06000 Ciudad de México, CDMX',
    zone: 'Cuauhtémoc',
    theme: [
      'Historia',
      'Cultura Mexicana'
    ],
    days: [
      'Martes',
      'Miércoles',
      'Jueves',
      'Viernes',
      'Sábado',
      'Domingo'
    ],
    schedule: [
      'Martes a domingo: 10:00 - 17:00'
    ],
    price: {
      regular: 50,
      promo: {
        price: 30,
        description: 'Descuento a estudiantes y maestros'
      }
    }
  },
  {
    id: 'museoSoumayaGuillermo',
    name: 'Museo Soumaya. Casa Museo Guillermo Tovar de Teresa',
    address: 'Av. de la Reforma 51, Paseo de la Reforma, 06600 Ciudad de México, CDMX',
    zone: 'Cuauhtémoc',
    theme: [
      'Arte',
      'Cultura Mexicana'
    ],
    days: [
      'Lunes',
      'Martes',
      'Miércoles',
      'Jueves',
      'Viernes',
      'Sábado',
      'Domingo'
    ],
    schedule: [
      'Lunes a domingo: 10:00 - 18:00'
    ],
    price: {
      regular: 0,
      promo: {
        price: 0,
        description: 'Entrada libre para todo público'
      }
    }
  },
  {
    id: 'exTeresaArteActual',
    name: 'Ex Teresa Arte Actual',
    address: 'Av. Juárez 39, Centro Histórico, 06000 Ciudad de México, CDMX',
    zone: 'Cuauhtémoc',
    theme: [
      'Arte Contemporáneo'
    ],
    days: [
      'Martes',
      'Miércoles',
      'Jueves',
      'Viernes',
      'Sábado',
      'Domingo'
    ],
    schedule: [
      'Martes a domingo: 10:00 - 17:00'
    ],
    price: {
      regular: 50,
      promo: {
        price: 0,
        description: 'Entrada libre los domingos'
      }
    }
  },
  {
    id: 'palacioCulturaBanamex',
    name: 'Palacio de Cultura Banamex (Palacio de Iturbide)',
    address: 'Av. 5 de Febrero 1, Centro Histórico, 06000 Ciudad de México, CDMX',
    zone: 'Cuauhtémoc',
    theme: [
      'Historia',
      'Cultura'
    ],
    days: [
      'Lunes',
      'Martes',
      'Miércoles',
      'Jueves',
      'Viernes',
      'Sábado',
      'Domingo'
    ],
    schedule: [
      'Lunes a domingo: 10:00 - 18:00'
    ],
    price: {
      regular: 45,
      promo: {
        price: 0,
        description: 'Entrada libre los domingos'
      }
    }
  },
  {
    id: 'museoBellasArtes',
    name: 'Museo del Palacio de Bellas Artes',
    address: 'Av. Juárez, Centro Histórico, 06050 Ciudad de México, CDMX',
    zone: 'Cuauhtémoc',
    theme: [
      'Arte',
      'Cultura'
    ],
    days: [
      'Martes',
      'Miércoles',
      'Jueves',
      'Viernes',
      'Sábado',
      'Domingo'
    ],
    schedule: [
      'Martes a domingo: 11:00 - 17:00'
    ],
    price: {
      regular: 70,
      promo: {
        price: 0,
        description: 'Entrada libre los domingos'
      }
    }
  },
  {
    id: 'museoSEP',
    name: 'Museo de Sitio de la SEP',
    address: 'República de Brasil 31, Centro Histórico, 06000 Ciudad de México, CDMX',
    zone: 'Cuauhtémoc',
    theme: [
      'Educación',
      'Cultura'
    ],
    days: [
      'Lunes',
      'Martes',
      'Miércoles',
      'Jueves',
      'Viernes'
    ],
    schedule: [
      'Lunes a viernes: 10:00 - 16:00'
    ],
    price: {
      regular: 0,
      promo: {
        price: 0,
        description: 'Entrada libre'
      }
    }
  },
  {
    id: 'museoCiudadYtorre',
    name: 'Museo La Ciudad y la Torre a través de los siglos',
    address: 'República de Brasil 33, Centro Histórico, 06000 Ciudad de México, CDMX',
    zone: 'Cuauhtémoc',
    theme: [
      'Historia',
      'Arquitectura'
    ],
    days: [
      'Martes',
      'Miércoles',
      'Jueves',
      'Viernes',
      'Sábado',
      'Domingo'
    ],
    schedule: [
      'Martes a domingo: 10:00 - 18:00'
    ],
    price: {
      regular: 20,
      promo: {
        price: 0,
        description: 'Entrada libre los domingos'
      }
    }
  },
  {
    id: 'museoEstampa',
    name: 'Museo Nacional de la Estampa (MUNAE)',
    address: 'Calle de Donceles 77, Centro Histórico, 06000 Ciudad de México, CDMX',
    zone: 'Cuauhtémoc',
    theme: [
      'Arte Gráfico',
      'Estampa'
    ],
    days: [
      'Lunes',
      'Martes',
      'Miércoles',
      'Jueves',
      'Viernes',
      'Sábado',
      'Domingo'
    ],
    schedule: [
      'Lunes a domingo: 10:00 - 18:00'
    ],
    price: {
      regular: 30,
      promo: {
        price: 0,
        description: 'Entrada libre los domingos'
      }
    }
  },
  {
    id: 'museoArteNacional',
    name: 'Museo Nacional de Arte (MUNAL)',
    address: 'Calle de Tacuba 8, Centro Histórico, 06000 Ciudad de México, CDMX',
    zone: 'Cuauhtémoc',
    theme: [
      'Arte Mexicano',
      'Internacional'
    ],
    days: [
      'Martes',
      'Miércoles',
      'Jueves',
      'Viernes',
      'Sábado',
      'Domingo'
    ],
    schedule: [
      'Martes a domingo: 10:00 - 17:00'
    ],
    price: {
      regular: 70,
      promo: {
        price: 0,
        description: 'Entrada libre los domingos'
      }
    }
  },
  {
    id: 'colegioSanIldefonso',
    name: 'Antiguo Colegio de San Ildefonso',
    address: 'Justo Sierra 16, Centro Histórico, 06000 Ciudad de México, CDMX',
    zone: 'Cuauhtémoc',
    theme: [
      'Historia',
      'Arte'
    ],
    days: [
      'Lunes',
      'Martes',
      'Miércoles',
      'Jueves',
      'Viernes',
      'Sábado',
      'Domingo'
    ],
    schedule: [
      'Lunes a domingo: 10:00 - 18:00'
    ],
    price: {
      regular: 50,
      promo: {
        price: 0,
        description: 'Entrada libre los domingos'
      }
    }
  },
  {
    id: 'museoCasaCarranza',
    name: 'Museo Casa de Carranza',
    address: 'Avenida 16 de Septiembre 16, Centro Histórico, 06000 Ciudad de México, CDMX',
    zone: 'Cuauhtémoc',
    theme: [
      'Historia',
      'Revolución Mexicana'
    ],
    days: [
      'Martes',
      'Miércoles',
      'Jueves',
      'Viernes',
      'Sábado',
      'Domingo'
    ],
    schedule: [
      'Martes a domingo: 10:00 - 18:00'
    ],
    price: {
      regular: 35,
      promo: {
        price: 0,
        description: 'Entrada libre los domingos'
      }
    }
  },
  {
    id: 'museoMUMEDI',
    name: 'Museo Mexicano del Diseño (MUMEDI)',
    address: 'Madero 74, Centro Histórico, 06000 Ciudad de México, CDMX',
    zone: 'Cuauhtémoc',
    theme: [
      'Diseño',
      'Arte'
    ],
    days: [
      'Lunes',
      'Martes',
      'Miércoles',
      'Jueves',
      'Viernes',
      'Sábado',
      'Domingo'
    ],
    schedule: [
      'Lunes a domingo: 10:00 - 19:00'
    ],
    price: {
      regular: 50,
      promo: {
        price: 0,
        description: 'Entrada libre los domingos'
      }
    }
  },
  {
    id: 'palacioNacional',
    name: 'Palacio Nacional',
    address: 'Plaza de la Constitución S/N, Centro Histórico, 06000 Ciudad de México, CDMX',
    zone: 'Cuauhtémoc',
    theme: [
      'Historia',
      'Cultura'
    ],
    days: [
      'Lunes',
      'Martes',
      'Miércoles',
      'Jueves',
      'Viernes'
    ],
    schedule: [
      'Lunes a viernes: 09:00 - 17:00'
    ],
    price: {
      regular: 0,
      promo: {
        price: 0,
        description: 'Entrada libre para mexicanos y residentes'
      }
    }
  },
  {
    id: 'recintoParlamentario',
    name: 'Recinto Parlamentario',
    address: 'Av. de los Insurgentes 49, Centro Histórico, 06000 Ciudad de México, CDMX',
    zone: 'Cuauhtémoc',
    theme: [
      'Historia',
      'Política'
    ],
    days: [
      'Lunes',
      'Martes',
      'Miércoles',
      'Jueves',
      'Viernes'
    ],
    schedule: [
      'Lunes a viernes: 10:00 - 17:00'
    ],
    price: {
      regular: 0,
      promo: {
        price: 0,
        description: 'Entrada libre'
      }
    }
  },
  {
    id: 'museoCaricatura',
    name: 'Museo de la Caricatura',
    address: 'República de Brasil 8, Centro Histórico, 06000 Ciudad de México, CDMX',
    zone: 'Cuauhtémoc',
    theme: [
      'Caricatura',
      'Arte Gráfico'
    ],
    days: [
      'Lunes',
      'Martes',
      'Miércoles',
      'Jueves',
      'Viernes',
      'Sábado',
      'Domingo'
    ],
    schedule: [
      'Lunes a domingo: 10:00 - 18:00'
    ],
    price: {
      regular: 20,
      promo: {
        price: 0,
        description: 'Entrada libre los domingos'
      }
    }
  },
  {
    id: 'recintoBenitoJuarez',
    name: 'Recinto de Homenaje a Don Benito Juárez',
    address: 'Av. Juárez 20, Centro Histórico, 06000 Ciudad de México, CDMX',
    zone: 'Cuauhtémoc',
    theme: [
      'Historia',
      'Política'
    ],
    days: [
      'Lunes',
      'Martes',
      'Miércoles',
      'Jueves',
      'Viernes'
    ],
    schedule: [
      'Lunes a viernes: 10:00 - 18:00'
    ],
    price: {
      regular: 0,
      promo: {
        price: 0,
        description: 'Entrada libre'
      }
    }
  },
  {
    id: 'museoTalavera',
    name: 'Museo de Sitio del Centro Cultural Casa Talavera',
    address: 'República de Brasil 12, Centro Histórico, 06000 Ciudad de México, CDMX',
    zone: 'Cuauhtémoc',
    theme: [
      'Arte Colonial'
    ],
    days: [
      'Lunes',
      'Martes',
      'Miércoles',
      'Jueves',
      'Viernes',
      'Sábado',
      'Domingo'
    ],
    schedule: [
      'Lunes a domingo: 10:00 - 18:00'
    ],
    price: {
      regular: 25,
      promo: {
        price: 0,
        description: 'Entrada libre los domingos'
      }
    }
  },
  {
    id: 'mujam',
    name: 'Museo del Juguete Antiguo México (MUJAM)',
    address: 'Dr. Olvera 15, Doctores, 06720 Ciudad de México, CDMX',
    zone: 'Cuauhtémoc',
    theme: [
      'Juguetes Antiguos'
    ],
    days: [
      'Martes',
      'Miércoles',
      'Jueves',
      'Viernes',
      'Sábado',
      'Domingo'
    ],
    schedule: [
      'Martes a domingo: 10:00 - 17:00'
    ],
    price: {
      regular: 70,
      promo: {
        price: 0,
        description: 'Entrada libre los domingos'
      }
    }
  },
  {
    id: 'museoCera',
    name: 'Museo de Cera de la Ciudad de México',
    address: 'Av. Juárez 51, Centro Histórico, 06050 Ciudad de México, CDMX',
    zone: 'Cuauhtémoc',
    theme: [
      'Cera',
      'Esculturas'
    ],
    days: [
      'Lunes',
      'Martes',
      'Miércoles',
      'Jueves',
      'Viernes',
      'Sábado',
      'Domingo'
    ],
    schedule: [
      'Lunes a domingo: 10:00 - 18:00'
    ],
    price: {
      regular: 220,
      promo: {
        price: 0,
        description: 'Entrada libre para menores de 5 años'
      }
    }
  },
  {
    id: 'museoPostal',
    name: 'Museo Postal y Filatélico',
    address: 'Calle del Correo Mayor 1, Centro Histórico, 06000 Ciudad de México, CDMX',
    zone: 'Cuauhtémoc',
    theme: [
      'Historia Postal'
    ],
    days: [
      'Martes',
      'Miércoles',
      'Jueves',
      'Viernes',
      'Sábado',
      'Domingo'
    ],
    schedule: [
      'Martes a domingo: 10:00 - 18:00'
    ],
    price: {
      regular: 30,
      promo: {
        price: 0,
        description: 'Entrada libre los domingos'
      }
    }
  },
  {
    id: 'mafh',
    name: 'Museo Archivo de la Fotografía (MAF)',
    address: 'República de Brasil 1, Centro Histórico, 06000 Ciudad de México, CDMX',
    zone: 'Cuauhtémoc',
    theme: [
      'Fotografía Histórica'
    ],
    days: [
      'Lunes',
      'Martes',
      'Miércoles',
      'Jueves',
      'Viernes'
    ],
    schedule: [
      'Lunes a viernes: 10:00 - 17:00'
    ],
    price: {
      regular: 40,
      promo: {
        price: 0,
        description: 'Entrada libre los martes'
      }
    }
  },
  {
    id: 'galeriaVelasco',
    name: 'Galería José María Velasco',
    address: 'Calle de Donceles 10, Centro Histórico, 06000 Ciudad de México, CDMX',
    zone: 'Cuauhtémoc',
    theme: [
      'Arte Mexicano'
    ],
    days: [
      'Martes',
      'Miércoles',
      'Jueves',
      'Viernes',
      'Sábado',
      'Domingo'
    ],
    schedule: [
      'Martes a domingo: 10:00 - 18:00'
    ],
    price: {
      regular: 0,
      promo: {
        price: 0,
        description: 'Entrada libre'
      }
    }
  },
  {
    id: 'temploMayor',
    name: 'Museo del Templo Mayor',
    address: 'Correo Mayor 1, Centro Histórico, 06000 Ciudad de México, CDMX',
    zone: 'Cuauhtémoc',
    theme: [
      'Arqueología Mexica'
    ],
    days: [
      'Lunes',
      'Martes',
      'Miércoles',
      'Jueves',
      'Viernes',
      'Sábado',
      'Domingo'
    ],
    schedule: [
      'Lunes a domingo: 09:00 - 20:00'
    ],
    price: {
      regular: 85,
      promo: {
        price: 0,
        description: 'Entrada libre los domingos para residentes locales'
      }
    }
  },
  {
    id: 'herbarioMedicinal',
    name: 'Herbario Medicinal del IMSS',
    address: 'Avenida Cuauhtémoc 330, Col. Doctores, 06720 Ciudad de México, CDMX',
    zone: 'Cuauhtémoc',
    theme: [
      'Botánica',
      'Medicina Tradicional'
    ],
    days: [
      'Lunes',
      'Martes',
      'Miércoles',
      'Jueves',
      'Viernes'
    ],
    schedule: [
      'Lunes a viernes: 09:00 - 14:00'
    ],
    price: {
      regular: 0,
      promo: {
        price: 0,
        description: 'Entrada libre'
      }
    }
  },
  {
    id: 'museoMilMunecas',
    name: 'Museo Casa de las Mil Muñecas',
    address: 'Manuel Carpio 121, Magdalena de las Salinas, 07760 Ciudad de México, CDMX',
    zone: 'Gustavo A. Madero',
    theme: [
      'Juguetes',
      'Muñecas'
    ],
    days: [
      'Martes',
      'Miércoles',
      'Jueves',
      'Viernes',
      'Sábado',
      'Domingo'
    ],
    schedule: [
      'Martes a domingo: 10:00 - 17:00'
    ],
    price: {
      regular: 60,
      promo: {
        price: 0,
        description: 'Entrada libre los domingos'
      }
    }
  },
  {
    id: 'xaltilolli',
    name: 'Centro de Interpretación Xaltilolli',
    address: 'Av. 16 de Septiembre, 5, Col. Pueblo Nuevo, 15000 Ciudad de México, CDMX',
    zone: 'Iztapalapa',
    theme: [
      'Arqueología Mexicana'
    ],
    days: [
      'Martes',
      'Miércoles',
      'Jueves',
      'Viernes',
      'Sábado',
      'Domingo'
    ],
    schedule: [
      'Martes a domingo: 10:00 - 17:00'
    ],
    price: {
      regular: 30,
      promo: {
        price: 0,
        description: 'Entrada libre los domingos'
      }
    }
  },
  {
    id: 'museoSHCP',
    name: 'Museo de Arte de la Secretaría de Hacienda y Crédito Público (SHCP)',
    address: 'Av. 5 de Febrero 24, Centro Histórico, 06060 Ciudad de México, CDMX',
    zone: 'Cuauhtémoc',
    theme: [
      'Arte Mexicano'
    ],
    days: [
      'Martes',
      'Miércoles',
      'Jueves',
      'Viernes',
      'Sábado',
      'Domingo'
    ],
    schedule: [
      'Martes a domingo: 10:00 - 17:00'
    ],
    price: {
      regular: 0,
      promo: {
        price: 0,
        description: 'Entrada libre'
      }
    }
  },
  {
    id: 'museoEco',
    name: 'Museo Experimental El Eco',
    address: 'Calle de Donceles 104, Centro Histórico, 06000 Ciudad de México, CDMX',
    zone: 'Cuauhtémoc',
    theme: [
      'Arte Contemporáneo'
    ],
    days: [
      'Martes',
      'Miércoles',
      'Jueves',
      'Viernes',
      'Sábado',
      'Domingo'
    ],
    schedule: [
      'Martes a domingo: 10:00 - 18:00'
    ],
    price: {
      regular: 30,
      promo: {
        price: 0,
        description: 'Entrada libre los domingos'
      }
    }
  },
  {
    id: 'mundoChocolate',
    name: 'Mundo Chocolate Museo (MUCHO)',
    address: 'Paseo de la Reforma 222, Juárez, 06600 Ciudad de México, CDMX',
    zone: 'Cuauhtémoc',
    theme: [
      'Historia del Chocolate'
    ],
    days: [
      'Martes',
      'Miércoles',
      'Jueves',
      'Viernes',
      'Sábado',
      'Domingo'
    ],
    schedule: [
      'Martes a domingo: 10:00 - 18:00'
    ],
    price: {
      regular: 150,
      promo: {
        price: 0,
        description: 'Descuento para grupos'
      }
    }
  },
  {
    id: 'museoForoValparaiso',
    name: 'Museo Foro Valparaíso',
    address: 'Valparaíso 4, Centro Histórico, 06000 Ciudad de México, CDMX',
    zone: 'Cuauhtémoc',
    theme: [
      'Arte Contemporáneo',
      'Cultura'
    ],
    days: [
      'Martes',
      'Miércoles',
      'Jueves',
      'Viernes',
      'Sábado',
      'Domingo'
    ],
    schedule: [
      'Martes a domingo: 10:00 - 18:00'
    ],
    price: {
      regular: 50,
      promo: {
        price: 0,
        description: 'Entrada libre los domingos'
      }
    }
  },
  {
    id: 'museoCCEMX',
    name: 'Museo de Sitio CCEMX-INAH',
    address: 'Avenida Juárez 20, Centro Histórico, 06000 Ciudad de México, CDMX',
    zone: 'Cuauhtémoc',
    theme: [
      'Cultura Mexicana'
    ],
    days: [
      'Lunes',
      'Martes',
      'Miércoles',
      'Jueves',
      'Viernes',
      'Sábado',
      'Domingo'
    ],
    schedule: [
      'Lunes a domingo: 10:00 - 18:00'
    ],
    price: {
      regular: 20,
      promo: {
        price: 0,
        description: 'Entrada libre los domingos'
      }
    }
  },
  {
    id: 'museoTecpan',
    name: 'Museo del Tecpan',
    address: 'Tecpan 10, Col. Centro, 06000 Ciudad de México, CDMX',
    zone: 'Cuauhtémoc',
    theme: [
      'Historia',
      'Cultura Prehispánica'
    ],
    days: [
      'Lunes',
      'Martes',
      'Miércoles',
      'Jueves',
      'Viernes',
      'Sábado'
    ],
    schedule: [
      'Lunes a sábado: 09:00 - 17:00'
    ],
    price: {
      regular: 0,
      promo: {
        price: 0,
        description: 'Entrada libre'
      }
    }
  },
  {
    id: 'museoCulturasMundo',
    name: 'Museo Nacional de las Culturas del Mundo',
    address: 'Moneda 13, Centro Histórico, 06060 Ciudad de México, CDMX',
    zone: 'Cuauhtémoc',
    theme: [
      'Culturas del Mundo'
    ],
    days: [
      'Lunes',
      'Martes',
      'Miércoles',
      'Jueves',
      'Viernes',
      'Sábado',
      'Domingo'
    ],
    schedule: [
      'Lunes a domingo: 09:00 - 20:00'
    ],
    price: {
      regular: 85,
      promo: {
        price: 0,
        description: 'Entrada libre los domingos'
      }
    }
  },
  {
    id: 'museoFranzMayer',
    name: 'Museo Franz Mayer',
    address: 'Avenida Hidalgo 45, Centro Histórico, 06000 Ciudad de México, CDMX',
    zone: 'Cuauhtémoc',
    theme: [
      'Arte Decorativo'
    ],
    days: [
      'Martes',
      'Miércoles',
      'Jueves',
      'Viernes',
      'Sábado',
      'Domingo'
    ],
    schedule: [
      'Martes a domingo: 10:00 - 17:00'
    ],
    price: {
      regular: 45,
      promo: {
        price: 0,
        description: 'Entrada libre los domingos'
      }
    }
  },
  {
    id: 'museoMemoriaTolerancia',
    name: 'Museo Memoria y Tolerancia',
    address: 'Avenida Juárez 8, Centro Histórico, 06010 Ciudad de México, CDMX',
    zone: 'Cuauhtémoc',
    theme: [
      'Derechos Humanos',
      'Tolerancia'
    ],
    days: [
      'Martes',
      'Miércoles',
      'Jueves',
      'Viernes',
      'Sábado',
      'Domingo'
    ],
    schedule: [
      'Martes a domingo: 10:00 - 18:00'
    ],
    price: {
      regular: 45,
      promo: {
        price: 0,
        description: 'Entrada libre los domingos'
      }
    }
  },
  {
    id: 'museoNacionalArquitectura',
    name: 'Museo Nacional de Arquitectura',
    address: 'Palacio de Bellas Artes, Av. Juárez, Centro Histórico, 06050 Ciudad de México, CDMX',
    zone: 'Cuauhtémoc',
    theme: [
      'Arquitectura Mexicana'
    ],
    days: [
      'Martes',
      'Miércoles',
      'Jueves',
      'Viernes',
      'Sábado',
      'Domingo'
    ],
    schedule: [
      'Martes a domingo: 10:00 - 17:00'
    ],
    price: {
      regular: 40,
      promo: {
        price: 0,
        description: 'Entrada libre los domingos'
      }
    }
  },
  {
    id: 'museoJugueteArteObjetoFrida',
    name: 'Museo del Juguete Arte-Objeto Frida',
    address: 'Calle de Donceles 104, Centro Histórico, 06000 Ciudad de México, CDMX',
    zone: 'Cuauhtémoc',
    theme: [
      'Juguetes',
      'Arte Popular'
    ],
    days: [
      'Lunes',
      'Martes',
      'Miércoles',
      'Jueves',
      'Viernes',
      'Sábado',
      'Domingo'
    ],
    schedule: [
      'Lunes a domingo: 10:00 - 17:00'
    ],
    price: {
      regular: 40,
      promo: {
        price: 0,
        description: 'Descuento para grupos'
      }
    }
  },
  {
    id: 'museoVivoMuralismo',
    name: 'Museo Vivo del Muralismo',
    address: 'Avenida Mexico Coyoacán 25, Col. Coyoacán, 04000 Ciudad de México, CDMX',
    zone: 'Coyoacán',
    theme: [
      'Muralismo Mexicano'
    ],
    days: [
      'Lunes',
      'Martes',
      'Miércoles',
      'Jueves',
      'Viernes',
      'Sábado',
      'Domingo'
    ],
    schedule: [
      'Lunes a domingo: 10:00 - 18:00'
    ],
    price: {
      regular: 50,
      promo: {
        price: 0,
        description: 'Entrada libre los domingos'
      }
    }
  },
  {
    id: 'museoPerfumeMUPE',
    name: 'Museo del Perfume MUPE',
    address: 'Paseo de la Reforma 396, Cuauhtémoc, 06600 Ciudad de México, CDMX',
    zone: 'Cuauhtémoc',
    theme: [
      'Historia del Perfume'
    ],
    days: [
      'Lunes',
      'Martes',
      'Miércoles',
      'Jueves',
      'Viernes',
      'Sábado',
      'Domingo'
    ],
    schedule: [
      'Lunes a domingo: 10:00 - 18:00'
    ],
    price: {
      regular: 60,
      promo: {
        price: 0,
        description: 'Descuento en entradas para grupos'
      }
    }
  }
]
