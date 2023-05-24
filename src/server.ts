<<<<<<< HEAD
import "dotenv/config"

import cors from "@fastify/cors"
import jwt from "@fastify/jwt"
import multipart from "@fastify/multipart"
import fastify from "fastify"
import { resolve } from "node:path"
import { authRoutes } from "./routes/auth"
import { memoriesRoutes } from "./routes/memories"
import { uploadRoutes } from "./routes/upload"
=======
import 'dotenv/config'

import fastify from 'fastify'
import cors from '@fastify/cors'
import jwt from '@fastify/jwt'
import { memoriesRoutes } from './routes/memories'
import { authRoutes } from './routes/auth'
>>>>>>> 1ca74cddbfa9ffa58784fa45356d6b32a6e39cb3

const app = fastify()

app.register(multipart)

app.register(require("@fastify/static"), {
  root: resolve(__dirname, "../uploads"),
  prefix: "/uploads",
})

app.register(cors, {
  origin: true,
})
app.register(jwt, {
<<<<<<< HEAD
  secret: "spacetime",
})

app.register(authRoutes)
app.register(uploadRoutes)
=======
  secret: 'spacetime',
})

app.register(authRoutes)
>>>>>>> 1ca74cddbfa9ffa58784fa45356d6b32a6e39cb3
app.register(memoriesRoutes)

app
  .listen({
    port: 3333,
<<<<<<< HEAD
    host: "0.0.0.0",
=======
    host: '0.0.0.0',
>>>>>>> 1ca74cddbfa9ffa58784fa45356d6b32a6e39cb3
  })
  .then(() => {
    console.log("🚀HTTP server running on http://localhost:3333")
  })
