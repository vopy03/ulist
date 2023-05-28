<?php

namespace App\Controllers;

use App\Services\Router;

class Auth {

    public function logout() {
        unset($_SESSION['user']);
        Router::redirect('login');
    }

    public function login($post) {
        $email = $post['email'];
        $password = $post['password'];

        $user = \R::findOne('users', 'email = ?', [$email]);
        if (!$user) {
            die('Користувача не знайдено');
        }

        if(password_verify($password, $user->password)) {
            session_start();
            $_SESSION['user'] = [
                'id' => $user->id,
                'login' => $user->login,
                'email' => $user->email,
                'full_name' => $user->full_name,
                'group' => $user->group,
                'avatar_path' => $user->avatar_path
            ];

            Router::redirect('profile');
        } else {
            die("Невірний пароль");
        }

        

    }

    public function register($post, $files) {

        $email = $post['email'];
        $name = $post['name'];
        $full_name = $post['full_name'];
        $password = $post['password'];
        $password_confirm = $post['password_confirm'];

        if($password !== $password_confirm) {
            Router::error(500);
            die();
        }

        $avatar = $files['avatar'];

        $path =  'uploads/avatars/'.time().'_'.$avatar['name'];

        if(move_uploaded_file($avatar['tmp_name'], $path)) {
            // add to db
            $user = \R::dispense('users');
            $user['email'] = $email;
            $user['login'] = $name;
            $user['full_name'] = $full_name;
            /*
             * 0 - user
             * 1 - admin
            */
            $user['group'] = 0;
            $user['password'] = password_hash($password, PASSWORD_DEFAULT);
            $user['avatar_path'] = '/'.$path;

            \R::store($user);
            Router::redirect('login');
        } else {
            Router::error(500);
        }

    }

}