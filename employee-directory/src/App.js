import React, { useEffect } from 'react'
import './App.css';
import API from './utils/API'


function App() {
  const [ sortMap, setSortMap] = React.useState({
    picture: true,
    name: true,
    email: true,
    phone: true,
    
  })
  function handleSortFunction(columnName, isAscending) {
    setSortMap({
      ...sortMap, 
      [columnName]:isAscending
    })
  const employees = [{
    name: "Peter"
      },
    {
    name: "Jordan"
    },
    {
      name: "Jared"
    }
];

employees.sort((a, b) => {
return isAscending? a.name.localeCompare(b.name): (b.name).localeCompare(a.name)
})
console.log("employees", employees)
  }
  
  useEffect(()=>{ 
 API.search().then(console.log);
 handleSortFunction("name", true)
  },[])
  return (
    <div>

    </div>
  );
}

export default App;
