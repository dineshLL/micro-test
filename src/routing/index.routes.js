import PensionerCtrl from '../controllers/pensioner.controller';

class RoutingHandler {

  constructor() {
    this.pensionerCtrl = new PensionerCtrl();
  }

  insertHandler = (args, reply) => {
    this.pensionerCtrl.insertPensioner(args)
    .then((pensionerId) => {
      reply(null, {
        code: 200,
        message: 'pensioner saved in the system successfully. refno: ' + pensionerId
      });
    })
    .catch((err) => {
      reply(err, {code: '500', message: 'internal error occured'});
    });
  }

  listPensionersHandler = (args, reply) => {
    this.pensionerCtrl.listPensioners(args)
    .then((pensioners) => {
      reply(null, {
        data: pensioners
      });
    })
    .catch((err) => {
      reply(err, {code: '500', message: 'internal error occured'});
    });
  }

  updateHandler = (args, reply) => {
    this.pensionerCtrl.updatePensioner(args)
    .then((pensionerId) => {
      reply(null, {
        code: 200,
        message: 'pensioner updated in the system successfully. refno: ' + pensionerId
      });
    })
    .catch((err) => {
      reply(err, {code: '500', message: 'internal error occured'});
    });
  }

}

const routes = new RoutingHandler();
export default routes;
