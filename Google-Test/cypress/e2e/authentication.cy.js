import "cypress-real-events";

import "../../support/commands";

import { GOOGLE_URL } from "../../support/constants";

describe("Authentication", () => {
  it("Successful login into the system", () => {
    const myWebsiteUrl = "https://www.mywebsite.com";

    cy.visit(myWebsiteUrl);
    cy.login();
    cy.url().should("contain", `${myWebsiteUrl}/profile`); // when we want to add a string to our const we can use the '$' sign for the indentation
    cy.url().should("not.contain.text", GOOGLE_URL); // for reference how to use a global const, we can check that our url does not equal google's url
  });
});
