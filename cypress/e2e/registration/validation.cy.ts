import registrationPage from "../../pages/RegistrationPage";
import registrationData from "../../fixtures/registration.json";

describe("Registration form validation", () => {
  beforeEach(() => {
    registrationPage.visit();
  });

  it("shows an error when the name is shorter than 3 characters", () => {
    const { invalidValue, expectedError } =
      registrationData.validation.name;

    registrationPage.enterName(invalidValue);

    registrationPage
      .getNameError()
      .should("be.visible")
      .and("have.text", expectedError);
  });

  it("shows an error when the email format is invalid", () => {
    const { invalidValue, expectedError } =
      registrationData.validation.email;

    registrationPage.enterEmail(invalidValue);

    registrationPage
      .getEmailError()
      .should("be.visible")
      .and("have.text", expectedError);
  });

  it("shows an error when the passwords do not match", () => {
    const { password } = registrationData.validUser;
    const { invalidValue, expectedError } =
      registrationData.validation.confirmPassword;

    registrationPage.enterPassword(password);
    registrationPage.enterConfirmPassword(invalidValue);

    registrationPage
      .getConfirmPasswordError()
      .should("be.visible")
      .and("have.text", expectedError);
  });
});