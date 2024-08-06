import React from "react";
import Events1 from '../Resources/Events_1.jpeg';
import Events2 from '../Resources/Events_2.jpeg';
import Events3 from '../Resources/2022/SpaceWeek22_1.jpeg';
import Events4 from '../Resources/2022/Grav22_1.jpeg';

const EventsPics = [
    [
        {
            id: 1,
            alt: 'BSX',
            image: Events1,
            eventname: 'Banglore Space Expo',
            pathid: 'bsx'
        },
        {
            id: 2,
            alt: 'Techno VIT',
            image: Events2,
            eventname: 'Techno VIT',
            pathid: 'technoVIT'
        }
    ],
    [
        {
            id: 3,
            alt: 'WSW',
            image: Events3,
            eventname: 'World Space Week',
            pathid: 'spaceWeek'
        },
        {
            id: 4,
            alt: 'graVITas',
            image: Events4,
            eventname: 'Gravitas',
            pathid: 'gravitas'
        }
    ]
];

export {EventsPics};