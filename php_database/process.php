<?php
require_once "db_config.php";
$ID = 1,// 得到表单得值
$IDs = range(1, 500);
//$ID = array_rand($IDs); // 随机数， 想办法从html 能修改这个值

$sql = "SELECT SUM(Hourly_Flow) as HF, Date_Time FROM traffic_counts 
WHERE CountDeviceID = 1  GROUP BY Date_Time ;";
$result = $conn->query($sql);
$data="";
$array= array();
  class LINE{
    public $HF;
    public $Date_Time;
  }

  while($row = mysqli_fetch_array($result,MYSQLI_ASSOC)){
    $line=new LINE();
    $line->HF = $row['HF'];
    $line->Date_Time = $row['Date_Time'];
    $array[]=$line;
  }
  $inputdata=json_encode($array);
  // echo "{".'"user"'.":".$data."}";
  echo $inputdata;
  // header("Location: index.html");  // 重定向 html p
  
  ?>
  <script>
 window.location.replace("index.html");
 </script>