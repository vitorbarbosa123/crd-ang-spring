package crud.api.domain.Fornecedor;

import crud.api.domain.Endereco.Endereco;
import jakarta.persistence.Embedded;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
import jakarta.validation.Valid;
import lombok.AllArgsConstructor;
import lombok.EqualsAndHashCode;
import lombok.Getter;
import lombok.NoArgsConstructor;

@Table(name = "fornecedores")
@Entity(name  = "Fornecedor")
@Getter
@NoArgsConstructor
@AllArgsConstructor
@EqualsAndHashCode(of = "id")
public class Fornecedor {

    public Fornecedor(DadosFornecedor fornecedor) {
        this.ativo = true;
        this.nome = fornecedor.nome();
        this.cgc = fornecedor.cgc();
        this.email = fornecedor.email();
        this.endereco = new Endereco(fornecedor.endereco());
        this.birthdate = fornecedor.birthdate();
        this.rg = fornecedor.rg();
    }

    @Id @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long id;
    private String nome;
    private String cgc; 
    private String email;
    private String birthdate;
    private String rg;
    
    @Embedded
    private Endereco endereco;

    private boolean ativo;

    public void atualizarInformacoes(@Valid DadosAtualizacaoFornecedor fornecedor) {
        if(fornecedor.nome() != null) {
            this.nome = fornecedor.nome();
        } 
        if(fornecedor.endereco() != null) {
            this.endereco.atualizarInformacoes(fornecedor.endereco());
        }
    }

    public void excluir() {
        this.ativo = false;
    }
}
