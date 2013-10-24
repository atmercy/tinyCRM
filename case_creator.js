function sendFormByEmail(e) 
{    
  var s = SpreadsheetApp.getActiveSheet();
  
  // Count of Cases
  var lastRow = s.getLastRow();
  var i = 2; i < lastRow; i++;
  
  // Subject of sent message
  var subject = "Case #"+ lastRow; 
  
  // Gets values from Sheet
  var headers = s.getRange(1,1,1,s.getLastColumn()).getValues()[0]; 
  var message = "";
  
  // Determine people to send email to
  var sendto = s.getRange(lastRow,<INSERT COLUMN NUMBER for specific team>).getValue()
  
  // What's printed in the body of the email sent
  for (var h in headers) 
  {
    message += headers[h] + ": " + e.namedValues[headers[h]].toString() + "\n"; 
  }
  
  
  // Checks specific column for pod selection
  if (sendto == "Team 1") {
    var email = "team1@example.org"; // Sends email to Team 1
  }
  else if (sendto == "Team 2") {
    var email = "team2@example.org"; // Sends email to Team 2
  }
  else if (sendto == "Team 3") {
    var email = "team3@example.org"; // Sends email to Team 3
  }
  else {
    return;
  }
  
  // Sends the email
  MailApp.sendEmail(email, subject, message); 
}