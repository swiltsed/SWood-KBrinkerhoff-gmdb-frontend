describe("Detail page", () => {
    beforeEach(() => {
      cy.visit('/')
    })

    it("displays the header for the GMDB site on a detail page", () => {
        // We will need to open the detail page of any movie, perhaps using the 1st item in the movie list

        // cy.get('whatever we name the header section').should('exist')
        // cy.get('whatever we name the title field').should('contain','GMDB')
        // cy.get('whatever we name the home link field').should('contain','Home')
        // cy.get('whatever we name the login link field').should('contain','Login')
        // cy.get('whatever we name the search input field').should('exist')
        // cy.get('whatever we name the search button').should('exist')
          
      })

    it("displays the details of the selected movie", () => {
        // We will need to open the detail page of a particular movie, in this example "The Godfather"
        // We will need to get the movie details from the movie's JSON

        // cy.get('movieTitle').should.('contain', 'The Godfather')
        // cy.get('movieReleaseDate').should.('contain', 'Released Mar 24,1972')
        // cy.get('movieGenre').should.('contain', 'Crime,Drama')
        // cy.get('movieCast').should.('contain', 'Marlon Brando, Al Pacino, James Caan, Richard S. Castellano')
        //cy.get('moviePoster').should('contain', 'posterLink')
    })

    it("searches for movies that are available on the site", () => {
        //NOTE: use a smaller subset of the movie catalog so test can run faster, maybe 20 or so
        //NOTE: use a search term that will return a small number of matches, maybe 5 to 10
        // We will need to open the detail page of a particular movie

        // cy.enter(in search input field using a search-term matching movies on the site).submit
        // cy.(get the title attributes of the entire movie catalog).put them in an array
        // cy.(get the title attributes of the search results).put them in an array
        // cy.compare(iterating through the search results array, the titles of the search results).should('contain','search-term')
        // cy.compare(iterating through the entire catalog array, the titles of the search results).should('not contain','search-term')
      })
      
      it("searches for movies that are NOT available on the site", () => {
        //NOTE: use a smaller subset of the movie catalog so test can run faster, maybe 20 or so
        //NOTE: use a search term that will not match any title in the movie catalog
        // We will need to open the detail page of a particular movie
        
        // cy.enter(in search input field using a search-term for movies NOT on the site).submit
        // cy.(get the title attributes of the search results).put them in an array
        // cy.compare(iterating through the entire catalog array, the titles of the search results).should('not contain','search-term')
        // cy.get(whatever contains the message about no results).should('contain', 'error message text')
      })


}) // end of describe