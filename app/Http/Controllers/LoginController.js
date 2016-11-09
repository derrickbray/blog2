'use strict'

class LoginController {

//show login form to the user
  * create(request, response) {
    //
    yield response.sendView('login.create');

  }
  //respond to user trying to login
  * store(request, response) {
    //
    const {email, password} = request.all();

    try {
      //look up user based on their email
      //check that users password matches the input password
      //throws an error if user not found or a pssword does not match

      const validLogin = yield request.auth.attempt(email, password);
      yield request.with({ success: 'you have logged in' })
        .flash();
      //redirect to home
      response.redirect('/');
    } catch (e) {
      //send back the old inputs (not password)
      yield request.withOut('password')
        //send back error message
        .andWith({ error: 'Credentials do not match.' })
        //only show message once
        .flash();
      //back from whence you came
      response.redirect('back');
    }


  }

  * destroy(request, response) {
    //logout the user
    yield request.auth.logout();
    //send an alert message
    yield request.with({ success: 'You have logged out. You are done.'}).flash();
    //redirect to login
    response.redirect('/login');

  }

}

module.exports = LoginController
