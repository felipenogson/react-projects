import React, { Fragment, useState, useEffect} from 'react'
import Formulario from './components/Formulario';
import Appoiment from './components/Appoiment';

function App() {

  // Guardando en localstorage, inicializandolo
  let appoimentsLocalStorage = JSON.parse(localStorage.getItem('appoiments'));
  if(!appoimentsLocalStorage){
    appoimentsLocalStorage=[];
  }

  // Arreglo de citas
  const [appoinments, saveAppoinments] = useState(appoimentsLocalStorage);

  // useEffect para realizar operaciones cuando el state cambia
  useEffect(() => {
    let appoimentsLocalStorage = JSON.parse(localStorage.getItem('appoiments'));
    if(appoimentsLocalStorage){
      localStorage.setItem('appoiments', JSON.stringify(appoinments))
    }else{
      localStorage.setItem('appoiments', JSON.stringify([]))
    }
  }, [appoinments])

  // Función que toma las citas actuales y agrega una mas
  const createAppoinment = (appoinment) => { 
    saveAppoinments([appoinment, ...appoinments])
  }

  // Funcion que elimina la cita del citas
  const deleteAppoiment = (id) => {
    const newAppoiments = appoinments.filter(appoiment => ( appoiment.id !== id))
    saveAppoinments(newAppoiments)
  }
  
  return (
    <Fragment>
    <h1> 🐶 Pet's Birthdays🐶</h1>
    <div className="container">
      <div className="row">
        <div className="one-half column">
          <Formulario 
            createAppoinment={createAppoinment}
          />

        </div>
        <div className="one-half column">
          { (appoinments.length !== 0) ? <h2>Birthday Panel🎂</h2> : <h2>Add a Birthday 🎂</h2>  }
          { appoinments.map( appoiment => (
            <Appoiment 
              key={appoiment.id}
              appoiment={appoiment} 
              deleteAppoiment={deleteAppoiment}
            />
          ))}
        </div>
      </div>
    </div>
    </Fragment>
  );
}
export default App;
