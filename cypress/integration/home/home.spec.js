describe("Home page", () => {
    beforeEach(() => {
      cy.visit('/')
    })
it("displays the header for the GMDB site on the home page", () => {
  // the beforeEach should have the main page already open

  // cy.get('whatever we name the header section').should('exist')
  // cy.get('whatever we name the title field').should('contain','GMDB')
  // cy.get('whatever we name the home link field').should('contain','Home')
  // cy.get('whatever we name the login link field').should('contain','Login')
  // cy.get('whatever we name the search input field').should('exist')
  // cy.get('whatever we name the search button').should('exist')
    
})

it("displays browsable movies", () => {
  // cy.get('whatever we name the section that contains the movies').should('exist')
  // cy.get('whatever we name the navigation bar for the section').should('be enabled')
  // cy.get('however you refer to a mouse wheel even').should('scroll')
  // cy.get('however you refer to a nested JSON object').should('exist')
  // cy.get('however you refer to the child JSON objects, maybe a specific one like the first in the parent JSON').should('contain', 'movie poster images')
   
})

it("searches for movies that are available on the site", () => {
  //NOTE: use a smaller subset of the movie catalog so test can run faster, maybe 20 or so
  //NOTE: use a search term that will return a small number of matches, maybe 5 to 10

  // cy.enter(in search input field using a search-term matching movies on the site).submit
  // cy.(get the title attributes of the entire movie catalog).put them in an array
  // cy.(get the title attributes of the search results).put them in an array
  // cy.compare(iterating through the search results array, the titles of the search results).should('contain','search-term')
  // cy.compare(iterating through the entire catalog array, the titles of the search results).should('not contain','search-term')
})

it("searches for movies that are NOT available on the site", () => {
  //NOTE: use a smaller subset of the movie catalog so test can run faster, maybe 20 or so
  //NOTE: use a search term that will not match any title in the movie catalog

  // cy.enter(in search input field using a search-term for movies NOT on the site).submit
  // cy.(get the title attributes of the search results).put them in an array
  // cy.compare(iterating through the entire catalog array, the titles of the search results).should('not contain','search-term')
  // cy.get(whatever contains the message about no results).should('contain', 'error message text')
})

it("lets me log in from the home page")
// from home page, click login link
// on login page, enter valid credentials and submit

// cy.get(login message).should('contain','successful login message' )

}) // end of describe