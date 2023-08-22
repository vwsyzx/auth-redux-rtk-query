const apiError = require("../api-error/api-error");
const errorHandler = require("../error-handler/error-handler");
const userService = require("../service/user-service");

class Func{
    async regis(req, res){
        try {
            if(req.body.emile && req.body.password){
                console.log(req.body.emile, req.body.password)
                const result = await userService.regis(req.body.emile, req.body.password)
                return res.status(200).json(result)
            }
            throw apiError.BadRequest('Fill necessary Fields!')
        } catch (error) {
            errorHandler(req, res, error)
        }
    }
    async login(req, res){
        try {
            if(req.body.emile && req.body.password){
                const result = await userService.login(req.body.emile, req.body.password)
                return res.status(200).json(result)
            }
            throw apiError.BadRequest('Fill necessary Fields!')
        } catch (error) {
            errorHandler(req, res, error)
        }
    }
    async refresh(req, res){
        try {
            const {refresh} = req.headers
            if(refresh){
                const result = await userService.refresh(refresh)
                return res.status(200).json(result)
            }
            throw apiError.BadRequest('Fill necessary Fields!')
        } catch (error) {
            errorHandler(req, res, error)
        }
    }
}

module.exports = new Func()