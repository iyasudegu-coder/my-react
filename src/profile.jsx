import joshPhoto from './assets/josh.jpg';

export default function Profile() {
  return (
    <div className="profile-content">
      <span className="badge">Welcome to React JS</span>
      <img
        className="profile-img"
        src={joshPhoto}
        alt="Profile"
      />
      <h2 className="profile-title">My Profile</h2>
      <p className="profile-bio">Full-Stack Web Developer & React Enthusiast</p>
    </div>
  );
}