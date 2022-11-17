import { createServer } from 'miragejs'

let serverInitialized = false

function initializeServer() {
    if(serverInitialized) {
        return
    }
    createServer({
        routes() {
            this.namespace = 'api'
            this.get('/users', () => {
                return {
                    users: [
                        { id: 1, name: 'Bob' },
                        { id: 2, name: 'Alice' },
                    ]
                }
            })

            this.post('/login', (schema, request) => {
                const attrs = JSON.parse(request.requestBody)
                console.log(attrs)
                return {
                    user: {
                        id: 1,
                        name: attrs.username,
                    }
                }
            })
        }

    })
}

export default initializeServer