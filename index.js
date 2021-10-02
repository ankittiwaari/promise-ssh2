import {Client} from 'ssh2';
class PromiseSSh {
    conn;
    constructor(sshDetails) {
        this.sshDetails = sshDetails;
        this.conn = new Client()
    }
    connect = () => {
        return new Promise((resolve, reject) => {
            try {
                this.conn.on('ready', () => {
                    resolve(true);
                }).connect(this.sshDetails);
            } catch (e) {
                reject(e.message)
            }
        })
    }
    execute = (command) => {
        return new Promise((resolve, reject) => {
            let response = [], error = [];
            this.conn.exec(command, (err, stream) => {
                if (err) {
                    console.log(`Error generated while executing command by promisify-ssh2::`, err)
                    error.push(err);
                }
                stream.on('close', (code, signal) => {
                    resolve({
                        output: response.join("").toString(),
                        error: error.join("").toString(),
                        code: code || null,
                        signal: signal || null
                    });
                }).on('data', (data) => {
                    response.push(data);
                }).stderr.on('data', (data) => {
                    error.push(data);
                });
            });
        });
    }
    closeConnection = () => {
        return new Promise((resolve, reject) => {
            try{
                this.conn.on('close', () => {
                    resolve(true);
                }).end();
            }catch (e){
                console.log(`Error generated while closing connection by promisify-ssh2::`, err)
                reject(e)
            }
        })
    }
}
export default PromiseSSh;