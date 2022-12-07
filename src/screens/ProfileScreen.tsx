import { useParams } from "react-router-dom";

export default function ProfileScreen() {
    const { profileId } = useParams();
    return (
        <div className="App profile-screen">
            <h1>Profile Screen</h1>
            <h2>Profile ID: {profileId}</h2>
        </div>
    )
}