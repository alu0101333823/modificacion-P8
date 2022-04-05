import 'mocha';
import {expect} from 'chai';
import {RandomNumber} from '../src/randomNumber'

const random = RandomNumber.getRandomNumberInstance();

describe('Pruebas de la Clase RandomNumber', () => {
  it('Método que devuelve la instancia única de la clase', () => {
    expect(random).to.be.instanceOf(RandomNumber);
  });

  it('Método que devuelve float entre 0 y 1', () => {
    expect(random.getRandomFloatFromZeroToOne()).to.be.a('number');
    expect(random.getRandomFloatFromZeroToOne()).to.be.within(0, 1);

  });

  it('Método que devuelve float entre m y n', () => {
    expect(random.getRandomFloatFromParams(2, 4)).to.be.a('number');
    expect(random.getRandomFloatFromParams(2, 4)).to.be.within(2, 4);

  });

  it('Método que devuelve Integer entre m y n', () => {
    expect(random.getRandomIntFromParams(5, 10)).to.be.a('number');
    expect(random.getRandomIntFromParams(5, 10)).to.be.within(5, 10);
  });
});
