<?php
$filename =$_REQUEST['filename'];
header("Content-Type:text/plain");
header('Content-Disposition:attachment;filename='.$filename);
header('Content-Transfer-Encodeing: binary');
readfile($filename);
?>