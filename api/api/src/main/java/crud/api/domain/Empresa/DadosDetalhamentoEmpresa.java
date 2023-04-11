package crud.api.domain.Empresa;

import crud.api.domain.Endereco.Endereco;
import jakarta.validation.Valid;

public record DadosDetalhamentoEmpresa(Long id, String cgc, Endereco endereco, String nome) {

    public DadosDetalhamentoEmpresa(@Valid Empresa empresa) {
        this(empresa.getId(), empresa.getCgc(), empresa.getEndereco(), empresa.getNome());
    }

}
