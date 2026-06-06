function doPost(e) {

  const sheet = SpreadsheetApp.getActiveSpreadsheet().getSheetByName("Hoja 1");

  const data = JSON.parse(e.postData.contents);

  sheet.appendRow([
    new Date(),
    data.nombre,
    data.apellido,
    data.telefono,
    data.edad,
    data.correo,
    data.molestia,
    data.tiempo,
    data.comentario
  ]);

  return ContentService
    .createTextOutput(JSON.stringify({
      result: "success"
    }))
    .setMimeType(ContentService.MimeType.JSON);
}