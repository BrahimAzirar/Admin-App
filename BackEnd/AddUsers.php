<?php

    header('Access-Control-Allow-Origin: http://localhost:3000/#');

    $FirstName = $_POST['FirstName'];
    $LastName = $_POST['LastName'];
    $Email = $_POST['Email'];
    $Password = $_POST['Password'];

    $connect = new PDO("mysql:host=localhost:3308; dbname=exo; ", "root", "");

    $Insert = $connect -> prepare("INSERT INTO users (FirstName, LastName, Email, _Password)
        VALUE ('$FirstName', '$LastName', '$Email', '$Password')");

    $Insert -> execute();