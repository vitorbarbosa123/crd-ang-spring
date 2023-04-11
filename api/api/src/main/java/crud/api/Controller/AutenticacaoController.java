package crud.api.Controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.client.HttpClientErrorException.BadRequest;

import crud.api.domain.Usuario.DadosAutenticacao;
import crud.api.domain.Usuario.Usuario;
import crud.api.infra.Security.DadosTokenJWT;
import crud.api.infra.Security.TokenService;
import jakarta.validation.Valid;

@RestController
@RequestMapping("login")
public class AutenticacaoController {

    @Autowired
    private AuthenticationManager manager;

    @Autowired
    private TokenService tokenService;

    @PostMapping
    public ResponseEntity login(@Valid @RequestBody DadosAutenticacao dados) {
        try {
            UsernamePasswordAuthenticationToken authenticationToken = new UsernamePasswordAuthenticationToken(dados.login(), dados.password());
            Authentication authentication = manager.authenticate(authenticationToken);
    
            String tokenJWT = tokenService.generateToken((Usuario) authentication.getPrincipal());
    
            return ResponseEntity.ok(new DadosTokenJWT(tokenJWT));
        } catch(Exception e) {
            e.printStackTrace();
            return ResponseEntity.badRequest().body(e.getMessage());
        }
    }
    
}
