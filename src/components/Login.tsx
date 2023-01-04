/* eslint-disable @typescript-eslint/no-unused-vars */

import { useState, useEffect, SetStateAction } from "react";
import { useLocation, useNavigate, Link } from "react-router-dom";
import NavBar from "./NavBar";

import LeftArrow from "../images/home/left arrow.png";
import RightArrow from "../images/home/right arrow.png";

interface IProps {}

const IndexData = ["hot", "cakeRoll"];
const Home: React.FC<IProps> = ({}) => {
  const location = useLocation();
  const navigate = useNavigate();
  const [device, setDevice] = useState<string>("pc");

  const gotTopHandler = () => {
    document.body.scrollTop = 0; // For Safari
    document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
  };

  const handleRWD = () => {
    if (window.innerWidth > 768) setDevice("pc");
    else if (window.innerWidth >= 768 && window.innerWidth < 1280)
      setDevice("ipad");
    else setDevice("mobile");
  };

  useEffect(() => {
    window.addEventListener("resize", handleRWD);
    return () => {
      window.removeEventListener("resize", handleRWD);
    };
  }, []);

  return (
    <>
      <NavBar />
      <div className="login">
        <div className="input-form">
          {device === "mobile" && (
            <div
              className="input-form-backhome"
              style={{ cursor: "pointer" }}
              onClick={() => {
                navigate("/");
              }}
            >
              回到首頁
            </div>
          )}

          <form action="">
            <div className="input-form-title">登入頁面</div>
            <div className="input-field">
              <div>帳號</div>
              <input type="text" name="account" placeholder="09xx-xxx-xxx" />
            </div>
            <div className="input-field">
              <div>密碼</div>
              <input type="text" name="password" placeholder="輸入8-12碼" />
            </div>
            <div className="input-field-verify-code">
              <div>驗證碼</div>
              <input
                type="text"
                name="verify-code"
                className="input-field-verify-code"
              />
            </div>
            <div className="buttons">
              <button
                className="login-button"
                onClick={(e) => {
                  e.preventDefault();
                  navigate("/");
                }}
              >
                登入
              </button>
              <div className="buttons-link-wrapper">
                <Link className="" to="">
                  加入會員
                </Link>
                <Link className="" to="">
                  忘記密碼
                </Link>
              </div>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default Home;
