import { ZodTypeProvider } from "fastify-type-provider-zod";
import { z } from "zod";
import { generateSlug } from "../utils/generate-slug";
import { prisma } from "../lib/prisma";
import { FastifyInstance } from "fastify";
import { BadRequest } from "./_erros/bad-request";

export async function createEvent(app: FastifyInstance) {
  app.withTypeProvider<ZodTypeProvider>().post(
    "/events",
    {
      schema: {
        summary: "Create an event",
        tags: ["events"],
        body: z.object({
          title: z.string().min(4), // Minimo 4 letras
          details: z.string().nullable(),
          maximumAttendees: z.number().int().positive().nullable(),
        }),
        response: {
          201: z.object({
            eventId: z.string().uuid(),
          }),
        },
      },
    },
    async (request, reply) => {
      const { title, details, maximumAttendees } = request.body; // Validando os dados recebidos na requisição

      const slug = generateSlug(title);

      const eventWithSameSlug = await prisma.event.findUnique({
        where: {
          slug,
        },
      });

      if (eventWithSameSlug !== null) {
        throw new BadRequest("Another event with same title already exists.");
      }

      // Criando um novo evento no banco de dados
      const event = await prisma.event.create({
        data: {
          title,
          details,
          maximumAttendees,
          slug,
        },
      });

      // return {eventId: event.id}
      // Retornando o ID do evento criado
      return reply.status(201).send({ eventId: event.id });
    }
  );
}
