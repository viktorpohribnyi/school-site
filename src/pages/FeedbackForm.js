import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { useState } from 'react';

function FeedbackForm() {
  const [submitted, setSubmitted] = useState(false);

  const initialValues = {
    name: '',
    role: '',
    message: '',
  };

  const validationSchema = Yup.object({
    name: Yup.string().min(2, 'Занадто коротке імʼя').required("Обов'язково"),
    role: Yup.string().required("Обов'язково"),
    message: Yup.string().min(10, 'Повідомлення надто коротке').required("Обов'язково"),
  });

  const onSubmit = (values, { resetForm }) => {
    console.log('Відгук:', values);
    setSubmitted(true);
    resetForm();
    setTimeout(() => setSubmitted(false), 4000);
  };

  return (
    <div className="mt-5 p-4 bg-light rounded shadow-sm">
      <h4 className="mb-3">Залишити свій відгук</h4>
      {submitted && (
        <div className="alert alert-success">Дякуємо за ваш відгук!</div>
      )}

      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={onSubmit}
      >
        <Form>
          <div className="mb-3">
            <label htmlFor="name" className="form-label">Імʼя</label>
            <Field name="name" className="form-control" />
            <div className="text-danger small">
              <ErrorMessage name="name" />
            </div>
          </div>

          <div className="mb-3">
            <label htmlFor="role" className="form-label">Ваш статус (учень, батько, випускник)</label>
            <Field name="role" className="form-control" />
            <div className="text-danger small">
              <ErrorMessage name="role" />
            </div>
          </div>

          <div className="mb-3">
            <label htmlFor="message" className="form-label">Відгук</label>
            <Field as="textarea" name="message" rows="4" className="form-control" />
            <div className="text-danger small">
              <ErrorMessage name="message" />
            </div>
          </div>

          <button type="submit" className="btn btn-primary">Надіслати</button>
        </Form>
      </Formik>
    </div>
  );
}

export default FeedbackForm;
