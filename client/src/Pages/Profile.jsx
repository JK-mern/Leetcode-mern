import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { deleteSuccess, signOutSuccess } from "../redux/user/user.slice";
import axios from "axios";

function Profile() {
  const { currentUser } = useSelector((state) => state.user);
  const Dispatch = useDispatch();

  const handleSignOut = async () => {
    try {
      const res = await axios.post("/api/auth/signout");
      Dispatch(signOutSuccess);
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

  return (
    <div className="max-w-6xl  mx-auto my-6 p-3 ">
      <div className="flex flex-col gap-5 justify-center  items-center text-center h-screen">
        <img
          src={currentUser.avatar}
          alt=""
          className="h-24 w-24 rounded-full cursor-pointer"
        />
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
