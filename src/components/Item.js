export default function Item({ contact }) {
    return (
      <li key={contact.id}>
        {contact.name} ({contact.phone})
      </li>
    );
  }