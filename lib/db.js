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

plantao_necessidade = 2;//dois plantonistas por plantao

plantao_codigo = function(dia, horario)
{
  return ['P-',horario,'/',dia].join('')
}

plantao_codigo_horario = function(horario)
{
  return ['P-',horario].join('')
}

plantao_intervalo_horario = function(horario){
  return [(horario),'h à ',(horario+4),'h'].join('')
}

plantao_decodigo = function(codigo)
{
  var m=codigo.match(/P\-(\d+)\/(\d+)/)  
  return {
    dia: parseInt(m[2]),
    hora: parseInt(m[1])
  }  
}

plantao_dias = [1,2,3,4,5,6,7]
plantao_horarios = [7,11,15,19,23]
plantao_lista = plantao_dias.reduce((r, dia)=>{
  return r.concat(plantao_horarios.map((horario)=>plantao_codigo(dia, horario)))
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

mapa_em_branco = function(len){
  return {len, data: {}}
}

mapa_get_cell=function(mapa, plantao){
  return mapa.data[plantao]
}

mapa_add=function(mapa, plantao, texto, classe){
  var cell=mapa_get_cell(mapa, plantao);
  if (!cell)
    mapa.data[plantao]=cell=[]
  if (cell.length>=mapa.len)
    throw new Error('sem espaço em '+plantao+' para '+texto)
  cell.push({texto, classe}) 
}