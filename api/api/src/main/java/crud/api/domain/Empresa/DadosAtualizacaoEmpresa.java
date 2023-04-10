package crud.api.domain.Empresa;

import crud.api.domain.Endereco.DadosEndereco;
import jakarta.validation.constraints.NotNull;

public record DadosAtualizacaoEmpresa(
    
    @NotNull
    Long id, 
    String nome, 
    DadosEndereco endereco) {

}
