const Profile = () => {
  const user = localStorage.getItem("user");

  return (
    <div style={{ padding: 40 }}>
      <h2>Profile</h2>
      <p>Name: {user}</p>
      <p>Role: Student</p>
      <p>Program: B.Tech CSE</p>
    </div>
  );
};

export default Profile;
