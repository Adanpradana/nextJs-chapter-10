import { useParams } from 'next/navigation';

export const getApiGame = async () => {
    const response = await fetch('https://binarwave30team1-be-production-deb9.up.railway.app/games/rooms/');
    const data = await response.json();
    const room = await data.rooms

    return room;
};


export const getApiDetailGame = async (id) => {

    const params = useParams();

    const response = await fetch(`https://binarwave30team1-be-production-deb9.up.railway.app/games/rooms/${params.details}`);
    const data = await response.json();
    const room = await data.data

    return room;
};