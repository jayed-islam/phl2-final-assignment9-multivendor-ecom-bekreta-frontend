/* eslint-disable @typescript-eslint/no-explicit-any */
const menuItems = [
  {
    name: "Desktop",
    link: "https://www.startech.com.bd/desktops",
    subItems: [
      {
        name: "Desktop Offer",
        link: "https://www.startech.com.bd/special-pc",
      },
      {
        name: "Star PC",
        link: "https://www.startech.com.bd/desktops/star-pc",
        subItems: [
          {
            name: "Intel PC",
            link: "https://www.startech.com.bd/intel-pc",
          },
          {
            name: "Ryzen PC",
            link: "https://www.startech.com.bd/ryzen-pc",
          },
        ],
      },
      {
        name: "Apple Mac Mini",
        link: "https://www.startech.com.bd/apple-mac-mini",
      },
    ],
  },
  {
    name: "Laptop",
    link: "https://www.startech.com.bd/laptop-notebook",
    subItems: [
      {
        name: "All Laptop",
        link: "https://www.startech.com.bd/laptop-notebook/laptop",
        subItems: [
          {
            name: "AVITA Laptop",
            link: "https://www.startech.com.bd/avita-laptop",
          },
          {
            name: "Lenovo",
            link: "https://www.startech.com.bd/lenovo-laptop",
          },
          {
            name: "MSI",
            link: "https://www.startech.com.bd/laptop-notebook/laptop/msi-laptop",
          },
          {
            name: "Walton",
            link: "https://www.startech.com.bd/walton-laptop",
          },
        ],
      },
    ],
  },
  {
    name: "Server & Storage",
    link: "https://www.startech.com.bd/server-networking",
    subItems: [
      {
        name: "Server",
        link: "https://www.startech.com.bd/server-networking/server",
        subItems: [
          {
            name: "Dell",
            link: "https://www.startech.com.bd/server-networking/server/dell-server",
          },
          {
            name: "HPE",
            link: "https://www.startech.com.bd/hpe-server",
          },
        ],
      },
      {
        name: "Server HDD",
        link: "https://www.startech.com.bd/server-hdd",
      },
    ],
  },
  {
    name: "Office Equipment",
    link: "https://www.startech.com.bd/office-equipment",
    multiCol: true,
    subItems: [
      {
        name: "Projector",
        link: "https://www.startech.com.bd/projector",
        subItems: [
          {
            name: "InFocus",
            link: "https://www.startech.com.bd/projector/infocus",
          },
          {
            name: "XINJI",
            link: "https://www.startech.com.bd/xinji-projector",
          },
        ],
      },
      {
        name: "Video Wall",
        link: "https://www.startech.com.bd/video-wall",
      },
    ],
  },
];

const HeadMegaMenu4 = () => {
  const renderSubItems = (subItems: any[], isMultiCol: boolean = false) => {
    return subItems.map((subItem, index) => (
      <li
        key={index}
        className={`nav-item ${subItem.subItems ? "has-child" : ""}`}
      >
        <a className="nav-link" href={subItem.link}>
          {subItem.name}
        </a>
        {subItem.subItems && (
          <ul
            className={`drop-down ${isMultiCol ? "multi-col" : ""} drop-menu-2`}
          >
            {renderSubItems(subItem.subItems, isMultiCol)}
          </ul>
        )}
      </li>
    ));
  };

  const renderSubItems4 = (subItems: any[]) => {
    const columnCount = subItems.length > 8 ? 2 : 1;
    const firstColumnItems = subItems.slice(
      0,
      Math.ceil(subItems.length / columnCount)
    );
    const secondColumnItems = subItems.slice(
      Math.ceil(subItems.length / columnCount)
    );

    return (
      <div className={`drop-down drop-menu-${columnCount}`}>
        <ul>
          {firstColumnItems.map((subItem, index) => (
            <li key={index} className="nav-item">
              <a className="nav-link" href={subItem.link}>
                {subItem.name}
              </a>
            </li>
          ))}
        </ul>
        {secondColumnItems.length > 0 && (
          <ul>
            {secondColumnItems.map((subItem, index) => (
              <li key={index} className="nav-item">
                <a className="nav-link" href={subItem.link}>
                  {subItem.name}
                </a>
              </li>
            ))}
          </ul>
        )}
      </div>
    );
  };

  return (
    <nav className="navbar" id="main-nav">
      <div className="container">
        <ul className="navbar-nav">
          {menuItems.map((menuItem, index) => (
            <li
              key={index}
              className={`nav-item ${menuItem.subItems ? "has-child" : ""} ${
                menuItem.multiCol ? "multi-col" : ""
              }`}
            >
              <a className="nav-link" href={menuItem.link}>
                {menuItem.name}
              </a>
              {menuItem.subItems && (
                <ul className={`drop-down drop-menu-1`}>
                  {renderSubItems(menuItem.subItems, menuItem.multiCol)}
                </ul>
              )}
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default HeadMegaMenu4;
