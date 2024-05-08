import { useState } from "react";
function DisplayName() {
  const [formData, setFormData] = useState(null);

  function handleSubmit(e) {
    e.preventDefault();
    const newFormData = {
      fName: e.target[0].value,
      lName: e.target[1].value,
    };
    setFormData(newFormData);
  }
  return (
    <>
      <h1>Full Name Display</h1>
      <form onSubmit={handleSubmit}>
        <label htmlFor="fname">First Name:</label>
        <input type="text" name="fname" id="fname" required />
        <br />
        <label htmlFor="lname">Last Name:</label>
        <input type="text" name="lname" id="lname" required />
        <br />
        <button type="submit">Submit</button>
      </form>

      {formData && (
        <p>
          Full Name: {formData.fName} {formData.lName}
        </p>
      )}
    </>
  );
}
export default function App() {
  return (
    <div className="App">
      <DisplayName />
    </div>
  );
}
