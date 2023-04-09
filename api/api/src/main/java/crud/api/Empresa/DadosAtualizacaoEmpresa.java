package crud.api.Empresa;

import crud.api.Endereco.DadosEndereco;
import jakarta.validation.constraints.NotNull;

public record DadosAtualizacaoEmpresa(
    
    @NotNull
    Long id, 
    String nome, 
    DadosEndereco endereco) {

}
