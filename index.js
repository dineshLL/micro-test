import routes from './src/routing/index.routes'
import emmitor from './src/event-emmitor/emittor'
import store from './src/event-emmitor/imas.store'

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

seneca.on('act-in', (actionArgs) => {
  if(actionArgs.imas) store.setData(actionArgs.imas)
});

seneca.listen({type: 'redis-queue', pin: 'role: pensioner, cmd:*'})
