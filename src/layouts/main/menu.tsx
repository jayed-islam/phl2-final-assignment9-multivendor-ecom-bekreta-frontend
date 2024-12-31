import { menuData } from "@/constants";
import React from "react";

const COLUMN_THRESHOLD = 6; // Items per column threshold

const splitIntoColumns = (items, threshold) => {
  const columns = [];
  for (let i = 0; i < items.length; i += threshold) {
    columns.push(items.slice(i, i + threshold));
  }
  return columns;
};

const HeadMegaMenu2 = () => {
  const renderSubMenu = (subMenu, dropMenuClass) => {
    const columns = splitIntoColumns(subMenu, COLUMN_THRESHOLD);

    return (
      <div className={`drop-down ${dropMenuClass}`}>
        {columns.map((column, index) => (
          <ul key={index} className="drop-column">
            {column.map((item) => (
              <li key={item.title}>
                <a href={item.link}>{item.title}</a>
                {item.subMenu &&
                  renderSubMenu(item.subMenu, `drop-menu-${index + 2}`)}
              </li>
            ))}
          </ul>
        ))}
      </div>
    );
  };

  const renderMenu = (menu, dropMenuClass = "drop-menu-1") => (
    <li
      className={`nav-item ${menu.subMenu ? "has-child" : ""}`}
      key={menu.title}
    >
      <a className="nav-link" href={menu.link}>
        {menu.title}
      </a>
      {menu.subMenu && renderSubMenu(menu.subMenu, dropMenuClass)}
    </li>
  );

  return (
    <nav className="navbar" id="main-nav">
      <div className="container">
        <ul className="navbar-nav">
          {menuData.map((menu) => renderMenu(menu))}
        </ul>
      </div>
    </nav>
  );
};

export default HeadMegaMenu2;
