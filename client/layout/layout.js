/* global Template */

MENU.add('/', 'mapa', {});   

Template.Layout.helpers({
  menu: function(){
    return MENU.get();
  },
  menuclass: function(rota){
    var rotaatual=LayoutContent.get().rota || ''
    if (rotaatual == rota) 
      return 'active'
    return '';
  }
})