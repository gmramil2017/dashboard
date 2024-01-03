import { restore } from "e2e/support/helpers";

describe("scenarios > about Dashboard", () => {
  beforeEach(() => {
    restore();
    cy.signInAsAdmin();

    cy.visit("/");
    cy.icon("gear").click();
    // eslint-disable-next-line no-unscoped-text-selectors -- deprecated usage
    cy.findByText("About Dashboard").click();
  });

  it.skip("should display correct Dashboard version (metabase#15656)", () => {
    // eslint-disable-next-line no-unscoped-text-selectors -- deprecated usage
    cy.findByText(/You're on version v[01](\.\d+){2,3}(-[\w\d]+)?/i);
    // eslint-disable-next-line no-unscoped-text-selectors -- deprecated usage
    cy.findByText(/Built on \d{4}-\d{2}-\d{2}/);

    // eslint-disable-next-line no-unscoped-text-selectors -- deprecated usage
    cy.findByText("Branch: ?").should("not.exist");
    // eslint-disable-next-line no-unscoped-text-selectors -- deprecated usage
    cy.findByText("Hash: ?").should("not.exist");
  });
});
