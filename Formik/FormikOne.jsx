import { useFormik } from "formik";
import React from "react";
import * as Yup from 'yup'

const initialValues = {
  name: "lakhan",
  email: "",
  channel: "",
};

const onSubmit = (values) => {
  console.log("form values", values);
};

// const validate = (values) => {
//   let errors = {};

//   if (!values.name) {
//     errors.name = "required";
//   }

//   if (!values.email) {
//     errors.email = "required";
//   }

//   if (!values.channel) {
//     errors.channel = "required";
//   }

//   return errors;
// };

const validationSchema = Yup.object({
    name:Yup.string().required("Required"),
    email:Yup.string().required("Required"),
    channel:Yup.string().required("Required")
})

const FormikOne = () => {
  const formik = useFormik({
    initialValues,
    // add another method
    onSubmit,
    //validate
    // validate,
    validationSchema
  });

  // console.log("form values" , formik.values)
  // console.log("form error" , formik.errors)
  console.log("form visited fildes", formik.touched);

  return (
    <div>
      <form className="text-center" onSubmit={formik.handleSubmit}>
        <label htmlFor="name">Name</label>
        <br />
        <input
          type="text "
          id="name"
          name="name"
        {...formik.getFieldProps('name')}
        />
        {formik.touched.name && formik.errors.name ? (
          <div className="text-danger">{formik.errors.name}</div>
        ) : null}
        <br />

        <label htmlFor="name">Email</label>
        <br />
        <input
          type="email "
          id="email"
          name="email"
          {...formik.getFieldProps('email')}
        />
        {formik.touched.email && formik.errors.email ? (
          <div className="text-danger">{formik.errors.email}</div>
        ) : null}
        <br />

        <label htmlFor="channel">channel</label>
        <br />
        <input
          type="text "
          id="channel"
          name="channel"
          {...formik.getFieldProps('channel')}
        />
        {formik.touched.channel && formik.errors.channel ? (
          <div className="text-danger">{formik.errors.channel}</div>
        ) : null}
        <br />
        <br />

        <button type="submit">submit</button>
      </form>
    </div>
  );
};

export default FormikOne;
