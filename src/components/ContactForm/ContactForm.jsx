import { Formik, Form, Field, ErrorMessage } from 'formik';
import { useId } from 'react';
import * as Yup from "yup";
import { nanoid } from "nanoid";
import css from './ContactForm.module.css'

const ContactSchema = Yup.object().shape({
    name: Yup.string().min(3, "Too Short!").max(50, "Too Long!").required("Required"),
    number: Yup.string().min(9, "Too Short!").max(9, "Too Long!").required("Required"),
});



export default function ContactForm({onAdd}) {
    
    const fieldId = useId();

    const handleSubmit = (values, actions) => {
        onAdd({ id: nanoid(), ...values });
        actions.resetForm(); 
    }
    
    return (
        <Formik
            initialValues={{
                name: "",
                number: ""
            }}
            validationSchema={ContactSchema}
            onSubmit={handleSubmit}
        >
            <Form className={css.form}>
                <div className={css.formGroup}>
                    <label htmlFor={`${fieldId}-name`}>Name</label>
                    <Field className={css.input} name="name" id={`${fieldId}-name`}/>
                    <ErrorMessage className={css.error} name="name" component="span"/>
                </div>
                <div className={css.formGroup}>
                    <label htmlFor={`${fieldId}-number`}>Number</label>
                    <Field className={css.input} type="tel" name="number" id={`${fieldId}-number`}/>
                    <ErrorMessage className={css.error}  name="number" component="span" />
                </div>
                <button className={css.btn} type="submit">Add contact</button>
            </Form>
        </Formik>)   
}
