import { useState } from 'react';
import Form from './Components/Form';
import './App.css';

function App() {
  const [memberList, setMemberList] = useState([])
  const [values, setValues] = useState({name: '', email: '', role: ''})

  const onSubmit = () => {
    setMemberList([values, ...memberList]);
    setValues({ name: '', email: '', role: ''})
  }

  const onChange = (name, value) => {
    setValues({ ...values, [name]: value})
  }

  return (
    <div className="App">
      <h1>Team Builder App</h1>
      <Form values={values} change={onChange} submit={onSubmit}/>
      {memberList.map((member, idx) => {
        return (
          <div key={idx}>
            {member.name}, {member.role}, {member.email}
          </div>
        )
      })}
    </div>
  );
}

export default App;
