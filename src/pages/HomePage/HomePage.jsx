import DocumentTitle from "../../components/DocumentTitle";
import css from "./HomePage.module.css";

export const HomePage = () => {
    return (
        <div className={css.homePageContainer}>
            <DocumentTitle>Registration</DocumentTitle>
            <h1>Phonebook</h1>
            <p className={css.description}>
                Explore our app`s charm by effortlessly managing your contacts. Simply register to start, or swiftly log in if you`re already a member.
            </p>
        </div>
    );
};