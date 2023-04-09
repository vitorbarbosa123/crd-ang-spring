package crd.spring.empresa;

import crd.spring.endereco.Endereco;

public record Empresa(
    String nome, 
    long cnpj, 
    Endereco endereco ) {
    
}
