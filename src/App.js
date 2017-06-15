import React, { Component } from 'react';
import logo from '../public/image-banner.png';
import './App.css';

const exercices = {
  A : '40 Jumping Jacks',
  B : '20 Crunches',
  C : '30 Squats',
  D : '10 Pushups',
  E : '20 Mountain Climbers',
  F : '10 Burpees',
  G : '10 Arm Circles',
  H : '20 Squats',
  I : '30 Jumping Jacks',
  J : '30 High Knees',
  K : '10 Pushups',
  L : '25 Lunges',
  M : '20 Burpees',
  N : '20 Second Plank',
  O : '40 Jumping Jacks',
  P : '15 Arm Circles',
  Q : '30 Crunches',
  R : '15 Pushups',
  S : '15 Mountain Climbers',
  T : '30 Second Wall Sit',
  U : '15 Squats',
  V : '15 Burpees',
  W : '30 Jumping Jacks',
  X : '15 Crunches',
  Y : '10 Pushups',
  Z : '1-Minute Wall Sit',
};

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      exercices: [],
    }
  }

  generate(event) {
    const value = event.target.value;
    this.setState({ exercices: value.replace(/\s/g, '').toUpperCase().split('').map( letter => exercices[letter]) });
  }

  render() {

    const exerciseList = this.state.exercices.map( exo => (<li className="list-group-item">{exo}</li>));
    return (
      <div className="App col-md-6 col-lg-4" style={{flex:1}}>
        <div className="App-header">
          <h2 className="col-xs-4 col-sm-12"><img src={logo} alt="logo" style={{height:'100%', width:'100%'}}/></h2>
          <h2 className="col-xs-4 col-sm-12" style={{fontFamily:'\"Lato\", Helvetica, Arial, sans-serif', fontWeight: 200}}>GETFIT</h2>
        </div>
        <div>
          <input className="form-control" type="text" placeholder="Type your challenge name" onChange={this.generate.bind(this)}/>
        </div>
        <div className="App-intro" style={{marginTop: 10}}>
          <ul className="list-group" style={{listStyle: 'none'}}>{exerciseList}</ul>
        </div>
      </div>
    );
  }
}

export default App;
