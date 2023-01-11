<?php
    header('Access-Control-Allow-Origin: http://localhost:3000/#');

    $connect = new PDO("mysql:host=localhost:3308; dbname=exo; ", "root", "");

    $id = $_POST['id'];
    $FirstName = $_POST['FirstName'];
    $LastName = $_POST['LastName'];
    $Email = $_POST['Email'];
    $Password = $_POST['Password'];

    $Update = $connect -> prepare("UPDATE users SET FirstName = '$FirstName', LastName = '$LastName',
        Email = '$Email', _Password = '$Password' WHERE id = $id");

    $Update -> execute();