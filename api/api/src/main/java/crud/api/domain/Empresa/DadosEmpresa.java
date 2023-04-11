package crud.api.domain.Empresa;

import crud.api.domain.Endereco.DadosEndereco;
import jakarta.validation.Valid;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.NotNull;
import jakarta.validation.constraints.Pattern;

public record DadosEmpresa(
    
    @NotBlank
    String nome, 

    @NotBlank
    String cnpj, 

    @NotNull
    @Valid
    DadosEndereco endereco) {

}
