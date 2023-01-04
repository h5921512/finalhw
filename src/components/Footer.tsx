/* eslint-disable @typescript-eslint/no-unused-vars */

import { useState, useEffect, SetStateAction } from "react";
import { useLocation, useNavigate, Link } from "react-router-dom";
import Email from "../images/footer/email.png";
import Line from "../images/footer/line.png";
import FB from "../images/footer/facebook.png";
import Phone from "../images/footer/phone.png";
import Company from "../images/footer/company.png";
import Home from "../images/footer/home.png";

interface IProps {}

const Footer: React.FC<IProps> = ({}) => {
  //   const [isDrop, setIsDrop] = useState<boolean>(false);
  const location = useLocation();
  const navigate = useNavigate();

  const [rwdStatus, setRwdStatus] = useState<string>("PC");

  const handleRWD = () => {
    if (window.innerWidth < 768) setRwdStatus("mobile");
    else if (window.innerWidth >= 768 && window.innerWidth < 1280)
      setRwdStatus("ipad");
    else setRwdStatus("pc");
  };

  useEffect(() => {
    handleRWD();
    window.addEventListener("resize", handleRWD);
    return () => {
      window.removeEventListener("resize", handleRWD);
    };
  }, []);

  return (
    <div className="footer">
      <div className="footer-wrapper">
        {rwdStatus !== "mobile" && (
          <div className="footer-content-wrapper">
            <div className="footer-title">快速連結</div>
            <ul>
              <li>關於諾貝爾</li>
              <li>媒體報導</li>
              <li>最新消息</li>
              <li>聯絡我們</li>
              <li>會員中心</li>
              <li>下載專區</li>
              <li>購物須知</li>
              <li>產品營養標示</li>
            </ul>
          </div>
        )}

        {rwdStatus === "pc" && (
          <div className="footer-content-wrapper">
            <div className="footer-title">門市資訊</div>
            <div className="footer-content">
              <div className="footer-content-info">
                <p>羅東店</p>
                <div>
                  <img src={Home} alt="" />
                  宜蘭縣羅東鎮公正路188號
                </div>
                <div>
                  <img src={Phone} alt="" />
                  03-955-8389
                </div>
                <div>
                  <img src={Company} alt="" />
                  03-955-8189
                </div>
                <div>營業時間</div>
                <div>（日）～（四）9:00～21:00</div>
                <div>（五）～（六）9:00～21:30</div>
              </div>
              <div className="footer-content-info">
                <p>礁溪店</p>
                <div>
                  <img src={Home} alt="" />
                  宜蘭縣礁溪鄉礁溪路四段68號
                </div>
                <div>
                  <img src={Phone} alt="" />
                  03-988-5919
                </div>
                <div>
                  <img src={Company} alt="" />
                  03-988-5540
                </div>
                <div>營業時間</div>
                <div>（日）～（四）9:00～21:00</div>
                <div>（五）～（六）9:00～21:30</div>
              </div>
            </div>
          </div>
        )}
        {rwdStatus === "pc" && (
          <div className="footer-content-wrapper">
            <div className="footer-title"></div>
            <div className="footer-content">
              <div className="footer-content-info">
                <p>國道五號蘇澳服務區 蘇澳店</p>
                <div>
                  <img src={Home} alt="" />
                  宜蘭縣蘇澳鎮蘇新路81號
                </div>
                <div>
                  <img src={Phone} alt="" />
                  03-959-5457
                </div>
                <div>營業時間</div>
                <div>（一）～（日）10:00～16:30</div>
              </div>
            </div>
          </div>
        )}

        <div className="footer-content-wrapper">
          <div className="footer-title">聯絡我們</div>
          <div className="footer-content">
            <div className="footer-content-icon-wrapper">
              <div className="footer-content-icon">
                <img src={Email} alt="" />
              </div>
              <div className="footer-content-icon">
                <img src={Line} alt="" />
              </div>
              <div className="footer-content-icon">
                <img src={FB} alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
