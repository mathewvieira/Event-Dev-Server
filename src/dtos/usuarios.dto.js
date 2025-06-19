import { BaseDTO, UpdateDTO, ResponseDTO } from './base.dto.js'

const defaultsUsuario = () => ({
  id_comunidade: null,
  email: '',
  senha: '',
  funcao: 'membro',
  usuario_root: false,
  ativo: true,
  criado_em: new Date().toISOString()
})

const insertableFieldsUsuario = [
  'id_comunidade',
  'email',
  'senha',
  'funcao',
  'usuario_root',
  'ativo'
]

const updatableFieldsUsuario = [
  'id_comunidade',
  'email',
  'senha',
  'funcao',
  'usuario_root',
  'ativo'
]

const responseUsuarioMapper = (usuario) => {
  if (!usuario) return null;

  return {
    id: usuario.id,
    id_comunidade: usuario.id_comunidade,
    email: usuario.email,
    funcao: usuario.funcao,
    usuario_root: usuario.usuario_root,
    ativo: usuario.ativo,
    criado_em: usuario.criado_em,
    atualizado_em: usuario.atualizado_em
  }
}

const validateDataUsuario = (usuario) => {
  const errors = []
  if (!usuario.email || !usuario.email.trim()) errors.push('O e-mail é obrigatório.')

  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(usuario.email)) errors.push('Formato de e-mail inválido.')

  if (usuario.email && usuario.email.length > 255) errors.push('O e-mail não pode exceder 255 caracteres.')

  if (!usuario.senha || typeof usuario.senha !== 'string' || usuario.senha.length < 6) errors.push('A senha é obrigatória e deve ter pelo menos 6 caracteres.')

  if (usuario.senha && usuario.senha.length > 255) errors.push('A senha não pode exceder 255 caracteres.')


  if (!usuario.funcao || !usuario.funcao.trim()) errors.push('A função do usuário é obrigatória.')
  if (usuario.funcao && usuario.funcao.length > 255) errors.push('A função não pode exceder 255 caracteres.')


  if (usuario.id_comunidade !== null && usuario.id_comunidade !== undefined && typeof usuario.id_comunidade !== 'bigint' && typeof usuario.id_comunidade !== 'number') {
      errors.push('id_comunidade deve ser um número ou nulo.')
  }

  if (usuario.usuario_root !== undefined && typeof usuario.usuario_root !== 'boolean') errors.push('usuario_root deve ser um valor booleano.')
  if (usuario.ativo !== undefined && typeof usuario.ativo !== 'boolean') errors.push('ativo deve ser um valor booleano.')


  return { isValid: errors.length === 0, errors }
}


export class UsuarioCreateDTO extends BaseDTO {
  constructor(data = {}) {
    super(defaultsUsuario, validateDataUsuario, insertableFieldsUsuario, data)
  }
}

export class UsuarioUpdateDTO extends UpdateDTO {
  constructor(data = {}) {
    super(updatableFieldsUsuario, data)
  }
}

export class UsuarioResponseDTO extends ResponseDTO {
  constructor(usuarioData) {
    super(responseUsuarioMapper(usuarioData))
  }
}