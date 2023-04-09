package crd.spring.controller;

import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import crd.spring.empresa.Empresa;

@RestController
@RequestMapping("empresa")
public class EmpresaController {
    
    @PostMapping
    public void cadastrar(@RequestBody Empresa empresa) {
        System.out.println(empresa);
    }
}
