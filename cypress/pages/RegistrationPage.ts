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

    enterPassword(password: string) {
        cy.get('[name="password"]').clear().type(password).blur();
    }

    enterConfirmPassword(password: string) {
        cy.get('[name="confirmPassword"]').clear().type(password).blur();
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

}

export default new RegistrationPage();