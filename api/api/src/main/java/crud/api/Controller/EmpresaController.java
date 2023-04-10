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

import crud.api.domain.Empresa.DadosAtualizacaoEmpresa;
import crud.api.domain.Empresa.DadosDetalhamentoEmpresa;
import crud.api.domain.Empresa.DadosEmpresa;
import crud.api.domain.Empresa.DadosListagemEmpresa;
import crud.api.domain.Empresa.Empresa;
import crud.api.domain.Empresa.EmpresaRepository;
import jakarta.validation.Valid;

@RestController
@RequestMapping("empresa")
public class EmpresaController {

    @Autowired
    private EmpresaRepository repository;
    
    @PostMapping
    @Transactional
    public ResponseEntity cadastrarEmpresa(@RequestBody @Valid DadosEmpresa empresa, UriComponentsBuilder uriBuilder) {
       Empresa Empresa = new Empresa(empresa);
       repository.save(Empresa);
       URI uri = uriBuilder.path("/empresa/{id}").buildAndExpand(Empresa.getId()).toUri();
       return ResponseEntity.created(uri).body(new DadosDetalhamentoEmpresa(Empresa));
    }

    @GetMapping
    public ResponseEntity <Page<DadosListagemEmpresa>> listarEmpresa(@PageableDefault(size=10, sort={"nome"}) Pageable paginacao) {
        Page page = repository.findAllByAtivoTrue(paginacao).map(DadosListagemEmpresa::new);
        return ResponseEntity.ok(page);
    }

    @PutMapping
    @Transactional
    public ResponseEntity atualizarEmpresa(@RequestBody @Valid DadosAtualizacaoEmpresa empresa) {
       Empresa Empresa = repository.getReferenceById(empresa.id());
       Empresa.atualizarInformacoes(empresa);
       return ResponseEntity.ok(new DadosDetalhamentoEmpresa(Empresa));
    }

    @DeleteMapping("/{id}")
    @Transactional
    public ResponseEntity excluirEmpresa(@PathVariable Long id) {
        Empresa Empresa = repository.getReferenceById(id);
        Empresa.excluir();
        return ResponseEntity.noContent().build();
    }

    @GetMapping("/{id}")
    public ResponseEntity detalharEmpresa(@PathVariable Long id) {
        Empresa Empresa = repository.getReferenceById(id);
        return ResponseEntity.ok(new DadosDetalhamentoEmpresa(Empresa));
    }
}
