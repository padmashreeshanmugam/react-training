import React from 'react';
import './App.css';
import Cards from './cards'
import DynamicTable from './components/toDoList/DynamicTable';

class App extends React.Component{
    render(){
    return(
       <>       
        <Cards /> 
        <DynamicTable />
      </>
    );

  };
};

export default App;
