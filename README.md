## CRUD ANGULAR + SPRING BOOT

### Descrição

O projeto conta com as seguintes funcionalidades implementadas:

#### Front end
-> Padrão de design da [Porshe](https://github.com/porsche-design-system/porsche-design-system) em projeto

-> Sistema de login

-> Proteção de rotas utilizando guards

-> Consultas ao back utilizando padrão services

#### Back end
-> Autenticação com JWT

-> Proteção de rotas por token

-> CRUD de entidades

-> Tratamento de erros

-> Paginação de cadastros

### Requisitos funcionais solicitados:

a. CRUD de todas as entidades (Front-end e Back-end) - **Implementado totalmente back e parcialmente front**

b. Uma empresa pode ter mais de um fornecedor  -  **Implementado totalmente back e totalmente front**

c. Um fornecedor pode trabalhar para mais de uma empresa - **Não implementado**

d. O CNPJ e CPF deve ser um valor único  - **Implementado totalmente back e totalmente front**

e. Caso o fornecedor seja pessoa física, também é necessário cadastrar o RG e a data de nascimento - **Implementado totalmente back e totalmente front**

f. Caso a empresa seja do Paraná, não permitir cadastrar um fornecedor pessoa física menor de idade - **Não implementado**

g. A listagem de fornecedores deverá conter filtros por Nome e CPF/CNPJ - **Implementado totalmente back e parcialmente front**

h. Validar CEP na API http://cep.la/api, a validação também deve ser feita no Front-end - **Implementado totalmente back e parcialmente front**

j. Teste de unidade (opcional) - **Não implementado**

k. Implementar Dockerfile (opcional) - **Implementado totalmente back e totalmente front**

Notas:
1º O serviço do CEP descrito estava fora do ar durante o desenvolvimento, com isso, utilizei uma API alternativa.

2º É necessário cadastrar um usuário na tabela de usuários para conseguir acessar a aplicação. Cadastrar a senha utilizando a criptografia do tipo BCrypt

3º O serviço de PUT não foi implementado no front, mas é possivel realizar via postman/insomnia
