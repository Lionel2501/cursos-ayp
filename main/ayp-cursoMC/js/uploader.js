/* La función es parte de una solución de subida de archivos que todavía no fue completada */

async function saveFile() {
    let formData = new FormData();
    formData.append("file", fileUpload.files[0]);
    formData.append("toFolder", toFolder.value);
    await fetch('./php/upload.php', {method: "POST", body: formData});
    alert("El archivo fue subido con éxito");
  };