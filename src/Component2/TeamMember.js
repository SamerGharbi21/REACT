import React, { Component } from "react";

class  TeamMember extends Component {
    render() { 
    return (
        <div className="col-md-4 col-sm-6">
            <div className="card">
                <div className="card-header">
                    <img style = {{maxWidth : '100%'}} src={this.prop.name} />
                    </div>
                    <div className="card-body" >
                        <h2>{this.prop.name}</h2>
                        <h5>{this.prop.position}</h5>
                        <div>{this.prop.phone}</div>
                        <div>{this.prop.email}</div>
                        <div>{this.prop.web}</div>
                    </div>
                </div>
            </div>
            )
    }

}
            export default TeamMember;