import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { decrement, increment } from "../features/counter/counterSlice";
import { Button, Input } from "antd";
import { updateUser } from "../features/user/userSlice";


const Admin = () => {
  const dispatch = useDispatch();
  const [value, setValue] = useState("");

  function handleClick() {
    dispatch(updateUser(value));
  }

  return (
    <div className="max-w-4xl mx-auto my-8">
      <h3>This is the Admin Page</h3>
      <div className="flex gap-5">
        <div className="w-full max-w-md space-y-4 shadow-xl p-2 rounded-xl mt-8">
          <p className="font-serif text-center">Update Name</p>
          <Input onChange={(event) => setValue(event.target.value)} placeholder="Enter New Name" />
          <Button onClick={handleClick} type="dashed">Save</Button>
        </div>
        <div className="w-full max-w-md space-y-4 shadow-xl p-2 rounded-xl mt-8">
          <p className="font-serif text-center">Update Password</p>
          <Input
            onChange={(event) => setValue(event.target.value)}
            placeholder="Enter New Password"
          />
          <Button onClick={handleClick} type="dashed">
            Save
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Admin;
