<?php
include('db.php');

header("Access-Control-Allow-Headers: Authorization, Content-Type");
header("Access-Control-Allow-Origin: *");
header('content-type: application/json; charset=utf-8');

$First_Name = $Decode_React_APP_Data['First_Name'];
$Last_Name = $Decode_React_APP_Data['Last_Name'];
$Email = $Decode_React_APP_Data['Email'];
$Password = $Decode_React_APP_Data['Password']; //password is un-hashed mean with no hacking capability(change to md5 for secure pass)





$query = "SELECT * FROM registrationapp_react WHERE Email = '$Email'";
$query_result = mysqli_query($connect_db, $query);

if (!mysqli_num_rows($query_result))
{
    $Reg_Query = "INSERT INTO registrationapp_react(`First_Name`, `Last_Name`, `Email`, `Password`) VALUES ('$First_Name', '$Last_Name', '$Email', '$Password')";
    $Reg_Query_Result = mysqli_query($connect_db, $Reg_Query);

    if ($Reg_Query_Result) 
	{
        $Message = "Registered successfully!";
    } else 
	{
        $Message = "Error - Try again";
    }
	
} else 
{
    $Message = "User Already Registered";
}

$response[] = array("Message" => $Message);

echo json_encode($response);
?>