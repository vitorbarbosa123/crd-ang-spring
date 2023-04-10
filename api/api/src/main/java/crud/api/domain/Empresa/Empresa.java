package crud.api.domain.Empresa;

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

@Table(name = "empresas")
@Entity(name  = "Empresa")
@Getter
@NoArgsConstructor
@AllArgsConstructor
@EqualsAndHashCode(of = "id")
public class Empresa {

    public Empresa(DadosEmpresa empresa) {
        this.ativo = true;
        this.nome = empresa.nome();
        this.cnpj = empresa.cnpj();
        this.endereco = new Endereco(empresa.endereco());
    }

    @Id @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long id;
    private String nome;
    private String cnpj; 
    
    @Embedded
    private Endereco endereco;

    private boolean ativo;

    public void atualizarInformacoes(@Valid DadosAtualizacaoEmpresa empresa) {
        if(empresa.nome() != null) {
            this.nome = empresa.nome();
        } 
        if(empresa.endereco() != null) {
            this.endereco.atualizarInformacoes(empresa.endereco());
        }
    }

    public void excluir() {
        this.ativo = false;
    }
}
