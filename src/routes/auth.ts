<<<<<<< HEAD
import axios from "axios"
import { FastifyInstance } from "fastify"
import { z } from "zod"
import { prisma } from "../lib/prisma"

export async function authRoutes(app: FastifyInstance) {
  app.post("/register", async (request) => {
=======
import axios from 'axios';
import { FastifyInstance } from "fastify";
import { z } from "zod";
import { prisma } from "../lib/prisma";

export async function authRoutes(app: FastifyInstance) {
  app.post('/register', async (request) => {
>>>>>>> 1ca74cddbfa9ffa58784fa45356d6b32a6e39cb3
    const bodySchema = z.object({
      code: z.string(),
    })

    const { code } = bodySchema.parse(request.body)

    const acessTokenResponse = await axios.post(
<<<<<<< HEAD
      "https:/github.com/login/oauth/access_token",
=======
      'https:/github.com/login/oauth/access_token',
>>>>>>> 1ca74cddbfa9ffa58784fa45356d6b32a6e39cb3
      null,
      {
        params: {
          client_id: process.env.GITHUB_CLIENT_ID,
          client_secret: process.env.GITHUB_CLIENT_SECRET,
          code,
        },
        headers: {
<<<<<<< HEAD
          Accept: "application/json",
=======
          Accept: 'application/json',
>>>>>>> 1ca74cddbfa9ffa58784fa45356d6b32a6e39cb3
        },
      }
    )

    const { access_token } = acessTokenResponse.data

<<<<<<< HEAD
    const userResponse = await axios.get("https://api.github.com/user", {
      headers: {
        Authorization: `Bearer ${access_token}`,
      },
=======
    const userResponse = await axios.get('https://api.github.com/user', {
      headers: {
        Authorization: `Bearer ${access_token}`,
      }
>>>>>>> 1ca74cddbfa9ffa58784fa45356d6b32a6e39cb3
    })

    const userSchema = z.object({
      id: z.number(),
      login: z.string(),
      name: z.string(),
      avatar_url: z.string().url(),
    })

    const userInfo = userSchema.parse(userResponse.data)

    let user = await prisma.user.findUnique({
      where: {
        githubId: userInfo.id,
<<<<<<< HEAD
      },
=======
      }
>>>>>>> 1ca74cddbfa9ffa58784fa45356d6b32a6e39cb3
    })

    if (!user) {
      user = await prisma.user.create({
        data: {
          githubId: userInfo.id,
          login: userInfo.login,
          name: userInfo.name,
          avatarUrl: userInfo.avatar_url,
<<<<<<< HEAD
        },
      })
    }

    const token = app.jwt.sign(
      {
        name: user.name,
        avatarUrl: user.avatarUrl,
      },
      {
        sub: user.id,
        expiresIn: "30 days",
      }
    )
=======
        }
      })
    }

    const token = app.jwt.sign({
      name: user.name,
      avatarUrl: user.avatarUrl,
    }, {
      sub: user.id,
      expiresIn: '30 days',
    })
>>>>>>> 1ca74cddbfa9ffa58784fa45356d6b32a6e39cb3

    return {
      token,
    }
  })
<<<<<<< HEAD
}
=======
}
>>>>>>> 1ca74cddbfa9ffa58784fa45356d6b32a6e39cb3
