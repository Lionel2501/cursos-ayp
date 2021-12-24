<?php

/* La función es parte de una solución de subida de archivos que todavía no fue completada */

$filename = $_FILES['file']['name'];

// $json = file_get_contents('php://input');
// $data = json_decode($json);
// $subfolder = $data['toFolder'];

$location = "../uploads/".$filename;

if(move_uploaded_file($_FILES['file']['tmp_name'], $location)) {
  echo 'Success';
} else {
  echo 'Failed';
};

?>