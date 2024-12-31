import React from "react";

const menuData = [
  {
    label: "Desktop",
    link: "https://www.startech.com.bd/desktops",
    children: [
      {
        label: "Desktop Offer",
        link: "https://www.startech.com.bd/special-pc",
      },
      {
        label: "Star PC",
        link: "https://www.startech.com.bd/desktops/star-pc",
        children: [
          {
            label: "Intel PC",
            link: "https://www.startech.com.bd/intel-pc",
          },
          {
            label: "Ryzen PC",
            link: "https://www.startech.com.bd/ryzen-pc",
          },
        ],
      },
      {
        label: "Apple Mac Mini",
        link: "https://www.startech.com.bd/apple-mac-mini",
      },
      {
        label: "Show All Desktop",
        link: "https://www.startech.com.bd/desktops",
        isSeeAll: true,
      },
    ],
  },
  {
    label: "Laptop",
    link: "https://www.startech.com.bd/laptop-notebook",
    children: [
      {
        label: "All Laptop",
        link: "https://www.startech.com.bd/laptop-notebook/laptop",
        children: [
          {
            label: "AVITA_Laptop",
            link: "https://www.startech.com.bd/avita-laptop",
          },
          {
            label: "Lenovo",
            link: "https://www.startech.com.bd/lenovo-laptop",
          },
          {
            label: "MSI",
            link: "https://www.startech.com.bd/laptop-notebook/laptop/msi-laptop",
          },
          {
            label: "Walton",
            link: "https://www.startech.com.bd/walton-laptop",
          },
        ],
      },
      {
        label: "Show All Laptop",
        link: "https://www.startech.com.bd/laptop-notebook",
        isSeeAll: true,
      },
    ],
  },
  {
    label: "Server & Storage",
    link: "https://www.startech.com.bd/server-networking",
    children: [
      {
        label: "Server",
        link: "https://www.startech.com.bd/server-networking/server",
        children: [
          {
            label: "Dell",
            link: "https://www.startech.com.bd/server-networking/server/dell-server",
          },
          {
            label: "HPE",
            link: "https://www.startech.com.bd/hpe-server",
          },
          {
            label: "Cisco",
            link: "https://www.startech.com.bd/server-networking/server/cisco-server",
          },
          {
            label: "ASUS",
            link: "https://www.startech.com.bd/asus-server",
          },
        ],
      },
      {
        label: "Server HDD",
        link: "https://www.startech.com.bd/server-hdd",
      },
      {
        label: "Show All Server & Storage",
        link: "https://www.startech.com.bd/server-networking",
        isSeeAll: true,
      },
    ],
  },
];

const HeadMegaMenu3 = () => {
  const renderMenu = (menu) => {
    return (
      <li className={`nav-item ${menu.children ? "has-child" : ""}`}>
        <a className="nav-link" href={menu.link}>
          {menu.label}
        </a>
        {menu.children && (
          <ul className="drop-down drop-menu-1">
            {menu.children.map((child, index) => (
              <React.Fragment key={index}>{renderMenu(child)}</React.Fragment>
            ))}
          </ul>
        )}
        {menu.isSeeAll && (
          <li>
            <a href={menu.link} className="see-all">
              {menu.label}
            </a>
          </li>
        )}
      </li>
    );
  };

  return (
    <nav className="navbar" id="main-nav">
      <div className="container">
        <ul className="navbar-nav">
          {menuData.map((menu, index) => (
            <React.Fragment key={index}>{renderMenu(menu)}</React.Fragment>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default HeadMegaMenu3;
