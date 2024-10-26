import { useRef } from "react";

export default function Form({ addContact }) {
  const nameRef = useRef();
  const phoneRef = useRef();

  const onSubmit = (e) => {
    e.preventDefault();

    const contact = {
        name: nameRef.current.value,
        phone: phoneRef.current.value,
    };
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
                    <input type="text" maxLength="9" className="form-control" ref={phoneRef}/>
                </div>
                <button className="btn btn-primary">Dodaj</button>
            </form>
        </div>
    );
  }