const URL = 'http://zero.webappsecurity.com/index.html'
const SEARCHTERM = '#searchTerm'

class searchPage {
    static visit() {
        cy.visit(URL)
    }

    static fillsearchterm(online ) {
        cy.get(SEARCHTERM).type(online )
    }
}

export default searchPage