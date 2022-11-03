import React from "react";

import { Formik, Form, Field, ErrorMessage } from "formik";
import FormSchema from "../../../schema/FormSchema";

import style from "./Contato.module.css";

// interface FormikValues {
//   nome: string;
//   email: string;
//   cpf: string;
//   dataDeNasciento: string;
//   telefone: string;
//   instagram: string;
//   termsAndConditions: boolean;
// }

var initialValues = {
  nome: "",
  email: "",
  cpf: "",
  dataDeNasciento: "",
  telefone: "",
  instagram: "",
  termsAndConditions: false,
};

const Contato = () => {
  return (
    <div className={style["form-wrapper"]}>
      <Formik
        onSubmit={(values, { resetForm }) => {
          console.log(values);
          resetForm({ values: initialValues });
        }}
        initialValues={initialValues}
        validationSchema={FormSchema}
      >
        <Form>
          <h2 className={style["form-title"]}>PREENCHA O FORMULÁRIO</h2>
          <div className={style["form-col"]}>
            <label className={style["form-label"]} htmlFor="nome">
              Nome
            </label>
            <Field
              className={style["form-field"]}
              id="nome"
              name="nome"
              placeholder="Seu nome completo"
            />
            <ErrorMessage
              component="span"
              name="nome"
              className={style["form-invalid-feedback"]}
            />
          </div>
          <div className={style["form-col"]}>
            <label className={style["form-label"]} htmlFor="email">
              E-mail
            </label>
            <Field
              className={style["form-field"]}
              id="email"
              name="email"
              placeholder="Seu e-mail"
            />
            <ErrorMessage
              component="span"
              name="email"
              className={style["form-invalid-feedback"]}
            />
          </div>
          <div className={style["form-col"]}>
            <label className={style["form-label"]} htmlFor="cpf">
              CPF
            </label>
            <Field
              className={style["form-field"]}
              id="cpf"
              name="cpf"
              placeholder="000 000 000 00"
            />
            <ErrorMessage
              component="span"
              name="cpf"
              className={style["form-invalid-feedback"]}
            />
          </div>
          <div className={style["form-col"]}>
            <label className={style["form-label"]} htmlFor="dataDeNasciento">
              Data de Nascimento
            </label>
            <Field
              className={style["form-field"]}
              id="dataDeNasciento"
              name="dataDeNasciento"
              placeholder="00 . 00 . 0000"
            />
            <ErrorMessage
              component="span"
              name="dataDeNasciento"
              className={style["form-invalid-feedback"]}
            />
          </div>
          <div className={style["form-col"]}>
            <label className={style["form-label"]} htmlFor="telefone">
              Telefone
            </label>
            <Field
              className={style["form-field"]}
              id="telefone"
              name="telefone"
              placeholder="(+00) 0000 0000"
            />
            <ErrorMessage
              component="span"
              name="telefone"
              className={style["form-invalid-feedback"]}
            />
          </div>
          <div className={style["form-col"]}>
            <label className={style["form-label"]} htmlFor="instagram">
              Instagram
            </label>
            <Field
              className={style["form-field"]}
              id="instagram"
              name="instagram"
              placeholder="@seuuser"
            />
            <ErrorMessage
              component="span"
              name="instagram"
              className={style["form-invalid-feedback"]}
            />
          </div>
          <div className={style["form-confirm"]}>
            <label className={style["form-confirm-label"]}>
              <a href="/">
                <span>*</span>Declaro que li e aceito
              </a>
              <Field
                className={style["form-confirm-input"]}
                type="checkbox"
                name="termsAndConditions"
              />
            </label>
            <ErrorMessage
              component="span"
              name="termsAndConditions"
              className={style["form-invalid-feedback"]}
            />
          </div>
          <button className={style["form-submit-button"]} type="submit">
            Cadastre-se
          </button>
        </Form>
      </Formik>
    </div>
  );
};

export { Contato };
