--criação do banco de dados para o aplicativo ChamAí--
--entidade1--
CREATE TABLE comerciante ( 
  cnpj_comerc BIGINT NOT NULL,
  nome VARCHAR(50),
  segmento VARCHAR(255),
  descricao VARCHAR(255),
  telefone BIGINT,
  endereco VARCHAR(255),
  redes_sociais VARCHAR(255),
  produto BIGINT NOT NULL,
  id_evento BIGINT NOT NULL,
  PRIMARY KEY(cnpj_comerc)
);

ALTER TABLE comerciante
ADD CONSTRAINT fk_produto
FOREIGN KEY (produto)
REFERENCES produto (id_produto);

ALTER TABLE comerciante
ADD CONSTRAINT fk_eventos
FOREIGN KEY (id_evento)
REFERENCES eventos (id_evento);

--entidade2--
CREATE TABLE fornecedor (
  cnpj_fornec BIGINT NOT NULL,
  nome VARCHAR(50),
  segmento VARCHAR(255),
  descricao VARCHAR(255),
  telefone BIGINT,
  endereco VARCHAR(255),
  redes_sociais VARCHAR(255),
  produto BIGINT NOT NULL,
  id_evento BIGINT NOT NULL,
  PRIMARY KEY(cnpj_fornec)
);

ALTER TABLE fornecedor
ADD CONSTRAINT fk_produto
FOREIGN KEY (produto)
REFERENCES produto (id_produto);

ALTER TABLE fornecedor
ADD CONSTRAINT fk_eventos
FOREIGN KEY (id_evento)
REFERENCES eventos (id_evento);

--entidade3--
CREATE TABLE patrocinador (
  cnpj_patroc BIGINT NOT NULL,
  nome VARCHAR(50),
  segmento VARCHAR(255),
  descricao VARCHAR(255),
  telefone BIGINT,
  endereco VARCHAR(255),
  redes_sociais VARCHAR(255),
  id_evento BIGINT NOT NULL,
  PRIMARY KEY(cnpj_patroc)
);

ALTER TABLE patrocinador
ADD CONSTRAINT fk_eventos
FOREIGN KEY (id_evento)
REFERENCES eventos (id_evento);

--entidade4--
CREATE TABLE cliente (
  cpf BIGINT NOT NULL,
  nome VARCHAR(50),
  idade INT,
  genero VARCHAR(25),
  gostos VARCHAR(255),
  interesses VARCHAR(255),
  produto BIGINT NOT NULL,
  id_evento BIGINT NOT NULL,
  PRIMARY KEY (cpf)
);

ALTER TABLE cliente
ADD CONSTRAINT fk_produto
FOREIGN KEY (produto)
REFERENCES produto (id_produto);

ALTER TABLE cliente
ADD CONSTRAINT fk_eventos
FOREIGN KEY (id_evento)
REFERENCES eventos (id_evento);

--entidade5--
CREATE TABLE produto (
  id_produto BIGINT NOT NULL,
  nome VARCHAR(50),
  descricao VARCHAR(255),
  quantidade INT,
  marca VARCHAR(255),
  cnpj_comerc BIGINT NOT NULL,
  cnpj_fornec BIGINT NOT NULL,
  cpf BIGINT NOT NULL,
  PRIMARY KEY (id_produto)
);

ALTER TABLE produto
ADD CONSTRAINT fk_comerc
FOREIGN KEY (cnpj_comerc)
REFERENCES comerciante (cnpj_comerc);

ALTER TABLE produto
ADD CONSTRAINT fk_fornec
FOREIGN KEY (cnpj_fornec)
REFERENCES fornecedor (cnpj_fornec);

ALTER TABLE produto
ADD CONSTRAINT fk_cliente
FOREIGN KEY (cpf)
REFERENCES cliente (cpf);

