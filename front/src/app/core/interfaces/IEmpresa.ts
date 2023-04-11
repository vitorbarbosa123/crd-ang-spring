export interface IEmpresa {
    nome: string,
    cnpj: string,
    logradouro: string,
    bairro: string,
    cep: string,
    localidade: string,
    uf: string,
    complemento?: string,
    numero?: string,
    fornecedor?: [string]
}
