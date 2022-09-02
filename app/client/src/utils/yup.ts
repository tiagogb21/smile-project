import * as yup from 'yup';

const schema = yup.object().shape({
  createdBy: yup.string().required(),
  client: yup.string().required(),
  value: yup.string().required(),
  email: yup.string().email(),
  status: yup.string().required(),
  dueDate: yup
    .date()
    .required('Preencha o dia de vencimento para prosseguir!')
    .min(new Date(), 'Dia de vencimento inválido!')
    .typeError('Preencha o dia de vencimento para prosseguir!'),
});

export default schema;
