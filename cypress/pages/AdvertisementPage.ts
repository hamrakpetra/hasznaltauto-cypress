class AdvertisementPage {
    visit(path: string) {
        cy.visit(path);
    }

    getParkingButton() {
        return cy.get('[data-controller="details--parking-button"]');
    }

    addToParking() {
        this.getParkingButton().click();
    }

    getEmailRevealButton() {
        return cy.get('[data-testid="seller-email"]').first();
    }

    getPhoneRevealButton() {
        return cy.get('[data-testid="seller-phone-number-primary"]').first();
    }

    revealEmail() {
        this.getEmailRevealButton().click();
    }

    revealPhone() {
        this.getPhoneRevealButton().click();
    }

    getRevealedEmail() {
        return cy.get(
            '[data-controller="contact-reveal"] a[href^="mailto:"]'
        ).first();
    }

    getRevealedPhone() {
        return cy.get(
            '[data-controller="contact-reveal"] a[href^="tel:"]'
        ).first();
    }

    getFinancingLink() {
        return cy.contains("a", "Finanszírozási kalkulátor");
    }
}

export default new AdvertisementPage();