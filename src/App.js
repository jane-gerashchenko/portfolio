import React, {Component} from 'react';
import Projects from './Projects';
import SocialProfiles from './SocialProfiles';
import profile from './assets/profile.png';
class App extends Component {
    state = { displayBio: false };

    toggleDisplayBio = () => {
        this.setState({ displayBio: !this.state.displayBio });
    }

    render() {
        return(
            <div>
                <img src={profile} alt='profile' className='profile' />
                <h1>Hello!</h1>
                <p>My name is Ievgeniia. I'm a QA engineer.</p>
                <p>I'm looking forward to become a Software Developer.</p>
                {
                    this.state.displayBio ? (
                        <div>
                            <p>I live in Amsterdam, and work in Adidas.</p>
                            <p>I learn JavaScript, currently I'm exploring React.js framework.</p>
                            <p>Besides coding, I also love to read and to play with my 2 kids.</p>
                            <div>
                                <button onClick={this.toggleDisplayBio}>Show less</button>
                            </div>
                        </div>
                    ) : (
                    <div>
                        <button onClick={this.toggleDisplayBio}>Read more</button>
                    </div> 
                    )
                }
                <hr />
                <Projects />
                <hr />
                <SocialProfiles />
            </div>
        )
    }
}

export default App;
