import PropTypes from 'prop-types';

import s from '../Filter/Filter.module.css';

export function Filter({ value, onChange }) {
    return (
        <div className={s.filter}>
            <p className={s.text}>Find contacts by name</p>
            <input type="text"
                name="name"
                value={value}
                autoComplete="off"
                placeholder="Start typing to find.."
                onChange={onChange}
                className={s.input}
            />
        </div>
    )
}

Filter.propTypes = {
    value: PropTypes.string.isRequired,
    onChange: PropTypes.func.isRequired,
}
