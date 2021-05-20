const emailValidator = require("email-validator");

module.exports = {
    checkUser: async (req, res, next) => {
        function error(status, message) {
            return res.send({error: status, message: message})
        }
        if ((!/[^1-9]/.test(req.body.name))) {
            return error(true, 'Vardas negali turėti skaičių!')
        }

        if (!Number(req.body.age)) {
            return error(true, 'Amžius turi būti parašytas skaitmenimis')
        }
        if (!emailValidator.validate(req.body.email)) {
            return error(true, 'Blogai įvestas el.paštas')
        }
        next()
    },
}