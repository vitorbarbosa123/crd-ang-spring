package crud.api.Controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import crud.api.Empresa.DadosEmpresa;
import crud.api.Empresa.DadosListagemEmpresa;
import crud.api.Empresa.Empresa;
import crud.api.Empresa.EmpresaRepository;
import jakarta.validation.Valid;

@RestController
@RequestMapping("empresa")
public class EmpresaController {

    @Autowired
    private EmpresaRepository repository;
    
    @PostMapping
    @Transactional
    public void cadastrarEmpresa(@RequestBody @Valid DadosEmpresa empresa) {
       repository.save(new Empresa(empresa));
    }

    @GetMapping
    public List<DadosListagemEmpresa> listarEmpresa() {
        return repository
                .findAll()
                .stream()
                .map(DadosListagemEmpresa::new)
                .toList();
    }
}
