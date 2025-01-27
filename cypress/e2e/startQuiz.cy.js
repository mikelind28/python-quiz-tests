// make sure the API call actually receives 10 questions when starting the quiz
describe('Start Quiz', () => {
    it('should GET 10 random quiz questions', () => {
        cy.intercept('GET', '/api/questions/random').as('getQuestions');
        cy.visit('http://localhost:3000');
        cy.get('button').click();
        cy.wait('@getQuestions').then(({ request, response }) => {
          request.body // will be of type UserReq
          if (response) {
            response.body // will be of type UserRes
          }
        }).its('response.body.length').should('eq', 10);
      })
})