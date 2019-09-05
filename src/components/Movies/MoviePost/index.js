import React, {Component} from 'react';
import axios from 'axios';
import {URL} from '../../../helpers';


class Movies extends Component{

  state ={
    movies:[]

  }


  componentWillMount(){
    axios.get(`${URL}/items?id=${this.props.match.params.id}`)
    .then(response =>{
      let movies = response.data[0];
      this.setState({
        movies
      })

    })
  }
  render(){

    const movies = this.state.movies;
    return(
      <div>
      <div className="container">
        <div className="row">
        <main role="main" className="container">
<div className="row">
<div className="col-md-8 blog-main">
<img src={movies.imageUrl} style={{width: 100 + "%",maxWidth: 143 +"px",marginTop: 12 + "px"}} />
  <div className="blog-post">
    <h2 className="blog-post-title">{movies.title}</h2>
    <p className="blog-post-meta">Release Date: {movies.releaseDate}</p>
    <hr />
    <p>Synopsis:</p>
    <p>{movies.synopsis}</p>
  </div>
</div>
</div>

</main>
        </div>
      </div>
      </div>
    )
  }
}


export default Movies;
