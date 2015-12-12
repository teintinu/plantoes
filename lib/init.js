if (false && Meteor.isServer)
Meteor.startup(function(){
	
	db.voluntario.remove({})
	db.mapa.remove({})
		
	var init=db.voluntario.find({}).count()==0;
	if (init) init_db()
})

function init_db() {	
 
    var mapa = mapa_em_branco(plantao_necessidade)
	
	getDados().forEach((dado)=>{
		if (!dado.rodizio)
		{
		  var v={
			nome: dado.nome.toUpperCase(),
			nome_completo: dado.nome_completo, 
		    plantao: dado.plantao,
			grupo: dado.grupo||'-',
			situacao: dado.situacao
		  }
		  if (dado.email)
		    v.emails = [{endereco: dado.email, BIS: true}]
		  //console.dir(v)
	  	  db.voluntario.insert(v)
		}		
		mapa_add(mapa, dado.plantao, 
		  dado.nome.toUpperCase(), 
		  dado.rodizio? 
		  'rodizio':
		  (dado.situacao=='Em acompanhamento'?'emacompanhamento':'normal'))
	})

	var m = {
		nome: '06/12 a 12/12/2015',
		ordem: 20150612,
		ativo: true,
		mapa
	}
	console.log(JSON.stringify(m,null,2))
    db.mapa.insert(m)

	function getDados() {
		return [
			{
				nome: 'Mary',
				email: 'mary12feliz@bol.com.br',
				plantao: 'P-7/1',
				situacao: 'Plantonista'
			},
			{
				nome: 'Ana',
				email: 'anefrenk@gmail.com',
				plantao: 'P-7/1',
				situacao: 'Em acompanhamento'
			},
			{
				nome: 'Elisene',
				//email: ,
				plantao: 'P-11/1',
				situacao: 'Plantonista'
			},
			{
				nome: 'Marcos',
				//email: ,
				plantao: 'P-15/1',
				situacao: 'Plantonista'
			},
			{
				nome: 'Benedita',
				email: 'beneditadv@gmail.com',
				plantao: 'P-15/1',
				situacao: 'Plantonista'
			},
			{
				nome: 'João',
				nome_completo: 'João de Castro Torres',
				email: 'joaodecastrotorres@yahoo.com.br',
				plantao: 'P-19/1',
				situacao: 'Plantonista'
			},
			{
				nome: 'Rocha',
				//	nome_completo: '',	
				email: 'jagsgeo@bol.com.br',
				plantao: 'P-23/1',
				situacao: 'Plantonista'
			},
			{
				nome: 'Jane',
				//	nome_completo: '',	
				//    email: '',
				plantao: 'P-7/2',
				situacao: 'Plantonista'
			},
			{
				nome: 'Marcia',
				rodizio: true,
				nome_completo: 'marcelia.queiroga@hotmail.com',	
				//    email: '',
				plantao: 'P-11/2',
				situacao: 'Plantonista'
			},
			{
				nome: 'Luiz',
				rodizio: true,
				//	nome_completo: '',	
				//    email: '',
				plantao: 'P-11/2',
				situacao: 'Em acompanhamento'
			},
			{
				nome: 'JULIENE',
				//	nome_completo: '',	
				//    email: '',
				plantao: 'P-15/2',
				situacao: 'Plantonista'
			},
			{
				nome: 'MARIO',
				//	nome_completo: '',	
				//    email: '',
				plantao: 'P-19/2',
				situacao: 'Plantonista'
			},
			{
				nome: 'LILIAN',
				//	nome_completo: '',	
				//    email: '',
				plantao: 'P-19/2',
				situacao: 'Plantonista'
			},
			{
				nome: 'MARIA AFONSA',
				//	nome_completo: '',	
				//    email: '',
				plantao: 'P-23/2',
				situacao: 'Plantonista'
			},
			{
				nome: 'HAMIRA',
				//	nome_completo: '',	
				//    email: '',
				plantao: 'P-7/3',
				situacao: 'Plantonista'
			},
			{
				nome: 'HILMA',
				//	nome_completo: '',	
				//    email: '',
				plantao: 'P-11/3',
				situacao: 'Plantonista'
			},
			{
				nome: 'MARCOS',
				rodizio: true,
				//	nome_completo: '',	
				//    email: '',
				plantao: 'P-15/3',
				situacao: 'Plantonista'
			},
			{
				nome: 'VALERIA',
				//	nome_completo: '',	
				//    email: '',
				plantao: 'P-15/3',
				situacao: 'Em acompanhamento'
			},
			{
				nome: 'CAIO',
				//	nome_completo: '',	
				//    email: '',
				plantao: 'P-19/3',
				situacao: 'Plantonista'
			},
			{
				nome: 'TAVARES',
				//	nome_completo: '',	
				//    email: '',
				plantao: 'P-19/3',
				situacao: 'Plantonista'
			},
			{
				nome: 'KIYOKO',
				//	nome_completo: '',	
				//    email: '',
				plantao: 'P-23/3',
				situacao: 'Plantonista'
			},
			{
				nome: 'ALFREDO',
				//	nome_completo: '',	
				//    email: '',
				plantao: 'P-23/3',
				situacao: 'Plantonista'
			},
			{
				nome: 'CLEUSA',
				//	nome_completo: '',	
				//    email: '',
				plantao: 'P-7/4',
				situacao: 'Plantonista'
			},
			{
				nome: 'MARIA SUELI',
				//	nome_completo: '',	
				//    email: '',
				plantao: 'P-11/4',
				situacao: 'Plantonista'
			},
			{
				nome: 'CRISTINA',
				//	nome_completo: '',	
				//    email: '',
				plantao: 'P-15/4',
				situacao: 'Plantonista'
			},
			{
				nome: 'LUCIMEIRY',
				//	nome_completo: '',	
				//    email: '',
				plantao: 'P-19/4',
				situacao: 'Plantonista'
			},
			{
				nome: 'VOGADO',
				//	nome_completo: '',	
				//    email: '',
				plantao: 'P-19/4',
				situacao: 'Em acompanhamento'
			},
			{
				nome: 'DAYSE',
				//	nome_completo: '',	
				//    email: '',
				plantao: 'P-23/4',
				situacao: 'Plantonista'
			},
			{
				nome: 'MARILU',
				//	nome_completo: '',	
				//    email: '',
				plantao: 'P-7/5',
				situacao: 'Plantonista'
			},
			{
				nome: 'LENITA',
				//	nome_completo: '',	
				//    email: '',
				plantao: 'P-11/5',
				situacao: 'Plantonista'
			},
			{
				nome: 'KEBLER',
				//	nome_completo: '',	
				//    email: '',
				plantao: 'P-15/5',
				situacao: 'Plantonista'
			},
			{
				nome: 'JOSE FERNANDO',
				//	nome_completo: '',	
				email: 'josefernandotolentino@gmail.com',
				plantao: 'P-15/5',
				situacao: 'Em acompanhamento'
			},
			{
				nome: 'CARLOS',
				//	nome_completo: '',	
				//    email: '',
				plantao: 'P-19/5',
				situacao: 'Plantonista'
			},
			{
				nome: 'ALEXANDRE',
				//	nome_completo: '',	
				email: 'homemdemelo2004@hotmail.com',
				plantao: 'P-19/5',
				situacao: 'Plantonista'
			},
			{
				nome: 'DANIEL',
				rodizio: true,
				//	nome_completo: '',	
				//    email: '',
				plantao: 'P-23/5',
				situacao: 'Plantonista'
			},
			{
				nome: 'DEJÉ',
				//	nome_completo: '',	
				//    email: '',
				plantao: 'P-7/6',
				situacao: 'Plantonista'
			},
			{
				nome: 'MARIA SUELI',
				//	nome_completo: '',	
				//    email: '',
				rodizio: true,
				plantao: 'P-11/6',
				situacao: 'Plantonista'
			},
			{
				nome: 'AMANDA',
				//	nome_completo: '',	
				email: 'amandaanut@hotmail.com',
				plantao: 'P-11/6',
				situacao: 'Em acompanhamento'
			},
			{
				nome: 'DENISE',
				//	nome_completo: '',	
				//    email: '',
				plantao: 'P-15/6',
				situacao: 'Plantonista'
			},
			{
				nome: 'TÂNIA',
				//	nome_completo: '',	
				//    email: '',
				plantao: 'P-19/6',
				situacao: 'Plantonista'
			},
			{
				nome: 'CIDA',
				//	nome_completo: '',	
				//    email: '',
				plantao: 'P-19/6',
				situacao: 'Plantonista'
			},
			{
				nome: 'VALMER',
				//	nome_completo: '',	
				email: 'hansvam7@hotmail.com',
				plantao: 'P-23/6',
				situacao: 'Plantonista'
			},
			{
				nome: 'MARLY',
				//	nome_completo: '',	
				//    email: '',
				plantao: 'P-7/7',
				situacao: 'Plantonista'
			},
			{
				nome: 'ROSANA',
				//	nome_completo: '',	
				//    email: '',
				plantao: 'P-7/7',
				situacao: 'Plantonista'
			},
			{
				nome: 'ANGELO',
				nome_completo: 'Ângelo Brito',
				email: 'agnelo.brito@embrapa.br',
				plantao: 'P-11/7',
				situacao: 'Plantonista'
			},
			{
				nome: 'MESSIAS',
				nome_completo: 'Manoel Messias',
				email: 'jesus42jesus@hotmail.com',
				plantao: 'P-15/7',
				situacao: 'Plantonista'
			},
			{
				nome: 'MARIO',
				rodizo: true,
				//	nome_completo: '',	
				//    email: '',
				plantao: 'P-19/7',
				situacao: 'Plantonista'
			},
			{
				nome: 'RENATA',
				//	nome_completo: '',	
				//    email: '',
				plantao: 'P-19/7',
				situacao: 'Plantonista'
			},
			// {
			// 	nome: 'JULIENE',
			// 	rodizio: true,
			// 	//	nome_completo: '',	
			// 	//    email: '',
			// 	plantao: 'P-23/7',
			// 	situacao: 'Plantonista'
			// }
		]
	}
}	  
  
  
// ALEXANDRE CVV <>,

