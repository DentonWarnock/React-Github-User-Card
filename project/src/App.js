import React from 'react';
import './App.css';
import UserCard from './components/UserCard.js';
import FollowersList from './components/FollowersList.js';


const gitAccountName = "DentonWarnock";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      user: [],
      followers: [],
      followersList: []
    };
  }

  
  componentDidMount() {
    fetch(`https://api.github.com/users/${gitAccountName}`)
      .then(res => res.json())
      .then(res => {
        console.log("Component did mount: fetch: res: ", res);
        this.setState({
          user: res
        })        
      })
      .catch(err => {
        console.log("Component did mount: fetch: err: ", err)
      })

      fetch(`https://api.github.com/users/${gitAccountName}/followers`)
      .then(res => res.json())
      .then(res => {this.setState({followers: res})
      })
      .catch(err => console.log(err))
        
        // this.state.followersList.forEach(item => {
        //   fetch(`https://api.github.com/users/${item.login}`)
        //   .then(res => res.json())
        //   .then(res => {
        //     console.log("Individual Follows Info: ", res)
        //     this.setState({
        //       followers: [...this.state.followers, {
        //         avatar_url: res.avatar_url,
        //         login: res.login,
        //         id: res.id
        //     }]
        //   }) 
        //   })
        // })  
        .catch(err => console.log(err))             
      } 
       
  
  
  
  render() {
    console.log(this.state.followers)
    return (
      <div className="App">
        <h1>GitHub Users</h1>
        <UserCard user={this.state.user} key={this.state.user.id} />
        <FollowersList followers={this.state.followers} key={this.state.followers.id} />
      </div>
    );
  }  
}

export default App;
