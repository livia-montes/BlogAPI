import { RequestHandler } from "express"

export const getAllPosts: RequestHandler = (req, res) => {
    return res.json({ message: 'Obtendo todos os posts...' })
}

export const getPost: RequestHandler = (req, res) => {
    return res.json({ message: `Obtendo o post com slug: ${req.params.slug}`})
}

export const getRelatedPosts: RequestHandler = (req, res) => {
    return res.json({ message: `Obtendo os posts relacionados ao post com slug: ${req.params.slug}`})
}