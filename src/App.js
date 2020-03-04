import React from 'react';
import Loader from './components/Loader'
import './App.sass'

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            url: '',
            imageLoaded: false
        }
    }

    getImage = () => {
        this.setState({imageLoaded: false});
        fetch('https://api.thecatapi.com/v1/images/search')
          .then(response => response.json())
          .then(response => this.setState({url: response[0].url}))
          .catch(error => alert(error));
     }

    componentDidMount = () => this.getImage();

    render() {
        return (
            <div className="app">
                <p className="app__title">Catalizator</p>
                <img
                    onLoad={() => this.setState({imageLoaded: true})}
                    className="app__image" src={this.state.url}
                />
                <button onClick={this.getImage} className="app__button">
                    {!this.state.imageLoaded ? <Loader /> : 'Next'}
                </button>
            </div>
        )
    }
}

export default App;
