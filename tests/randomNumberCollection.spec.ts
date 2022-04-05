import 'mocha';
import {expect} from 'chai';
import {RandomNumber} from '../src/randomNumber'
import {RandomNumberCollection} from '../src/randomNumberCollection'

const random = RandomNumber.getRandomNumberInstance();
const randomCollection = new RandomNumberCollection([random.getRandomFloatFromZeroToOne(), 
    random.getRandomFloatFromZeroToOne()]);

describe('Pruebas clase RandomNumberCollection', () => {
  it('Es instancia de la clase', () => {
    expect(randomCollection).to.be.instanceOf(RandomNumberCollection);
  });

  it('Devuelve un conjunto Set con los valores', () => {
    expect(randomCollection.getValues()).to.be.instanceOf(Set);
  });

  it('Se puede iterar', () => {
    expect([randomCollection].forEach(element => {
      element.printValues();
    })).to.be.undefined;
  });

  it('Añade valores al conjunto', () => {
    expect(randomCollection.addNumber(9)).to.be.undefined;
  });
});