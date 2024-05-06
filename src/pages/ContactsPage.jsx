import { useDispatch, useSelector } from "react-redux"
import { selectContacts, selectError, selectIsLoading } from "../redux/contacts/selectors";
import { useEffect } from "react";
import { fetchContacts } from "../redux/contacts/operations";
import ContactForm from "../components/ContactForm/ContactForm";
import SearchBox from '../components/SearchBox/SearchBox';
import ContactList from '../components/ContactList/ContactList';
import { Loader } from "../components/Loader";

const ContactsPage = () => {
    const dispatch = useDispatch();
    const loading = useSelector(selectIsLoading);
    const isError = useSelector(selectError);
    const contacts = useSelector(selectContacts);
    useEffect(() => {
        dispatch(fetchContacts());
    }, [dispatch]);
    return (
        <div>
            <ContactForm />
            <SearchBox />
            {loading && !isError && <Loader />}
            {Array.isArray(contacts) && contacts.length === 0 && (
                <p> There are no contacts in your phonebook yet</p>
            )}
            <ContactList />
        </div>
    );
};

export default ContactsPage;