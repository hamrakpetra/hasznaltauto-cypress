import registrationPage from "../../pages/RegistrationPage";
import registrationData from "../../fixtures/registration.json";

describe("Registration", () => {
    it("successfully registers a new user", () => {
        const user = registrationData.validUser;
        const email = `test-${Date.now()}@example.com`;

        registrationPage.visit();

        registrationPage.enterName(user.name);
        registrationPage.enterEmail(email);
        registrationPage.enterConfirmEmail(email);
        registrationPage.selectPostalCode(user.postalCode);
        registrationPage.enterPassword(user.password);
        registrationPage.enterConfirmPassword(user.password);
        registrationPage.acceptTerms();

        registrationPage.submit();

        registrationPage
            .getSuccessMessage()
            .should("be.visible")
            .and("have.text", registrationData.success.expectedMessage);
    });
});