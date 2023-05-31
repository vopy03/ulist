<?php 

use App\Services\Router;
use App\Controllers\User;

use App\Controllers\UserList;

Router::page('/', 'list');

Router::post('/actions/user/create', User::class, 'create', true);


Router::post('/actions/status/off', User::class, 'disableStatus', true);
Router::post('/actions/status/on', User::class, 'enableStatus', true);

Router::post('/actions/user/get/:id', User::class, 'get', true);


Router::post('/actions/user/edit', User::class, 'edit', true);
Router::post('/actions/user/delete', User::class, 'delete', true);

Router::post('/actions/user/delete/:id', User::class, 'delete');

Router::post('/actions/list/refresh', UserList::class, 'refresh', true);

// Router::post('/auth/logout', Auth::class, 'logout');
// Router::post('/auth/register', Auth::class, 'register', true, true);


Router::enable(); 
