package crud.api.domain.Empresa;

import crud.api.domain.Endereco.Endereco;
import jakarta.validation.Valid;

public record DadosDetalhamentoEmpresa(Long id, String nome, String cnpj, Endereco endereco) {

    public DadosDetalhamentoEmpresa(@Valid Empresa empresa) {
        this(empresa.getId(), empresa.getCnpj(), empresa.getNome(), empresa.getEndereco());
    }

}
