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

  static get validateFirstName() {
    return cy.get("#name")
  }

  static get validateEmailField() {
    return cy.get("#email")
  }

  static get validateCurrentAddressField() {
    return cy.get("p[id=currentAddress]")
  }

  static get validatePermamentAddress() {
    return cy.get("p[id=permanentAddress]")
  }
  
}

export default TextBoxPage;