--entidade6--
CREATE TABLE eventos (
  id_evento BIGINT NOT NULL,
  nome VARCHAR(255),
  categoria VARCHAR(255),
  endereco VARCHAR(255),
  data_evento TIMESTAMP,
  cnpj_patroc BIGINT NOT NULL,
  cnpj_fornec BIGINT NOT NULL,
  cnpj_comerc BIGINT NOT NULL,
  cpf BIGINT NOT NULL,
  PRIMARY KEY (id_evento)
 );
 
ALTER TABLE eventos
ADD CONSTRAINT fk_patroc
FOREIGN KEY (cnpj_patroc)
REFERENCES patrocinador (cnpj_patroc);

ALTER TABLE eventos
ADD CONSTRAINT fk_fornec
FOREIGN KEY (cnpj_fornec)
REFERENCES fornecedor (cnpj_fornec);

ALTER TABLE eventos
ADD CONSTRAINT fk_comerc
FOREIGN KEY (cnpj_comerc)
REFERENCES comerciante (cnpj_comerc);

ALTER TABLE eventos
ADD CONSTRAINT fk_cliente
FOREIGN KEY (cpf)
REFERENCES cliente (cpf);
 
-----------------
--associação1~5--
CREATE TABLE comerc_produto (
  cnpj_comerc BIGINT NOT NULL,
  id_produto BIGINT NOT NULL,
  PRIMARY KEY (cnpj_comerc, id_produto),
  FOREIGN KEY (cnpj_comerc) REFERENCES comerciante (cnpj_comerc),
  FOREIGN KEY (id_produto) REFERENCES produto (id_produto)
);
--associação2~5--
CREATE TABLE fornec_produto (
  cnpj_fornec BIGINT NOT NULL,
  id_produto BIGINT NOT NULL,
  PRIMARY KEY (cnpj_fornec, id_produto),
  FOREIGN KEY (cnpj_fornec) REFERENCES fornecedor (cnpj_fornec),
  FOREIGN KEY (id_produto) REFERENCES produto (id_produto)
);
--associação4~5--
CREATE TABLE cliente_produto (
  cpf BIGINT NOT NULL,
  id_produto BIGINT NOT NULL,
  PRIMARY KEY (cpf, id_produto),
  FOREIGN KEY (cpf) REFERENCES cliente (cpf),
  FOREIGN KEY (id_produto) REFERENCES produto (id_produto)
);
--associação1~6--
CREATE TABLE comerc_eventos (
  cnpj_comerc BIGINT NOT NULL,
  id_evento BIGINT NOT NULL,
  PRIMARY KEY (cnpj_comerc, id_evento),
  FOREIGN KEY (cnpj_comerc) REFERENCES comerciante (cnpj_comerc),
  FOREIGN KEY (id_evento) REFERENCES eventos (id_evento)
);
--associação2~6--
CREATE TABLE fornec_eventos (
  cnpj_fornec BIGINT NOT NULL,
  id_evento BIGINT NOT NULL,
  PRIMARY KEY (cnpj_fornec, id_evento),
  FOREIGN KEY (cnpj_fornec) REFERENCES fornecedor (cnpj_fornec),
  FOREIGN KEY (id_evento) REFERENCES eventos (id_evento)
);
--associação3~6--
CREATE TABLE patroc_eventos (
  cnpj_patroc BIGINT NOT NULL,
  id_evento BIGINT NOT NULL,
  PRIMARY KEY (cnpj_patroc, id_evento),
  FOREIGN KEY (cnpj_patroc) REFERENCES patrocinador (cnpj_patroc),
  FOREIGN KEY (id_evento) REFERENCES eventos (id_evento)
);
--associação4~6--
CREATE TABLE cliente_eventos (
  cpf BIGINT NOT NULL,
  id_evento BIGINT NOT NULL,
  PRIMARY KEY (cpf, id_evento),
  FOREIGN KEY (cpf) REFERENCES cliente (cpf),
  FOREIGN KEY (id_evento) REFERENCES eventos (id_evento)
);
-----------------


