package crd.spring.endereco;

import jakarta.persistence.Embeddable;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;

@Embeddable
@Getter
@NoArgsConstructor
@AllArgsConstructor
public class EnderecoJPA {

    private String logradouro;
    private String bairro;
    private String cep;
    private String cidade;
    private String UF;
    private String complemento;
    private String numero;
}
