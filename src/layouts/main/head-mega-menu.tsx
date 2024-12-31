import { menuArray } from "@/constants";

/* eslint-disable @typescript-eslint/no-explicit-any */
const HeadMegaMenu = () => {
  const renderSubItems = (subItems: any[]) => {
    return subItems.map((subItem, index) => (
      <li
        key={index}
        className={`nav-item ${subItem.subItems ? "has-child" : ""}`}
      >
        <a className="nav-link" href={subItem.link}>
          {subItem.name}
        </a>
        {subItem.subItems && (
          <ul className={`drop-down drop-menu-2`}>
            {renderSubItems(subItem.subItems)}
          </ul>
        )}
      </li>
    ));
  };

  const renderMultiColumn = (menuItem: any) => {
    const columnCount = menuItem.subItems.length > 8 ? 2 : 1;
    const firstColumnItems = menuItem.subItems.slice(
      0,
      Math.ceil(menuItem.subItems.length / columnCount)
    );
    const secondColumnItems = menuItem.subItems.slice(
      Math.ceil(menuItem.subItems.length / columnCount)
    );

    return (
      <li className="nav-item has-child multi-col">
        <a className="nav-link" href={menuItem.link}>
          {menuItem.name}
        </a>
        <div className="drop-down drop-menu-1">
          <ul>{renderSubItems(firstColumnItems)}</ul>
          <ul>{renderSubItems(secondColumnItems)}</ul>
        </div>
      </li>
    );
  };

  return (
    <div
      style={{
        boxShadow:
          "0px 1px 3px 0px rgba(10, 5, 41, 0.10), 0px 1px 2px 0px rgba(10, 5, 41, 0.06)",
      }}
    >
      <nav className="navbar max-w-5xl mx-auto px-5 2xl:px-0 " id="main-nav">
        <div className="container">
          <ul className="navbar-nav">
            {menuArray.map((menuItem, index) => {
              const isMultiCol = menuItem.subItems.length > 8;
              if (isMultiCol) {
                return renderMultiColumn(menuItem);
              }
              return (
                <li
                  key={index}
                  className={`nav-item ${menuItem.subItems ? "has-child" : ""}`}
                >
                  <a className="nav-link" href={menuItem.link}>
                    {menuItem.name}
                  </a>
                  {menuItem.subItems && (
                    <ul className={`drop-down drop-menu-1`}>
                      {renderSubItems(menuItem.subItems)}
                    </ul>
                  )}
                </li>
              );
            })}
          </ul>
        </div>
      </nav>
    </div>
  );
};

export default HeadMegaMenu;
