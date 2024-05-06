import { useDispatch } from "react-redux";
import { deleteContact } from "../../redux/contacts/operations";
import css from "./Contact.module.css";

function Contact({ contactData }) {
    const dispatch = useDispatch();
    const handleDeleteButton = (contactId) => {
        dispatch(deleteContact(contactId));
    };

    return (
        <div className={css.contactDataContainer}>
            <ul className={css.contactCard}>
                <div>
                    <li className={css.contactData}>
                        <p>{contactData.name}</p>
                    </li>
                    <li className={css.contactData}>
                        <p>{contactData.number}</p>
                    </li>
                </div>

                <li>
                    {" "}
                    <button
                        className={css.deleteButton}
                        type="button"
                        onClick={() => handleDeleteButton(contactData.id)}>
                        Delete
                    </button>
                </li>
            </ul>
        </div>
    );
}

export default Contact;