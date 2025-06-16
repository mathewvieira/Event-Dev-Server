import { BaseDTO, UpdateDTO, ResponseDTO } from './base.dto.js'

const defaultsComunidade = () => ({
  nome: '',
  descricao: '',
  logo_Url: '',
  telefone: '',
  link_instagram: '',
  link_linkedin: '',
  link_website: '',
  link_github: '',
  criado_em: new Date().toISOString()
})

const insertableFieldsComunidade = [
  'nome',
  'descricao',
  'logo_url',
  'telefone',
  'link_instagram',
  'link_linkedin',
  'link_website',
  'link_github'
]

const updatableFieldsComunidade = [
  'nome',
  'descricao',
  'logo_url',
  'telefone',
  'link_instagram',
  'link_linkedin',
  'link_website',
  'link_github',
  'ativo'
]

const responseComunidade = () => ({
  id,
  nome,
  descricao,
  logo_url,
  telefone,
  link_instagram,
  link_linkedin,
  link_website,
  link_github,
  ativo,
  criado_em,
  atualizado_em
})

const validateDataComunidade = (comunidade) => {
  const errors = []
  if (!comunidade.nome.trim()) errors.push('É necessário ter um nome para a Comunidade.')
  if (!comunidade.logo_url.trim()) errors.push('É necessário fornecer o caminho de uma imagem para a logo.')
  return { isValid: errors.length === 0, errors }
}

export class ComunidadeCreateDTO extends BaseDTO {
  constructor(data = {}) {
    super(defaultsComunidade, validateDataComunidade, insertableFieldsComunidade, data)
  }
}

export class ComunidadeUpdateDTO extends UpdateDTO {
  constructor(data = {}) {
    super(updatableFieldsComunidade, data)
  }
}

export class ComunidadeResponseDTO extends ResponseDTO {
  constructor(response = responseComunidade) {
    super(response)
  }
}
