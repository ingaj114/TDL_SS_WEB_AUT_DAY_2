import TextBoxPage from "../../pageObjects/textBoxPage";

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
      TextBoxPage.output.should("contain", "Inga Ju");
      TextBoxPage.output.should("contain", "ingaj114@gmail.com");
      TextBoxPage.output.should("contain", "Address 1")
      TextBoxPage.output.should("contain", "Address 2")

    });
  });

  context("Check box scenarios", () => {
    // Create CheckBoxPage page object
    // Create checkbox scenario 1:
    // Click the "+"/expand button
    // Click Notes, React, Angular, General, Excel File.doc
    // Validate the clicked checkboxes

    // Create checkbox scenario 2:
    // Click expand button
    // Click Office
    // Validate the checked checkboxes
  });

  context("Radio button scenarios", () => {
    // Create RadioButtons page object
    // Scenario 1:
    // Click yesButton
    // validate the message
    // click impressiveButton
    // validate the message
    // noButton - validate that the button exists but is disabled
  });

  context("Web tables scenarios", () => {
    // Create WebTables page object
    // Create scenario 1:
    // Click add record button
    // fill in the necessary information
    // click submit button
    // search for the user based on previously added information
    // validate tha the user is visible

    // Create Scenario 2:
    // Delete all table rows
    // Validate that we see text - No rows found
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
