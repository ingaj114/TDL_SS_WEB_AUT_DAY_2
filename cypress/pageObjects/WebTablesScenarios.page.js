import BasePage from "./basePage";

class WebTablesScenariosPage extends BasePage {
    static get url() {
        return "/webtables"
    }

    static get button() {
        return cy.get("#addNewRecordButton")
    }

    static get addFirstName() {
        return cy.get("input[placeholder='First Name']")
    }

    static get addLastName() {
        return cy.get("input[placeholder='Last Name']")
    }

    static get addEmail() {
        return cy.get("input[placeholder='name@example.com']")
    }

    static get addAge() {
        return cy.get("input[placeholder='Age']")
    }

    static get addSalary() {
        return cy.get("input[placeholder='Salary']")
    }

    static get addDepartment() {
        return cy.get("input[placeholder='Department']")
    }
    
    static get submit() {
        return cy.get("#submit")
    }
 

}

export default WebTablesScenariosPage;




