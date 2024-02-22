import React from 'react'

function Form({ submit, handleChangeAddress, handleChangeFirstName, handleChangeLastName, handleDropDownChange, formData}) {
  return (
    <form onSubmit={submit}>
        <div className="mb-3">
            <label htmlFor="firstName" className="form-label">First Name</label>
            <input type="text" name="firstName" className="form-control" id="firstName" value={formData.firstName} onChange={handleChangeFirstName}/>
        </div>
        <div className="mb-3">
            <label htmlFor="lastName" className="form-label">Last Name</label>
            <input type="text" name="lastName" className="form-control" id="lastName" value={formData.lastName} onChange={handleChangeLastName}/>
        </div>
        <div className="mb-3">
        <label htmlFor="department" className="form-label">Department</label>
            <select className="form-select" name="department" aria-label="Default select example" value={formData.department} onChange={handleDropDownChange}>
                <option value=" ">Please choose one</option>
                <option value="Data Management">Data Management</option>
                <option value="Finance, HR & Administration">Finance, HR & Administration</option>
                <option value="Product Development & Operation">Product Development & Operation</option>
            </select>
        </div>
            <div className="mb-3">
                <label htmlFor="address" className="form-label">Address</label>
                <textarea name="address" className="form-control" id="address" rows="3" value={formData.address} onChange={handleChangeAddress}></textarea>
            </div>
            <div className="d-grid gap-2">
                <button type="submit" className="">Submit</button>
            </div>
    </form>
  )
}

export default Form;