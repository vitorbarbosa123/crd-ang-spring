package crud.api.Empresa;

public record DadosListagemEmpresa(
    String nome, 
    String cnpj, 
    String cep) {

        public DadosListagemEmpresa(Empresa empresa) {
            this(empresa.getNome(), empresa.getCnpj(), empresa.getEndereco().getCep());
        }

}
