// HTML表示
function doGet() {
  var html = HtmlService.createTemplateFromFile('index');
  return html.evaluate();
}

// フォームTOスプレッドシート
function doPost(e) {
    // スプレッドシート固有ID
  var id = "17BO2KtZb-abAAJsZBHNogltmGI8kWRS120hnwNjYyIc";
  
  // スプレッドシートobj取得
  var spreadSheet = SpreadsheetApp.openById(id);

  // シートobj取得
  var sheet = spreadSheet.getSheetByName("report");

  var salesPersonCell = sheet.getRange(1,1);
  salesPersonCell.setValue(e.parameter.salesPerson)
}