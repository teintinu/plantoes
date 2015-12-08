
  Template.hello.helpers({
    dados: function () {
      return {
        titulo1: "MAPA GERAL DE PLANTÃO",
        titulo2: "06/12 a 12/12/2015",
        titulo3: "MAPA GERAL DE PLANTÃO - DEZEMBRO/2015",
      }
    }
  });

  Template.hello.events({
    'click button': function () {
      // increment the counter when button is clicked
      Session.set('counter', Session.get('counter') + 1);
    }
  });


