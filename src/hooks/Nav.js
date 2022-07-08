import { useNavigate } from "react-router-dom";

const navigate = useNavigate();

const backToHome = () => {
    navigate("/");
}

export default backToHome;