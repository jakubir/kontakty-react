import { useRef, useState } from "react";

export default function Form({ addContact, emptyContactsList }) {
  const nameRef = useRef();
  const phoneRef = useRef();
  const [id, setId] = useState(1);

  const onSubmit = (e) => {
    e.preventDefault();

    const contact = {
        name: nameRef.current.value,
        phone: phoneRef.current.value,
        id: id
    };
    setId(id+1);
    e.target.reset();

    addContact(contact);
  }

    return (
        <div className="col">
            <h2>Dodaj kontakt</h2>
            <form onSubmit={onSubmit}>
                <div className="form-group mb-3">
                    <label>Imię: </label>
                    <input type="text" className="form-control" ref={nameRef}/>
                </div>
                <div className="form-group mb-3">
                    <label>Numer telefonu: </label>
                    <input type="number" maxLength="9" className="form-control" ref={phoneRef}/>
                </div>
                <div className="d-flex justify-content-between w-full">
                    <button type="submit" className="btn btn-primary">Dodaj</button>
                    <button type="button" className="btn btn-danger" onClick={emptyContactsList}>Wyczyść listę</button>
                </div>
            </form>
        </div>
    );
  }