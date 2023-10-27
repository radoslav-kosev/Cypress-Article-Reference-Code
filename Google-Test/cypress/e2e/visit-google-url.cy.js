import "cypress-real-events";

import "../../support/commands";

import { GOOGLE_URL } from "../../support/constants";

describe("Most basic Google test", () => {
  it("Successfully opens Google url", () => {
    cy.visit(GOOGLE_URL);
    cy.url().should("eq", GOOGLE_URL);
  });
});
