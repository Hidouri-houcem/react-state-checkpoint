import React, { Component } from 'react';
import './App.css';


class App extends Component {
  
  constructor(props) {
    super(props);
    this.state = {
      person: {
        fullName: 'Hidouri Houssem',
        bio: 'Développeur web',
        imgSrc: './images/profile-pic (5).png',
        profession: 'Développeur',
      },
      show: false, 
      timeElapsed: 0, 
    };
    this.timer = null;
  }

  
  toggleShow = () => {
    this.setState({ show: !this.state.show });
  };

  
  componentDidMount() {
    this.timer = setInterval(() => {
      this.setState(prevState => ({
        timeElapsed: prevState.timeElapsed + 1
      }));
    }, 1000);
  }

  
  componentWillUnmount() {
    clearInterval(this.timer);
  }

  render() {
    const { fullName, bio, imgSrc, profession } = this.state.person;
    const { show, timeElapsed } = this.state;

    return (
      <div className="App">
        <h1>Bienvenue!</h1>

        <button onClick={this.toggleShow}>
          {show ? 'Cacher le profil' : 'Afficher le profil'}
        </button>

        {show && (
          <div>
            <h2>{fullName}</h2>
            <img src={imgSrc} alt="profile" />
            <p>{bio}</p>
            <p><strong>{profession}</strong></p>
          </div>
        )}

        <p>Temps écoulé depuis le montage du composant: {timeElapsed} secondes.</p>
      </div>
    );
  }
}

export default App;
