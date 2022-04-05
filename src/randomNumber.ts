
/**
 * Clase que genera números aleatorios. Se utilizará el patrón de diseño
 * Singleton.
 */
export class RandomNumber {
  private static randomNumberInstance: RandomNumber;

  /**
   * Constructor privado para seguir dicho patrón de diseño
   */
  private constructor() {
  }

  /**
   * Método get que devuelve la instancia de la clase
   */
  public static getRandomNumberInstance() {
    if (!RandomNumber.randomNumberInstance) {
      RandomNumber.randomNumberInstance = new RandomNumber();
    }
    return RandomNumber.randomNumberInstance;
  }

  /**
   * Devuelve un pseudoaleatorio entre 0 y 1. 
   * Es float
   */
  getRandomFloatFromZeroToOne() {
    return Math.random();
  }
  
  /**
   * Devuelve un pseudoaleatorio entre dos valores
   * dados. Es float
   * @param m máximo
   * @param n mínimo
   */
  getRandomFloatFromParams(n: number, m: number) {
    return Math.random() * (m - n) + n;
  }

  /**
   * Devuelve un entero entre dos valores dados. 
   * @param m máximo
   * @param n mínimo
   */
  getRandomIntFromParams(n: number, m: number) {
    return Math.floor(Math.random() * (m - n) + n);
  }
}
