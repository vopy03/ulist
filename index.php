<?php

use App\Services\App;
require_once __DIR__."/debug/funcs.php";

require_once __DIR__."/vendor/autoload.php";

App::start();
// pr($_SERVER);
require_once __DIR__."/router/routes.php";


?>