import { RequestHandler } from "express"

export const singIn: RequestHandler = async (req, res) => {
    // Lógica para autenticar o usuário
}

export const singUp: RequestHandler = async (req, res) => {
    // Lógica para registrar um novo usuário
}

export const validate: RequestHandler = async (req, res) => {
    // Lógica para validar o token de autenticação
}