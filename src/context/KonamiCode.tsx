import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const KonamiCodeListener = ({ children }) => {
  const navigate = useNavigate();
  const [keys, setKeys] = useState([]);

  useEffect(() => {
    const onKeyDown = (e) => {
      setKeys((prevKeys) => [...prevKeys, e.key]);
    };

    window.addEventListener("keydown", onKeyDown);

    return () => {
      window.removeEventListener("keydown", onKeyDown);
    };
  }, []);

  useEffect(() => {
    const konamiCode = [
      "ArrowUp",
      "ArrowUp",
      "ArrowDown",
      "ArrowDown",
      "ArrowLeft",
      "ArrowRight",
      "ArrowLeft",
      "ArrowRight",
      "b",
      "a",
    ];
    const isKonamiCode = keys
      .slice(-10)
      .every((key, index) => key === konamiCode[index]);
    if (isKonamiCode) {
      navigate("/dashboard");
    }
  }, [keys, navigate]);

  return <>{children}</>;
};

export default KonamiCodeListener;
