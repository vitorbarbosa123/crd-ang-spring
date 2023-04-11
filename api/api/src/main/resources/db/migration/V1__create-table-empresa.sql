create table empresas (

    id bigint not null auto_increment,
    nome varchar(100) not null,
    cgc varchar(14) not null unique,
    logradouro varchar(100) not null,
    bairro varchar(100) not null,
    cep varchar(9) not null,
    cidade varchar(100) not null,
    uf char(2) not null,
    complemento varchar(100),
    numero varchar(20),

    primary key(id)
);