import BasePage from "./basePage";

class RadioButtonsPage extends BasePage {
    static get url() {
        return "/radio-button";
    }

    static get button() {
        return cy.get("[for=yesRadio]")
    }

    static get validate() {
        return cy.get("p[class='mt-3']")
    }

    static get impressive() {
        return cy.get("[for=impressiveRadio]")
    }

    static get noButton() {
        return cy.get("[for=noRadio]")
    }
    
}

export default RadioButtonsPage;