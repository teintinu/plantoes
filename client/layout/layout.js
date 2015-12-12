/* global Template */

HideLayout = new ReactiveVar(false)

MENU.add('/', 'home', {template: 'home'});   

Template.Layout.helpers({
  menu: function(){
    return MENU.get();
  },
  menuclass: function(rota){
    var rotaatual=LayoutContent.get().rota || ''
    if (rotaatual == rota) 
      return 'active'
    return '';
  },
  hideLayout: function(){
    return HideLayout.get()
  }
})

printContents = function()
{
   var contents = $('.container').html();
   var frame = $('#printframe')[0].contentWindow.document;

   $('#printmodal').css({'display':'block'});

   frame.open();
   frame.write(contents);
   frame.close();

   $('#printframe')[0].contentWindow.print();    
}