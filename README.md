# Promisify ssh2
## A simple and lightweight promise wrapper for ssh2.

### Example
```js
const promisifySSH = require('@ankittiwaari/promise-ssh2');
(async () => {
    try {
        let p = new promisifySSH({
            host: '<host>',
            user: '<user>',
            password: '<password>'
        });
        // create connection
        await p.connect();
        
        // execute connection
        let result = await p.execute('ls');
        console.log('res', result);
        
        //close connection once done
        p.closeConnection();
    } catch (e) {
        console.log(`Error in catch `, e);
    }

})();
```
The constructor accepts all the connection parameters accepted by `connect()` method of [ssh2](https://www.npmjs.com/package/ssh2)
## Raising issues
Raise all the issues at https://github.com/ankittiwaari/promise-ssh2/issues