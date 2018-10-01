
create table if not exists membro(
    id int not null auto_increment primary key,
    cid varchar(15) not null,
    nome varchar(255) not null,
    check_in boolean,
    data_cadastro datetime
);

create table if not exists refeicao(
    id int not null auto_increment primary key,
    descricao varchar(255) not null
);

create table if not exists refeicao_membro(
    id_refeicao int not null primary key,
    id_membro int not null
);

insert into membro(cid,nome,check_in,data_cadastro) values('88429', 'Lucas Martins Valladares Ribeiro', 0, now())