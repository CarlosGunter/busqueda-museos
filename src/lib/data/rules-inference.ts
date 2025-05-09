// Las reglas de inferencia son un conjunto de reglas que se utilizan para inferir información adicional a partir de la información existente. Estas reglas se utilizan para clasificar y categorizar la información en función de ciertos criterios.
// Cada clave son las opciones que se muestran en el cuestionario de la página
// Cada valor es el conjunto de caracteristicas de cada museo que se relaciona con su clave

export const DICIPLINE_RULES = {
  arte: new Set<string>(['Arte', 'Arte Sacro', 'Arte Contemporáneo', 'Fotografía', 'Arte Prehispánico', 'Acuarela', 'Vida de Frida Kahlo', 'Arte, Ciencia', 'Arte Moderno', 'Contemporáneo', 'Diseño', 'Artes Decorativas', 'Arte Mexicano', 'Arte Colonial', 'Escultura', 'Arte Religioso', 'Artesanía', 'Arte Mexicano Contemporáneo', 'Pintura Clásica', 'Arte Gráfico', 'Estampa', 'Caricatura', 'Cera', 'Esculturas', 'Arte Decorativo', 'Arte Popular', 'Muralismo Mexicano', 'Cultura Popular', 'Cultura Pop', 'Ciencia Ficción', 'Cine', 'Cultura', 'Culturas Populares', 'Tradiciones Locales', 'Arquitectura', 'Curiosidades', 'Tradiciones Indígenas', 'Juguetes', 'Juguetes Antiguos', 'Muñecas', 'Arquitectura Mexicana']),
  historia: new Set<string>(['Historia', 'Historia Religiosa', 'Historia del Ferrocarril', 'Historia Urbana', 'Historia Social', 'Historia Prehispánica', 'Memoria Histórica', 'Historia de México', 'Historia Militar', 'Patrimonio', 'Patrimonio Virreinal', 'Arqueología Prehispánica', 'Historia Regional', 'Historia Política de México', 'Historia Contemporánea', 'Historia de la Revolución Mexicana', 'Historia de la Comunicación', 'Historia de la Medicina', 'Historia del Ferrocarril en México', 'Historia de la Policía en México', 'Historia de la Moneda', 'Historia de la Inquisición', 'Historia Constitucional', 'Historia de la Odontología', 'Historia Funeraria', 'Historia del Calzado', 'Historia de la Ciudad de México', 'Revolución Mexicana', 'Historia Postal', 'Fotografía Histórica', 'Arqueología Mexica', 'Historia del Chocolate', 'Historia del Perfume', 'Arqueología', 'Cartografía', 'Feminismo', 'Cultura', 'Cultura Comunitaria', 'Tradiciones Locales', 'Cultura Prehispánica', 'Cultura Bíblica', 'Cultura Mexicana', 'Cultura Aeroportuaria', 'Agricultura Chinampera', 'Cultura de Xochimilco', 'Cultura Contemporánea', 'Cultura Judía en México', 'Charrería', 'Tradiciones Mexicanas', 'Cultura de la UNAM', 'Fenómenos Extraordinarios', 'Culturas del Mundo']),
  lengua: new Set<string>(['Literatura', 'Literatura Mexicana', 'Medios de Comunicación', 'Cultura Comunitaria', 'Tradiciones Locales', 'Cultura Bíblica', 'Educación Infantil', 'Tradiciones Indígenas']),
  ciencias_sociales: new Set<string>(['Política', 'Feminismo', 'Cultura', 'Fotografía', 'Cine', 'Religioso', 'Arte Religioso', 'Caricatura', 'Religión', 'Cultura Popular', 'Cultura Pop', 'Ciencia Ficción', 'Cultura', 'Culturas Populares', 'Historia Religiosa', 'Historia Urbana', 'Historia Social', 'Memoria Histórica', 'Militar', 'Historia Política de México', 'Historia de la Revolución Mexicana', 'Historia de la Policía en México', 'Historia de la Moneda', 'Historia de la Inquisición', 'Historia Constitucional', 'Revolución Mexicana', 'Fotografía Histórica', 'Cultura Comunitaria', 'Tradiciones Locales', 'Cultura Prehispánica', 'Cultura Bíblica', 'Cultura Alimentaria', 'Antropología', 'Seguridad Pública', 'Cultura Contemporánea', 'Cultura Judía en México', 'Tradiciones Mexicanas', 'Cultura de la UNAM', 'Curiosidades', 'Mujer', 'Sociedad', 'Derechos Humanos', 'Diplomacia', 'Tradiciones Indígenas', 'Educación', 'Internacional', 'Culturas del Mundo', 'Tolerancia', 'Criminología', 'Gastronomía Mexicana', 'Bebidas Tradicionales', 'Gastronomía']),
  matematica: new Set<string>(['Economía', 'Finanzas', 'Economía, Finanzas', 'Arquitectura']),
  geografia: new Set<string>(['Geología', 'Geología Urbana', 'Ciencias de la Tierra', 'Cultura Regional', 'Geografía', 'Transporte']),
  fisica: new Set<string>(['Astronomía', 'Tecnología', 'Tecnologia', 'Ciencia Ficción', 'Arquitectura', 'Fenómenos Extraordinarios']),
  biologia: new Set<string>(['Ciencia', 'Paleontología', 'Ciencia Veterinaria', 'Naturaleza', 'Cambio Climático', 'Medio Ambiente', 'Conservación Animal', 'Conservación', 'Biología', 'Botánica', 'Medicina', 'Salud', 'Medicina Tradicional', 'Cultura Alimentaria', 'Agroindustria', 'Antropología', 'Agricultura Chinampera', 'Deporte'])
}
export const ZONE_RULES = {
  norte: new Set<string>(['Gustavo A. Madero', 'Venustiano Carranza', 'Iztacalco']),
  sur: new Set<string>(['Benito Juárez', 'Coyoacán', 'Tlalpan', 'Magdalena Contreras']),
  poniente: new Set<string>(['Cuauhtémoc', 'Miguel Hidalgo', 'Álvaro Obregón', 'Azcapotzalco', 'Cuajimalpa de Morelos']),
  oriente: new Set<string>(['Iztapalapa', 'Tláhuac', 'Xochimilco', 'Milpa Alta'])
}
export const COMPANIONS_RULES = {
  infante: ['niños', 'menores de edad'],
  adulto_mayor: ['adulto', 'adulto mayor'],
  discapacidad: ['discapacidad', 'persona con discapacidad'],
  profesor: ['profesor', 'maestro'],
  estudiante: ['estudiante', 'alumno']
}
export const BUDGET_RULES = {
  gratis: { min: 0, max: 0 },
  min0_Max50: { min: 0, max: 50 },
  min50_Max100: { min: 50, max: 100 },
  min100_Max250: { min: 100, max: 250 },
  min250_Max500: { min: 250, max: 500 },
  min500: { min: 500, max: Infinity }
}
export const ACTIVITIES_RULES = {
  libre: new Set<string>([]),
  interiores: new Set<string>([]),
  ambos: new Set<string>([])
}
