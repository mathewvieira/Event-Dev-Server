export class BaseDTO {
  constructor(defaults, validateDataFunction, insertableFields, data = {}) {
    Object.assign(this, typeof defaults === 'function' ? defaults() : defaults, data)
    this.validateDataFunction = validateDataFunction
    this.insertableFields = insertableFields
  }

  validateData() {
    return this.validateDataFunction(this)
  }

  getData() {
    const result = {}
    this.insertableFields.forEach((key) => {
      if (key in this) {
        result[key] = this[key]
      }
    })
    return result
  }
}

export class UpdateDTO {
  constructor(updatableFields, data = {}) {
    Object.assign(this, data)
    this.updatableFields = updatableFields
  }

  toUpdateData() {
    const updateData = {}
    for (const key of this.updatableFields) {
      const valor = this[key]
      if (valor !== null && valor !== undefined) {
        updateData[key] = valor
      }
    }

    if (Object.keys(updateData).length > 0) {
      updateData.atualizado_em = new Date().toISOString()
    }

    return updateData
  }
}

export class ResponseDTO {
  constructor(response) {
    Object.assign(this, typeof response === 'function' ? response() : response)
  }
}
