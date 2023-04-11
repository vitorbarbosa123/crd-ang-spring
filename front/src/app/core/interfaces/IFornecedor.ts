export interface IFornecedor{
    nome: string,
    cnpjOrCpf: string,
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
