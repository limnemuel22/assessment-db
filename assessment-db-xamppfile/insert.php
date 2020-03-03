<?php
include "connect.php";

  $postdata = file_get_contents("php://input");
  
if(isset($postdata) && !empty($postdata))
{
  $request = json_decode($postdata);

  //print_r($request);
  
  // Sanitize.
  $username = mysqli_real_escape_string($con, trim($request->username));
  $password = mysqli_real_escape_string($con, trim($request->password));
  $firstname = mysqli_real_escape_string($con, trim($request->firstName));
  $lastname = mysqli_real_escape_string($con, trim($request->lastName));

 
 
  // Store.
$sql = "INSERT INTO users (`username`,`password`,`firstName`, `lastName`) VALUES ('$username','$password','$firstname','$lastname')";


  if(mysqli_query($con, $query))
  {
    http_response_code(201);
  }
  else
  {
    http_response_code(422);
  }
}