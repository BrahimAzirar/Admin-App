<?php
    header('Access-Control-Allow-Origin: http://localhost:3000/#');
    header("Content-Type: JSON");

    $connect = new PDO("mysql:host=localhost:3308; dbname=exo; ", "root", "");
    $Target = (int)$_GET['Target'];

    $Delete = $connect -> prepare("DELETE FROM users WHERE id = $Target");
    $Delete -> execute();

    echo json_encode(["Target" => $Target], JSON_PRETTY_PRINT);