<?php

use App\Services\Router;
use App\Controllers\User;

use App\Controllers\UserList;

Router::page('/', 'list');

Router::post('/user/create', User::class, 'create', true);

Router::post('/user/status/change', User::class, 'changeStatus', true);

Router::post('/user/get/:id', User::class, 'get', true);

Router::post('/user/edit', User::class, 'edit', true);
Router::post('/user/delete', User::class, 'delete', true);

Router::post('/user/delete/:id', User::class, 'delete');

Router::post('/list/refresh', UserList::class, 'refresh', true);


Router::enable();
