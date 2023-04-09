package crd.spring.empresa;

import jakarta.persistence.Embedded;
import jakarta.persistence.Entity;
import jakarta.persistence.EnumType;
import jakarta.persistence.Enumerated;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Table;
import lombok.AllArgsConstructor;
import lombok.EqualsAndHashCode;
import lombok.Getter;
import lombok.NoArgsConstructor;

@Table(name ="empresas")
@Entity(name = "Empresa")
@Getter
@NoArgsConstructor
@AllArgsConstructor
@EqualsAndHashCode(of = "cnpj")
public class Empresa {

    @Id @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long cnpj;
    private String nome;

    @Enumerated(EnumType.STRING)
    private Fornecedores fornecedores;

    @Embedded
    private Endereco endereco;
 
}