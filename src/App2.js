import { useEffect, useState } from "react";

function App() {

  const [name, setName] = useState(null);
  console.log('NAME: ',name)
  console.log('random1: ', Math.random())
  const [currentAdmin, setCurrentAdmin] = useState(null);
  console.log('random2: ', Math.random())
  const data = {
    email: "adminsuper@gmail.com",
    password: "adminsuper",
    random: Math.random()
  }

  useEffect(() => {
    console.log('My Name still null')
    fetch(`${API_URL+_HERE}/api/admins/login`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    })
      .then(res => res.json())
      .then(res => {
        console.log('fetch done!!')
        setCurrentAdmin(res.data.admin);
      })
      .catch(err => {
        console.log(err.message, err);
      })

  }, []);

  useEffect(() => {
    console.log('change name: ', name);
    if(currentAdmin==null) {
      setName('Moka')
      return;
    }
    setName(`${currentAdmin.firstName} ${currentAdmin.lastName}`)
  }, [currentAdmin]);

  return (
    <div>{name} My Basic React App {Math.random() * 10}</div>
  );
}

export default App;
