Meteor.publish('voluntarios', function () {
	return db.voluntario.find({}, { sort: { 'nome': 1 } })
})

Meteor.publish('mapa', function () {
	return db.mapa.find({ ativo: true }, { sort: { 'ordem': 1 } })
})