describe("Home page", () => {
    beforeEach(() => {
      cy.visit('/')
    })
it("displays browsable movies", () => {
    cy.get('poster').should('contain', 'https://m.media-amazon.com/images/M/MV5BMTQzMDEyODYwNF5BMl5BanBnXkFtZTgwOTcxMDgwMjE@._V1_SX300.jpg')
})

}) // end of describe