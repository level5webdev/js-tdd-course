/* eslint-disable no-unused-expressions */
/* eslint-disable no-undef */
const { expect } = require('chai');

describe('Main', () => {
  let arr;

  // roda uma vez, antes do bloco
  before(() => {
    // inicia uma conexao no banco
    // cria uma conjuto de dados
    // console.log('before');
  });

  // roda toda vez, antes de cada bloco
  beforeEach(() => {
    // console.log('beforeach');
    arr = [1, 2, 3];
  });

  // roda uma vez, depois do bloco
  after(() => {
    // fecha conexão com banco
    // apaga esse conjuto de dados
    // console.log('after');
  });

  // roda uma vez, deois de cada bloco
  afterEach(() => {
    // console.log('afterEach');
  });

  // testa tipos ou se existe (smok test)
  it('should be an array', () => {
    expect(arr).to.be.a('array');
  });

  it('should have a siz of 4 when push another valus to th array', () => {
    arr.push(4);
    expect(arr).to.have.lengthOf(4);
  });

  it('should return true pop 3 when from the array', () => {
    expect(arr.pop() === 3).to.be.true;
  });

  it('should remove the value 3 whrn pop in the array', () => {
    arr.pop();
    expect(arr).to.not.include(3);
  });

  it('should have a siz of 2 when pop a value from the aray', () => {
    arr.pop();
    expect(arr).to.have.lengthOf(2);
  });
});
