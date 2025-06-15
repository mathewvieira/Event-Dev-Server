import { BaseDTO, UpdateDTO, ResponseDTO } from './base.dto.js'

const defaultsEvento = () => ({
  titulo: '',
  descricao: '',
  data_inicio: null,
  data_fim: null,
  local: '',
  link_inscricao: '',
  link_transmissao: '',
  organizador_id: null,
  criado_em: new Date().toISOString()
})


const insertableFieldsEvento = [
  'titulo',
  'descricao',
  'data_inicio',
  'data_fim',
  'local',
  'link_inscricao',
  'link_transmissao',
  'organizador_id',
]


const updatableFieldsEvento = [
  'titulo',
  'descricao',
  'data_inicio',
  'data_fim',
  'local',
  'link_inscricao',
  'link_transmissao',
  'organizador_id',
]


const validateDataEvento = (evento) => {
  const errors = []
  if (!evento.titulo || !evento.titulo.trim()) {
    errors.push('É necessário ter um nome para o evento.')
  }
  if (!evento.data_inicio) {
    errors.push('É necessário fornecer uma data de início para o evento.')
  } else if (isNaN(new Date(evento.data_inicio).getTime())) {
    errors.push('A data de início do evento é inválida.')
  }

  if (evento.data_inicio && evento.data_fim && new Date(evento.data_fim) < new Date(evento.data_inicio)) {
    errors.push('A data de término não pode ser anterior à data de início.')
  }
  if (!evento.local && !evento.link_transmissao) {
    errors.push('É necessário informar um local ou um link de transmissão para o evento.')
  }
  return { isValid: errors.length === 0, errors }
}


export class EventoCreateDTO extends BaseDTO {
  constructor(data = {}) {
    super(defaultsEvento, validateDataEvento, insertableFieldsEvento, data)
  }
}


export class EventoUpdateDTO extends UpdateDTO {
  constructor(data = {}) {
    super(updatableFieldsEvento, data)
  }
}

const responseEventoMapper = (evento) => {
  if (!evento) return null;

  return {
    id: evento.id,
    titulo: evento.titulo,
    descricao: evento.descricao,
    data_inicio: evento.data_inicio,
    data_fim: evento.data_fim,
    local: evento.local,
    link_inscricao: evento.link_inscricao,
    link_transmissao: evento.link_transmissao,
    organizador_id: evento.organizador_id,
    ativo: evento.ativo,
    criado_em: evento.criado_em,
    atualizado_em: evento.atualizado_em
  }
}


export class EventoResponseDTO extends ResponseDTO {
  constructor(eventoData) {

    super(responseEventoMapper(eventoData))
  }
}