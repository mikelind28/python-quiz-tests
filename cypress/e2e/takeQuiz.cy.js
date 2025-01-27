import mockQuestions from '../fixtures/mockQuiz.json'

describe('Start Quiz', () => {
    // this test simulates a user taking the quiz with mock data and getting all of the answers correct
    it('should simulate taking the quiz', () => {
        cy.intercept('GET', '/api/questions/random', mockQuestions).as('getQuestions');
        cy.visit('http://localhost:3000');
        cy.get('button').click();
        cy.wait('@getQuestions').then(({ request, response }) => {
          request.body // will be of type UserReq
          if (response) {
            response.body // will be of type UserRes
          }
        }).its('response.body').should('deep.equal', mockQuestions);

        // each simulated click below selects the correct answer based off of the mockQuiz data
        // Q1
        cy.get('[cy-data="answer-array"] div button').should(($p) => {
            $p[1].click();
        })

        // Q2
        cy.get('[cy-data="answer-array"] div button').should(($p) => {
            $p[2].click();
        })

        // Q3
        cy.get('[cy-data="answer-array"] div button').should(($p) => {
            $p[2].click();
        })

        // Q4
        cy.get('[cy-data="answer-array"] div button').should(($p) => {
            $p[2].click();
        })

        // Q5
        cy.get('[cy-data="answer-array"] div button').should(($p) => {
            $p[1].click();
        })

        // Q6
        cy.get('[cy-data="answer-array"] div button').should(($p) => {
            $p[0].click();
        })

        // Q7
        cy.get('[cy-data="answer-array"] div button').should(($p) => {
            $p[0].click();
        })

        // Q8
        cy.get('[cy-data="answer-array"] div button').should(($p) => {
            $p[1].click();
        })

        // Q9
        cy.get('[cy-data="answer-array"] div button').should(($p) => {
            $p[1].click();
        })

        // Q10
        cy.get('[cy-data="answer-array"] div button').should(($p) => {
            $p[1].click();
        })

        // once complete, the quiz dislays a score of 10/10
        cy.get('[cy-data="success-message"]').should('have.text', 'Your score: 10/10')
      })
})