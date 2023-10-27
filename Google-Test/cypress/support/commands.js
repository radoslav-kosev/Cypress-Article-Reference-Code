import { PASSWORD_INPUT_FIELD } from "../../support/constants";

Cypress.Commands.add("login", () => {
  cy.visit("https://www.mywebsite.com");
  cy.get("#username-input-field").type("My username");
  cy.get(PASSWORD_INPUT_FIELD).type("My password");
  cy.get("#login-button").click();
});

