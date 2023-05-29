import LandingPageLayout from "../layouts/LandingPageLayout";

const getApiGame = async () => {
    const response = await fetch('https://binarwave30team1-be-production-deb9.up.railway.app/games/rooms');
    const data = await response.json();
    const room = await data.rooms

    return room;
};

const Games = async () => {
    const game = await getApiGame();
    console.log(game);

    return (
        <div>
            <LandingPageLayout>
                <table className="table w-full">
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Description</th>
                            <th>Thumnail URL</th>
                            <th>Game URL</th>
                            <th>Play Cout</th>
                        </tr>
                    </thead>
                    <tbody>
                        {game.map((item) => (
                            <tr key={item.id}>
                                <td>{item.Name}</td>
                                <td>{item.Description}</td>
                                <td>{item.thumbnail_url}</td>
                                <td>{item.Game_url}</td>
                                <td>{item.play_count}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
               
            </LandingPageLayout>
        </div>
    );
};

export default Games;