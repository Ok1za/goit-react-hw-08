import { ErrorMessage, Field, Form, Formik } from "formik";
import * as Yup from "yup";
import { useDispatch } from "react-redux";
import { addContact } from "../../redux/contacts/operations";
import css from "./ContactForm.module.css";

function ContactForm() {
    const dispatch = useDispatch();
    const MAX_NAME_VALIDATION = 20;
    const MIN_NAME_VALIDATION = 4;
    const MIN_PHONE_VALIDATION = 7;
    
    const contactFormSchema = Yup.object({
        name: Yup.string()
            .required("Username is required!")
            .defined()
            .min(
                MIN_NAME_VALIDATION,
                `Minimum ${MIN_NAME_VALIDATION} characters required!`
            )
            .max(
                MAX_NAME_VALIDATION,
                `Your username must be less or equal ${MAX_NAME_VALIDATION} characters!`
            ),
        number: Yup.string()
            .required("Your phone number is required!")
            .default("")
            .nullable()
            .matches(
                /^[\d\s-+]+$/,
                "Phone number must contain only digits, spaces, dashes, or plus signs!"
            )
            .min(MIN_PHONE_VALIDATION, `To short!`),
    });

    const FORM_INITIAL_VALUES = {
        name: "",
        number: "",
    };
    
    const handleSubmit = (values, actions) => {
        dispatch(addContact(values));
        actions.resetForm();
    };
    
    return (
        <Formik
            initialValues={FORM_INITIAL_VALUES}
            onSubmit={handleSubmit}
            validationSchema={contactFormSchema}>
            <Form className={css.formContainer}>
                <label className={css.formLabel}>
                    {" "}
                    Name
                    <Field type="text" name="name" placeholder="Name" />
                    <ErrorMessage name="name" component="div" className={css.error} />
                </label>
                <label className={css.formLabel}>
                    {" "}
                    Phone number
                    <Field type="tel" name="number" placeholder="+380" />
                    <ErrorMessage name="number" component="div" className={css.error} />
                </label>
                <button type="submit" className={css.submitFormButton}>
                    Add Contact
                </button>
            </Form>
        </Formik>
    );
}

export default ContactForm;