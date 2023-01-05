<?php

    header('Access-Control-Allow-Origin: http://localhost:3000');
    header("Content-Type: JSON");

    $connect = new PDO("mysql:host=localhost:3308; dbname=exo; ", "root", "");
    $resp = [];

    $name = $_POST['name'];
    $val = $_POST['val'];

    if ($val) {
        $GetUsers = $connect -> prepare ("SELECT * FROM users WHERE $name LIKE '%$val%'");
        $GetUsers -> execute();

        foreach ($GetUsers as $value) {
            array_push($resp, [
                "id" => $value["id"],
                "FirstName" => $value["FirstName"],
                "LastName" => $value["LastName"],
                "Email" => $value["Email"],
                "_Password" => $value["_Password"]
            ]);
        };

        echo json_encode($resp, JSON_PRETTY_PRINT);
    } else {
        echo json_encode([], JSON_PRETTY_PRINT);
    }
