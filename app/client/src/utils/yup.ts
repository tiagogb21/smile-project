import * as yup from 'yup';

const schema = yup.object().shape({
  client: yup.string().required('Preencha o campo cliente para prosseguir!'),
  value: yup.string().required('Preencha o campo valor para prosseguir!'),
  email: yup.string().email(),
  dueDate: yup
    .date()
    .required('Preencha o dia de vencimento para prosseguir!')
    .min(new Date(), 'Dia de vencimento deve ser maior que data atual!')
    .typeError('Preencha o dia de vencimento para prosseguir!'),
});

export default schema;
