<?php

namespace App\Controllers;

use App\Services\Router;

class UserList {


    public function refresh() {  
        include('views/components/userlist.php');
        die();
    }


}