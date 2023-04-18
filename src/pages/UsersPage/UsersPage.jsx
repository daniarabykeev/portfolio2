import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllUsers } from "../../features/users/UsersSlice";
import "./UsersPage.css";

function UsersPage() {
  const dispatch = useDispatch();
  const users = useSelector((state) => state.users.users.users);

  useEffect(() => {
    dispatch(getAllUsers());
  }, []);

  return (
    <div>
      <h1>Users</h1>
      <div className="users">
        {users
          ? users.map((user) => {
              return (
                <div key={user.id}>
                  <div className="users-card">
                    <div style={{ display: "flex", justifyContent: "center" }}>
                      <img style={{ width: "100px" }} src={user.image} alt="" />
                      <div>
                        <h3 style={{ marginTop: "2rem" }}>
                          {user.firstName} {user.lastName}
                        </h3>
                        <div>
                          <h6>{user.email}</h6>
                          <h6>{user.phone}</h6>
                        </div>
                      </div>
                    </div>
                    <div>
                      <div
                        style={{
                          display: "flex",
                          alignItems: "center",
                          marginLeft: "1rem",
                        }}
                      >
                        <h5>age: </h5>
                        <h5>{user.age}</h5>
                      </div>
                    </div>
                    <div
                      style={{
                        display: "flex",
                        alignItems: "center",
                        marginLeft: "1rem",
                      }}
                    >
                      <h5>gender: </h5>
                      <h5>{user.gender}</h5>
                    </div>
                  </div>
                </div>
              );
            })
          : null}
      </div>
    </div>
  );
}

export default UsersPage;
