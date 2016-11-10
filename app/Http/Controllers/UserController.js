'use strict';

const User = use('App/Model/User');
const Hash = use('Hash');

class UserController
  { * create(request, response) {
    // show a form to make a new account
    yield response.sendView('user.create');
  }

  * store(request, response) {
    // saves the account to the database
    const { username, email, password } = request.all();
    try {
      const user = yield User.create({ username, email, password: yield Hash.make(password) });

      yield request.auth.login(user);

      yield request.with({
        success: 'Good job with that',
      }).flash();

      response.redirect('/');
    } catch (e) {
      yield request
        .withOut('password')
        .andWith({ error: 'That username or email is already taken' })
        .flash();

      response.redirect('back');
    }
    // save the user

    response.send(user);
  }

}

module.exports = UserController;
