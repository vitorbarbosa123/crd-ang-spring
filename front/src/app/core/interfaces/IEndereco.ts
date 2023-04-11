export interface IEndereco {
    logradouro: string,
    bairro: string,
    cep: string,
    localidade: string,
    uf: string, 
    complemento?: string,
    numero?: string
}