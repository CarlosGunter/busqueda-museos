/**
 * Función que crea una clase de error personalizada.
 * 
 * @param alias Nombre del error.
 * @returns Una nueva clase de error personalizada.
 */
const errorFactory = (alias: string) => {
  return class CreateError extends Error {
    constructor(message: string) {
      super(message);
      this.name = alias;
    }
  }
}

/** Back errors */
export const NoParamsError = errorFactory('NoParamsError')

/** Front errors */
