import { useDispatch } from "react-redux"
import { register } from "../../redux/auth/operations";
import css from "./RegistrationForm.module.css";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

const RegistrationForm = () => {
    const dispatch = useDispatch();
    const MAX_NAME_VALIDATION = 20;
    const MIN_PASSWORD_VALIDATION = 6;

    const registrationFormSchema = Yup.object({
        name: Yup.string()
            .required("User name or nickname is required!")
            .max(
                MAX_NAME_VALIDATION,
                `Your username must be less or equal ${MAX_NAME_VALIDATION} characters!`
            ),
        email: Yup.string()
            .required("Email is required!")
            .email("Email is invalid!"),
        password: Yup.string()
            .required("Password is required!")
            .min(
                MIN_PASSWORD_VALIDATION,
                `Your password must be greater than ${MIN_PASSWORD_VALIDATION} characters!`
            ),
    });
    const FORM_INITIAL_VALUES = {
        name: "",
        email: "",
        password: "",
    };
    const handleSubmit = (values, actions) => {
        dispatch(register(values));
        actions.resetForm();
    };
    return (
        <Formik
            initialValues={FORM_INITIAL_VALUES}
            onSubmit={handleSubmit}
            validationSchema={registrationFormSchema}>
            <Form className={css.formContainer}>
                <label className={css.formLabel}>
                    {" "}
                    Username
                    <Field type="text" name="name" placeholder="Enter your name" />
                    <ErrorMessage name="name" component="div" className={css.error} />
                </label>
                <label className={css.formLabel}>
                    {" "}
                    Email
                    <Field
                        type="email"
                        name="email"
                        placeholder="email@gmail.com"
                    />
                    <ErrorMessage name="email" component="div" className={css.error} />
                </label>
                <label className={css.formLabel}>
                    {" "}
                    Password
                    <Field type="password" name="password" placeholder="password" />
                    <ErrorMessage name="password" component="div" className={css.error} />
                </label>
                <button type="submit" className={css.submitFormButton}>
                    Register
                </button>
            </Form>
        </Formik>
    );
};

export default RegistrationForm;