// caio cvv <seguranca@masterdobrasil.com.br>,
// "gyn@gmail.com" <gyn@gmail.com>,
// cida cvv <cidaprofissional66@hotmail.com>,
// Cristina cvv <cris_tina3@yahoo.com.br>,
// dayse cvv <dayse_anjus@hotmail.com>,
// Daniel cvv Augusto Ribeiro <danielaugustoribeiro@hotmail.com>,
// deje cvv <mjesusdfurtado@hotmail.com>,
// denise cvv <a.denisemaria@yahoo.com.br>,
// "pinacons@terra.com.br" <pinacons@terra.com.br>,
// ilma cvv <ilmamima@hotmail.com>,
// "liiamorales@gmail.com" <liiamorales@gmail.com>,

// kleber cvv <klebergarcia@brturbo.com.br>,
// lenita cvv <lenitaelena@hotmail.com>,
// lilian cvv <lilian-silva@hotmail.com>,
// lucimeiry cvv <lucimeirysantos@yahoo.com.br>,
// marcia cvv <>,
// marc silv <martrccos@hotmail.com>,
// afonsa cvv <afonsasilva12@hotmail.com>,
// "aguiamarias@gmail.com" <aguiamarias@gmail.com>,
// marilu cvv <chagasmarilu@gmail.com>,
// Mário Demarchi <carasul@terra.com.br>,

// manoel messias messias <jesus42jesus@hotmail.com>,
// rocha cvv <jdarcy68@hotmail.com>,
// thania cvv <thaniapidde@hotmail.com>,


// nilson atsom tombstone nilson atson tombstone <shirley__dias@hotmail.com>,
// "lcpellissari@terra.com.br" <ro_lustosa@hotmail.com>,
// "solgoias@hotmail.com" <solgoias@hotmail.com>,
