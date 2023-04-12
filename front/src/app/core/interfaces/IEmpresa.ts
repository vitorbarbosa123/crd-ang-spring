export interface IEmpresa {
    nome: string,
    cgc: string,
    logradouro: string,
    bairro: string,
    cep: string,
    localidade: string,
    uf: string,
    complemento?: string,
    numero?: string,
    fornecedor?: [string]
}
