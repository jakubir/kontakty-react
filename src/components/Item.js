export default function Item({ contact }) {
    return (
      <li>
        {contact.name} ({contact.phone})
      </li>
    );
  }