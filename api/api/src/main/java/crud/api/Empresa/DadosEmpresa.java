package crud.api.Empresa;

import crud.api.Endereco.DadosEndereco;
import jakarta.validation.Valid;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.NotNull;
import jakarta.validation.constraints.Pattern;

public record DadosEmpresa(
    
    @NotBlank
    String nome, 

    @NotBlank
    @Pattern(regexp = "\\d{14}")
    String cnpj, 

    @NotNull
    @Valid
    DadosEndereco endereco) {

}
