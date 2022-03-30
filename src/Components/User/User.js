import { useNavigate } from "react-router-dom";

const User = (props) => {
  const { name, username, id } = props.user;
  let navigate = useNavigate();
  const showDetailsOfUser = () => {
    let path = `/user/${id}`;
    navigate(path);
  };
  return (
    <div>
      <p>{name}</p>
      <button onClick={showDetailsOfUser}>
        {username} id: {id}
      </button>
    </div>
  );
};

export default User;
