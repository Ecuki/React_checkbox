import React from "react";
import "./App.css";

const PositiveMessage = () => <p>Możesz obejrzeć film!</p>;
const NegativeMessage = () => <p>Nie możesz obejrzeć filmu!</p>;
class App extends React.Component {
  state = {
    isConfirmed: false
  };
  handleCheckboxChange = () => {
    this.setState({ isConfirmed: !this.state.isConfirmed });
  };
  displayMessage = () => {
    if (this.state.isConfirmed) {
      return <PositiveMessage />;
    } else {
      return <NegativeMessage />;
    }
  };

  render() {
    return (
      <>
        <h1>Kup bilet na hororr roku</h1>
        <input
          type="checkbox"
          id="age"
          onChange={this.handleCheckboxChange}
          checked={this.state.isConfirmed}
        />
        <label htmlFor="age">Mam conajmniej 16 lat</label>
        {this.displayMessage()}
      </>
    );
  }
}
export default App;
