MENU.add('/mg', 'mapageral', {});   

Template.mapageral.created = {
	this.
	this.autorun(function(){
      		
	})
}

Template.mapageral.helpers({
	mapa: function () {
		return db.mapa.find({})
	},
	titulo1: 'MAPA GERAL DE PLANTÃO',
	titulo2: function (mapa) {
		return mapa.nome
	},
	titulo3: function (mapa) {
		return 'MAPA GERAL DE PLANTÃO - ' + mapa.nome
	},
	linhas: function (mapa) {
		var r = []
		plantao_horarios.forEach((horario) => {
			for (var i = 0; i < mapa.len; i++) {
				r.push({
					primeira_linha: i == 0,
					linha_span: mapa.len,
					codigo: plantao_codigo_horario(horario),
					intervalo: plantao_intervalo_horario(horario),
					dias: plantao_dias.map((dia) => {
						var cell = mapa_get_cell(mapa, plantao_codigo(dia, horario))
						if (cell && i < cell.length)
							return {
								texto: cell[i].texto || 'ERRO',
								classe: cell[i].classe,
								plantaolink: plantao_codigo(dia, horario) + '#' + i
							}
						else
							return {
								texto: '-',
								classe: cell ? 'vazio' : 'urgente',
								plantaolink: plantao_codigo(dia, horario) + '#n'
							}
					})
				})
			}
		});
		return r
	},
	stats: function (mapa) {
		var stats = {
			necessidade: plantao_dias.length * plantao_horarios.length * plantao_necessidade,
			plantonistas: 0,
			coberto: 0,
			coberto_total: 0,
			emacompanhamento: 0,
			rodizio: 0,
			descoberto: 0
		}
		var plantonistas = []
		for (var plantao_codigo in mapa.data) {
			var plantao = mapa.data[plantao_codigo]
			if (plantao.length == plantao_necessidade)
				stats.coberto_total++
			if (plantao.length > 0)
				stats.coberto++
			plantao.forEach((p) => {
				var i = plantonistas.indexOf(p.texto)
				if (i == -1) plantonistas.push(p.texto)
				debugger
				if (p.classe == 'rodizio') stats.rodizio++
				if (p.classe == 'emacompanhamento') stats.emacompanhamento++
			})
		}
		stats.plantonistas = plantonistas.length
		stats.descoberto = (plantao_dias.length * plantao_horarios.length) - stats.coberto
		return stats
	}
})

Template.mapageral.events({
	"click .imprimir": function name(params) {
		printContents()		
	}
})