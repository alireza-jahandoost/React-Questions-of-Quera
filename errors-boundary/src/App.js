import React,{PureComponent} from 'react';
import './App.css';
import Form from "./Form";
import ErrorBoundary from "./ErrorBoundary";
class App extends PureComponent {

  constructor(props){
    super(props);
    this.state = {
      person: {
        year : ''
      },
       error:''
    }
  }
  render() {
    return (
        <div className="App">
          <header className="App-header">
             <Form person={this.state.person} />
          </header>
        </div>
    );
  }
}

export default App;
