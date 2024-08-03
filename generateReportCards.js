function generateReportCards() {
  const sheet = SpreadsheetApp.getActiveSpreadsheet();
  const dataSheet = sheet.getSheetByName('Sheet1');
  const templateSheet = sheet.getSheetByName('Sheet2');
  
  const range = dataSheet.getDataRange();
  const values = range.getValues();
  
  for (let i = 1; i < values.length; i++) {
    const studentID = values[i][0];  // Assuming the student ID is in the first column
    const name = values[i][1];  // Names in the second column
    
    // Check if a sheet with the same name already exists and create a unique name if needed
    let newName = name;
    let counter = 1;
    while (sheet.getSheetByName(newName)) {
      newName = name + " (" + counter + ")";
      counter++;
    }

    // Copy the template sheet and rename it
    const newSheet = templateSheet.copyTo(sheet);
    newSheet.setName(newName);
    
    // Set values for the report card
    newSheet.getRange('B2').setValue(studentID);  //[0] Student ID in 1st column of sheet1 
    newSheet.getRange('C3').setValue(name);  //[1] NAME OF THE LEARNER in 2nd column of sheet1 
    newSheet.getRange('B5').setValue(values[i][2]);  // ENG SCORE in 3rd column of sheet1
    newSheet.getRange('C5').setValue(values[i][3]);  // ENG SCORE LEVEL
    newSheet.getRange('B6').setValue(values[i][4]);  // KISW SCORE
    newSheet.getRange('C6').setValue(values[i][5]);  // KISW SCORE LEVEL
    newSheet.getRange('B7').setValue(values[i][6]);  // MATH SCORE
    newSheet.getRange('C7').setValue(values[i][7]);  // MATH SCORE LEVEL
    newSheet.getRange('B8').setValue(values[i][8]);  // TOTAL MARKS
    newSheet.getRange('C9').setValue(values[i][9]);  // AVERAGE LEVEL
  }
}
