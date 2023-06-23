import "./makePost.css"

const MakePost = ({ updatePage }) => {
  return (
    <div>
      <nav class="navbar fixed-top " style={{backgroundColor: '#ADD8E6'}}>
        <div class="container-fluid">
          <span>login</span>
          <i class="fa-solid fa-camera" onClick={() => updatePage("post")}></i>
        </div>
      </nav>
    </div>
  )
}

export default MakePost;