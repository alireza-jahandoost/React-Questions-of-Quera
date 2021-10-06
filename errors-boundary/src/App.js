import React from "react";
import "./App.css";
import Form from "./Form";
import ErrorBoundary from "./ErrorBoundary";
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      person: {
        year: "",
      },
      error: "",
    };
  }

  handleInputChange = (e) => {
    this.setState({ person: { year: e.target.value } });
  };

  handleReloadComponent = () => {
    this.setState({ person: { year: "" }, error: "" });
  };

  changeError = (err) => {
    this.setState({ error: err });
  };
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <ErrorBoundary
            changeError={this.changeError}
            error={this.state.error}
            onReloadButtonPressed={this.handleReloadComponent}
          >
            <Form
              person={this.state.person}
              handleChange={this.handleInputChange}
            />
          </ErrorBoundary>
        </header>
      </div>
    );
  }
}

export default App;
