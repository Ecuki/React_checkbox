import React from "react";
import "./App.css";

const PositiveMessage = () => <p>Możesz obejrzeć film!</p>;
const NegativeMessage = () => <p>Nie możesz obejrzeć filmu!</p>;
class App extends React.Component {
  state = {
    isConfirmed: false,
    isFormSubmitted: false
  };
  handleCheckboxChange = () => {
    this.setState({
      isConfirmed: !this.state.isConfirmed,
      isFormSubmitted: false
    });
  };
  handleFormSubmmit = e => {
    e.preventDefault();
    if (!this.state.isFormSubmitted) {
      this.setState({ isFormSubmitted: true });
    }
  };
  displayMessage = () => {
    if (this.state.isFormSubmitted) {
      if (this.state.isConfirmed) {
        return <PositiveMessage />;
      } else {
        return <NegativeMessage />;
      }
    } else {
      return null;
    }
  };

  render() {
    return (
      <>
        <h1>Kup bilet na hororr roku</h1>
        <form onSubmit={this.handleFormSubmmit}>
          <input
            type="checkbox"
            id="age"
            onChange={this.handleCheckboxChange}
            checked={this.state.isConfirmed}
          />
          <label htmlFor="age">Mam conajmniej 16 lat</label>
          <br />
          <button type="submit">Kup bilet</button>
        </form>
        {this.displayMessage()}
      </>
    );
  }
}
export default App;
