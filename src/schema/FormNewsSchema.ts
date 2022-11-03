import * as Yup from "yup";

export default Yup.object().shape({
  email: Yup.string()
    .required("Digite seu melhor e-mail.")
    .email("Por favor, verifique se o e-mail é válido."),
});
