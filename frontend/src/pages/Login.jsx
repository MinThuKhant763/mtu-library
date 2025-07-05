// Render Prop
import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';

const Basic = () => (
    <div className='container mt-4 mx-auto' style={ { maxWidth: '400px' } }>
        <h2 className='text-center mb-3'>Login</h2>
        <Formik
            initialValues={ { email: '', password: '' } }
            validate={ values => {
                const errors = {};
                if (!values.email) {
                    errors.email = 'Required';
                } else if (
                    !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
                ) {
                    errors.email = 'Invalid email address';
                }
                return errors;
            } }
            onSubmit={ (values, { setSubmitting }) => {
                setTimeout(() => {
                    alert(JSON.stringify(values, null, 2));
                    setSubmitting(false);
                }, 400);
            } }
        >
            { ({ isSubmitting }) => (
                <Form>
                    <div className='mb-3'>
                        <label for="exampleInputEmail1" className="form-label">Email address</label>
                        <Field  type="email" name="email" className="form-control" />
                        <ErrorMessage name="email" component="div" />
                    </div>
                    <div className='mb-3'>
                        <label for="exampleInputPassword1" class="form-label">Password</label>
                        <Field type="password" name="password" className="form-control" />
                        <ErrorMessage name="password" component="div" />
                    </div>

                   
                    <button type="submit" disabled={ isSubmitting } className='btn btn-primary'>
                        Submit
                    </button>
                </Form>
            ) }
        </Formik>
    </div>
);

export default Basic;