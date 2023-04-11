package crud.api.domain.Fornecedor;

public record DadosListagemFornecedor(
    Long id,
    String nome, 
    String cgc,
    String email,
    String rg,
    String birthdate,
    String cep) {

        public DadosListagemFornecedor(Fornecedor fornecedor) {
            this( fornecedor.getId(), 
                  fornecedor.getNome(), 
                  fornecedor.getCgc(), 
                  fornecedor.getEndereco().getCep(), 
                  fornecedor.getEmail(),
                  fornecedor.getBirthdate(),
                  fornecedor.getRg());
        }

}
