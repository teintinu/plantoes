Template.crudlist.helpers({
  collection: function(){
    var content=LayoutContent.get();
    return content && content.collection
  },
  rows: function(){
    var content=LayoutContent.get();
    if (!content) return
    var col=content.collection;
    return db[col].find({})
  },
  desc: function(row){
    var content=LayoutContent.get();
    if (!content) return
    var listFields=content.listFields
    if(listFields.length==1)
      return row[listFields[0]]
    return false
  }
})

Template.crudlist.events({
  'click .crudadd': function(){
    MENU.go('/voluntario/add')
  },
  'click .crudedit': function(ev){    
    MENU.go('/voluntario/'+ev.target.getAttribute('data-_id'))
  }
})