const mockery = require('mockery');
const chai = require('chai');
const app =  require('../index');

const expect = chai.expect;

describe('CalculadoraBinaria', () => {
  beforeEach(() => {
    mockery.enable({
      warnOnReplace: false,
      warnOnUnregistered: false,
      useCleanCache: true
    });
  });
  afterEach(() => {
    mockery.disable();
    mockery.deregisterAll();
  });


  //Construir test
  it('Prueba 1: Input binario 11001 a decimal igual a 25', () => {
    let resultado = app.convertirBinarioDecimal('11001');
    chai.assert.equal( resultado, '25')
  });

  it('Prueba 2: Input binario incorrecto 11?001 a decimal igual a null', () => {
    let resultado = app.convertirBinarioDecimal('11?001');
    chai.assert.equal( resultado, null)
  });
});