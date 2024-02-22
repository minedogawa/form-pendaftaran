import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import React, { useState } from 'react';
import Form from './components/form';



function App() {
    //create succses and error massages 
    const [showSuccessMassage, setHideSuccess] = useState(false);
    const [showErrorMassage, setHideError] = useState(false);
    
    //create array user
    const[users, setUsers] = useState([]);
    
    
    const[id, setId] = useState(null); //can use idx if want undefined and unique
    const[firstName, setFirstName] = useState('');
    const[lastName, setLastName] = useState('');
    const[department, setDepartment] = useState('');
    const[address, setAddress] = useState('');

    const handleChangeFirstName = (event) => {
		setFirstName(event.target.value);
	}

    const handleChangeLastName = (event) => {
        setLastName(event.target.value);
    }

    const handleChangeAddress = (event) => {
        setAddress(event.target.value);
    }

    const handleDropDownChange = (event) => {
        setDepartment(event.target.value);
    }

    const handleSubmit = (event) => {
    event.preventDefault();

    if (id == '' || firstName == '' || lastName == '' || department == '' || address == ''){
        handleError();
        return;
    }

    if(id === null){
        const newUser = { 
            id: Date.now().toString(),
            firstName: firstName,
            lastName: lastName,
            department: department,
            address: address
        }
        
        setUsers((prev) => [...prev,  newUser]);
        
    } else{
        const updatedUser = {
            id: id,
            firstName: firstName,
            lastName: lastName,
            department: department,
            address: address
        }
        
        const updatedUsers = users.map((user) => {
            if(user.id === updatedUser.id){
                return updatedUser;
            }
            return user;
        })
        setUsers(updatedUsers);
    }
    handleSuccess();
    handleResetForm();
}

    const handleSuccess = () => {
        setHideSuccess(true);
        setTimeout(() => {
            setHideSuccess(false);
        }, 5000);
    }

    const handleError = () => {
        setHideError(false);
        setTimeout(() => {
            setHideError(true);
        }, 5000);

    }

    const handleDelete = (event) => {
        event.preventDefault();
        setUsers((prev) => prev.filter((user) => user.id !== event.target.value));
    }

    const handleEdit = (event) => {
        const user = users.filter((user) => user.id === event.target.value)[0];
        setId(user.id);
        setFirstName(user.firstName);
        setLastName(user.lastName);
        setDepartment(user.department);
        setAddress(user.address);
    }

    const handleResetForm = () => {
        setId(null);
        setFirstName('');
        setLastName('');
        setDepartment('');
        setAddress('');
    }


  return (
    <div className="container d-flex flex-column justify-content-center align-items-center m-0">
          <h1 className='text-center font-weight-bold py-4'>Registration Form</h1>
        <div className="row" style={{maxWidth: '60%'}}>
            { showSuccessMassage &&(
                <div className="alert alert-success" >
                    Data has been saved successfully
                </div>
            )}

            { showErrorMassage &&(
                <div className="alert alert-danger">
                    Data Error
                </div>
            )}

            {/* <div className="alert alert-success" hidden={hideSuccess}>
                Data has been saved successfully
            </div>
            <div className="alert alert-danger" hidden={hideError}>
                Data Error
            </div> */}

            <div className="col-4">
                <div className="card">
                    <div className="card-body">
                        <Form 
                            submit={handleSubmit}
                            handleChangeAddress={handleChangeAddress} 
                            handleDropDownChange={handleDropDownChange} 
                            handleChangeFirstName={handleChangeFirstName} 
                            handleChangeLastName={handleChangeLastName} 
                            formData={{
                                firstName: firstName,
                                lastName: lastName,
                                department: department,
                                address: address
                            }}/>
                    </div>
                </div>
            </div>

            <div className="col-8">
            <div className="card" style={{background: '#00494d'}}>
                      <div className="card-header text-white">
                        <strong>USER LIST</strong>
                    </div>
                    <div className="card-body">
                        <table className="table">
                            <thead>
                                <tr>
                                    <th scope="col">#</th>
                                    <th scope="col">Name</th>
                                    <th scope="col">Department</th>
                                    <th scope="col">Address</th>
                                    <th scope="col">Action</th>
                                </tr>
                            </thead>
                            <tbody>
                                { 
                                // memberlakukan yang di ambil dari array
                                    users.map((user, index) =>  (
                                            <tr key={index}>
                                                <th scope="row">{index + 1}</th>
                                                <td>{user.firstName + " " + user.lastName}</td>
                                                <td>{user.department}</td>
                                                <td>{user.address}</td>
                                                <td>
                                                    <button className="btn btn-warning btn-sm" value={user.id} onClick={handleEdit}>Edit</button>
                                                    <button className="btn btn-danger btn-sm" value={user.id} onClick={handleDelete} >Delete</button>
                                                </td>
                                            </tr>
                                        )
                                    )
                                }
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    </div>
)
}

export default App;
