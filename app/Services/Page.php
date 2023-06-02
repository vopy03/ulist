<?php

namespace App\Services;

class Page
{

    public static function part($part)
    {
        require 'views/components/' . $part . '.php';
    }
}
