import React, { Component } from "react";
import { NeswsItem } from "./NeswsItem";
import Spiner from "../Spiner";

export class News extends Component {
  articles = [];
  constructor() {
    super();
    this.state = {
      articles: this.articles,
      loading: false,
      
      page:1
    };
  }
  async update(){
    this.props.setProgres(10)
    let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=9766bebbc2ab42bc869426dc56d80a8c&pagesize=15&page=${this.state.page+1}`;
    this.setState({loading:true})
    this.props.setProgres(30)
    let data = await fetch(url);
    let parsedata = await data.json();
    this.props.setProgres(70)
   this.setState({
    page:this.state.page+1,
    articles: parsedata.articles,
    loading:false
    
   })
   this.props.setProgres(100)
  }
  async componentDidMount() {
  this.update();
  }

  handlenext = async() => {
   this.setState({
    page:this.state.page+1, 
   })
   this.update();
   
  };
  handleprevious =async () => {
   this.setState({
   })
   this.update();
  };

  render() {
    return (
      <>
        <div className="container my-3">
          <h1 className="text-dark text-center">News-App Top Head Lines</h1>
         {this.state.loading&& <Spiner/>}
          <div className=" row">
            {!this.state.loading&&this.state.articles.map((e) => {
              return (
                <div className="col-md-4" key={e.url}>
                  <NeswsItem
                    title={e.title?e.title.slice(0, 45):"Title is null"}
                    discription={!e.description?"this is discription":e.description.slice(0,80)}
                    imgurl={!e.urlToImage?"https://wwwhatsnew.com/wp-content/uploads/2023/08/mujer-buscando-cosas.jpg":e.urlToImage}
                    newsurl={e.url}
                    author={e.author?e.author:"unknown"}
                    date={e.publishedAt?e.publishedAt:"unknown"}
                  />
                </div>
              );
            })}
          </div>
        </div>
        <div className="container d-flex justify-content-between ">
          <button disabled={this.state.page<=1} type="button" className="btn btn-dark" onClick={this.handleprevious}>
          &larr; Previous
          </button>
          <button disabled={this.state.page>=60} type="button" className="btn btn-dark" onClick={this.handlenext}>
            Next 	&rarr;
          </button>
        </div>
      </>
    );
  }
}

export default News;
