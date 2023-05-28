<?php

namespace App\Services;

class Page {

    public static function part($part) {
        require_once 'views/components/' . $part . '.php';
    }

}