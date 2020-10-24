const newsRoute = require('./newsRoute')
const siteRoute = require('./siteRoute')

function routes(app) {

    app.use("/news",newsRoute)

    app.use("/", siteRoute)

    // app.get('/search', (req, res) => {
    //     res.render('search')
    // })

    // app.post('/search', (req, res) => {
    //     console.log('Data', req.body)
    //     res.send('')
    // })
}
module.exports = routes;