
require('dotenv').config()
const development = {
    PORT:process.env.PORT,
    name:'development',
    assetPath:'./assets',
    session_cookie_key:process.env.SessionCookie,
    DB:process.env.DB,
}


const production = {
    PORT:process.env.PORT,
    name:'production',
    assetPath:'./public/assets',
    session_cookie_key:process.env.SessionCookie,
    DB:process.env.DB,
}

module.exports = eval(process.env.PROJECT_ENVIRONMENT) == undefined ? development : eval(process.env.PROJECT_ENVIRONMENT);