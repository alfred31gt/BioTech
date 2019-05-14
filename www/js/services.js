angular.module('starter.services', [])

.factory('Chats', function() {
  // Might use a resource here that returns a JSON array

  // Some fake testing data
  var chats = [{
    id: 0,
    name: 'Metodos Anticonceptivos',
    lastText: 'Son los métodos o procedimientos que previenen un embarazo en mujeres sexualmente activas, ya sean ellas o sus parejas quienes los usen. Pueden ser hormonales o no hormonales, transitorios o definitivos, basados en tecnología o en conductas',
    face: 'imagenes/img3.jpg'
  }, {
    id: 1,
    name: 'Metodos Anticonceptivos',
    lastText: 'Métodos combinados que contienen estrógeno y progestágeno y que se pueden administrar como píldoras, inyecciones, anillo vaginal o parche transdérmico.',
    face: 'imagenes/img6.jpg'
  }, {
    id: 2,
    name: 'Metodos Anticonceptivos',
    lastText: 'Dispositivos intrauterinos.Anticonceptivos de barrera masculinos (condón) y femeninos (condón, diafragma; espermicidas).Método de la amenorrea de lactancia.Métodos de abstinencia periódica (moco cervical (Billings); calendario; temperatura basal; sintotérmico).',
    face: 'imagenes/img5.jpg'
  }, {
    id: 3,
    name: 'Metodos Anticonceptivos',
    lastText: 'Anticoncepción quirúrgica voluntaria (esterilización) femenina Anticoncepción quirúrgica voluntaria (esterilización) masculina.',
    face: 'imagenes/img1.jpg',
    img: 'imagenes/img1.jpg'
  }, {
    id: 4,
    name: 'Metodos Anticonceptivos',
    lastText: '',
    face: 'imagenes/img1.jpg',
    img: 'imagenes/img1.jpg'
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
