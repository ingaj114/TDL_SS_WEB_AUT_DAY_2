import BasePage from "./basePage";

class TextBoxPage extends BasePage {
  static get url() {
    return "/text-box";
  }

  static get firstNameField() {
    return cy.get("[placeholder='Full Name']");
  }

  static get emailField() {
    return cy.get("[placeholder='name@example.com']");
  }

  static get currentAddressField() {
    return cy.get("[placeholder='Current Address']");
  }

  static get permanentAddress() {
    return cy.get("#permanentAddress");
  }

  static get submit() {
    return cy.get("#submit")
  }

  static get output() {
    return cy.get("#output")
  }

}

export default TextBoxPage;
