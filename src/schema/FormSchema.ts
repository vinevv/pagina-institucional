import * as Yup from "yup";

export default Yup.object().shape({
  nome: Yup.string().required("Este campo é obrigatório."),
  email: Yup.string()
    .required("Este campo é obrigatório.")
    .email("Por favor, verifique se o e-mail é válido."),
  cpf: Yup.string().required("Este campo é obrigatório."),
  dataDeNasciento: Yup.string().required("Este campo é obrigatório."),
  telefone: Yup.string().required("Este campo é obrigatório."),
  termsAndConditions: Yup.bool().oneOf(
    [true],
    "Você precisa aceitar os termos e condições."
  ),
});
