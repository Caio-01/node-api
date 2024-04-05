// src/lib/prisma.ts
import { PrismaClient } from "@prisma/client";
var prisma = new PrismaClient({
  log: ["query"]
  // Criando uma instância do PrismaClient para conexão com o banco de dados
});

export {
  prisma
};
