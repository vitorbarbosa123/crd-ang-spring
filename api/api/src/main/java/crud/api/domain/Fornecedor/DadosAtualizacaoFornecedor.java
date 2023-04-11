package crud.api.domain.Fornecedor;

import crud.api.domain.Endereco.DadosEndereco;
import jakarta.validation.constraints.NotNull;

public record DadosAtualizacaoFornecedor(
    
    @NotNull
    Long id, 
    String nome, 
    String email,
    String rg,
    String birthdate,
    DadosEndereco endereco) {

}
