import React, { Component } from "react";
import TeamMember from "./TeamMember";


class Team extends Component {

    constructor() {
        super()
        this.state = {
            memberInfo: [
                { id: 1, img: '/images/01.jpeg', name: 'Mecman Vningie ', position: 'Senior Software Engineer', phone: '+1 (555) 123-4567', email: 'olivia.thompson@example.com', web: 'www.oliviathompson.com' },
                { id: 4, img: '/images/02.jpeg', name: 'Alexander Smith', position: 'Sales Representative', phone: '(555) 456-7890', email: 'alex.smith@example.com', web: ' www.alexandersmithsales.com' },
                { id: 5, img: '/images/03.jpeg', name: 'James Miller', position: 'Project Manager', phone: '(555) 234-5678', email: 'james.m@example.com', web: 'www.jamesmillerprojects.com' },
                { id: 6, img: '/images/04.jpeg', name: 'Benjamin Wilson', position: 'Financial Analyst', phone: '(555) 876-5432', email: 'ben.wilson@example.com', web: ' www.benjaminwilsonfinance.com' },
                { id: 7, img: '/images/05.jpeg', name: 'Noah Turner', position: 'Software Developer', phone: '(555) 345-6789', email: 'noah.t@example.com', web: 'www.noahturnersoftware.com' },
                { id: 2, img: '/images/06.jpeg', name: 'Emily Johnson', position: 'Marketing Manager', phone: '(555) 123-4567', email: 'emily.j@example.com', web: ' www.emilyjohnson.com' },
                { id: 8, img: '/images/07.jpeg', name: 'Ethan Carter', position: 'Human Resources Specialist', phone: '(555) 789-0123', email: 'ethan.c@example.com', web: 'www.ethancarterhr.com' },
                { id: 3, img: '/images/08.jpeg', name: 'Sophia Davis', position: 'Software Engineer', phone: '(555) 987-6543', email: 'sophia.d@example.com', web: 'www.sophiadavis.net' }
            ]
        }
    }
    mapping(x){

        const member = x.map (member => <TeamMember 
            key={member.id}
            img={member.img}
            name={member.name}
            position={member.position}
            phone={member.phone}
            email={member.email}
            web={member.web}
        />);
        return member  

    }


    render() {
        return (
            <div className="row">
                {this.mapping(this.state.memberInfo)}
            </div>
        )
    }
}
export default Team;