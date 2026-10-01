# Projeto Integrador 6 — TypeScript

API de Produtos desenvolvida com Node.js, Express e TypeScript, mantendo os dados em memória.

## Arquitetura

```text
HTTP Request
    ↓
Routes
    ↓
Controller
    ↓
Service (Use Case)
    ↓
Repository ← Domain (Produto)
    ↓
Memória
```

A estrutura prepara o projeto para trocar o armazenamento em memória por Sequelize/MySQL depois, sem mudar as regras da camada HTTP.

## Instalação

```bash
npm install
```

## Executar em desenvolvimento

```bash
npm run dev
```

Servidor: `http://localhost:3000`

## Compilar TypeScript

```bash
npm run build
```

## Executar versão compilada

```bash
npm start
```

## Rotas

### Listar produtos

`GET /produtos`

### Buscar produto por ID

`GET /produtos/:id`

### Criar produto

`POST /produtos`

Body JSON:

```json
{
  "nome": "Teclado",
  "preco": 180
}
```

### Exemplo com cURL

```bash
curl http://localhost:3000/produtos
curl http://localhost:3000/produtos/1
curl -X POST http://localhost:3000/produtos -H "Content-Type: application/json" -d '{"nome":"Teclado","preco":180}'
```
