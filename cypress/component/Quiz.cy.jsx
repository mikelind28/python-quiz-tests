// import React from 'react';
import Quiz from '../../client/src/components/Quiz';
// import questions from '../fixtures/questions.json';

describe('<Quiz />', () => {
    it('should render', () => {
        cy.mount(<Quiz />)
    })

    it('should have a Start button with "Start Quiz" as the text content', () => {
        cy.mount(<Quiz />)
        cy.get('button').should('have.text', 'Start Quiz')
    })

    it('should load 4 questions once the quiz is started', () => {
        cy.mount(<Quiz />)
        cy.get('button').click()
        cy.get('button').should('have.length', 4)
    })
})