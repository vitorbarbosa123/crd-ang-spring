package crud.api.Empresa;

public record DadosListagemEmpresa(
    Long id,
    String nome, 
    String cnpj, 
    String cep) {

        public DadosListagemEmpresa(Empresa empresa) {
            this(empresa.getId(), empresa.getNome(), empresa.getCnpj(), empresa.getEndereco().getCep());
        }

}
