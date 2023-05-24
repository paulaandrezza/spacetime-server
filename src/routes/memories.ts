import { FastifyInstance } from "fastify"
import { z } from "zod"
import { prisma } from "../lib/prisma"

export async function memoriesRoutes(app: FastifyInstance) {
<<<<<<< HEAD
  app.addHook("preHandler", async (request) => {
    await request.jwtVerify()
  })

  app.get("/memories", async (request) => {
=======
  app.addHook('preHandler', async (request) => {
    await request.jwtVerify()
  })

  app.get('/memories', async (request) => {
>>>>>>> 1ca74cddbfa9ffa58784fa45356d6b32a6e39cb3
    const memories = await prisma.memory.findMany({
      where: {
        userId: request.user.sub,
      },
      orderBy: {
        createdAt: "asc",
      },
    })

    return memories.map((memory) => {
      return {
        id: memory.id,
        coverUrl: memory.coverUrl,
        excerpt: memory.content.substring(0, 155).concat("..."),
      }
    })
  })

<<<<<<< HEAD
  app.get("/memories/:id", async (request, reply) => {
=======
  app.get('/memories/:id', async (request, reply) => {
>>>>>>> 1ca74cddbfa9ffa58784fa45356d6b32a6e39cb3
    const paramsSchema = z.object({
      id: z.string().uuid(),
    })

    const { id } = paramsSchema.parse(request.params)

    const memory = await prisma.memory.findUniqueOrThrow({
      where: {
        id,
      },
    })

    if (!memory.isPublic && memory.userId !== request.user.sub) {
      return reply.status(401).send()
    }

    return memory
  })

  app.post("/memories", async (request) => {
    const bodySchema = z.object({
      content: z.string(),
      coverUrl: z.string(),
      isPublic: z.coerce.boolean().default(false),
    })

    const { content, coverUrl, isPublic } = bodySchema.parse(request.body)

    const memory = await prisma.memory.create({
      data: {
        content,
        coverUrl,
        isPublic,
        userId: request.user.sub,
      },
    })

    return memory
  })

<<<<<<< HEAD
  app.put("/memories/:id", async (request, reply) => {
=======
  app.put('/memories/:id', async (request, reply) => {
>>>>>>> 1ca74cddbfa9ffa58784fa45356d6b32a6e39cb3
    const paramsSchema = z.object({
      id: z.string().uuid(),
    })

    const { id } = paramsSchema.parse(request.params)

    const bodySchema = z.object({
      content: z.string(),
      coverUrl: z.string(),
      isPublic: z.coerce.boolean().default(false),
    })

    const { content, coverUrl, isPublic } = bodySchema.parse(request.body)

    let memory = await prisma.memory.findUniqueOrThrow({
      where: {
        id,
<<<<<<< HEAD
      },
=======
      }
>>>>>>> 1ca74cddbfa9ffa58784fa45356d6b32a6e39cb3
    })

    if (memory?.userId !== request.user.sub) {
      return reply.status(401).send()
    }

    memory = await prisma.memory.update({
      where: {
        id,
      },
      data: {
        content,
        coverUrl,
        isPublic,
      },
    })

    return memory
  })

<<<<<<< HEAD
  app.delete("/memories/:id", async (request, reply) => {
=======
  app.delete('/memories/:id', async (request, reply) => {
>>>>>>> 1ca74cddbfa9ffa58784fa45356d6b32a6e39cb3
    const paramsSchema = z.object({
      id: z.string().uuid(),
    })

    const { id } = paramsSchema.parse(request.params)

    const memory = await prisma.memory.findUniqueOrThrow({
      where: {
        id,
<<<<<<< HEAD
      },
=======
      }
>>>>>>> 1ca74cddbfa9ffa58784fa45356d6b32a6e39cb3
    })

    if (memory?.userId !== request.user.sub) {
      return reply.status(401).send()
    }

    await prisma.memory.delete({
      where: {
        id,
      },
    })
  })
}
