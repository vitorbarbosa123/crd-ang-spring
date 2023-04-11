package crud.api.domain.Fornecedor;

import crud.api.domain.Endereco.DadosEndereco;
import jakarta.validation.Valid;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.NotNull;

public record DadosFornecedor(
    
    @NotBlank
    String nome, 

    @NotBlank
    String cgc,

    @NotBlank
    String email,

    String rg,
    String birthdate,
    @NotNull
    @Valid
    DadosEndereco endereco) {

}
