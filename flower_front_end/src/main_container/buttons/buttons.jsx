import './buttons.css';

const Buttons = ({ updatePage }) => {

  return (
    <div className="main-buttons">
      <nav class="navbar fixed-bottom bg-body-tertiary">
        <div class="container-fluid">
          <i class="fa-solid fa-house" onClick={() => updatePage("general")}></i>
          <i class="fa-solid fa-user-group" onClick={() => updatePage("friends")}></i>
          <i class="fa-solid fa-user" onClick={() => updatePage("profile")}></i>
        </div>
      </nav>
    </div>
  )
}

export default Buttons;