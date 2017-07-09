import SenecaManager from '../transport/seneca.manager';

export default class PensionerController {

  constructor() {
    this.seneca = SenecaManager.seneca;
  }

  insertPensioner = (pensioner) => {
    console.log('started to persist the pensioner');
    return new Promise((resolve, reject) => {
      console.log('done persisting the pensioner');
      resolve('130000010');
    });
  }

  updatePensioner = (pensioner) => {
    console.log('started to update the pensioner');
    return new Promise((resolve, reject) => {
      console.log('done updateing the pensioner');
      resolve('13000002');
    });
  }

  deletePensioner = (pensioner) => {
    console.log('started to delete the pensioner');
    return new Promise((resolve, reject) => {
      console.log('done deleteing the pensioner');
      resolve('13000003');
    });
  }

  getPensioner = (pensionerId) => {
    console.log('started to read the pensioner');
    return new Promise((resolve, reject) => {
      console.log('done reading the pensioner');
      const pensioner = {
        name: 'Dinesh Liyanage',
        address: 'pahalagama, Kitalawa',
        monthlyPension: '10000',
        dependents: ['kamal', 'nimal', 'amal']
      };
      resolve(pensioner);
    });
  }

  listPensioners = (args) => {
    console.log('this is from the controller: ' + JSON.stringify(args));
    return new Promise((resolve, reject) => {
      console.log('done reading the pensioner');
      const pensioner1 = {
        name: 'Dinesh Liyanage',
        address: 'pahalagama, Kitalawa',
        monthlyPension: '10000',
        dependents: ['kamal', 'nimal', 'amal']
      };

      const pensioner2 = {
        name: 'Kaml Liyanage',
        address: 'kuliyapitiya, Kitalawa',
        monthlyPension: '2000',
        dependents: ['sunil', 'nimal', 'amal']
      };

      this.seneca.act({ role: 'log', cmd: 'data', payload: 'all' },
        function (err, response) {
          if (err) {
            console.log('loggin error occured and this is from pensioner contaroller');
          }
          console.log('loggin successful');
        });

      resolve([pensioner1, pensioner2]);
    });
  }

}
