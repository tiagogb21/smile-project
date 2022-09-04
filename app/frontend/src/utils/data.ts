export const calculatorButtons = [
  {
    name: '0',
    class: 'normal-btn',
  },
  {
    name: '.',
    class: 'normal-btn',
  },
  {
    name: '=',
    class: 'blue-btn',
  },
  {
    name: '+',
    class: 'gray-btn',
  },
  {
    name: '1',
    class: 'normal-btn',
  },
  {
    name: '2',
    class: 'normal-btn',
  },
  {
    name: '3',
    class: 'normal-btn',
  },
  {
    name: '-',
    class: 'gray-btn',
  },
  {
    name: '4',
    class: 'normal-btn',
  },
  {
    name: '5',
    class: 'normal-btn',
  },
  {
    name: '6',
    class: 'normal-btn',
  },
  {
    name: '*',
    class: 'gray-btn',
  },
  {
    name: '7',
    class: 'normal-btn',
  },
  {
    name: '8',
    class: 'normal-btn',
  },
  {
    name: '9',
    class: 'normal-btn',
  },
  {
    name: '/',
    class: 'gray-btn',
  },
  {
    name: '(',
    class: 'gray-btn',
  },
  {
    name: ')',
    class: 'gray-btn',
  },
  {
    name: '%',
    class: 'gray-btn',
  },
  {
    name: 'AC',
    class: 'gray-btn',
  },
].reverse();

export const signalStore = '+-÷x=%';

export const MINIMUM_VALUE = 15

export const CLIENT_ID = '497168286065-im79kqtbme8kuhhckre9i2lna5jbahr0.apps.googleusercontent.com';

export const scheduleData = {
  createdBy: '',
  client: '',
  value: '',
  status: '',
  dueDate: '',
};

export const convertIntoReal = (value: number) => {
  const real = value.toLocaleString(
    'pt-BR',
    {
      style: 'currency',
      currency: 'BRL'
    }
  );
  return real.split(',')[0];
}

export const dataTransform = (data: string) => {
  const arrayData = data.split('-');
  arrayData[0] = arrayData[0].slice(2);
  const storeData = arrayData[0];
  arrayData[0] = arrayData[2];
  arrayData[2] = storeData;
  return arrayData.join('/');
}
