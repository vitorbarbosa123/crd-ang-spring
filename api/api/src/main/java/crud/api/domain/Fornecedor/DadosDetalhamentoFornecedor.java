package crud.api.domain.Fornecedor;

import crud.api.domain.Endereco.Endereco;
import jakarta.validation.Valid;

public record DadosDetalhamentoFornecedor(Long id, String cgc, Endereco endereco, String nome, String email, String birthdate, String rg) {

    public DadosDetalhamentoFornecedor(@Valid Fornecedor fornecedor) {
        this(fornecedor.getId(), 
              fornecedor.getCgc(), 
              fornecedor.getEndereco(), 
              fornecedor.getNome(), 
              fornecedor.getEmail(),
              fornecedor.getBirthdate(), 
              fornecedor.getRg());
    }

}
