import { useEffect, useState } from "react";

function App() {

  const [name, setName] = useState(null)
  console.log('name: ',name, '|', Math.random());
  useEffect(() => {
    setName('Moka');
  },[])
  return (
    <div>{name} My Basic React App {Math.random() * 10}</div>
  );
}

export default App;
