import React from "react";
import "./App.scss";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      levels: [],
    };
  }

  componentWillMount() {
    fetch(`https://lotaspeak.herokuapp.com/api/info/levels`)
      .then((response) => response.json())
      .then((response) => {
        this.setState({
          levels: response.body.levels,
        });
        console.log(this.state.levels);
      });
  }
  componentDidUpdate() {}
  render() {
    let views = [];
    for (let i = 0; i < this.state.levels.length; i++) {
      let number;
      if (this.state.levels[i].description === "") {
        number = this.state.levels[i].shortTitle;
      } else {
        number = this.state.levels[i].description;
      }
      let view = (
        <div className="AppText" key={this.state.levels[i]._id}>
          <h2>{this.state.levels[i].title}</h2>
          <p>{number}</p>
        </div>
      );
      if (this.state.levels[i].sort >= 0) {
        views.push(view);
      }
    }
    const reversed = views.reverse();
  return <div className="App">
  <div className="AppBorde">{reversed}</div>
    </div>;
  }
}

export default App;
