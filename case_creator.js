function sendFormByEmail(e) 
{    
  var s = SpreadsheetApp.getActiveSheet();
  
  // Count of Cases
  var lastRow = s.getLastRow();
  var i = 2; i < lastRow; i++;
  
  // Determine people to send email to
  var sendto = s.getRange(lastRow, <INSERT COLUMN NUMBER for specific team>).getValue()
  
  // Subject of sent message
  var subject = "New form submitted to " + sendto + " (#" + lastRow + ")"; 
  
  // Gets values from Sheet
  var headers = s.getRange(1,1,1,s.getLastColumn()).getValues()[0]; 
  var message = "";
  
  
  // What's printed in the body of the email sent
  for (var h in headers) 
  {
    message += headers[h] + ": " + e.namedValues[headers[h]].toString() + "\n"; 
  }
  
  
  // Checks specific column for pod selection
  if (sendto == "Team 1") {
    var email = "team1@example.org" + s.getRange(lastRow, 2).getValue(); // Sends email to Team 1 and submitter
  }
  else if (sendto == "Team 2") {
    var email = "team2@example.org" + s.getRange(lastRow, 2).getValue(); // Sends email to Team 2 and submitter
  }
  else if (sendto == "Team 3") {
    var email = "team3@example.org" + s.getRange(lastRow, 2).getValue(); // Sends email to Team 3 and submitter
  }
  else {
    return;
  }
  
  
  // Sends the email
  MailApp.sendEmail(email, subject, message, { name:"Reassign" }); 
}
