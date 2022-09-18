import mysql from 'mysql';

export default class Database {
    private connection: mysql.Connection

    constructor() {
        this.connection = mysql.createConnection({
            host: 'database',
            user: 'goapp',
            password: 'secret',
            database: 'goapp'
        })

        this.connection.connect((err) => {
            if (err) throw err
            console.log("Connection to the database has been opened ...")
        })

        this.connection.ping((err) => {
            if (err) throw err
            console.log("Server responded to ping")
        })
    }

    getConnection = (): mysql.Connection => {
        return this.connection
    }

    closeConnection = (callback?: (err?: mysql.MysqlError | undefined) => void) => {
        this.connection.end(callback)
    }
}