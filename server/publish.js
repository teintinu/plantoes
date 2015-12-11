Meteor.publish('voluntarios', function () {
	return voluntario.find({}, { sort: {'nome':1} })
})