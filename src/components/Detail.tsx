/* eslint-disable @typescript-eslint/no-unused-vars */

import { useState, useEffect, SetStateAction } from "react";
import { useLocation, useNavigate, Link } from "react-router-dom";
import NavBar from "./NavBar";
import Carosel1 from "../images/home/carousel/banner1.png";

import BannerLogo from "../images/detail/banner/cake logo.png";
import BannerBg from "../images/detail/banner/cake_img.png";
import BannerText from "../images/detail/banner/text.png";

import ArrowDown from "../images/detail/arrowDown.png";
import ArrowUp from "../images/detail/arrowUp.png";

import Cake1 from "../images/detail/content/cake01.png";
import Cake2 from "../images/detail/content/cake02.png";
import Cake3 from "../images/detail/content/cake03.png";
import Cake4 from "../images/detail/content/cake04.png";
import Cake5 from "../images/detail/content/cake05.png";
import Cake6 from "../images/detail/content/cake06.png";
import Cake7 from "../images/detail/content/cake07.png";
import Cake8 from "../images/detail/content/cake08.png";

import Arrow from "../images/detail/arrow.png";

import Top from "../images/home/to top.png";
import Footer from "./Footer";

interface IProps {}

const productItemsInit: {
  title: string;
  src: string;
  price: number;
  amount: number;
}[] = [
  { title: "鮮果雪藏", src: Cake1, price: 280, amount: 0 },
  { title: "牛奶雪藏", src: Cake2, price: 280, amount: 0 },
  { title: "日式芒果奶凍", src: Cake3, price: 280, amount: 0 },
  { title: "日式草莓奶凍", src: Cake4, price: 280, amount: 0 },
  { title: "日式芋頭奶凍", src: Cake5, price: 280, amount: 0 },
  { title: "日式香草奶凍", src: Cake6, price: 280, amount: 0 },
  { title: "日式巧克力奶凍", src: Cake7, price: 280, amount: 0 },
  { title: "珍珠奶凍", src: Cake8, price: 280, amount: 0 },
];

const Detail: React.FC<IProps> = ({}) => {
  const location = useLocation();
  const navigate = useNavigate();
  const [isWarningOpen, setIswarningOpen] = useState<boolean>(true);
  const [productItems, setProductItems] = useState<
    {
      title: string;
      src: string;
      price: number;
      amount: number;
    }[]
  >(productItemsInit);

  const [device, setDevice] = useState<string>("pc");
  const [displayDetailInfo, setDisplayDetailInfo] = useState<
    string | undefined
  >(undefined);

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
      <div className="detail">
        <div className="detail-banner">
          <div className="detail-banner-logo">
            <img src={BannerLogo} alt="" />
          </div>
          <div className="detail-banner-bg">
            <img src={BannerBg} alt="" />
          </div>
          <div className="detail-banner-text">
            <img src={BannerText} alt="" />
          </div>
        </div>
        <div className="detail-content">
          {productItems.map((item, index) => (
            <div className="detail-content-card" key={`${item.title}`}>
              <div
                className="detail-content-card-info-wrapper"
                data-title={item.title}
                onMouseEnter={(e) => {
                  setDisplayDetailInfo(e.currentTarget.dataset.title);
                }}
                onMouseLeave={() => {
                  setDisplayDetailInfo(undefined);
                }}
              >
                {displayDetailInfo === item.title && (
                  <div className="detail-content-card-info">
                    <div className="detail-content-card-info-title">
                      商品說明
                    </div>
                    <div className="detail-content-card-info-text">
                      <p>
                        內容物成分：鮮奶油、雞蛋、鮮奶、砂糖、麵粉、沙拉油、草莓
                      </p>
                      <p>保存期限：冷藏約兩天</p>
                      <p>素食可否食用：蛋奶素</p>
                      <p>配件：每盒附刀子乙支 每兩盒附提袋二個</p>
                    </div>
                  </div>
                )}

                <div className="detail-content-card-title">{item.title}</div>
                <img
                  src={item.src}
                  alt=""
                  className="detail-content-card-img"
                />
              </div>
              <div className="detail-content-card-status">
                <div className="detail-content-card-status-price">
                  ＄{item.price}
                </div>
                <div className="detail-content-card-status-amount">
                  <img
                    src={ArrowDown}
                    alt=""
                    onClick={() => {
                      if (productItems[index].amount - 1 < 0) return;
                      productItems[index].amount -= 1;
                      setProductItems([...productItems]);
                    }}
                  />
                  <input type="number" value={item.amount} />
                  <img
                    src={ArrowUp}
                    alt=""
                    onClick={() => {
                      productItems[index].amount += 1;
                      setProductItems([...productItems]);
                    }}
                  />
                </div>
              </div>
            </div>
          ))}
          <div
            className="detail-content-backhome-button"
            style={{ cursor: "pointer" }}
            onClick={() => {
              navigate("/");
            }}
          >
            回到首頁
          </div>
          <div className="detail-content-submit-button">確認加入</div>
        </div>
        <div className="detail-warning">
          <div className="detail-warning-title">
            訂購注意事項
            {device === "mobile" && (
              <img
                src={Arrow}
                alt=""
                className={`detail-warning-title-arrow ${
                  isWarningOpen ? "active" : ""
                }`}
                onClick={() => {
                  setIswarningOpen(!isWarningOpen);
                }}
              />
            )}
          </div>
          {isWarningOpen && (
            <div className="detail-warning-text">
              <p>♥ 冷藏商品注意事項：</p>
              收到商品時請盡早存入冰箱冷藏勿冷凍，以確保品質新鮮度，冰涼的享用，風味更佳濃郁。本商品為每日限量生鮮食品，除商品本身有瑕疵或運送過程失溫導致食品變質者，可辦理退換貨，一經出貨如無上述之原因者恕無法辦理退換貨，敬請見諒與配合。冷藏類與常溫類產品，不一定同車種配送，到貨時間不盡相同。
              ※
              颱風等天災因素，宣布停止上班，宅配公司將停止配送，恕無法保證當天送達。
              ※
              由於草莓屬新鮮農產品，故草莓奶凍與草莓捲請於收到貨『二天』內嚐鮮期食用完畢，其他奶凍蛋糕請於收到貨『三天』內嚐鮮期食用完畢，到貨日即為第1天計算。
              ※
              奶凍蛋糕捲系列、狀元餅系列每兩盒附一只提袋，需更改提袋數量，請於備註欄告知。
            </div>
          )}
        </div>
        <div
          className="back-top-button"
          onClick={() => {
            console.log(1);

            gotTopHandler();
          }}
        >
          <img src={Top} alt="" />
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Detail;
