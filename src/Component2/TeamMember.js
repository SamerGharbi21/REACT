// import React, { Component } from "react";
import React from "react";


function  TeamMember (prop){
   
    return (
        <div className="col-md-4 col-sm-6">
            <div className="card">
                <div className="card-header">
                    <img style = {{maxWidth : '100%'}} src={prop.info.img} />
                    </div>
                    <div className="card-body" >
                        <h2>{prop.info.name}</h2>
                        <h5>{prop.info.position}</h5>
                        <div>{prop.info.phone}</div>
                        <div>{prop.info.email}</div>
                        <div>{prop.info.web}</div>
                    </div>
                </div>
            </div>
            )
    }


            export default TeamMember;