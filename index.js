import routes from './src/routing/index.routes';

let seneca = require('seneca')()
seneca.use('./redis-queue-transport', {
    'redis-queue': {
      timeout: 22222,
      type: 'redis-queue',
      host: '192.168.99.100',
      port: 6379
    }
  })

  .ready(function () {

  /** pensioner insert handler is mounted here */

  this.add({role: 'pensioner', cmd: 'insert'}, routes.insertHandler);
  this.add({role: 'pensioner', cmd: 'update'}, routes.updateHandler);
  this.add({role: 'pensioner', cmd: 'list'}, routes.listPensionersHandler);

});

seneca.listen({type: 'redis-queue', pin: 'role: pensioner, cmd:*'})
