import { BaseDTO, UpdateDTO, ResponseDTO } from './base.dto.js'

const defaultsPost = () => ({
  id_comunidade: null,
  texto: '',
  criado_em: new Date().toISOString()
})
const insertableFieldsPost = [
  'id_comunidade',
  'texto',
]

const updatableFieldsPost = [
  'texto',
  'ativo'
]

const responsePostMapper = (post) => {
  if (!post) return null;

  return {
    id: post.id,
    id_comunidade: post.id_comunidade,
    texto: post.texto,
    ativo: post.ativo,
    criado_em: post.criado_em,
    atualizado_em: post.atualizado_em
  }
}



const validateDataPost = (post) => {
  const errors = []
  if (!post.id_comunidade) errors.push('O post deve estar associado a uma comunidade (id_comunidade é obrigatório).')
  if (!post.texto || !post.texto.trim()) errors.push('É necessário ter um texto para o Post.')
  if (post.texto && post.texto.length > 255) {
      errors.push('O texto do Post não pode exceder 255 caracteres.')
  }

  return { isValid: errors.length === 0, errors }
}

export class PostCreateDTO extends BaseDTO {
  constructor(data = {}) {
    super(defaultsPost, validateDataPost, insertableFieldsPost, data)
  }
}

export class PostUpdateDTO extends UpdateDTO {
  constructor(data = {}) {
    super(updatableFieldsPost, data)
  }
}

export class PostResponseDTO extends ResponseDTO {
  constructor(postData) {
    super(responsePostMapper(postData))
  }
}