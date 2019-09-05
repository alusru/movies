import React, { Component } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { URL } from "../../../helpers";

class MovieList extends Component {
  state = {
    items: [],
    start: this.props.start,
    end: this.props.start + this.props.amount,
    amount: this.props.amount
  }

  componentWillMount() {
    axios.get(
        `${URL}/items?_start=${this.state.start}&_end=${this.state.end}`)
      .then(response => {
        this.setState({
          items: [...this.state.items,...response.data]
        })
      })
  }

  sortAscending = () => {
    const { items } = this.state;
    items.sort((a, b) => a - b)
    this.setState({ items })
  }

  sortDescending = () => {
    const { items } = this.state;
    items.sort((a, b) => a - b).reverse();
    this.setState({ items })
  }

  renderMovies = () => {
    let bootstrap = null;

    bootstrap = this.state.items.map((item, i) => (
          <div key={i} className="col-md-4">
              <Link to={`/items/${item.id}`}>
                <div className="card" style={{width: 18+"rem"}}>
                  <img src={item.imageUrl} className="card-img-top" alt="..." />
                  <div className="card-body">
                    <h5 className="card-title">{item.title}</h5>
                    <Link to={`/items/${item.id}`} className="btn btn-primary">View More</Link>
                  </div>
                </div>
              </Link>
          </div>
    ));
    return bootstrap;
  }

  render() {
    return(
       <div>
       <div className="container">
       <button onClick={this.sortAscending}>asc</button>
       <button onClick={this.sortDescending}>desc</button>
         <div className="row">
          {this.renderMovies()}
         </div>
         </div>
       </div>
  )
  }
}

export default MovieList;
