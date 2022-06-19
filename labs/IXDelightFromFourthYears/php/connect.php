<?php
    $serverName= "phoenix.sheridanc.on.ca"; //Or whatever server you're using
    $username = ""; //The username for your database profile.
    $password = ""; //The password for the db profile.
    $database = ""; //The database for the db profile.
    $conn = new mysqli($serverName,$username,$password, $database);

    if ($conn->connect_error){
         die("Connection failed: " . $conn->connect_error);
    }
?>