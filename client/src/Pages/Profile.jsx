import React, { useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { deleteSuccess, signOutSuccess } from "../redux/user/user.slice";
import axios from "axios";

function Profile() {
  const { currentUser } = useSelector((state) => state.user);
  const fileRef = useRef(null);
  const Dispatch = useDispatch();
  const [file, setFile] = useState();
  const [url, setUrl ]= useState('')

  const handleSignOut = async () => {
    try {
      const res = await axios.post("/api/auth/signout");
      Dispatch(signOutSuccess());
    } catch (error) {
      console.log(error);
    }
  };

  const handleDelete = async () => {
    try {
      const id = currentUser._id;
      const res = await axios.delete(`/api/user/delete/${id}`);
      Dispatch(deleteSuccess());
    } catch (error) {
      console.log(error);
    }
  };

  const uploadImage = async () => {
    const data = new FormData();
    data.append("file", file);
    data.append("upload_preset", import.meta.env.VITE_CLOUDINARY_UPLOAD_PRESET);
    data.append("cloud_name", import.meta.env.VITE_CLOUDINARY_CLOUD_NAME);
    data.append("folder", "Cloudinary-React");

    try {
      const response = await fetch(
        `https://api.cloudinary.com/v1_1/${
          import.meta.env.VITE_CLOUDINARY_CLOUD_NAME
        }/image/upload`,
        {
          method: "POST",
          body: data,
        }
      );
      const res = await response.json();
      setUrl(res.secure_url);
    
    } catch (error) {
      console.log(error);
    }
  };

  const handleImageUpload = async () => {
    await uploadImage()
  };

    console.log(url)


  return (
    <div className="max-w-6xl  mx-auto my-6 p-3 ">
      <div className="flex flex-col gap-5 justify-center  items-center text-center h-screen">
        <input
          ref={fileRef}
          type="file"
          className="hidden"
          onChange={(e) => setFile(e.target.files[0])}
        />
        <img
          src={currentUser.avatar}
          alt=""
          className="h-52 w-52 rounded-full cursor-pointer"
          onClick={() => fileRef.current.click()}
        />
        {file && (
          <button
            className="btn btn-wide btn-success"
            onClick={handleImageUpload}
          >
            Upload Image
          </button>
        )}
        <h3 className="font-bold text-xl">{currentUser.username}</h3>
        <div>
          <h2>
            <span>Email : </span> {currentUser.email}
          </h2>
          <button onClick={handleSignOut} className="btn bg-red-900 mt-4 w-36">
            Logout
          </button>
          <div className="m-3 ">
            <button onClick={handleDelete} className="btn">
              Delete Account
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Profile;
