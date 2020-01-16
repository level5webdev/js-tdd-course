/* eslint-disable no-undef */
// eslint-disable-next-line no-undef
describe('Main', () => {
  describe('Method A', () => {
    context('Case 1', () => {
      it('should happen blablabla', () => {
        // espera oque aconteça
        // Entrada de dados
        // Espera retornar (4) => true | (3) => broken false
        throw new Error('just an error');
      });
    });
    context('Case 2 ', () => {
      it('should happen blablabla', () => {
        // espera oque aconteça
        // Entrada de dados
        // Espera retornar (4) => true | (3) => broken false
        throw new Error('just an error');
      });
    });
  });

  describe('Method B', () => {});
});
