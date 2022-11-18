<?php
include('db.php');

header("Access-Control-Allow-Headers: Authorization, Content-Type");
header("Access-Control-Allow-Origin: *");
header('content-type: application/json; charset=utf-8');

$Email = $Decode_React_APP_Data['Email'];
$Password = $Decode_React_APP_Data['Password']; 



$query = "SELECT * FROM registrationapp_react WHERE Email = '$Email'";
$query_result = mysqli_query($connect_db, $query);


if (mysqli_num_rows($query_result)) {
$DB_Elements= mysqli_fetch_array($query_result);

    if ($DB_Elements['Password'] == $Password) {
        $Message = "Logged In Successfully";
    } else { 
		$Message = "Password is wrong";
    }
} 
else 
{
    $Message = "User does not exist";
}

$response[] = array("Message" => $Message);

echo json_encode($response);

?>