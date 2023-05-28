<?php 

use App\Services\Router;
use App\Controllers\Auth;

Router::page('/', 'list');

Router::post('/auth/register', Auth::class, 'register', true, true);
Router::post('/auth/login', Auth::class, 'login', true);
Router::post('/auth/logout', Auth::class, 'logout');


Router::enable(); 
