<?php
include 'connect.php';
error_reporting(E_ERROR);
$users = [];
$sql = "SELECT * FROM  users";

if($result = mysqli_query($con,$sql))
{
  $cr = 0;
  while($row = mysqli_fetch_assoc($result))
  {
    $users[$cr]['id']    = $row['id'];
    $users[$cr]['username'] = $row['username'];
    $users[$cr]['firstName'] = $row['firstName'];
    $users[$cr]['lastName'] = $row['lastName'];
    $cr++;
  }
    
    //NEM COMMENT print_r($users);

  echo json_encode($users);
}
else
{
  http_response_code(404);
}
?>