create table fornecedores (

    id bigint not null auto_increment,
    nome varchar(100) not null,
    cgc varchar(18) not null unique,
    rg varchar(9),
    email varchar(50),
    birthdate varchar(10),
    logradouro varchar(100) not null,
    bairro varchar(100) not null,
    cep varchar(9) not null,
    cidade varchar(100) not null,
    uf char(2) not null,
    complemento varchar(100),
    numero varchar(20),
    primary key(id)
);