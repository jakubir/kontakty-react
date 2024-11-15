import Item from './Item';

export default function List({ contacts }) {
    return (
        <div className="col">
            <h2>Lista kontaktów</h2>
            <ul>
                {contacts.map((contact) => <Item contact={contact}/>)}
            </ul>
        </div>
    );
  }