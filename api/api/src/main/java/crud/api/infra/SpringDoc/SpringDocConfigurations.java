package crud.api.infra.SpringDoc;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

import io.swagger.v3.oas.models.Components;
import io.swagger.v3.oas.models.OpenAPI;
import io.swagger.v3.oas.models.info.Contact;
import io.swagger.v3.oas.models.info.Info;
import io.swagger.v3.oas.models.info.License;
import io.swagger.v3.oas.models.security.SecurityScheme;

@Configuration
public class SpringDocConfigurations {
    
    @Bean
    public OpenAPI customOpenAPI() {
        return new OpenAPI()
                .components(new Components()
                        .addSecuritySchemes("bearer-key",
                                new SecurityScheme()
                                        .type(SecurityScheme.Type.HTTP)
                                        .scheme("bearer")
                                        .bearerFormat("JWT")))
                        .info(new Info()
                                .title("CRUD API")
                                .description("API Rest da aplicação Spring + Angular, contendo as funcionalidades de CRUD de empresa e de fornecedor.")
                                .contact(new Contact()
                                        .name("Vitor Barbosa")
                                        .email("vitorbarbosa789@gmail.com"))
                        .license(new License()
                                .name("Apache 2.0")
                                .url("http://crud/api/licenca")));
    }
}
