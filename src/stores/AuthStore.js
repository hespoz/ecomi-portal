import AppDispatcher from '../dispatchers/AppDispatcher';
import { EventEmitter } from 'events';
import assign from 'object-assign';

import api from '../utils/api';

var CHANGE_EVENT = 'change';

var _serverError = '';

var AuthStore = assign({}, EventEmitter.prototype, {
  
  getServerError: function() {
    return _serverError;
  },

  emitChange: function() {
    this.emit(CHANGE_EVENT);
  },

  /**
   * @param {function} callback
   */
  addChangeListener: function(callback) {
    this.on(CHANGE_EVENT, callback);
  },

  /**
   * @param {function} callback
   */
  removeChangeListener: function(callback) {
    this.removeListener(CHANGE_EVENT, callback);
  }


});

AppDispatcher.register( function( payload ) {
    
    switch( payload.actionName ) {

        case 'register':

            api.register(payload.data).then(function(resp){
              //token
              localStorage.setItem('token', resp.data.token);
              console.log(resp)
              AuthStore.emitChange();
            }).catch(function(err){
              _serverError = "Error during register";
              AuthStore.emitChange();
            });

             

                        
            break;

    }

});

export default AuthStore;