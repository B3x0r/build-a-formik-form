import React from "react";
// TODO: import useFormik from formik library
import { Formik, Field, Form, useFormik } from "formik";

function App() {
  // TODO: add a const called formik assigned to useFormik()
  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    onSubmit: async (values) => {
      await new Promise((r) => setTimeout(r, 500));
      alert(JSON.stringify(values, null, 2));
    },
    validate: (values) => {
      const errors = {};
      if (!values.email) {
        errors.email = 'Required';
      } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
        errors.email = 'Invalid email address';
      }
      if (!values.password){
        errors.password = 'Required';
      }
      return errors;
    }
  });
  return (
    <>
      <h1>Sign Up</h1>
      <div>
          <Formik>
            <form onSubmit={formik.handleSubmit}>
              <label htmlFor="email">Email</label>
              <Field id="email" name="email" placeholder="jane@acme.com" onChange={formik.handleChange} value={formik.values.email}/>
              {formik.errors.email ? <div>{formik.errors.email}</div> : null}

              <label htmlFor="password">Password</label>
              <Field id="password" name="password" placeholder="Doe" onChange={formik.handleChange} value={formik.values.password}/>
              {formik.errors.password ? <div>{formik.errors.password}</div> : null}

              <button type="submit">Submit</button>
            </form>
          </Formik>
      </div>
    </>
  );
}

export default App;
