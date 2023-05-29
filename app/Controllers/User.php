<?php

namespace App\Controllers;

use App\Services\Router;

class User {

    // public function logout() {
    //     unset($_SESSION['user']);
    //     Router::redirect('login');
    // }

    public function create($data) {
        
        var_dump($data);
    }

    public function edit($id, $data) {

    }

    public function delete($ids) {

        echo JSON_encode($ids);
    }

    public function disableStatus($ids) {
        $users = \R::loadAll( 'users', $ids['ids'] );
        for( $i = 0; $i < count($users); $i++ ) {
            $users[$i]['status'] = 0;
        }
        \R::storeAll($users);
    }
    public function enableStatus($ids) {
        $users = \R::loadAll( 'users', $ids['ids'] );
        for( $i = 0; $i < count($users); $i++ ) {
            $users[$i]['status'] = 1;
        }
        \R::storeAll($users);
        var_dump($ids);
    }
}