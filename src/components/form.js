import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { saveUser } from './redux';

function Form(){
  const styles = {
    marginTop: '10%',
    width:'485px',
    marginLeft: '30%',
    height: '300px',
    border: '1px solid black',
    boxShadow: '1px 2px 1px 1px gray',
    display: 'flex',
    flexDirection: 'column',
    gap: '30px',
    paddingTop: '10%',
    paddingLeft: '2%',
    paddingRight: '2%'
  }
const inp={
  height:'35px'
}
  const dispatch = useDispatch();
 const [username,setusername]= useState('');
const [password,setpassword]=useState('');
function send(){
fetch('https://dummyjson.com/auth/login', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify({
    username: username,
    password: password,
  })
})
.then(res => {
  if (res.status === 200) {
    return res.json();
  } else {
    throw new Error('Failed to authenticate user');
  }
}).then(data => {
  const { id, token, ...user } = data; // Destructure user object and exclude id and token
  const userObject = { id, token, user }; // Create new object with id, token and user properties
  // Dispatch action to save user object in Redux state
  // console.log(userObject);
  dispatch(saveUser(userObject));
console.log(data);
  // Redirect to profile page
  // history.push('/profile');
})
.catch(error => console.error(error));
}
    return (
      <div style={styles}>
         <input type="text" PlaceHolder="USER NAME" style={inp} onChange={(e)=>{
            setusername(e.target.value);
         }}></input>
         <input type="password" PlaceHolder="PASSWORD" style={inp} onChange={(e)=>{
            setpassword(e.target.value);
         }}></input>
         <button style={inp} onClick={send}>Sign In</button>
      </div>
    );
}
export default Form;