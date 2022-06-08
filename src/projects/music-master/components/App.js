import React, {Component} from 'react';
import Artist from './Artist';
import Search from './Search';
import Tracks from './Tracks';

const API_ADDRESS = 'http://localhost:3000';
class App extends Component {
    state = { artist: null, tracks: [] };

    componentDidMount() {
        this.searchArtist('alt-j');
    }

    searchArtist = artistQuery => {
        fetch(`${API_ADDRESS}/artist/${artistQuery}`)
            .then(response => response.json())
            .then(json => {
                if(json.artists.total > 0) {
                   const artist = json.artists.items[0];

                   this.setState({artist});

                   fetch(`${API_ADDRESS}/artist/${artist.id}/top-tracks`)
                        .then(response => response.json())
                        .then(json => this.setState({tracks: json.tracks}))
                        .catch(error => alert(error.message));
                }
            })
    }

    render() {
        console.log('this.state', this.state);

        return(
            <div>
                <h2>Music Master</h2>
                <Search searchArtist={this.searchArtist} />
                <Artist artist={this.state.artist} />
                <Tracks tracks={this.state.tracks} />
            </div>
        );
    }
}

export default App;
