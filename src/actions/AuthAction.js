import AppDispatcher from '../dispatchers/AppDispatcher';

var AuthAction = {

  register: function(data) {
      AppDispatcher.dispatch({
        actionName: 'register',
        data: data
      });
  }

}

export default AuthAction;