import { Link } from 'react-router-dom';

const NavBar = ({ items, currentItem, changeItem }) => {
  return (
    <ul className="menu__list">
      {Object.keys(items).map((item) => {
        return (
          <Link to={`${items[item].iter}`}>
            <li
              className={
                currentItem === items[item].iter
                  ? 'list__item list__item-active'
                  : 'list__item'
              }
              onClick={() => changeItem(items[item].iter)}
              key={items[item].iter}
            >
              <div className={`list__item-${item}`}></div>
              {items[item].name}
            </li>
          </Link>
        );
      })}
    </ul>
  );
};
export default NavBar;
