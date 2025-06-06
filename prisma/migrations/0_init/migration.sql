-- CreateTable
CREATE TABLE "comunidade" (
    "id" BIGSERIAL NOT NULL,
    "nome" VARCHAR(255) NOT NULL,
    "descricao" VARCHAR(255),
    "logo_url" VARCHAR(255) NOT NULL,
    "telefone" VARCHAR(255),
    "link_instagram" VARCHAR(255),
    "link_linkedin" VARCHAR(255),
    "link_website" VARCHAR(255),
    "link_github" VARCHAR(255),
    "criado_em" TIMESTAMP(6) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "atualizado_em" TIMESTAMP(6) NOT NULL,

    CONSTRAINT "comunidade_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "evento" (
    "id" BIGSERIAL NOT NULL,
    "id_comunidade" BIGINT NOT NULL,
    "titulo" VARCHAR(255) NOT NULL,
    "capa_url" VARCHAR(255) NOT NULL,
    "descricao" VARCHAR(255) NOT NULL,
    "data_hora_inicial" TIMESTAMP(6) NOT NULL,
    "data_hora_final" TIMESTAMP(6) NOT NULL,
    "endereco" VARCHAR(255),
    "cidade" VARCHAR(255),
    "estado" VARCHAR(255),
    "cep" VARCHAR(255),
    "link" VARCHAR(255),
    "evento_online" BOOLEAN DEFAULT false,
    "criado_em" TIMESTAMP(6) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "atualizado_em" TIMESTAMP(6) NOT NULL,

    CONSTRAINT "evento_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "post" (
    "id" BIGSERIAL NOT NULL,
    "id_comunidade" BIGINT NOT NULL,
    "texto" VARCHAR(255) NOT NULL,
    "criado_em" TIMESTAMP(6) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "atualizado_em" TIMESTAMP(6) NOT NULL,

    CONSTRAINT "post_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "usuario" (
    "id" BIGSERIAL NOT NULL,
    "id_comunidade" BIGINT,
    "email" VARCHAR(255) NOT NULL,
    "senha" VARCHAR(255) NOT NULL,
    "funcao" VARCHAR(255) NOT NULL,
    "usuario_root" BOOLEAN DEFAULT false,
    "criado_em" TIMESTAMP(6) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "atualizado_em" TIMESTAMP(6) NOT NULL,

    CONSTRAINT "usuario_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "usuario_email_key" ON "usuario"("email");

-- AddForeignKey
ALTER TABLE "evento" ADD CONSTRAINT "evento_id_comunidade_fkey" FOREIGN KEY ("id_comunidade") REFERENCES "comunidade"("id") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "post" ADD CONSTRAINT "post_id_comunidade_fkey" FOREIGN KEY ("id_comunidade") REFERENCES "comunidade"("id") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "usuario" ADD CONSTRAINT "usuario_id_comunidade_fkey" FOREIGN KEY ("id_comunidade") REFERENCES "comunidade"("id") ON DELETE NO ACTION ON UPDATE NO ACTION;

