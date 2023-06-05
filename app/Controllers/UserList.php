<?php

namespace App\Controllers;

use App\Services\App;

class UserList
{

    static $roles;

    public static function init()
    {
        $roles = App::loadTable('roles');

        $rolesArr = [];

        foreach ($roles as $role) {
            $rolesArr[$role['id']] = $role['name'];
        }
        self::$roles = $rolesArr;
    }

    public static function refresh()
    {
        include('views/components/userlist.php');
        die();
    }

    public static function getUserItem($data) {
        
        $roles = self::$roles;
        $user = $data["user"];
        // var_dump($roles);
        include('views/components/useritem.php');
        die();
    }

    public static function getUsers()
    {
        $users = App::loadTable('users');

        $usersArr = [];

        foreach ($users as $user) {
            array_push(
                $usersArr,
                [
                    "id" => $user['id'],
                    "first_name" => $user['first_name'],
                    "last_name" => $user['last_name'],
                    "status" => $user['status'],
                    "role_id" => $user['role_id']
                ]
            );
        }
        echo JSON_encode([
            "status" => true,
            "error" => null,
            "users" => $usersArr
        ]);
        return $usersArr;
    }

    public static function getRoles()
    {
        $roles = App::loadTable('roles');

        $rolesArr = [];

        foreach ($roles as $role) {
            $rolesArr[$role['id']] = $role['name'];
        }
        echo JSON_encode([
            "status" => true,
            "error" => null,
            "roles" => $rolesArr
        ]);
        return $rolesArr;
    }
}
