import logo from '../../assets/logo.svg'
import { useState, useEffect } from 'react';
import X2JS from 'x2js';
import axios from 'axios';
import { useParams } from 'react-router';
import NavBar from '../navBar';
import ArticlesList from '../articlesList';
import Hosts from '../hosts';
import Vpn from '../vpn';
import UserInfo from '../userInfo';


const Main = () => {
const {param} = useParams()
console.log(param);
  var x2js = new X2JS();
  useEffect(function () {
    axios
      .get('https://sweb.ru/export/turbojournal/', {
        'Content-Type': 'application/xml; charset=utf-8',
      })
      .then(function (response) {
        setArticle(x2js.xml2js(response.data).rss.channel.item.slice(0,6));
      });
  }, []);
  const [articles, setArticle] = useState();
  const [currentItem, setCurrentItem] = useState('log')
  const [notificationCounter, setNotificationCounter] = useState(1)
  const openArticle = (link) => {
        return setArticle(
          articles.map((article) => {
            if (article.title === link) {
              article.isOpened
                ? (article.isOpened = false)
                : (article.isOpened = true);
            }
            return article;
          })
        );
    };

    const handelChangeItem = (item) => {
      setCurrentItem(item)
    }
    
    const menu = {
      account: {
        name: 'Аккаунт',
        iter: 'account',
      },
      vps: {
        name: 'vps',
        iter: 'vps',
      },
      host: {
        name: 'Домены',
        iter: 'host',
      },
      log: {
        name: 'Бортовой журнал',
        iter: 'log',
      },
    };
  return (
    <div className="wrapper">
      <div className="main">
        <div className="main__raw">
          <div className="main__column main__column-small">
            <div className="main__logo">
              <img src={logo} alt="logo" srcset="" />
            </div>
            <nav className="main__menu">
              <NavBar
                items={menu}
                currentItem={currentItem}
                changeItem={handelChangeItem}
              />
            </nav>
          </div>
          <div className="main__column main__column-big">
            <div className="main__header">
              <div className="header__item header__price">100.00 ₽</div>
              <div className=" header__item header__username">
                <div className="notifiacation__icon">
                  <svg
                    width="15"
                    height="17"
                    viewBox="0 0 15 17"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M13.8761 13.4528C13.7104 13.8362 13.3522 14.072 12.9785 14.0463L9.68866 14.0037L9.5991 14.399C9.48793 14.8925 9.10501 15.7545 7.79874 15.9854C7.70404 16.0012 7.60111 16.0012 7.50126 16.0092C7.40038 16.0012 7.29641 16.0012 7.20171 15.9844C5.89545 15.7545 5.51252 14.8925 5.40135 14.399L5.3118 14.0037L2.02195 14.0463C1.64829 14.072 1.29007 13.8352 1.12434 13.4528C0.945231 13.0406 0.991553 12.4391 1.498 12.021C2.22885 11.4176 3.09352 10.4683 3.29836 8.47077C3.53717 6.15416 4.38434 4.50539 5.75031 3.61759C6.8157 2.92598 8.18373 2.92598 9.24912 3.61759C10.6151 4.5044 11.4633 6.15416 11.7021 8.47176C11.9069 10.4683 12.7716 11.4176 13.5025 12.022C14.0089 12.4391 14.0552 13.0406 13.8761 13.4528ZM7.50023 0.990849C7.72978 0.990849 7.91609 1.17019 7.91609 1.39214C7.91609 1.6131 7.72978 1.79245 7.50023 1.79245C7.27068 1.79245 7.08334 1.6131 7.08334 1.39214C7.08334 1.17019 7.27068 0.990849 7.50023 0.990849ZM14.1726 11.2689C13.5519 10.7567 12.8941 10.0105 12.7263 8.37367C12.3856 5.06423 11.0237 2.95669 8.64488 2.23139C8.8312 1.99755 8.94546 1.70822 8.94546 1.39214C8.94546 0.624235 8.29696 0 7.50023 0C6.70247 0 6.05397 0.624235 6.05397 1.39214C6.05397 1.69633 6.15897 1.97575 6.3319 2.20563C3.95304 2.93192 2.61486 5.05928 2.27414 8.37367C2.10636 10.0105 1.44859 10.7567 0.827884 11.2689C-0.0717814 12.0101 -0.148984 13.0921 0.174237 13.8342C0.510839 14.6121 1.28595 15.0956 2.06827 15.0351L2.94426 15.0242C3.41365 15.0183 4.39772 14.9995 4.39772 14.9995C4.39772 14.9995 4.88976 15.7446 5.15328 16.0161C5.61958 16.4947 6.25881 16.8256 7.0154 16.9594C7.16877 16.9861 7.3345 16.9911 7.49817 17C7.4992 17 7.50023 17 7.50126 17H7.50229C7.66493 16.9911 7.83065 16.9861 7.98403 16.9594C8.74164 16.8256 9.38088 16.4947 9.84718 16.0161C10.1169 15.7396 10.6861 14.9529 10.6861 14.9529C10.6861 14.9529 11.595 15.0183 12.0552 15.0242L12.9322 15.0361C13.7145 15.0956 14.4896 14.6121 14.8262 13.8342C15.1484 13.0921 15.0722 12.0111 14.1726 11.2689Z"
                      fill="#D0021B"
                    />
                  </svg>
                  <div className="notifiacation__counter">{notificationCounter}</div>
                </div>
                vikavishny
              </div>
              <div className="header__item header__exit">Выйти</div>
            </div>
            <div className="main__content">
              <h3 className="main__subtitle">{menu[currentItem].name}</h3>
              <h1 className="main__title">{menu[currentItem].name}</h1>
              {articles && param === 'log' && (
                <ArticlesList articles={articles} onOpen={openArticle} />
              )}
              {param === 'host' && <Hosts />}
              {param === 'vps' && <Vpn />}
              {param === 'account' && <UserInfo />}
            </div>
          </div>
        </div>
      </div>
      <footer className="footer">
        <div className="footer__raw">
          <div className="footer__column">
            <p>
              © 2001– 2018 ООО <span>«СпейсВэб»</span> <br></br>
              Все права защищены.<br></br>
              Лицензия <span>№163230</span>
            </p>
          </div>
          <div className="footer__column">
            <div className="footer__contacts">
              <p>
                <span>+7 (812) 334-12-2 </span> (в Санкт-Петербурге)
              </p>
              <p>
                <span>+7 (495) 663-16-12</span> (в Москве)
              </p>
              <p>
                <span>(800) 100-16-15 </span> (бесплатно по России)
              </p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
export default Main;
