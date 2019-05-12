angular.module('starter.services', [])

.factory('Chats', function() {
  // Might use a resource here that returns a JSON array

  // Some fake testing data
  var chats = [{
    id: 0,
    name: 'El papel en el desarrollo de la vida',
    lastText: '',
    face: 'imagenes/img3.jpg'
  }, {
    id: 1,
    name: 'Un elemento esencial, y protagonista del origen de la vida',
    lastText: '',
    face: 'imagenes/img4.jpg'
  }, {
    id: 2,
    name: 'El agua puede transformar nuestra vida cotidiana',
    lastText: '',
    face: 'imagenes/img5.jpg'
  }, {
    id: 3,
    name: 'responsabilidad del ser humano',
    lastText: '',
    face: 'imagenes/img6.jpg'
  }, {
    id: 4,
    name: 'El agua y la vida',
    lastText: '',
    face: 'imagenes/img7.jpg'
  }];

  return {
    all: function() {
      return chats;
    },
    remove: function(chat) {
      chats.splice(chats.indexOf(chat), 1);
    },
    get: function(chatId) {
      for (var i = 0; i < chats.length; i++) {
        if (chats[i].id === parseInt(chatId)) {
          return chats[i];
        }
      }
      return null;
    }
  };
});
