import React from 'react'
import Button from '@mui/material/Button';

function Anas() {
    async function readUser() {
        const user = await fetch('http://localhost:3000', {
            method: 'POST',
            headers: { 
              'Accept': 'application/json, text/plain, */*',
              'Content-Type': 'application/json'
        },
        body: JSON.stringify({name: "Shimon",age: 19, id: "hapoalim"})
        })
        const data = await user.json();
        console.log('Fetched Data:' , data);
    }
  return (
    <div>ِ
        <h1>
            Anas
        </h1>
        <p>This My First Project</p>
        <p>Welcome To My World</p>
        <button onClick={readUser}>send Mony To Dear User</button>
        <Button variant="contained" onClick={readUser}>Contained</Button>
    </div>
  )
}

export default Anas