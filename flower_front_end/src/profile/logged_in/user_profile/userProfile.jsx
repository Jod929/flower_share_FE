import './userProfile.css';

const UserProfile = () => {
  return (

    <div>
      <div className="holder">
        <div className="profile-pic-holder">
          <img src={require('../../../sample_data/images/flower_1.jpeg')} alt="flower" className="profile-pic" />
          <span className="username">Joddy</span>
        </div>

        <div className="data">
          <span>14 <br></br> posts</span>
          <span>12 <br></br> followers</span>
          <span>11 <br></br> following</span>
        </div>
      </div>

    </div>
  )
}

export default UserProfile;