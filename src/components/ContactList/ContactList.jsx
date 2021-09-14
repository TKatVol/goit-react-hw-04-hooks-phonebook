import PropTypes from 'prop-types';
import { FcPhoneAndroid } from "react-icons/fc";

import s from '../ContactList/ContactList.module.css';

export function ContactList({ contacts, onDeleteContact }) {
    return (
        <ul className={s.list}>
            {contacts.map(({ id, name, number }) => (
                <li key={id} className={s.item}>
                    <FcPhoneAndroid style={{ fontSize: "30" }} />
                    <p className={s.contact}>{name}: {number}</p>
                    <button onClick={() => onDeleteContact(id)} className={s.button}>Delete</button>
                </li>
            ))}
        </ul>
    )
}

ContactList.propTypes = {
    contacts: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.string.isRequired,
            name: PropTypes.string.isRequired,
            number: PropTypes.string.isRequired,
        })
    ),
    onDeleteContact: PropTypes.func.isRequired,
}
