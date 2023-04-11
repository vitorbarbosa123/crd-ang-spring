package crud.api.domain.Empresa;

import crud.api.domain.Endereco.DadosEndereco;
import jakarta.validation.Valid;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.NotNull;

public record DadosEmpresa(
    
    @NotBlank
    String nome, 

    @NotBlank
    String cgc, 

    @NotNull
    @Valid
    DadosEndereco endereco) {

}
