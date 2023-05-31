<?php

namespace App\Controllers;

use App\Services\Router;

class User {

    // public function logout() {
    //     unset($_SESSION['user']);
    //     Router::redirect('login');
    // }

    public function create($data) {

        if( empty( $data['first_name'] ) || empty( $data['last_name'] ) ) {

            echo JSON_encode( [
                    "status" => false,
                    "error" => [
                        "code" => 400,
                        "message" => "Заповніть всі поля"
                    ]
            ]);
            
            die();
        }

        $user = \R::dispense( 'users' );

        $user->first_name = $data['first_name'];
        $user->last_name = $data['last_name'];
        $user->status = $data['status'];
        $user->role_id = $data['role_id'];

        \R::store( $user );

        echo JSON_encode( [
            "status" => true,
            "error" => null,
            "user" => $user
        ]);

    }

    public function edit($data) {
        if( empty( $data['first_name'] ) || empty( $data['last_name'] ) ) {

            echo JSON_encode( [
                    "status" => false,
                    "error" => [
                        "code" => 400,
                        "message" => "Заповніть всі поля"
                    ]
                ]);
            die();
        }

        $user = \R::load( 'users', $data['id'] );

        $user->first_name = $data['first_name'];
        $user->last_name = $data['last_name'];
        $user->status = $data['status'];
        $user->role_id = $data['role_id'];

        \R::store( $user );

        echo JSON_encode( [
            "status" => true,
            "error" => null,
            "user" => $user
        ]);
    }

    public function delete($ids) {
        // var_dump($ids);
        if(isset($ids['ids'])) {
            $users = \R::loadAll( 'users', $ids['ids'] );
            \R::trashAll( $users );
        } else {
            $user = \R::load( 'users', $ids['id'] );
            \R::trash( $user );
        }
        
    }

    public function get($id) {
        $id = $id['id'];
        $user = \R::load( 'users', $id );
        
        echo JSON_encode( \R::load( 'users', $id ) );
    }

    public function disableStatus($ids) {
        $users = \R::loadAll( 'users', $ids['ids'] );
        for( $i = 0; $i < count($users); $i++ ) {
            $users[$i]->status = 0;
        }
        \R::storeAll($users);
    }
    public function enableStatus($ids) {
        $users = \R::loadAll( 'users', $ids['ids'] );
        for( $i = 0; $i < count($users); $i++ ) {
            $users[$i]->status = 1;
        }
        \R::storeAll($users);
    }
}