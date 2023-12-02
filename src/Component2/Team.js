// import React, { Component } from "react";
import React from "react";
import TeamMember from "./TeamMember";


function Team() {

return (
    <div className="row">

        <TeamMember
            info={{
                id: 1,
                img: '/image/01.jpeg',
                name: 'Mecman Vningie ',
                position: 'Senior Software Engineer',
                phone: '+1 (555) 123-4567',
                email: 'olivia.thompson@example.com',
                web: 'www.oliviathompson.com'
            }} />

        <TeamMember
            info={{
                id: 4,
                img: '/image/02.jpeg',
                name: 'Alexander Smith',
                position: 'Sales Representative',
                phone: '(555) 456-7890',
                email: 'alex.smith@example.com',
                web: ' www.alexandersmithsales.com'
            }} />

        <TeamMember
            info={{
                id: 5,
                img: '/image/03.jpeg',
                name: 'James Miller',
                position: 'Project Manager',
                phone: '(555) 234-5678',
                email: 'james.m@example.com',
                web: 'www.jamesmillerprojects.com'
            }} />

        <TeamMember
            info={{
                id: 6,
                img: '/image/04.jpeg',
                name: 'Benjamin Wilson',
                position: 'Financial Analyst',
                phone: '(555) 876-5432',
                email: 'ben.wilson@example.com',
                web: ' www.benjaminwilsonfinance.com'
            }} />

        <TeamMember
            info={{
                id: 7,
                img: '/image/05.jpeg',
                name: 'Noah Turner',
                position: 'Software Developer',
                phone: '(555) 345-6789',
                email: 'noah.t@example.com',
                web: 'www.noahturnersoftware.com'
            }} />

        <TeamMember
            info={{
                id: 2,
                img: '/image/06.jpeg',
                name: 'Emily Johnson',
                position: 'Marketing Manager',
                phone: '(555) 123-4567',
                email: 'emily.j@example.com',
                web: ' www.emilyjohnson.com'
            }} />

        <TeamMember
            info={{
                id: 8,
                img: '/image/07.jpeg',
                name: 'Ethan Carter',
                position: 'Human Resources Specialist',
                phone: '(555) 789-0123',
                email: 'ethan.c@example.com',
                web: 'www.ethancarterhr.com'
            }} />

        <TeamMember
            info={{
                id: 3,
                img: '/image/08.jpeg',
                name: 'Sophia Davis',
                position: 'Software Engineer',
                phone: '(555) 987-6543',
                email: 'sophia.d@example.com',
                web: 'www.sophiadavis.net'
            }} />
    </div>
)
        }


export default Team;