package crud.api.Empresa;

import crud.api.Endereco.DadosEndereco;

public record DadosEmpresa(
    String nome, 
    String cnpj, 
    DadosEndereco endereco) {

}
