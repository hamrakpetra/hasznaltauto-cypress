class RegistrationPage {
    visit() {
        cy.visit("/regisztracio");
    }

    enterName(name: string) {
        cy.get('[name="name"]').clear().type(name).blur();
    }

    enterEmail(email: string) {
        cy.get('[name="email"]').clear().type(email).blur();
    }

    enterConfirmEmail(email: string) {
        cy.get('[name="confirmEmail"]').clear().type(email).blur();
    }

    selectPostalCode(postalCode: string) {
        cy.contains("label", "Irányítószám")
            .parent()
            .find('input[role="combobox"]')
            .clear()
            .type(postalCode);

        cy.get('[role="option"]')
            .contains(postalCode)
            .click();
    }

    enterPassword(password: string) {
        cy.get('[name="password"]').clear().type(password).blur();
    }

    enterConfirmPassword(password: string) {
        cy.get('[name="confirmPassword"]').clear().type(password).blur();
    }

    acceptTerms() {
        cy.contains("label", "Elolvastam és elfogadom")
            .find('input[type="checkbox"]')
            .check();
    }

    submit() {
        cy.get('[data-testid="submit-button"]').click();
    }

    private getFieldError(fieldName: string) {
        return cy
            .get(`[name="${fieldName}"]`)
            .invoke("attr", "aria-describedby")
            .then((errorId) => {
                return cy.get(`#${errorId}`);
            });
    }

    getNameError() {
        return this.getFieldError("name");
    }

    getEmailError() {
        return this.getFieldError("email");
    }

    getConfirmPasswordError() {
        return this.getFieldError("confirmPassword");
    }

    getSuccessMessage() {
        return cy.contains("h3", "Sikeres regisztráció!");
    }
}

export default new RegistrationPage();