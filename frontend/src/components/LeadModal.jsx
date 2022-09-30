import React from "react";
import { useState } from "react";

const LeadModal = ({active, handleModal, token, id, setErrorMessage}) => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [company, setCompany] = useState("");
  const [email, setEmail] = useState("");
  const [note, setNote] = useState("");

  return (
    <div className={`modal ${active && "is-active"}`}>
      <div className="modal-background" onClick={handleModal}>
        <div className="modal-card">
          <header className="modal-card-head has-background-primary-light">
            <h1 className="modal-card-title">
              {id ? "Update Lead" : "Create Lead"}
            </h1>
          </header>
          <section className="modal-card-body">
            <form>
              <div className="field">
                <label className="label">First Name</label>
                <div className="control">
                  <input
                    type="text"
                    placeholder="Enter First Name"
                    value={firstName} onChange={(e) => setFirstName(e.target.value)}
                    className="input"
                    required />
                </div>
              </div>
            </form>
          </section>
        </div>
      </div>
    </div>
  );
};

export default LeadModal;
