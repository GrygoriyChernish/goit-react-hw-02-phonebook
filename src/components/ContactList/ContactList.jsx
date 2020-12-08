import PropTypes, { shape } from 'prop-types';
import s from './ContactList.module.css';

function ContactList({ contacts, onDeleteContact }) {
  return (
    <ul className={s.List}>
      {contacts.map(({ id, name, number }) => {
        return (
          <li className={s.Item} key={id}>
            <p>
              {name}: {number}
            </p>
            <button onClick={() => onDeleteContact(id)}>Удалить</button>
          </li>
        );
      })}
    </ul>
  );
}

ContactList.propTypes = {
  contacts: PropTypes.arrayOf(
    shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    }),
  ),
  onDeleteContact: PropTypes.func,
};

export default ContactList;
