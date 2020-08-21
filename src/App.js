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
    let count = 9
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
          <table >
            <tbody>
              <tr>
                <td><h2>{count=count-1}</h2></td>
                <td><h2>{this.state.levels[i].title}</h2></td>
                <td>{number}</td>
                <td><h2>{this.state.levels[i].shortTitle}</h2></td>
              </tr>
              </tbody>
          </table>
        </div>
      );
      if (this.state.levels[i].sort >= 0) {
        views.push(view);
      }
    }
    const reversed = views.reverse();
    return (
      <div className="App">
        <div className="AppBorde">
          <p className="ps">Your English Level
You can discover your level of English on a scale from 1 (Beginner) to 9 (Very advanced). Check the table below to see which level you have, or take a 20 minute free Online English Level Test which will help you understand your English level with accuracy.</p>
          <table className="AppTable">
            <tbody>
            <tr>
              
                <td><h2>Level</h2></td>
                <td><h2>Class Level</h2></td>
                <td><h2>Description</h2></td>
                <td><h2>CEFR Level*</h2></td>
              </tr>
            </tbody>
          </table>
          {reversed}
        </div>
      </div>
    );
  }
}

export default App;
