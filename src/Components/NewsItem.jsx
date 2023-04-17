import React, { Component } from 'react'

export default class NewsItem extends Component {
  render() {
    let {title,description}=this.props;
    return (
        <div class="card" style={{width: "18rem"}}>
        <img src="https://static.tnn.in/thumb/msid-99538423,updatedat-1681669491742,width-1280,height-720,resizemode-75/99538423.jpg" class="card-img-top" alt="..."/>
        <div class="card-body">
          <h5 class="card-title">{title}</h5>
          <p class="card-text">{description}</p>
          <a href="#" class="btn btn-primary">Go somewhere</a>
        </div>
      </div>
    )
  }
}
