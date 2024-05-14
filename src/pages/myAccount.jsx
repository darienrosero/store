import React from "react";
import FormField from "../components/FormField";
import "./myAccount.css";

const MyAccount = () => {
  const formFields = [
    { id: "name", label: "Name", placeholder: "Teff" },
    { id: "email", label: "Email", placeholder: "platzi@example.com" },
    { id: "password", label: "Password", placeholder: "*********" },
  ];

  return (
    <div className="login">
      <div className="form-container">
        <h1 className="title">My account</h1>

        <form action="/" className="form">
          <div>
            {formFields.map((field) => (
              <FormField
                key={field.id}
                id={field.id}
                label={field.label}
                placeholder={field.placeholder}
              />
            ))}
          </div>

          <input
            type="submit"
            value="Create"
            className="primary-button login-button"
          />
        </form>
      </div>
    </div>
  );
};

export default MyAccount;
