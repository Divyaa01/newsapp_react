import React, { Component } from 'react'
import NewsItem from './NewsItem';

export class News extends Component {
  render() {
    return (
      <div className="container my-3 mt-3">
        <h2>Top Headlines today</h2>
        <br></br>

        <div className="row">
          <div className="col-md-4 ">
            <NewsItem title="myTitle 1" desc="lorem ipsum" />
          </div>

          <div className="col-md-4">
            <NewsItem title="myTitle 1" desc="lorem ipsum" />
          </div>

          <div className="col-md-4">
            <NewsItem title="myTitle 1" desc="lorem ipsum" />
          </div>
        </div>
        



        </div>
    );
  }
}

export default News