import React from 'react';
import {Link,useParams} from 'react-router-dom';

const DetailPage=()=>{
  //Fetching the query Param
  const {login}=useParams()
  console.log(login);
  //Fetching the data from local storage
  const githubUser=JSON.parse(localStorage.getItem("githubUser"))
  console.log(githubUser)
    return(
        <div>
           <header className="nav nav-bar bg-light">
                Profile
           </header>
           <div className="container">
                <div className="container m-3">
                    <div className="card card-mm" >
                  <img src={githubUser.avatar_url} className="card-img-top image" alt="..."/>
                        <div className="card-body">
                    <p>PLease click buttons to view github 
                    activity</p>
                   <h5 className="card-title">Username: {githubUser.login}</h5>
                   <h5> <a href={`/details/${githubUser.followers_url}`} class="btn btn-primary">Followers</a></h5>
                   <h5> <a href={`/details/${githubUser.following_url}`} class="btn btn-primary">Following</a></h5>
                   <h5> <a href={`/details/${githubUser.repos_url}`} class="btn btn-primary">Repos</a></h5>
                   <h5> <a href={`/details/${githubUser.node_id}`} class="btn btn-primary">{githubUser.node_id}</a></h5>
                   <h5> <a href={`/details/${githubUser.type}`} class="btn btn-primary">{githubUser.type}</a></h5>
              </div>
              </div>
           </div>
        </div>
      </div>
    )
}

export default DetailPage;