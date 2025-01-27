// make sure the quiz opens at localhost:3000
describe('Open Quiz', () => {
    it('visits the start quiz page', () => {
      cy.visit('http://localhost:3000')
    });
})

