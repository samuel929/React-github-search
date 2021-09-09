import React,{useState,useEffect} from 'react';
import './profile.css';
import {Link} from 'react-router-dom';
import {Octokit} from '@octokit/core';
 const Profile=()=>{

   //This is the state for managing the data
     const  [searchQuery,setSearchQuery]=useState({});
     const [filteredName,setFilteredName]=useState([]);
     const [repos,setRepos]=useState([]);

//This is the onChange handler for managing the input
     const onChangeHandler=e=>{
         handleSearch(e.target.value)
     }

     //This is the search functionality function that allows me tosearch through the users

      function handleSearch(newSearchQuery){
        setSearchQuery(newSearchQuery);
        repos.map((item)=>{
           if(item.login.includes(searchQuery)){
             //Storing the data in local storage
             localStorage.setItem("githubUser",JSON.stringify(item))
             setFilteredName(item)
           }
        })
      }


//This is my componentDidMount function to actually get all the github users using octoKit

      useEffect( async () => {
       const octokit = new Octokit({
         auth: "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",
         });

        const { data } = await octokit.request("/users");
        setRepos([...data])
        console.log(data)

  }, []); 

  
   console.log("this is ",filteredName);
    return(
        <div>
            <div className=" bg-primary p-2">
                <div className="container">
                      <h2>Github Search</h2>
                        </div>
                          </div>
                              <div className="container d-flex m-2">
                                <input 
                                className="form-control"
                                type="text" 
                                placeholder="Search"
                                onChange={onChangeHandler}
                                />
                                </div>
                                      <div className="container m-3">
                                          <div className="card card-mm" >
                                            <img src={filteredName.avatar_url} className="card-img-top image" alt="..."/>
                                              <div className="card-body">
                                              <h5 className="card-title">Username: {filteredName.login}</h5>
                                          <a href={`/details/${filteredName.login}`} class="btn btn-primary">View More</a>
                                        </div>
                                    </div>
                                </div>   
                           </div>
    )
}

export default Profile;