<?php
// Varibale setting
$form_name = $_REQUEST['Name'];
$form_email = $_REQUEST['Email'];
$form_subject = $_REQUEST['Subject'];
$form_message = $_REQUEST['Message'];

//check input filed
if(empty($form_name) || empty($form_email) || empty($form_message)){
  echo "Data belum diisikan";
}else{
  mail("dhikihans1@gmail.com", $form_subject, $form_message, "from: Vokasi in New Era <$form_email>");
  echo "<script type='text/javascript'>alret('Pesan sukses terkirim');
  window.history.log(-1);
  </script>";
}
?>