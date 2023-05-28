<?php

namespace App\Services;


class App {

    public static function start() {
        self::libs();
        self::db();
    }

    public static function libs() {
        $config = require_once 'config/app.php';
        foreach ($config['libs'] as $lib) {
            require_once "libs/" . $lib . ".php";
        }
    }

    public static function db() {
        $config = require_once 'config/db.php';
        if($config['enable']) {
            \R::setup($config['driver'].":host=".$config['host']."; dbname=" . $config['dbname'] . "; charset=". $config['charset'], 
            $config['user'], $config['password']);

            if(!\R::testConnection()) {
                die("Error connection to DB");
            }
        }
    } 

    public static function loadTable($table_name) {
        // load all table
        return \R::findAll($table_name);
    }

} 