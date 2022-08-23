import CheckBoxPage from "../../pageObjects/CheckBoxPage.page";
import RadioButtonsPage from "../../pageObjects/RadioButtonsPage.page";
import TextBoxPage from "../../pageObjects/textBoxPage";
import WebTablesScenariosPage from "../../pageObjects/WebTablesScenarios.page";

context("Elements Page", () => {
  context("Text box scenarios", () => {
    beforeEach(() => {
      TextBoxPage.visit();
    });
    // Create texbox scenario
    it("Filling in Text Boxes", () => {
      // fill in textboxes with necessary information
      TextBoxPage.firstNameField.type("Inga Ju");
      TextBoxPage.emailField.type("ingaj114@gmail.com");
      TextBoxPage.currentAddressField.type("Address 1");
      TextBoxPage.permanentAddress.type("Address 2");
      TextBoxPage.submit.click();
      // validate the paragraphs
      TextBoxPage.validateFirstName.should("contain", "Inga Ju");
      TextBoxPage.validateEmailField.should("contain", "ingaj114@gmail.com");
      TextBoxPage.validateCurrentAddressField.should("contain", "Address 1")
      TextBoxPage.validatePermamentAddress.should("contain", "Address 2")
    });
  });
  
  // Create CheckBoxPage page object
    context("Check box scenarios", () => {
      beforeEach(() => {
        CheckBoxPage.visit();
      });
      // Create checkbox scenario 1:
      it("Check the check box", () => {
        // Click the "+"/expand button
        CheckBoxPage.expandPlus.click();
        // Click Notes, React, Angular, General, Excel File.doc
        CheckBoxPage.checkNotes.click();
        CheckBoxPage.checkReact.click();
        CheckBoxPage.checkAngular.click();
        CheckBoxPage.checkGeneral.click();
        CheckBoxPage.checkExcelFile.click();
        // Validate the clicked checkboxes
        CheckBoxPage.validate.should("contain","notes");
        CheckBoxPage.validate.should("contain","react");
        CheckBoxPage.validate.should("contain","angular");
        CheckBoxPage.validate.should("contain","general");
        CheckBoxPage.validate.should("contain","excelFile");
      });
   
      // Create checkbox scenario 2:
      it("Click the expand button", () => {
        // Click expand button
        CheckBoxPage.visit();
        CheckBoxPage.expandPlus.click();
        // Click Office
        CheckBoxPage.checkOffice.click();
        // Validate the checked checkboxes
        CheckBoxPage.validate.should("contain","office");
        CheckBoxPage.validate.should("contain","public");
        CheckBoxPage.validate.should("contain","private");
        CheckBoxPage.validate.should("contain","classified");
        CheckBoxPage.validate.should("contain","general");
      });
    });
      
    // Create RadioButtons page object
    context("Radio button scenarios", () => {
      beforeEach(() => {
        RadioButtonsPage.visit();
      });
      // Scenario 1:
      it("Click yes button", () => {
        // Click yesButton
        RadioButtonsPage.button.click();
        // validate the message
        RadioButtonsPage.validate.should("contain", "Yes");
        // click impressiveButton
        RadioButtonsPage.impressive.click();
        // validate the message
        RadioButtonsPage.validate.should("contain", "Impressive");
        // noButton - validate that the button exists but is disabled
        RadioButtonsPage.noButton.should("have.disabled", "True");
      });
    });
    
    // Create WebTables page object
    context("Web tables scenarios", () => {
      beforeEach(() => {
        WebTablesScenariosPage.visit();
      });
      // Create scenario 1:
      it("Click button", () => {
      // Click add record button
      WebTablesScenariosPage.button.click();
      // fill in the necessary information
      WebTablesScenariosPage.addFirstName.type("Inga");
      WebTablesScenariosPage.addLastName.type("Ju");
      WebTablesScenariosPage.addEmail.type("ingaj114@gmail.com");
      WebTablesScenariosPage.addAge.type("29");
      WebTablesScenariosPage.addSalary.type("2000");
      WebTablesScenariosPage.addDepartment.type("TDL School");    
      // click submit button
      WebTablesScenariosPage.submit.click();
      // search for the user based on previously added information

      // validate tha the user is visible
      
      // Create Scenario 2:
      // Delete all table rows
      // Validate that we see text - No rows found

      })
  });

  context("Buttons scenarios", () => {
    // Create buttons clicking scenario
    // Create Buttons page
    // Check documentation https://docs.cypress.io/api/commands/and for how to perform different types of clicking
    // Click Double click button
    // Validate the double click message
    // Click rightclick button
    // Validate the right click message
    // Do dynamic click
    // Validate dynamic click message
  });
});
