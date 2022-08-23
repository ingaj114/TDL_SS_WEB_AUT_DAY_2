import BasePage from "./basePage";

class CheckBoxPage extends BasePage {
    static get url() {
        return "/checkbox";
    }

    static get expandPlus() {
        return cy.get(".rct-option-expand-all")
    }

    static get checkNotes() {
        return cy.get("label[for='tree-node-notes']")
    }

    static get checkReact() {
        return cy.get("label[for='tree-node-react']")
    }

    static get checkAngular() {
        return cy.get("label[for='tree-node-angular']")
    }

    static get checkGeneral() {
        return cy.get("label[for='tree-node-general']")
    }

    static get checkExcelFile() {
        return cy.get("label[for='tree-node-excelFile']")
    }

    static get validate() {
        return cy.get(".display-result")
    }

    static get checkOffice() {
        return cy.get("label[for='tree-node-office'")
    }
}

export default CheckBoxPage;