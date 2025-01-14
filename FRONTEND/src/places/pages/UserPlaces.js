import React from "react";
import { useParams } from "react-router-dom";

import PlaceList from "../components/PlaceList";


const DUMMY_PLACES= [
    {
        id: 'p1',
        title: 'Empire State Building',
        description: 'Tallest building in the U.S.',
        imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQhoTz3eFL29cnx84_63uHObfH-SFD_3qv1Kw&usqp=CAU',
        address: '20 W 34th St, New York, NY 10001',
        location: {
            lat: 40.7484405,
            lng: -73.9878584
        },
        creator: 'u1'
    },

    {
        id: 'p2',
        title: 'Emp. State Building',
        description: 'Tallest building in the U.S.',
        imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQhoTz3eFL29cnx84_63uHObfH-SFD_3qv1Kw&usqp=CAU',
        address: '20 W 34th St, New York, NY 10001',
        location: {
            lat: 40.7484405,
            lng: -73.9878584
        },
        creator: 'u2'
    }
]

const UserPlaces = () => {
    const userId = useParams().userId;
    const loadedPlaces = DUMMY_PLACES.filter(place => place.creator === userId)
    return <PlaceList items={loadedPlaces}/>
}

export default UserPlaces