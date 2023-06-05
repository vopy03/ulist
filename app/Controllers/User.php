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
        if (isset($ids['ids'])) {
            $users = \R::loadAll('users', $ids['ids']);
            \R::trashAll($users);
        } else {
            $user = \R::load('users', key($ids));
            \R::trash($user);
        }

        echo JSON_encode([
            "status" => true,
            "error" => null,
            "ids" => $ids
        ]);
    }

    public function get($id)
    {
        $id = $id['id'];
        $user = \R::load('users', $id);

        echo JSON_encode([
            "status" => true,
            "error" => null,
            "user" => $user
        ]);
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
