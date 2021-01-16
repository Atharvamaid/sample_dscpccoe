import React from 'react'
import '../css/style.css';

function Card(){
    return(
        <div>
            <div className="container container-fluid " >
            <div className="card">
                <div className="content">
                    <div className="imgBx">
                        <img src="https://i.picsum.photos/id/43/200/300.jpg?hmac=F_cVhLISpNmZ9wjirHfMJgX9rQzMYJbJE1xzfwmV36c" ></img>
                    </div>
                        <div className="contentBx">
                            <h3>Someone Famous<br/><span>DSC Lead</span>
                            </h3>
                        </div>
                    
                </div>
                <ul className="sci mr-4" >
                    <li >
                        <a href="#"><i className="fab fa-github" aria-hidden="true"></i></a>
                    </li>
                    <li >
                        <a href="#"><i className="fab fa-linkedin" aria-hidden="true"></i></a>
                    </li>
                    <li >
                        <a href="#" ><i className="fab fa-instagram" style={{color:"black"}}  aria-hidden="true"></i></a>
                    </li>
                </ul>
            </div>
           
            
        </div>
        </div>
    );
}

function Team() {
    return (
        <div className="">
            
        <Card/>
            <div className="container-fluid">
                <div className="row">
                    <div className="col-md-4">
                        <Card/>
                    </div>
                    <div className="col-md-4">
                        <Card/>
                    </div>
                    <div className="col-md-4">
                        <Card/>
                    </div>
                </div>
                <div className="row ">
                    <div className="col-xl-3">
                        <Card/>
                    </div>
                    <div className="col-xl-3">
                        <Card/>
                    </div>
                    <div className="col-xl-3">
                        <Card/>
                    </div>
                    <div className="col-xl-3">
                        <Card/>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Team
