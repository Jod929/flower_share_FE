import './addPost.css';

import { useState, useEffect } from 'react';

const AddPost = () => {

  const [selectedFile, setSelectedFile] = useState()
  const [preview, setPreview] = useState()

  // create a preview as a side effect, whenever selected file is changed
  useEffect(() => {
      if (!selectedFile) {
          setPreview(undefined)
          return
      }

      const objectUrl = URL.createObjectURL(selectedFile)
      setPreview(objectUrl)

      // free memory when ever this component is unmounted
      return () => URL.revokeObjectURL(objectUrl)
  }, [selectedFile])

  const onSelectFile = e => {
      if (!e.target.files || e.target.files.length === 0) {
          setSelectedFile(undefined)
          return
      }

      setSelectedFile(e.target.files[0])
  }



  return (
    <div className="post-container">
      <form className="form">
        <div class="mb-3" className="image">

          {selectedFile ?
            <img src={preview} alt="flower" className="uploaded-image"/>
          :
          <label class="custom-file-upload">
              <input type="file" accept="image/*" onChange={onSelectFile}/>
              <i class="fa-solid fa-plus"></i>
          </label>
          }

        </div>
        <div class="mb-3" className="desc" >
          {/* <label for="exampleInputPassword1" class="form-label">Description</label> */}
          {/* <input type="text" class="form-control" id="exampleInputPassword1" className="image-text"/> */}
          <textarea rows="5" cols="5" placeholder="say something about your flower!" className="image-text">

          </textarea>
        </div>
        <button type="submit" class="btn btn-primary" className="submit-butn">
          <i class="fa-solid fa-arrow-up-from-bracket" ></i>
        </button>
      </form>
    </div>
  )
}

export default AddPost;