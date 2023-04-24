import { toast } from "react-toastify";
import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { createPost } from "../../redux/apiCalls/postApiCall";
import { fetchCategories } from "../../redux/apiCalls/categoryApiCall";
import ReactQuill from 'react-quill';
import LabelIcon from '../../assets/img/bookmarks.png';

import css from './create-post.css'
import 'react-quill/dist/quill.snow.css';
import FallingStars from "../../components/FallingStars";

const CreatePost = () => {
  const dispatch = useDispatch();
  const { loading, isPostCreated } = useSelector(state => state.post);
  const { categories } = useSelector(state => state.category);

  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [category, setCategory] = useState("");
  const [file, setFile] = useState(null);

  // Quill editor modules and formats
  const modules = {
    toolbar: [
      [{ 'header': '1' }, { 'header': '2' }, { 'font': [] }],
      [{ size: [] }],
      ['bold', 'italic', 'underline', 'strike', 'blockquote'],
      [{ 'list': 'ordered' }, { 'list': 'bullet' }, { 'indent': '-1' }, { 'indent': '+1' }],

      ['clean']
    ],
    clipboard: {
      // toggle to add extra line breaks when pasting HTML:
      matchVisual: false,
    }
  };
  const formats = ['header', 'font', 'size', 'bold', 'italic', 'underline', 'strike', 'blockquote', 'list', 'bullet', 'indent', 'link', 'image', 'video'];

  // Form Submit Handler
  const formSubmitHandler = (e) => {
    e.preventDefault();
    if (title.trim() === "") return toast.error("Post Title is required");
    if (category.trim() === "") return toast.error("Post Category is required");
    if (description.trim() === "") return toast.error("Post Description is required");
    if (!file) return toast.error("Post Image is required");

    const formData = new FormData();
    formData.append("image", file);
    formData.append("title", title);
    formData.append("description", description);
    formData.append("category", category);
    dispatch(createPost(formData));
  };

  const navigate = useNavigate();
  useEffect(() => {
    if (isPostCreated) {
      navigate("/");
    }
  }, [isPostCreated, navigate]);

  useEffect(() => {
    dispatch(fetchCategories())
  }, []);

  return (
    <section className="create-post">

      <div className="row-header" >
        <div className="col-md-4 ">
          <div className="form-group input">

            <input
              onChange={(e) => setTitle(e.target.value)}
              value={title}
              type="text"
              placeholder="Post Title"
              className="form-control"
              id="post-title"
            />

          </div>

        </div>

      </div>

      <div className="row ">

        <div className="col-md-9 first">

          <form onSubmit={formSubmitHandler} className="create-post-form">

            <div className="form-group">
              <label htmlFor="post-category"> Categories</label>
              <select
                className="form-control selectinput"
                value={category}
                onChange={(e) => setCategory(e.target.value)}
                id="post-category"
              >
                <option disabled value="">
                  Select A Category
                </option>
                {categories.map((category) => (
                  <option key={category._id} value={category.title}>
                    {category.title}
                  </option>
                ))}
                <option>Random</option>
                <option>Music</option>
                <option>Travelling</option>
                <option>Food</option>
                <option>Sports</option>
                <option>Politics</option>
              </select>
            </div>
            <div className="form-group ">
              <label htmlFor="post-description">Post Description</label>
              <ReactQuill
                value={description}
                onChange={setDescription}
                modules={modules}
                formats={formats}
                placeholder="Post Description"
              />
            </div>
            <div className="form-group">
              <label htmlFor="post-image">Upload an Image</label>
              <input
                className="form-control-file"
                type="file"
                name="file"
                id="post-image"
                onChange={(e) => setFile(e.target.files[0])}
              />
            </div>
            <button type="submit" className="btn btn-primary gradient-button">
              {loading ? "loading..." : "Publish"}
            </button>
          </form>
        </div>
        <div className="col-md-2 bg-secondary d-none d-md-block">
  <div className="d-flex align-items-center mb-3">
    <label className="block-label">Post Details</label>
  </div>
  <hr />
  <div className="d-flex align-items-center mb-3">
  <img src={LabelIcon} alt="Label Icon" className="mr-2" style={{ width: '50px', height: '50px' }} />

  </div>
  <textarea
    id="post-textarea"
    className="form-control"
    placeholder="Labels"
    rows="5"
  ></textarea>
  <br />
  <label>Please separate by a comma (,)</label>
  <br></br>
  <br></br>
  <button type="submit" className="btn btn-primary  gradient-button">Done</button>
</div>


      </div>
    </section>
  );

};

export default CreatePost;
