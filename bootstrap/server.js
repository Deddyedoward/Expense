export default function(app, config) {
    app.listen(config.port, config.ip, () => {
        console.log(`server running ${config.ip}:${config.port}`)
    })
}