import { PrismaClient } from "@prisma/client";

export const prisma = new PrismaClient({
  log: ["query"], // Criando uma instância do PrismaClient para conexão com o banco de dados
});
