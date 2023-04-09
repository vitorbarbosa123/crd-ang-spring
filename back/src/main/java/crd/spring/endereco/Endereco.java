package crd.spring.endereco;

public record Endereco( 
    String logradouro, 
    String bairro, 
    String cep, 
    String cidade, 
    String UF, 
    String complemento, 
    String numero) { 
}
