package crd.spring.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import crd.spring.empresa.Empresa;
import crd.spring.empresa.EmpresaRepository;

@RestController
@RequestMapping("empresa")
public class EmpresaController {

    @Autowired
    private EmpresaRepository repository;
    
    @PostMapping
    public void cadastrar(@RequestBody Empresa empresa) {
        repository.save(new Empresa(empresa));
    }
}
