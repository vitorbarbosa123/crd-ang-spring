export interface IFornecedor{
    id: string,
    nome: string,
    cgc: string,
    logradouro: string,
    bairro: string,
    cep: string,
    localidade: string,
    uf: string,
    complemento?: string,
    numero?: string,
    rg?: string,
    birthdate?: string
}
