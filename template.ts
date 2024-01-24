interface BasicServerTemplate {
    protocol: string;
    port: number
}


const configServerTemplate: BasicServerTemplate = {
    protocol: "https",
    port: 3001
}

const backupServerTemplate: BasicServerTemplate = {
    protocol: "http",
    port: 3000
}


const startServerTemplate = (
    server: BasicServerTemplate
): "Server has started" => {

    console.log(`Server has started on ${server.protocol}://server:${server.port}`)

    return "Server has started"
}


startServerTemplate(configServerTemplate)
startServerTemplate(backupServerTemplate)