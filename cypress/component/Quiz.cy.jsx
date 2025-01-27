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
})