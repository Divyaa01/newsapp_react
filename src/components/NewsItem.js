import React, { Component } from 'react'

export class NewsItem extends Component {
  render() {
    let {title, desc} = this.props;

    return (
      <div>
        
            <div className="card my-3" style={{width: "18rem"}}>
                <img className="card-img-top" src="..." alt="Card image cap"/>
                    <div className="card-body">
                        <h5 className={title}>Card title</h5>
                        <p className="card-text">{desc}</p>
                        <a href="/viewnews" className="btn btn-primary">complete news</a> 
                    </div>
            </div>

      </div>
    );
  }
}

export default NewsItem