import React, { useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  deleteSuccess,
  signOutSuccess,
  updateSucces,
} from "../redux/user/user.slice";
import axios from "axios";
import Toast from "../Components/Toast";
import { toast } from "react-toastify";

function Profile() {
  const { currentUser } = useSelector((state) => state.user);
  const [loading, setLoading] = useState(false);
  const Disptatch = useDispatch();
  const fileRef = useRef(null);
  const Dispatch = useDispatch();
  const [file, setFile] = useState();
  const [url, setUrl] = useState("");
  const [formData, setFormData] = useState();

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
      setFormData({ avatar: res.secure_url });
      setFile("");
    } catch (error) {
      console.log(error);
    }
  };

  const handleImageUpload = async () => {
    setLoading(true);
    await uploadImage();
  };

  const handleImageSubmit = async () => {
    setLoading(true);
    console.log(formData);
    const res = await axios.put(
      `/api/user/update/${currentUser._id}`,
      formData
    );
    if (res.status === 200) {
      setLoading(false);
      Dispatch(updateSucces(res.data));
      toast.success("Profile Updated Successfully");
    }
  };

  return (
    <div className="max-w-6xl  mx-auto my-6 p-3 ">
      <div className="flex flex-col gap-5 justify-center  items-center text-center h-screen">
        <Toast />
        <input
          ref={fileRef}
          type="file"
          className="hidden"
          accept="image/*"
          onChange={(e) => setFile(e.target.files[0])}
        />
        <img
          src={url || currentUser.avatar}
          alt=""
          className="rounded-full w-52 h-52 self-center object-cover cursor-pointer mt-2"
          onClick={() => fileRef.current.click()}
        />
        {file && (
          <button
            className="btn btn-wide btn-success"
            onClick={handleImageUpload}
          >
            {loading ? "uploading.... " : "Upload Image"}
          </button>
        )}
        <h3 className="font-bold text-xl">{currentUser.username}</h3>
        <div className="flex flex-col">
          <h2>
            <span>Email : </span> {currentUser.email}
          </h2>
          {formData && loading && (
            <button
              className="btn btn-success  mt-5"
              onClick={handleImageSubmit}
            >
              Update
            </button>
          )}
          <button onClick={handleSignOut} className="btn bg-red-800 mt-4 ">
            Logout
          </button>

          <button onClick={handleDelete} className="btn mt-5">
            Delete Account
          </button>
        </div>
      </div>
    </div>
  );
}

export default Profile;
