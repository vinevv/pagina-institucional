import React from "react";

import { Formik, Form, Field, ErrorMessage } from "formik";
import FormNewsSchema from "../../schema/FormNewsSchema";
import { WhatsappUpButtons } from "../WhatsappUpButtons/WhatsappUpButtons";

import style from "./Newsletter.module.css";

var initialValues = {
  email: "",
};

const Newsletter = () => {
  return (
    <div className={style["footer-form"]}>
      <Formik
        onSubmit={(values, { resetForm }) => {
          console.log(values);
          resetForm({ values: initialValues });
        }}
        initialValues={initialValues}
        validationSchema={FormNewsSchema}
      >
        <Form className={style["footer-form-newsletter"]}>
          <div className={style["footer-form-newsletter-wrapper"]}>
            <label className={style["footer-newsletter-label"]} htmlFor="email">
              Assine nossa newsletter
            </label>
            <Field
              className={style["footer-newsletter-field"]}
              id="email"
              name="email"
              placeholder="E-mail"
            />
            <ErrorMessage
              component="span"
              name="email"
              className={style["form-invalid-feedback"]}
            />
            <button className={style["footer-newsletter-button"]} type="submit">
              Enviar
            </button>
          </div>
        </Form>
      </Formik>
      <WhatsappUpButtons />
    </div>
  );
};

export { Newsletter };
