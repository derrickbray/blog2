'use strict'

/*
|--------------------------------------------------------------------------
| Router
|--------------------------------------------------------------------------
|
| AdonisJs Router helps you in defining urls and their actions. It supports
| all major HTTP conventions to keep your routes file descriptive and
| clean.
|
| @example
| Route.get('/user', 'UserController.index')
| Route.post('/user', 'UserController.store')
| Route.resource('user', 'UserController')
*/

const Route = use('Route')
//show the welcome page if the user is logged in
//if not throw else where
Route.on('/').render('welcome').middleware('auth');

//make the application respond to sign-up urls
Route.get('/sign-up', 'UserController.create');
Route.post('/sign-up', 'UserController.store');

//show login form
Route.get('/login', 'LoginController.create');
//respond to submitted login form
Route.post('/login', 'LoginController.store');
//logout users on any type of request to 'logout'
Route.any('/logout', 'LoginController.destroy');
//Registerall
Route.resource('/posts', 'PostController').middleware('auth');
