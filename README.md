# Promisify ssh2
## A simple and light weight promise wrapper for ssh2.

### Example
```js
const promisifySSH = require('@ankittiwaari/promisify-ssh2');
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