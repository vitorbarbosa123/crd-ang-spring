package crud.api.Controller;

import java.net.URI;

import org.apache.catalina.connector.Response;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.web.PageableDefault;
import org.springframework.http.ResponseEntity;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.util.UriComponentsBuilder;

import crud.api.domain.Fornecedor.DadosAtualizacaoFornecedor;
import crud.api.domain.Fornecedor.DadosDetalhamentoFornecedor;
import crud.api.domain.Fornecedor.DadosFornecedor;
import crud.api.domain.Fornecedor.DadosListagemFornecedor;
import crud.api.domain.Fornecedor.Fornecedor;
import crud.api.domain.Fornecedor.FornecedorRepository;
import jakarta.validation.Valid;

@RestController
@RequestMapping("fornecedor")
public class FornecedorController {

    @Autowired
    private FornecedorRepository repository;
    
    @PostMapping
    @Transactional
    public ResponseEntity cadastrarFornecedor(@RequestBody @Valid DadosFornecedor fornecedor, UriComponentsBuilder uriBuilder) {
       Fornecedor Fornecedor = new Fornecedor(fornecedor);
       repository.save(Fornecedor);
       URI uri = uriBuilder.path("/fornecedor/{id}").buildAndExpand(Fornecedor.getId()).toUri();
       return ResponseEntity.created(uri).body(new DadosDetalhamentoFornecedor(Fornecedor));
    }

    @GetMapping
    public ResponseEntity <Page<DadosListagemFornecedor>> listarFornecedor(@PageableDefault(size=10, sort={"nome"}) Pageable paginacao) {
        Page page = repository.findAllByAtivoTrue(paginacao).map(DadosListagemFornecedor::new);
        return ResponseEntity.ok(page);
    }

    @PutMapping
    @Transactional
    public ResponseEntity atualizarFornecedor(@RequestBody @Valid DadosAtualizacaoFornecedor fornecedor) {
       Fornecedor Fornecedor = repository.getReferenceById(fornecedor.id());
       Fornecedor.atualizarInformacoes(fornecedor);
       return ResponseEntity.ok(new DadosDetalhamentoFornecedor(Fornecedor));
    }

    @DeleteMapping("/{id}")
    @Transactional
    public ResponseEntity excluirFornecedor(@PathVariable Long id) {
        Fornecedor Fornecedor = repository.getReferenceById(id);
        Fornecedor.excluir();
        return ResponseEntity.noContent().build();
    }

    @GetMapping("/{id}")
    public ResponseEntity detalharFornecedor(@PathVariable Long id) {
        Fornecedor Fornecedor = repository.getReferenceById(id);
        return ResponseEntity.ok(new DadosDetalhamentoFornecedor(Fornecedor));
    }
}
