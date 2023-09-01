import React, { Component } from "react";
export class NeswsItem extends Component {
   
  render() {
    const {title,discription,imgurl,newsurl,author,date}=this.props;
    return (
      <>
        <div className="container-flued my-3">
            
          <div className="card" style={{border:"none"}} >
            <img src={imgurl} alt= "" style={{ height: "170px"}} />
            <div className="card-body bg-dark text-light">
              <h5 className="card-title">{title}...</h5>
              <p className="card-text">
                {discription}...
              </p>
              <p class="card-text"><small class="text-light"> <strong>Author Name :</strong>{author}<br></br>  <strong>Published Date :</strong>{new Date (date).toGMTString()}</small></p>
              <a href={newsurl} target="_blank" className="btn bt-sm btn-danger ">
               Read More
              </a>
            </div>
          </div>
        </div>
      </>
    );
  }
}

