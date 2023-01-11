<?php
    header('Access-Control-Allow-Origin: http://localhost:3000/#');

    $connect = new PDO("mysql:host=localhost:3308; dbname=exo; ", "root", "");
    $Target = (int)$_GET['Target'];

    $Delete = $connect -> prepare("DELETE FROM users WHERE id = $Target");
    $Delete -> execute();