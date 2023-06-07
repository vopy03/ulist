<?php

namespace App\Controllers;

class User
{

    // public function logout() {
    //     unset($_SESSION['user']);
    //     Router::redirect('login');
    // }

    public function create($data)
    {

        // data processing before save
        $data = array_map('trim', $data);

        if (empty($data['first_name']) || empty($data['last_name'])) {

            echo JSON_encode([
                "status" => false,
                "error" => [
                    "code" => 400,
                    "message" => "Заповніть всі поля"
                ]
            ]);

            die();
        }

        $user = \R::dispense('users');

        $user->first_name = $data['first_name'];
        $user->last_name = $data['last_name'];
        $user->status = $data['status'];
        $user->role_id = $data['role_id'];

        \R::store($user);

        $user->id = \R::getInsertID();

        echo JSON_encode([
            "status" => true,
            "error" => null,
            "user" => $user
        ]);
    }

    public function edit($data)
    {

        // data trim
        $data = array_map('trim', $data);

        if (empty($data['first_name']) || empty($data['last_name'])) {

            echo JSON_encode([
                "status" => false,
                "error" => [
                    "code" => 400,
                    "message" => "Заповніть всі поля"
                ]
            ]);
            die();
        }

        if($data['id'] == 0) {
            echo JSON_encode([
                "status" => false,
                "error" => [
                    "code" => 404,
                    "message" => "User not found"
                ]
            ]);
            die();
        }

        $user = \R::load('users', $data['id']);

        $user->first_name = $data['first_name'];
        $user->last_name = $data['last_name'];
        $user->status = $data['status'];
        $user->role_id = $data['role_id'];

        \R::store($user);

        echo JSON_encode([
            "status" => true,
            "error" => null,
            "user" => $user
        ]);
    }

    public function delete($ids)
    {

        $ids = $ids['ids'];
        if (is_numeric($ids)) {
            $user = \R::load('users', $ids);
            \R::trash($user);
            
        } else {
            $users = \R::loadAll('users', $ids);
            \R::trashAll($users);
        }

        echo JSON_encode([
            "status" => true,
            "error" => null,
            "ids" => $ids
        ]);
    }

    public function get($id)
    {
        // var_dump($id);
        $user = \R::load('users', $id);
        
        if(count($user) <= 1) {
            echo JSON_encode([
                "status" => false,
                "error" => ["code" => 404, "message" => "User not found"],
                "user" => null
            ]);
        }
        else {
            echo JSON_encode([
                "status" => true,
                "error" => null,
                "user" => $user,
            ]);
        }
        
    }

    public function changeStatus($data)
    {

        $value = (int)$data['value'];
        $users = \R::loadAll('users', $data['ids']);

        foreach ($users as $user) {
            $user->status = $value;
        }

        \R::storeAll($users);

        echo JSON_encode([
            "status" => true,
            "error" => null,
            "ids" => $data['ids'],
            "userStatus" => $value
        ]);
    }
}
