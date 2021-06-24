import { useState, useEffect } from 'react';
import Pregunta from './components/Pregunta'
import Formulario from './components/Formulario'
import Listado from './components/Listado'
import BudgetControl from './components/BudgetControl'

function App() {
  // Defining the state
  const [ budget, setBudget] = useState(0);
  const [ remain, setRemain] = useState(0);
  const [ show_question, setShowQuestion] = useState(true);
  const [ transactions, setTransactions] = useState([]);
  const [ transaction, setTransaction] = useState({});
  const [ createtransaction, setCreateTransaction ] = useState(false);

  // UseEffect que actualiza el remain
  useEffect(() => {
    if(createtransaction) {
    setTransactions([
      ...transactions,
      transaction
    ]);
    // resta al presupuesto actual 
    const remainingBudget = remain - transaction.ammount; 
    setRemain(remainingBudget);
    setCreateTransaction(false);
  }
  }, [transaction, transactions, createtransaction, remain]);


  return (
    <div className="contenido container">
      <header>
        <h1> Week Expenses</h1>
        <div className="contenido-principal contenido">
          { show_question ?
          <Pregunta 
            setBudget={setBudget} 
            setRemain={setRemain} 
            setShowQuestion={setShowQuestion}
            />
            :
            (
          <div className="row">
            <div className="one-half column">
              <Formulario 
                setTransaction={setTransaction}
                setCreateTransaction={setCreateTransaction}

              />

            </div>
            <div className="one-half column">
              <Listado 
                transactions={transactions} />
              <BudgetControl 
                budget={budget}
                remain={remain}/>
            </div>
          </div>
            )
          }
        </div>
      </header>

    </div>
  ) 
}

export default App;
