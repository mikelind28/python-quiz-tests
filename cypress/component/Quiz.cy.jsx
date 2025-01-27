import Quiz from '../../client/src/components/Quiz';

describe('<Quiz />', () => {
    // basic render test
    it('should render', () => {
        cy.mount(<Quiz />)
    })

    // make sure it opens with the "Start Quiz" button
    it('should have a Start button with "Start Quiz" as the text content', () => {
        cy.mount(<Quiz />)
        cy.get('button').should('have.text', 'Start Quiz')
    })

    // make sure it loads up 4 questions after the quiz starts
    it('should load 4 questions once the quiz is started', () => {
        cy.mount(<Quiz />)
        cy.get('button').click()
        cy.get('button').should('have.length', 4)
    })
})