describe("Loading page", () => {
  it("Successfully loads", () => {
    cy.visit(Cypress.env("base_url"));
  });
});

describe("Mounted elements", () => {
  beforeEach(() => {
    cy.visit(Cypress.env("base_url"));
  });

  it("Pagination buttons are mounted", () => {
    cy.get("#next_button").contains("Suivant");
    cy.get("#previous_button").contains("Précédent");
  });
  it("Previous button is disabled", () => {
    cy.get("#previous_button").contains("Précédent").should("be.disabled");
  });
  it("List client element is mounted ", () => {
    cy.get("#list_client_element");
  });
});

describe("Navigation requests", () => {
  let REQUESTED_PAGE = 2;
  it("Making GET request when NEXT button is clicked", () => {
    cy.visit(Cypress.env("base_url"));
    cy.get("#next_button")
      .contains("Suivant")
      .click()
      .request(
        Cypress.env("api_url") +
          Cypress.env("client_url") +
          Cypress.env("api_page_param") +
          REQUESTED_PAGE
      );
  });
  it("Making GET request when COMMANDES button is clicked", () => {
    cy.visit(Cypress.env("base_url"));
    cy.get("#navigation_button_commandes").contains("Commandes").click();
    cy.visit(Cypress.env("base_url"));
  });
});
