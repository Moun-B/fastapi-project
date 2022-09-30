import React from "react";
import moment from "moment";

import ErrorMessage from "./ErrorMessage";
import { UserContext } from "../context/UserContext";
import { useContext } from "react";
import { useState, useEffect } from "react";

const Table = () => {
  const [token] = useContext(UserContext);
  const [leads, setLeads] = useState(null);
  const [errorMessage, setErrorMessage] = useState("");
  const [loaded, setLoaded] = useState(false);
  const [activeModal, setActiveModal] = useState(false);
  const [id, setId] = useState(null);

  const getLeads = async () => {
    const requestOptions = {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer " + token,
      },
    };
    const response = await fetch("/api/leads", requestOptions);

    if (!response.ok) {
      setErrorMessage("Couldn't load the leads");
    } else {
      const data = await response.json();
      setLeads(data)
      setLoaded(true)
    }
  };

  useEffect(() => {
    getLeads();
  }, []);

  return (
    <>
    <button className="button is-fullwidth mb-5 is-link">
      Create Lead
    </button>
    <ErrorMessage message={errorMessage} />
    { loaded && leads ? (
      <table className="table is-fullwidth">
        <thead>
          <tr>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Company</th>
            <th>Email</th>
            <th>Note</th>
            <th>Last Updated</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {leads.map((lead) => (
            <tr key={lead.id}>
              <td>{lead.first_name}</td>
              <td>{lead.last_name}</td>
              <td>{lead.company}</td>
              <td>{lead.email}</td>
              <td>{lead.note}</td>
              <td>{moment(lead.last_updated).format("MMM Do YY")}</td>
              <td>
                <button className="button mr-2 is-info is-light">
                  Update
                </button>
                <button className="button is-danger is-light">
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    ) : <p>Loading</p>}
    </>
  )
};

export default Table;
