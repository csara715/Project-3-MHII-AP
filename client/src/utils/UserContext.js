import React, { useState } from "react";

const UserContext = React.createContext();

const UserContextComponent = ({ _id, username, email }) => {
  const [user] = useState({
    _id: _id,
    username: username,
    email: email,
  });

  return <UserContext.Provider value={user} />;
};

export default UserContextComponent;
