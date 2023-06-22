

const MakePost = ({ updatePage }) => {
  return (
    <div>
      <nav class="navbar fixed-top bg-body-tertiary">
        <div class="container-fluid">
          <span>login</span>
          <i class="fa-solid fa-camera" onClick={() => updatePage("post")}></i>
        </div>
      </nav>

    </div>
  )
}

export default MakePost;