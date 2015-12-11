/* global plantao_codigo */
/* global plantao_decodigo */
/* global db */
/* global plantao_lista */
/* global grupo_lista */
/* global situacao_lista */
/* global Mongo */
/* global voluntario */
/* global SimpleSchema */
/* global mapa */

db = {}
function DB(name, schema) {
  var v = new Mongo.Collection(name);
  if (schema)
    v.attachSchema(new SimpleSchema(schema))
  db[name] = v;
  return v;
}

plantao_codigo = function(dia, hora)
{
  return ['P-',hora,'/',dia].join('')
}

plantao_decodigo = function(codigo)
{
  var m=codigo.match(/P\-(\d+)\/(\d+)/)  
  return {
    dia: parseInt(m[2]),
    hora: parseInt(m[1])
  }  
}

plantao_lista = [1,2,3,4,5,6,7].reduce((r, dia)=>{
  r.push(plantao_codigo(dia, 7))
  r.push(plantao_codigo(dia, 11))
  r.push(plantao_codigo(dia, 15))
  r.push(plantao_codigo(dia, 19))
  r.push(plantao_codigo(dia, 23))
	return r;
},[])

grupo_lista = ['G1', 'G2', 'G3', 'G4', 'G5', 'G6']
situacao_lista = ['Estágio', 'Em acompanhamento', 'Plantonista', 'Excluído(a)']

voluntario = DB("voluntario", {
  "nome": {
    type: String,
    label: "nome que prefere ser chamado"
  },
  "nome_completo": {
    type: String,
    label: "nome completo",
    max: 200,
    optional: true
  },
  "plantao": {
    type: String,
    label: "plantão",
    allowedValues: plantao_lista.concat(['-'])    
  },
  "grupo": {
    type: String,
    label: "Grupo",
    allowedValues: grupo_lista.concat(['-'])    
  },
  "situacao":{
    type: String,
    label: "Situação",
    allowedValues: situacao_lista    
  },
  "emails": {
    type: Array,
    optional: true
  },
  "emails.$": {
    type: Object
  },
  "emails.$.endereco": {
    type: String,
    label: "endereço de email",
    regEx: SimpleSchema.RegEx.Email
  },
  "emails.$.BIS": {
    type: Boolean,
    label: "Enviar BIS para esse email"
  },
  "telefones": {
    type: Array,
    optional: true
  },
  "telefones.$": {
    type: Object
  },
  "telefones.$.numero": {
    type: String,
    label: "DDD / número"
  },
  "telefones.$.Observacao": {
    type: String,
    label: "Observação"
  }
});

voluntario.permit(['insert', 'update', 'remove']).apply();    

mapa = DB('mapa', null, {
  "nome": {
    type: String,
    label: "nome do mapa"
  },  
  "mapa": {
    type: Array,
    label: 'dias da semana'
  },  
  "mapa.$": {
    type: Array,
    label: 'hora de inicio',
    optional: false
  },
  "mapa.$.$": {
    type: Array,
    label: 'celula do dia/hora',
    optional: false
  },
  "mapa.$.$.$": {
    type: Object,
    optional: false
  },
  "mapa.$.$.$.texto": {
    type: String,
    optional: false
  },
  "mapa.$.$.$.classe": {
    type: String,
    optional: false
  },
})

mapa_em_branco = function(cell_value){
  return [1,2,3,4,5,6,7].map(()=>[7,11,15,19,23].map(()=>cell_value.slice()))
}

mapa_get_cell=function(mapa, plantao){
 var p = plantao_decodigo(plantao);
 var row=mapa[p.dia-1] 
 var col=[7,11,15,19,23].indexOf(p.hora)
 return row[col]
}

mapa_add=function(mapa, plantao, texto, classe){
  var cell=mapa_get_cell(mapa, plantao);
  console.dir(cell)
  if (!cell.some((item, idx)=>{
    console.log(item, idx)
    if (item==null)
    {
      cell[idx] = {texto, classe} 
      return true;
    }
  })) throw new Error('sem espaço em '+plantao+' para '+texto)  
}