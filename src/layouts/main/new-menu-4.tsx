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

const HeadMegaMenu6 = () => {
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
    <nav className="navbar" id="main-nav">
      <div className="container">
        <ul className="navbar-nav">
          {menuItems.map((menuItem, index) => {
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
  );
};

export default HeadMegaMenu6;
