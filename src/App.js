import React from "react";
import "./App.css";
const ValidationMessage = props => <p>{props.txt}</p>;
// const PositiveMessage = () => <p>Możesz obejrzeć film!</p>;
// const NegativeMessage = () => <p>Nie możesz obejrzeć filmu!</p>;
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
        return <ValidationMessage txt="Kupiłeś" />;
      } else {
        return <ValidationMessage txt="Nie możesz kupić biletu" />;
      }
    } else {
      return null;
    }
  };

  render() {
    const { isConfirmed } = this.state;

    return (
      <>
        <h1>Kup bilet na hororr roku</h1>
        <form onSubmit={this.handleFormSubmmit}>
          <input
            type="checkbox"
            id="age"
            onChange={this.handleCheckboxChange}
            checked={isConfirmed}
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
