/* global Router */
/* global LayoutContent */
/* global MENU */
/* global CRUD */

LayoutContent = new ReactiveVar({template: 'mapa'});

MENU = {
  items: [],
  remap: [],
  add(rota, template, content, setcontent) {
    MENU.remap.push(function () {
      Router.route(rota, function () {
        var self = this;
        self._rendered = true;
        content.template = template
        content.rota = rota
        var i=rota.indexOf(':')
        content.menu = (i>0) ? rota.substring(0,i-1) : rota;                    
        content.title = MENU.menuMapping[content.menu]
        if (setcontent) setcontent.call(this,content);        
        LayoutContent.set(content)
      });
    })
  },
  map(menuMapping) {
    MENU.menuMapping = menuMapping
  },
  get() {
    if (MENU.remap) MENU.mapMenus()
    return MENU.items
  },
  go(url) {
    Router.go(url)
  },
  mapMenus() {
    MENU.items = [];
    for (var rota in MENU.menuMapping) {
      MENU.items.push({
        rota,
        title: MENU.menuMapping[rota]
      })
    }
    MENU.remap.forEach(function (fn) {
      fn();
    })
  }
}

Meteor.autorun(function(){
  document.title = 'CVV - ' + LayoutContent.get().title
})

CRUD = function (collection, listFields) {

  MENU.add('/' + collection, 'crudlist', { collection, listFields });

  MENU.add('/' + collection + '/add', collection, { type: 'insert' });
  MENU.add('/' + collection + '/:_id', collection, { type: 'update' }, function(content){    
    content.doc = db[collection].findOne({_id: this.params._id})
    content.title = [content.title].concat(     
      listFields.map((f)=>
        content.doc[f]
      )).join(' - ')
  });

}

UI.registerHelper('content', function (context, options) {
  var r = LayoutContent.get()
  if (context)
    r = r[context]
  return r;
});