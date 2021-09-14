import { useState } from 'react';
import PropTypes from 'prop-types';

import s from '../ContactForm/ContactForm.module.css';

export function ContactForm({ onSubmit }) {
    const [name, setName] = useState('');
    const [number, setNumber] = useState('');

    const handleSubmit = event => {
        event.preventDefault();

        onSubmit(name, number);
        resetForm();
    };

    const resetForm = () => {
        setName('');
        setNumber('');
    };

    const handleChange = event => {
        const { value, name } = event.currentTarget;

        switch (name) {
            case 'name':
                setName(value);
                break;

            case 'number':
                setNumber(value);
                break;

            default:
                return;
        }
    };

    return (
        <form onSubmit={handleSubmit} className={s.form}>
            <label className={s.label}> Name </label>
            <input type="text"
                name="name"
                value={name}
                pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                required
                autoComplete="off"
                placeholder="James Smith"
                onChange={handleChange}
                className={s.input}
            />

            <label className={s.label}> Number </label>
            <input type="tel"
                name="number"
                value={number}
                pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
                required
                autoComplete="off"
                placeholder="007-007"
                onChange={handleChange}
                className={s.input}
            />

            <button type="submit" className={s.button}>Add contact</button>
        </form>
    )
}

ContactForm.propTypes = {
    onSubmit: PropTypes.func.isRequired,
}
