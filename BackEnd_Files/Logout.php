<?php
    session_start();
	session_destroy(); 
	header("Location: LoginP.php");
	$Message = "Logged Out";
	$response[] = array("Message" => $Message);
	echo json_encode($response);
?>