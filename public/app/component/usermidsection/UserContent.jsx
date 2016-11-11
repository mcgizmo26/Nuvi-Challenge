import React from 'react';

export default class UserContent extends React.Component{
  constructor(props){
    super(props)
    this.likePost = this.likePost.bind(this);
    this.sharePost = this.sharePost.bind(this);
  }

  render(){
    return(
      <section className='user-content-wrapper'>

      <div className="header-label">
        <h1>CONTENT</h1>
      </div>

      <div className="user-content-content">
      {
        this.props.userInfo.content === ' https://placehold.it/500x500.jpeg/ffffff/000'
        ? <div className="content-wrapper"> No Text Included in this Post </div>
        : <div className="content-wrapper">{this.props.userInfo.content}</div>
      }
      </div>

      <div className="user-content-like-share">

      <button onClick={this.likePost}>like</button>
      <button onClick={this.sharePost}>share</button>

      </div>

      </section>
    )
  }

  likePost(){
    axios.post(`api/like/`, {
      id: this.props.userInfo.id,
      content: this.props.userInfo.content,
      liked: 'liked'
    }).then(r => {
      console.log(r);
    }).catch(error => {
      console.log(error);
    })
  }

  sharePost(){
    axios.post(`api/share/`, {
      id: this.props.userInfo.id,
      content: this.props.userInfo.content,
      shared: 'shared'
    }).then(r => {
      console.log(r);
    }).catch(error => {
      console.log(error);
    })
  }

}
