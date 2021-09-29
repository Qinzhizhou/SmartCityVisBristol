<?php
require_once "db_config.php";
$sql = "SELECT SUM(Hourly_Flow) as HF, Date_Time 
        FROM traffic_counts GROUP BY Date_Time ;";
$result = $conn->query($sql);
$data="";
$array= array();
  class User{
    public $HF;
    public $Date_Time;
  }
  while($row = mysqli_fetch_array($result,MYSQLI_ASSOC)){
    $user=new User();
    $user->HF = $row['HF'];
    $user->Date_Time = $row['Date_Time'];
    $array[]=$user;
  }
  $inputdata=json_encode($array);
  // echo "{".'"user"'.":".$data."}";
  echo $inputdata;
?>