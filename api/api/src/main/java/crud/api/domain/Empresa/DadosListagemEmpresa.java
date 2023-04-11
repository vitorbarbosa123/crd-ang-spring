package crud.api.domain.Empresa;

public record DadosListagemEmpresa(
    Long id,
    String nome, 
    String cgc, 
    String cep) {

        public DadosListagemEmpresa(Empresa empresa) {
            this(empresa.getId(), empresa.getNome(), empresa.getCgc(), empresa.getEndereco().getCep());
        }

}
