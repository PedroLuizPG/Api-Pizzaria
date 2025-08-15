# 🍕 API - Pizzaria

API REST para gerenciamento de pedidos, produtos, categorias e usuários de uma pizzaria.  
Desenvolvida em **Node.js** com **Express** e **TypeScript** e **PostgreSQL**, utilizando autenticação via **JWT**.

---

## 🚀 Tecnologias Utilizadas

- **Node.js**
- **Express**
- **TypeScript**
- **Prisma** (ORM)
- **PostgreSQL**
- **JWT** (Autenticação)
- **Multer** (Upload de arquivos)
- **bcrypt** (Criptografia de senhas)

---

## 📌 Endpoints

### 🧑‍💻 Usuário

| Método | Rota         | Descrição                  | Autenticação |
|--------|-------------|---------------------------|--------------|
| POST   | `/users`    | Criar usuário              | ❌           |
| POST   | `/session`  | Login do usuário           | ❌           |
| GET    | `/me`       | Detalhes do usuário logado | ✅           |

---

### 📂 Categorias

| Método | Rota         | Descrição                  | Autenticação |
|--------|-------------|---------------------------|--------------|
| POST   | `/category` | Criar categoria            | ✅           |
| GET    | `/category` | Listar categorias          | ✅           |

---

### 📦 Produtos

| Método | Rota                 | Descrição                                  | Autenticação |
|--------|----------------------|---------------------------------------------|--------------|
| POST   | `/product`           | Criar produto (com upload de imagem)        | ✅           |
| GET    | `/category/product`  | Listar produtos por categoria               | ✅           |

---

### 📋 Pedidos (Orders)

| Método | Rota                | Descrição                          | Autenticação |
|--------|---------------------|-------------------------------------|--------------|
| POST   | `/order`            | Criar pedido / Abrir mesa           | ✅           |
| DELETE | `/order`            | Deletar pedido                      | ✅           |
| POST   | `/order/addItem`    | Adicionar item ao pedido            | ✅           |
| DELETE | `/order/remove`     | Remover item do pedido              | ✅           |
| PUT    | `/order/send`       | Enviar pedido (confirmar)           | ✅           |
| PUT    | `/order/finish`     | Finalizar pedido                    | ✅           |
| GET    | `/orders`           | Listar todos os pedidos             | ✅           |
| GET    | `/order/detail`     | Detalhar um pedido específico       | ✅           |

---

## 🔑 Autenticação

A API utiliza **JWT** para autenticação.  
Para acessar rotas protegidas, envie no header:

