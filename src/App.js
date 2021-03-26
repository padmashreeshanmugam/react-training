import React from 'react';
import './App.css';
import Cards from './cards'
// import List from './components/toDoList/List'

class App extends React.Component{
  render(){
    return(
       <>
        <Cards />
        {/* <List /> */}
      </>
    );

  };
};

export default App;
