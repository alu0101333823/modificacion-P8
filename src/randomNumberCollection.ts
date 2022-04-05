
/**
 * Clase iterable que guarda números en una estructura de datos
 * tipo Set<number>
 */
export class RandomNumberCollection implements Iterable<number> {
  private values: Set<number>; 

  /**
   * Constructor de la clase
   * @param values números con los que inicializamos la clase
   */
  constructor(values: number[]) {
    this.values = new Set<number>();
    values.forEach(element => {
      this.values.add(element);  
    });
  }

  /**
   * Definimos este método para que sea iterable
   */
  [Symbol.iterator](): Iterator<number> {
    return this.values.values();
  }

  /**
   * Añade números al conjunto
   * @param val número a añadir
   */
  addNumber(val: number) {
    this.values.add(val);
  }

  /**
   * Devuelve el conjunto de números
   */
  getValues() {
    return this.values;
  }

  /**
   * Imprime los valores
   */
  printValues() {
    this.values.forEach(element => {
      console.log(element);
    });
  }
}
