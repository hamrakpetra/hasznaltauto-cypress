declare global {
    namespace Cypress {
        interface Chainable {
            acceptDidomiConsent(): Chainable<void>;
        }
    }
}

Cypress.Commands.add("acceptDidomiConsent", () => {
    cy.session(
        "didomi-consent",
        () => {
            cy.visit("/");

            cy.get("#didomi-notice-agree-button")
                .should("be.visible")
                .click();

            cy.get('[data-testid="notice"]')
                .should("not.exist");
        },
        {
            cacheAcrossSpecs: true,
        }
    );
});

export {};