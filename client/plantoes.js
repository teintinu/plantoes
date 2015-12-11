
Template.plantoes.helpers({
  dados: function () {
    return {
      titulo1: "MAPA GERAL DE PLANTÃO",
      titulo2: "06/12 a 12/12/2015",
      titulo3: "MAPA GERAL DE PLANTÃO - DEZEMBRO/2015",
      use_b: true,
      plantoes: [
        {
          codigo: 'P-07',
          intervalo: '07h às 11h',
          dom_a: 'MARY',
          dom_b: 'ANA',
          dom_a_class: 'normal',
          dom_b_class: 'novato',
          
          seg_a: 'JANE',
          seg_b: '',
          seg_a_class: 'normal',
          seg_b_class: 'vazio',

          ter_a: 'HAMIRA',
          ter_b: '',
          ter_a_class: 'normal',
          ter_b_class: 'vazio',

          qua_a: 'CLEUSA',
          qua_b: '',
          qua_a_class: 'normal',
          qua_b_class: 'vazio',

          qui_a: 'MARILU',
          qui_b: '',
          qui_a_class: 'normal',
          qui_b_class: 'vazio',

          sex_a: 'DEJÉ',
          sex_b: '',
          sex_a_class: 'normal',
          sex_b_class: 'vazio',
          
          sab_a: 'MARLY',
          sab_b: 'ROSANA',
          sab_a_class: 'normal',
          sab_b_class: 'normal'          
        },
         {
          codigo: 'P-11',
          intervalo: '11h às 15h',
          dom_a: 'ELISENE',
          dom_b: '',
          dom_a_class: 'normal',
          dom_b_class: 'vazio',
          
          seg_a: 'MARCIA',
          seg_b: 'LUIZ',
          seg_a_class: 'rodizio',
          seg_b_class: 'novato',

          ter_a: 'ILMA',
          ter_b: '',
          ter_a_class: 'normal',
          ter_b_class: 'vazio',

          qua_a: 'Mª SUELI',
          qua_b: '',
          qua_a_class: 'normal',
          qua_b_class: 'vazio',

          qui_a: 'LENITA',
          qui_b: '',
          qui_a_class: 'normal',
          qui_b_class: 'vazio',

          sex_a: 'Mª SUELI',
          sex_b: 'AMANDA',
          sex_a_class: 'rodizio',
          sex_b_class: 'novato',
          
          sab_a: 'ANGELO',
          sab_b: '',
          sab_a_class: 'normal',
          sab_b_class: 'vazio'          
        },
         {
          codigo: 'P-15',
          intervalo: '15h às 19h',
          
          dom_a: 'MARCOS',
          dom_b: 'BENEDITA',
          dom_a_class: 'normal',
          dom_b_class: 'normal',
          
          seg_a: 'JULIENE',
          seg_b: '',
          seg_a_class: 'rodizio',
          seg_b_class: 'vazio',

          ter_a: 'MARCOS',
          ter_b: 'VALÉRIA',
          ter_a_class: 'rodizio',
          ter_b_class: 'novato',

          qua_a: 'CRISTINA',
          qua_b: '',
          qua_a_class: 'normal',
          qua_b_class: 'vazio',

          qui_a: 'KLEBER',
          qui_b: 'JOSÉ FERNANDO',
          qui_a_class: 'normal',
          qui_b_class: 'novato',

          sex_a: 'DENISE',
          sex_b: '',
          sex_a_class: 'normal',
          sex_b_class: 'vazio',
          
          sab_a: 'MESSIAS',
          sab_b: '',
          sab_a_class: 'normal',
          sab_b_class: 'vazio'          
        },
         {
          codigo: 'P-19',
          intervalo: '19h às 23h',
          
          dom_a: 'JOÃO',
          dom_b: '',
          dom_a_class: 'normal',
          dom_b_class: 'vazio',
          
          seg_a: 'MÁRIO',
          seg_b: 'LILIAN',
          seg_a_class: 'normal',
          seg_b_class: 'normal',

          ter_a: 'CAIO',
          ter_b: 'TAVARES',
          ter_a_class: 'normal',
          ter_b_class: 'normal',

          qua_a: 'LUCIMEIRY',
          qua_b: 'VOGADO',
          qua_a_class: 'normal',
          qua_b_class: 'novato',

          qui_a: 'CARLOS',
          qui_b: 'ALEXANDRE',
          qui_a_class: 'normal',
          qui_b_class: 'normal',

          sex_a: 'TÂNIA',
          sex_b: 'CIDA',
          sex_a_class: 'normal',
          sex_b_class: 'normal',
          
          sab_a: 'MÁRIO',
          sab_b: 'RENATA',
          sab_a_class: 'rodizio',
          sab_b_class: 'novato'          
        },
         {
          codigo: 'P-23',
          intervalo: '23h às 07h',
          
          dom_a: 'ROCHA',
          dom_b: '',
          dom_a_class: 'normal',
          dom_b_class: 'vazio',
          
          seg_a: 'Mª AFONSA',
          seg_b: '',
          seg_a_class: 'normal',
          seg_b_class: 'vazio',

          ter_a: 'KIYOKO',
          ter_b: 'ALFREDO',
          ter_a_class: 'normal',
          ter_b_class: 'normal',

          qua_a: 'DAYSE',
          qua_b: '',
          qua_a_class: 'normal',
          qua_b_class: 'vazio',

          qui_a: 'DANIEL',
          qui_b: '',
          qui_a_class: 'rodizio',
          qui_b_class: 'vazio',

          sex_a: 'VALMER',
          sex_b: '',
          sex_a_class: 'normal',
          sex_b_class: 'vazio',
          
          sab_a: 'JULIENE',
          sab_b: '',
          sab_a_class: 'rodizio',
          sab_b_class: 'vazio'          
        }
      ]
    }
  }
});

Template.plantoes.events({
  'click button': function () {
    // increment the counter when button is clicked
    Session.set('counter', Session.get('counter') + 1);
  }
});


