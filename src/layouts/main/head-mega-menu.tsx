import React from "react";

// const HeadMegaMenu2 = () => {
//   const renderMenu = (menu, dropMenuClass = "drop-menu-1") => (
//     <li
//       className={`nav-item ${menu.subMenu ? "has-child" : ""}`}
//       key={menu.title}
//     >
//       <a className="nav-link" href={menu.link}>
//         {menu.title}
//       </a>
//       {menu.subMenu && (
//         <ul className={`drop-down ${dropMenuClass}`}>
//           {menu.subMenu.map((subMenuItem, index) =>
//             renderMenu(subMenuItem, `drop-menu-${index + 2}`)
//           )}
//         </ul>
//       )}
//     </li>
//   );

//   return (
//     <nav className="navbar" id="main-nav">
//       <div className="container">
//         <ul className="navbar-nav">
//           {menuData.map((menu) => renderMenu(menu))}
//         </ul>
//       </div>
//     </nav>
//   );
// };

// export default HeadMegaMenu2;

//  <li className="nav-item has-child multi-col">
// <a className="nav-link" href="https://www.startech.com.bd/monitor">
//   Monitor
// </a>
// <div className="drop-down drop-menu-1">
//   <ul>
//     <li className="nav-item">
//       <a
//         className="nav-link"
//         href="https://www.startech.com.bd/monitor/msi"
//       >
//         MSI
//       </a>
//     </li>
//     <li className="nav-item">
//       <a
//         className="nav-link"
//         href="https://www.startech.com.bd/aoc-monitor"
//       >
//         AOC
//       </a>
//     </li>
//     <li className="nav-item">
//       <a
//         className="nav-link"
//         href="https://www.startech.com.bd/dahua-monitor"
//       >
//         Dahua
//       </a>
//     </li>
//   </ul>
//   <ul>
//     <li className="nav-item">
//       <a
//         className="nav-link"
//         href="https://www.startech.com.bd/pc-power-monitor"
//       >
//         PC Power
//       </a>
//     </li>

//     <li>
//       <a
//         href="https://www.startech.com.bd/monitor"
//         className="see-all"
//       >
//         Show All Monitor
//       </a>
//     </li>
//   </ul>
// </div>
// </li>
// <li className="nav-item has-child multi-col">
// <a
//   className="nav-link"
//   href="https://www.startech.com.bd/office-equipment"
// >
//   Office Equipment
// </a>
// <div className="drop-down drop-menu-1">
//   <ul>
//     <li className="nav-item has-child">
//       <a
//         className="nav-link"
//         href="https://www.startech.com.bd/projector"
//       >
//         Projector
//       </a>
//       <ul className="drop-down drop-menu-2">
//         <li className="nav-item">
//           <a
//             className="nav-link"
//             href="https://www.startech.com.bd/projector/infocus"
//           >
//             InFocus
//           </a>
//         </li>

//         <li className="nav-item">
//           <a
//             className="nav-link"
//             href="https://www.startech.com.bd/xinji-projector"
//           >
//             XINJI{" "}
//           </a>
//         </li>
//         <li className="nav-item">
//           <a
//             className="nav-link"
//             href="https://www.startech.com.bd/projection-screen"
//           >
//             Projection Screen
//           </a>
//         </li>
//         <li className="nav-item">
//           <a
//             className="nav-link"
//             href="https://www.startech.com.bd/projector-mount"
//           >
//             Projector Mount
//           </a>
//         </li>
//       </ul>
//     </li>

//     <li className="nav-item">
//       <a
//         className="nav-link"
//         href="https://www.startech.com.bd/video-wall"
//       >
//         Video Wall
//       </a>
//     </li>
//     <li className="nav-item has-child">
//       <a
//         className="nav-link"
//         href="https://www.startech.com.bd/office-equipment/signage"
//       >
//         Signage
//       </a>
//       <ul className="drop-down drop-menu-2">
//         <li className="nav-item">
//           <a
//             className="nav-link"
//             href="https://www.startech.com.bd/benq-signage"
//           >
//             BenQ
//           </a>
//         </li>
//         <li className="nav-item">
//           <a
//             className="nav-link"
//             href="https://www.startech.com.bd/viewsonic-signage"
//           >
//             ViewSonic
//           </a>
//         </li>
//         <li className="nav-item">
//           <a
//             className="nav-link"
//             href="https://www.startech.com.bd/lg-signage"
//           >
//             LG
//           </a>
//         </li>
//         <li className="nav-item">
//           <a
//             className="nav-link"
//             href="https://www.startech.com.bd/panasonic-signage"
//           >
//             Panasonic
//           </a>
//         </li>
//       </ul>
//     </li>

//     <li className="nav-item">
//       <a
//         className="nav-link"
//         href="https://www.startech.com.bd/laser-printer"
//       >
//         Laser Printer
//       </a>
//     </li>
//     <li className="nav-item">
//       <a
//         className="nav-link"
//         href="https://www.startech.com.bd/large-format-printer"
//       >
//         Large Format Printer
//       </a>
//     </li>
//   </ul>
//   <ul>
//     <li className="nav-item has-child">
//       <a
//         className="nav-link"
//         href="https://www.startech.com.bd/cartridge"
//       >
//         Cartridge
//       </a>
//       <ul className="drop-down drop-menu-2">
//         <li className="nav-item">
//           <a
//             className="nav-link"
//             href="https://www.startech.com.bd/canon-cartridge"
//           >
//             Canon
//           </a>
//         </li>
//         <li className="nav-item">
//           <a
//             className="nav-link"
//             href="https://www.startech.com.bd/epson-cartridge"
//           >
//             Epson
//           </a>
//         </li>
//         <li className="nav-item">
//           <a
//             className="nav-link"
//             href="https://www.startech.com.bd/hp-cartridge"
//           >
//             HP{" "}
//           </a>
//         </li>
//         <li className="nav-item">
//           <a
//             className="nav-link"
//             href="https://www.startech.com.bd/brother-cartridge"
//           >
//             Brother
//           </a>
//         </li>
//       </ul>
//     </li>
//     <li className="nav-item">
//       <a
//         className="nav-link"
//         href="https://www.startech.com.bd/printer-paper"
//       >
//         Printer Paper
//       </a>
//     </li>
//     <li className="nav-item has-child">
//       <a
//         className="nav-link"
//         href="https://www.startech.com.bd/office-equipment/Scanner"
//       >
//         Scanner
//       </a>
//       <ul className="drop-down drop-menu-2">
//         <li className="nav-item">
//           <a
//             className="nav-link"
//             href="https://www.startech.com.bd/office-equipment/Scanner/plustek"
//           >
//             Plustek
//           </a>
//         </li>
//         <li className="nav-item">
//           <a
//             className="nav-link"
//             href="https://www.startech.com.bd/canon-scanner"
//           >
//             Canon
//           </a>
//         </li>
//         <li className="nav-item">
//           <a
//             className="nav-link"
//             href="https://www.startech.com.bd/hp-scanner"
//           >
//             HP{" "}
//           </a>
//         </li>
//         <li className="nav-item">
//           <a
//             className="nav-link"
//             href="https://www.startech.com.bd/epson-scanner"
//           >
//             Epson
//           </a>
//         </li>
//         <li className="nav-item">
//           <a
//             className="nav-link"
//             href="https://www.startech.com.bd/brother-scanner"
//           >
//             Brother
//           </a>
//         </li>
//         <li className="nav-item">
//           <a
//             className="nav-link"
//             href="https://www.startech.com.bd/office-equipment/Scanner/avision"
//           >
//             Avision
//           </a>
//         </li>
//         <li className="nav-item">
//           <a
//             className="nav-link"
//             href="https://www.startech.com.bd/fujitsu-scanner"
//           >
//             Fujitsu
//           </a>
//         </li>
//         <li className="nav-item">
//           <a
//             className="nav-link"
//             href="https://www.startech.com.bd/kodak-scanner"
//           >
//             Kodak{" "}
//           </a>
//         </li>
//       </ul>
//     </li>

//     <li className="nav-item">
//       <a
//         className="nav-link"
//         href="https://www.startech.com.bd/binding-machine"
//       >
//         Binding Machine
//       </a>
//     </li>
//     <li>
//       <a
//         href="https://www.startech.com.bd/office-equipment"
//         className="see-all"
//       >
//         Show All Office Equipment
//       </a>
//     </li>
//   </ul>
// </div>
// </li>

// <li className="nav-item has-child">
// <a
//   className="nav-link"
//   href="https://www.startech.com.bd/Security-Camera"
// >
//   Security
// </a>
// <ul className="drop-down drop-menu-1">
//   <li className="nav-item has-child">
//     <a
//       className="nav-link"
//       href="https://www.startech.com.bd/wifi-camera"
//     >
//       Portable WiFi Camera
//     </a>
//     <ul className="drop-down drop-menu-2">
//       <li className="nav-item">
//         <a
//           className="nav-link"
//           href="https://www.startech.com.bd/dahua-wifi-camera"
//         >
//           Dahua
//         </a>
//       </li>
//       <li className="nav-item">
//         <a
//           className="nav-link"
//           href="https://www.startech.com.bd/ezviz-wifi-camera"
//         >
//           EZVIZ
//         </a>
//       </li>
//       <li className="nav-item">
//         <a
//           className="nav-link"
//           href="https://www.startech.com.bd/jovision-wifi-camera"
//         >
//           Jovision
//         </a>
//       </li>
//       <li className="nav-item">
//         <a
//           className="nav-link"
//           href="https://www.startech.com.bd/tp-link-wifi-camera"
//         >
//           TP-Link
//         </a>
//       </li>
//       <li className="nav-item">
//         <a
//           className="nav-link"
//           href="https://www.startech.com.bd/srihome-wifi-camera"
//         >
//           SriHome
//         </a>
//       </li>
//       <li className="nav-item">
//         <a
//           className="nav-link"
//           href="https://www.startech.com.bd/tenda-wifi-camera"
//         >
//           Tenda
//         </a>
//       </li>
//       <li className="nav-item">
//         <a
//           className="nav-link"
//           href="https://www.startech.com.bd/xiaomi-wifi-camera"
//         >
//           Xiaomi
//         </a>
//       </li>
//       <li className="nav-item">
//         <a
//           className="nav-link"
//           href="https://www.startech.com.bd/uniview-wifi-camera"
//         >
//           Uniview{" "}
//         </a>
//       </li>
//       <li className="nav-item">
//         <a
//           className="nav-link"
//           href="https://www.startech.com.bd/vimtag-wifi-camera"
//         >
//           Vimtag
//         </a>
//       </li>
//     </ul>
//   </li>
//   <li className="nav-item has-child">
//     <a
//       className="nav-link"
//       href="https://www.startech.com.bd/Security-Camera/ip-camera"
//     >
//       IP Camera
//     </a>
//     <ul className="drop-down drop-menu-2">
//       <li className="nav-item">
//         <a
//           className="nav-link"
//           href="https://www.startech.com.bd/Security-Camera/ip-camera/Dahua-IPCamera"
//         >
//           Dahua
//         </a>
//       </li>
//       <li className="nav-item">
//         <a
//           className="nav-link"
//           href="https://www.startech.com.bd/Security-Camera/ip-camera/Jovision-IPCamera"
//         >
//           Jovision
//         </a>
//       </li>
//       <li className="nav-item">
//         <a
//           className="nav-link"
//           href="https://www.startech.com.bd/Security-Camera/ip-camera/Hikvision-IPCamera"
//         >
//           Hikvision
//         </a>
//       </li>
//       <li className="nav-item">
//         <a
//           className="nav-link"
//           href="https://www.startech.com.bd/havit-ip-camera"
//         >
//           Havit
//         </a>
//       </li>
//       <li className="nav-item">
//         <a
//           className="nav-link"
//           href="https://www.startech.com.bd/uniview-ip-camera"
//         >
//           Uniview{" "}
//         </a>
//       </li>
//       <li className="nav-item">
//         <a
//           className="nav-link"
//           href="https://www.startech.com.bd/tp-link-ip-camera"
//         >
//           TP-Link
//         </a>
//       </li>
//       <li className="nav-item">
//         <a
//           className="nav-link"
//           href="https://www.startech.com.bd/tiandy-ip-camera"
//         >
//           Tiandy
//         </a>
//       </li>
//     </ul>
//   </li>
//   <li className="nav-item has-child">
//     <a
//       className="nav-link"
//       href="https://www.startech.com.bd/Security-Camera/cc-camera"
//     >
//       CC Camera
//     </a>
//     <ul className="drop-down drop-menu-2">
//       <li className="nav-item">
//         <a
//           className="nav-link"
//           href="https://www.startech.com.bd/Security-Camera/cc-camera/dahua-cc-camera"
//         >
//           Dahua
//         </a>
//       </li>
//       <li className="nav-item">
//         <a
//           className="nav-link"
//           href="https://www.startech.com.bd/Security-Camera/cc-camera/jovision-cc-camera"
//         >
//           Jovision
//         </a>
//       </li>
//       <li className="nav-item">
//         <a
//           className="nav-link"
//           href="https://www.startech.com.bd/uniview-cc-camera"
//         >
//           Uniview{" "}
//         </a>
//       </li>
//       <li className="nav-item">
//         <a
//           className="nav-link"
//           href="https://www.startech.com.bd/Security-Camera/cc-camera/hikvision-cc-camera"
//         >
//           Hikvision
//         </a>
//       </li>
//       <li className="nav-item">
//         <a
//           className="nav-link"
//           href="https://www.startech.com.bd/armor-cc-camera"
//         >
//           ARMOR
//         </a>
//       </li>
//     </ul>
//   </li>
//   <li className="nav-item has-child">
//     <a
//       className="nav-link"
//       href="https://www.startech.com.bd/Security-Camera/ptz-camera"
//     >
//       PTZ Camera
//     </a>
//     <ul className="drop-down drop-menu-2">
//       <li className="nav-item">
//         <a
//           className="nav-link"
//           href="https://www.startech.com.bd/dahua-ptz-camera"
//         >
//           {" "}
//           Dahua
//         </a>
//       </li>
//       <li className="nav-item">
//         <a
//           className="nav-link"
//           href="https://www.startech.com.bd/uniview-ptz-camera"
//         >
//           Uniview
//         </a>
//       </li>
//       <li className="nav-item">
//         <a
//           className="nav-link"
//           href="https://www.startech.com.bd/jovision-ptz-camera"
//         >
//           Jovision
//         </a>
//       </li>
//       <li className="nav-item">
//         <a
//           className="nav-link"
//           href="https://www.startech.com.bd/tp-link-ptz-camera"
//         >
//           TP-Link
//         </a>
//       </li>
//       <li className="nav-item">
//         <a
//           className="nav-link"
//           href="https://www.startech.com.bd/tiandy-ptz-camera"
//         >
//           Tiandy
//         </a>
//       </li>
//     </ul>
//   </li>
//   <li className="nav-item has-child">
//     <a
//       className="nav-link"
//       href="https://www.startech.com.bd/cc-camera-package"
//     >
//       CC Camera Package
//     </a>
//     <ul className="drop-down drop-menu-2">
//       <li className="nav-item">
//         <a
//           className="nav-link"
//           href="https://www.startech.com.bd/hikvision-cc-camera-package"
//         >
//           Hikvision
//         </a>
//       </li>
//       <li className="nav-item">
//         <a
//           className="nav-link"
//           href="https://www.startech.com.bd/dahua-cc-camera-package"
//         >
//           Dahua
//         </a>
//       </li>
//     </ul>
//   </li>
//   <li className="nav-item has-child">
//     <a
//       className="nav-link"
//       href="https://www.startech.com.bd/ip-camera-package"
//     >
//       IP Camera Package
//     </a>
//     <ul className="drop-down drop-menu-2">
//       <li className="nav-item">
//         <a
//           className="nav-link"
//           href="https://www.startech.com.bd/hikvision-ip-camera-package"
//         >
//           Hikvision
//         </a>
//       </li>
//       <li className="nav-item">
//         <a
//           className="nav-link"
//           href="https://www.startech.com.bd/dahua-ip-camera-package"
//         >
//           Dahua
//         </a>
//       </li>
//       <li className="nav-item">
//         <a
//           className="nav-link"
//           href="https://www.startech.com.bd/tp-link-ip-camera-package"
//         >
//           TP-Link
//         </a>
//       </li>
//     </ul>
//   </li>
//   <li className="nav-item has-child">
//     <a
//       className="nav-link"
//       href="https://www.startech.com.bd/Security-Camera/dvr"
//     >
//       DVR
//     </a>
//     <ul className="drop-down drop-menu-2">
//       <li className="nav-item">
//         <a
//           className="nav-link"
//           href="https://www.startech.com.bd/Security-Camera/dvr/jovision"
//         >
//           Jovision
//         </a>
//       </li>
//       <li className="nav-item">
//         <a
//           className="nav-link"
//           href="https://www.startech.com.bd/Security-Camera/dvr/hikvision"
//         >
//           Hikvision
//         </a>
//       </li>
//     </ul>
//   </li>
//   <li className="nav-item has-child">
//     <a
//       className="nav-link"
//       href="https://www.startech.com.bd/Security-Camera/nvr"
//     >
//       NVR
//     </a>
//     <ul className="drop-down drop-menu-2">
//       <li className="nav-item">
//         <a
//           className="nav-link"
//           href="https://www.startech.com.bd/dahua-nvr"
//         >
//           Dahua
//         </a>
//       </li>
//       <li className="nav-item">
//         <a
//           className="nav-link"
//           href="https://www.startech.com.bd/hikvision-nvr"
//         >
//           Hikvision
//         </a>
//       </li>
//       <li className="nav-item">
//         <a
//           className="nav-link"
//           href="https://www.startech.com.bd/jovision-nvr"
//         >
//           Jovision
//         </a>
//       </li>
//       <li className="nav-item">
//         <a
//           className="nav-link"
//           href="https://www.startech.com.bd/uniview-nvr"
//         >
//           Uniview
//         </a>
//       </li>
//       <li className="nav-item">
//         <a
//           className="nav-link"
//           href="https://www.startech.com.bd/tp-link-nvr"
//         >
//           TP-Link
//         </a>
//       </li>
//       <li className="nav-item">
//         <a
//           className="nav-link"
//           href="https://www.startech.com.bd/tiandy-nvr"
//         >
//           Tiandy
//         </a>
//       </li>
//     </ul>
//   </li>
//   <li className="nav-item has-child">
//     <a
//       className="nav-link"
//       href="https://www.startech.com.bd/Security-Camera/xvr"
//     >
//       XVR
//     </a>
//     <ul className="drop-down drop-menu-2">
//       <li className="nav-item">
//         <a
//           className="nav-link"
//           href="https://www.startech.com.bd/dahua-xvr"
//         >
//           Dahua
//         </a>
//       </li>
//       <li className="nav-item">
//         <a
//           className="nav-link"
//           href="https://www.startech.com.bd/uniview-xvr"
//         >
//           Uniview{" "}
//         </a>
//       </li>
//       <li className="nav-item">
//         <a
//           className="nav-link"
//           href="https://www.startech.com.bd/jovision-xvr"
//         >
//           Jovision
//         </a>
//       </li>
//     </ul>
//   </li>
//   <li className="nav-item">
//     <a
//       className="nav-link"
//       href="https://www.startech.com.bd/Security-Camera/cc-camera-accessories"
//     >
//       CC Camera Accessories
//     </a>
//   </li>
//   <li className="nav-item has-child">
//     <a
//       className="nav-link"
//       href="https://www.startech.com.bd/Security-Camera/door-lock"
//     >
//       Door Lock
//     </a>
//     <ul className="drop-down drop-menu-2">
//       <li className="nav-item">
//         <a
//           className="nav-link"
//           href="https://www.startech.com.bd/Security-Camera/door-lock/zkteco-door-lock"
//         >
//           ZKTeco
//         </a>
//       </li>
//       <li className="nav-item">
//         <a
//           className="nav-link"
//           href="https://www.startech.com.bd/stata-door-lock"
//         >
//           STATA
//         </a>
//       </li>
//       <li className="nav-item">
//         <a
//           className="nav-link"
//           href="https://www.startech.com.bd/smartx-door-lock"
//         >
//           SmartX
//         </a>
//       </li>
//       <li className="nav-item">
//         <a
//           className="nav-link"
//           href="https://www.startech.com.bd/smartlife-door-lock"
//         >
//           SmartLife
//         </a>
//       </li>
//       <li className="nav-item">
//         <a
//           className="nav-link"
//           href="https://www.startech.com.bd/Security-Camera/door-lock/non-brand-door-lock"
//         >
//           Others
//         </a>
//       </li>
//     </ul>
//   </li>
//   <li className="nav-item">
//     <a
//       className="nav-link"
//       href="https://www.startech.com.bd/Security-Camera/home-security-door-bell"
//     >
//       Smart Door Bell
//     </a>
//   </li>
//   <li className="nav-item has-child">
//     <a
//       className="nav-link"
//       href="https://www.startech.com.bd/Security-Camera/access-control"
//     >
//       Access Control
//     </a>
//     <ul className="drop-down drop-menu-2">
//       <li className="nav-item">
//         <a
//           className="nav-link"
//           href="https://www.startech.com.bd/Security-Camera/access-control/zkteco-access"
//         >
//           ZKTeco
//         </a>
//       </li>
//       <li className="nav-item">
//         <a
//           className="nav-link"
//           href="https://www.startech.com.bd/hikvision-access-control"
//         >
//           Hikvision
//         </a>
//       </li>
//       <li className="nav-item">
//         <a
//           className="nav-link"
//           href="https://www.startech.com.bd/Security-Camera/access-control/onspot-access-control"
//         >
//           Onspot
//         </a>
//       </li>
//       <li className="nav-item">
//         <a
//           className="nav-link"
//           href="https://www.startech.com.bd/access-control-accessories"
//         >
//           Access Control Accessories
//         </a>
//       </li>
//     </ul>
//   </li>
//   <li className="nav-item">
//     <a
//       className="nav-link"
//       href="https://www.startech.com.bd/entrance-control"
//     >
//       Entrance Control
//     </a>
//   </li>
//   <li className="nav-item">
//     <a
//       className="nav-link"
//       href="https://www.startech.com.bd/digital-locker"
//     >
//       Digital Locker &amp; Vault
//     </a>
//   </li>
//   <li className="nav-item">
//     <a
//       className="nav-link"
//       href="https://www.startech.com.bd/kvm-switch"
//     >
//       KVM Switch
//     </a>
//   </li>
//   <li>
//     <a
//       href="https://www.startech.com.bd/Security-Camera"
//       className="see-all"
//     >
//       Show All Security
//     </a>
//   </li>
// </ul>
// </li>
// <li className="nav-item has-child">
// <a
//   className="nav-link"
//   href="https://www.startech.com.bd/server-networking"
// >
//   Server &amp; Storage
// </a>
// <ul className="drop-down drop-menu-1">
//   <li className="nav-item has-child">
//     <a
//       className="nav-link"
//       href="https://www.startech.com.bd/server-networking/server"
//     >
//       Server
//     </a>
//     <ul className="drop-down drop-menu-2">
//       <li className="nav-item">
//         <a
//           className="nav-link"
//           href="https://www.startech.com.bd/server-networking/server/dell-server"
//         >
//           Dell
//         </a>
//       </li>
//       <li className="nav-item">
//         <a
//           className="nav-link"
//           href="https://www.startech.com.bd/hpe-server"
//         >
//           HPE
//         </a>
//       </li>
//       <li className="nav-item">
//         <a
//           className="nav-link"
//           href="https://www.startech.com.bd/server-networking/server/cisco-server"
//         >
//           Cisco
//         </a>
//       </li>
//       <li className="nav-item">
//         <a
//           className="nav-link"
//           href="https://www.startech.com.bd/asus-server"
//         >
//           ASUS
//         </a>
//       </li>
//     </ul>
//   </li>
//   <li className="nav-item">
//     <a
//       className="nav-link"
//       href="https://www.startech.com.bd/server-hdd"
//     >
//       Server HDD
//     </a>
//   </li>
//   <li>
//     <a
//       href="https://www.startech.com.bd/server-networking"
//       className="see-all"
//     >
//       Show All Server &amp; Storage
//     </a>
//   </li>
// </ul>
// </li>

const HeadMegaMenu = () => {
  return (
    <nav className="navbar" id="main-nav">
      <div className="container">
        <ul className="navbar-nav">
          <li className="nav-item has-child">
            <a className="nav-link" href="https://www.startech.com.bd/desktops">
              Desktop
            </a>
            <ul className="drop-down drop-menu-1">
              <li className="nav-item">
                <a
                  className="nav-link"
                  href="https://www.startech.com.bd/special-pc"
                >
                  Desktop Offer
                </a>
              </li>
              <li className="nav-item has-child">
                <a
                  className="nav-link"
                  href="https://www.startech.com.bd/desktops/star-pc"
                >
                  Star PC
                </a>
                <ul className="drop-down drop-menu-2">
                  <li className="nav-item">
                    <a
                      className="nav-link"
                      href="https://www.startech.com.bd/intel-pc"
                    >
                      Intel PC
                    </a>
                  </li>
                  <li className="nav-item">
                    <a
                      className="nav-link"
                      href="https://www.startech.com.bd/ryzen-pc"
                    >
                      Ryzen PC
                    </a>
                  </li>
                </ul>
              </li>

              <li className="nav-item">
                <a
                  className="nav-link"
                  href="https://www.startech.com.bd/apple-mac-mini"
                >
                  Apple Mac Mini
                </a>
              </li>

              <li>
                <a
                  href="https://www.startech.com.bd/desktops"
                  className="see-all"
                >
                  Show All Desktop
                </a>
              </li>
            </ul>
          </li>
          <li className="nav-item has-child">
            <a
              className="nav-link"
              href="https://www.startech.com.bd/laptop-notebook"
            >
              Laptop
            </a>
            <ul className="drop-down drop-menu-1">
              <li className="nav-item has-child">
                <a
                  className="nav-link"
                  href="https://www.startech.com.bd/laptop-notebook/laptop"
                >
                  All Laptop
                </a>
                <ul className="drop-down drop-menu-2">
                  <li className="nav-item">
                    <a
                      className="nav-link"
                      href="https://www.startech.com.bd/avita-laptop"
                    >
                      AVITA_Laptop
                    </a>
                  </li>
                  <li className="nav-item">
                    <a
                      className="nav-link"
                      href="https://www.startech.com.bd/lenovo-laptop"
                    >
                      Lenovo
                    </a>
                  </li>
                  <li className="nav-item">
                    <a
                      className="nav-link"
                      href="https://www.startech.com.bd/laptop-notebook/laptop/msi-laptop"
                    >
                      MSI
                    </a>
                  </li>

                  <li className="nav-item">
                    <a
                      className="nav-link"
                      href="https://www.startech.com.bd/walton-laptop"
                    >
                      Walton
                    </a>
                  </li>
                </ul>
              </li>
              <li>
                <a
                  href="https://www.startech.com.bd/laptop-notebook"
                  className="see-all"
                >
                  Show All Laptop
                </a>
              </li>
            </ul>
          </li>
          <li className="nav-item has-child multi-col">
            <a className="nav-link" href="https://www.startech.com.bd/monitor">
              Monitor
            </a>
            <div className="drop-down drop-menu-1">
              <ul>
                <li className="nav-item">
                  <a
                    className="nav-link"
                    href="https://www.startech.com.bd/monitor/msi"
                  >
                    MSI
                  </a>
                </li>
                <li className="nav-item">
                  <a
                    className="nav-link"
                    href="https://www.startech.com.bd/aoc-monitor"
                  >
                    AOC
                  </a>
                </li>
                <li className="nav-item">
                  <a
                    className="nav-link"
                    href="https://www.startech.com.bd/dahua-monitor"
                  >
                    Dahua
                  </a>
                </li>
              </ul>
              <ul>
                <li className="nav-item">
                  <a
                    className="nav-link"
                    href="https://www.startech.com.bd/pc-power-monitor"
                  >
                    PC Power
                  </a>
                </li>

                <li>
                  <a
                    href="https://www.startech.com.bd/monitor"
                    className="see-all"
                  >
                    Show All Monitor
                  </a>
                </li>
              </ul>
            </div>
          </li>
          <li className="nav-item has-child multi-col">
            <a
              className="nav-link"
              href="https://www.startech.com.bd/office-equipment"
            >
              Office Equipment
            </a>
            <div className="drop-down drop-menu-1">
              <ul>
                <li className="nav-item has-child">
                  <a
                    className="nav-link"
                    href="https://www.startech.com.bd/projector"
                  >
                    Projector
                  </a>
                  <ul className="drop-down drop-menu-2">
                    <li className="nav-item">
                      <a
                        className="nav-link"
                        href="https://www.startech.com.bd/projector/infocus"
                      >
                        InFocus
                      </a>
                    </li>

                    <li className="nav-item">
                      <a
                        className="nav-link"
                        href="https://www.startech.com.bd/xinji-projector"
                      >
                        XINJI{" "}
                      </a>
                    </li>
                    <li className="nav-item">
                      <a
                        className="nav-link"
                        href="https://www.startech.com.bd/projection-screen"
                      >
                        Projection Screen
                      </a>
                    </li>
                    <li className="nav-item">
                      <a
                        className="nav-link"
                        href="https://www.startech.com.bd/projector-mount"
                      >
                        Projector Mount
                      </a>
                    </li>
                  </ul>
                </li>

                <li className="nav-item">
                  <a
                    className="nav-link"
                    href="https://www.startech.com.bd/video-wall"
                  >
                    Video Wall
                  </a>
                </li>
                <li className="nav-item has-child">
                  <a
                    className="nav-link"
                    href="https://www.startech.com.bd/office-equipment/signage"
                  >
                    Signage
                  </a>
                  <ul className="drop-down drop-menu-2">
                    <li className="nav-item">
                      <a
                        className="nav-link"
                        href="https://www.startech.com.bd/benq-signage"
                      >
                        BenQ
                      </a>
                    </li>
                    <li className="nav-item">
                      <a
                        className="nav-link"
                        href="https://www.startech.com.bd/viewsonic-signage"
                      >
                        ViewSonic
                      </a>
                    </li>
                    <li className="nav-item">
                      <a
                        className="nav-link"
                        href="https://www.startech.com.bd/lg-signage"
                      >
                        LG
                      </a>
                    </li>
                    <li className="nav-item">
                      <a
                        className="nav-link"
                        href="https://www.startech.com.bd/panasonic-signage"
                      >
                        Panasonic
                      </a>
                    </li>
                  </ul>
                </li>

                <li className="nav-item">
                  <a
                    className="nav-link"
                    href="https://www.startech.com.bd/laser-printer"
                  >
                    Laser Printer
                  </a>
                </li>
                <li className="nav-item">
                  <a
                    className="nav-link"
                    href="https://www.startech.com.bd/large-format-printer"
                  >
                    Large Format Printer
                  </a>
                </li>
              </ul>
              <ul>
                <li className="nav-item has-child">
                  <a
                    className="nav-link"
                    href="https://www.startech.com.bd/cartridge"
                  >
                    Cartridge
                  </a>
                  <ul className="drop-down drop-menu-2">
                    <li className="nav-item">
                      <a
                        className="nav-link"
                        href="https://www.startech.com.bd/canon-cartridge"
                      >
                        Canon
                      </a>
                    </li>
                    <li className="nav-item">
                      <a
                        className="nav-link"
                        href="https://www.startech.com.bd/epson-cartridge"
                      >
                        Epson
                      </a>
                    </li>
                    <li className="nav-item">
                      <a
                        className="nav-link"
                        href="https://www.startech.com.bd/hp-cartridge"
                      >
                        HP{" "}
                      </a>
                    </li>
                    <li className="nav-item">
                      <a
                        className="nav-link"
                        href="https://www.startech.com.bd/brother-cartridge"
                      >
                        Brother
                      </a>
                    </li>
                  </ul>
                </li>
                <li className="nav-item">
                  <a
                    className="nav-link"
                    href="https://www.startech.com.bd/printer-paper"
                  >
                    Printer Paper
                  </a>
                </li>
                <li className="nav-item has-child">
                  <a
                    className="nav-link"
                    href="https://www.startech.com.bd/office-equipment/Scanner"
                  >
                    Scanner
                  </a>
                  <ul className="drop-down drop-menu-2">
                    <li className="nav-item">
                      <a
                        className="nav-link"
                        href="https://www.startech.com.bd/office-equipment/Scanner/plustek"
                      >
                        Plustek
                      </a>
                    </li>
                    <li className="nav-item">
                      <a
                        className="nav-link"
                        href="https://www.startech.com.bd/canon-scanner"
                      >
                        Canon
                      </a>
                    </li>
                    <li className="nav-item">
                      <a
                        className="nav-link"
                        href="https://www.startech.com.bd/hp-scanner"
                      >
                        HP{" "}
                      </a>
                    </li>
                    <li className="nav-item">
                      <a
                        className="nav-link"
                        href="https://www.startech.com.bd/epson-scanner"
                      >
                        Epson
                      </a>
                    </li>
                    <li className="nav-item">
                      <a
                        className="nav-link"
                        href="https://www.startech.com.bd/brother-scanner"
                      >
                        Brother
                      </a>
                    </li>
                    <li className="nav-item">
                      <a
                        className="nav-link"
                        href="https://www.startech.com.bd/office-equipment/Scanner/avision"
                      >
                        Avision
                      </a>
                    </li>
                    <li className="nav-item">
                      <a
                        className="nav-link"
                        href="https://www.startech.com.bd/fujitsu-scanner"
                      >
                        Fujitsu
                      </a>
                    </li>
                    <li className="nav-item">
                      <a
                        className="nav-link"
                        href="https://www.startech.com.bd/kodak-scanner"
                      >
                        Kodak{" "}
                      </a>
                    </li>
                  </ul>
                </li>

                <li className="nav-item">
                  <a
                    className="nav-link"
                    href="https://www.startech.com.bd/binding-machine"
                  >
                    Binding Machine
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.startech.com.bd/office-equipment"
                    className="see-all"
                  >
                    Show All Office Equipment
                  </a>
                </li>
              </ul>
            </div>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default HeadMegaMenu;
// import { menuData } from "@/constants";
// import React from "react";

// const HeadMegaMenu = () => {
//   const renderMenu = (menu, dropMenuClass = "drop-menu-1") => (
//     <li
//       className={`nav-item ${menu.subMenu ? "has-child" : ""}`}
//       key={menu.title}
//     >
//       <a className="nav-link" href={menu.link}>
//         {menu.title}
//       </a>
//       {menu.subMenu && (
//         <ul className={`drop-down ${dropMenuClass}`}>
//           {menu.subMenu.map((subMenuItem, index) =>
//             renderMenu(subMenuItem, `drop-menu-${index + 2}`)
//           )}
//         </ul>
//       )}
//     </li>
//   );

//   return (
//     <nav className="navbar" id="main-nav">
//       <div className="container">
//         <ul className="navbar-nav">
//           {menuData.map((menu) => renderMenu(menu))}
//         </ul>
//       </div>
//     </nav>
//   );
// };

// export default HeadMegaMenu;
{
  /* <nav className="navbar" id="main-nav">
<div className="container">
  <ul className="navbar-nav">
    <li className="nav-item has-child">
      <a className="nav-link" href="https://www.startech.com.bd/desktops">
        Desktop
      </a>
      <ul className="drop-down drop-menu-1">
        <li className="nav-item">
          <a
            className="nav-link"
            href="https://www.startech.com.bd/special-pc"
          >
            Desktop Offer
          </a>
        </li>
        <li className="nav-item has-child">
          <a
            className="nav-link"
            href="https://www.startech.com.bd/desktops/star-pc"
          >
            Star PC
          </a>
          <ul className="drop-down drop-menu-2">
            <li className="nav-item">
              <a
                className="nav-link"
                href="https://www.startech.com.bd/intel-pc"
              >
                Intel PC
              </a>
            </li>
            <li className="nav-item">
              <a
                className="nav-link"
                href="https://www.startech.com.bd/ryzen-pc"
              >
                Ryzen PC
              </a>
            </li>
          </ul>
        </li>
       
        <li className="nav-item">
          <a
            className="nav-link"
            href="https://www.startech.com.bd/apple-mac-mini"
          >
            Apple Mac Mini
          </a>
        </li>
     
        <li>
          <a
            href="https://www.startech.com.bd/desktops"
            className="see-all"
          >
            Show All Desktop
          </a>
        </li>
      </ul>
    </li>
    <li className="nav-item has-child">
      <a
        className="nav-link"
        href="https://www.startech.com.bd/laptop-notebook"
      >
        Laptop
      </a>
      <ul className="drop-down drop-menu-1">
        <li className="nav-item has-child">
          <a
            className="nav-link"
            href="https://www.startech.com.bd/laptop-notebook/laptop"
          >
            All Laptop
          </a>
          <ul className="drop-down drop-menu-2">
            <li className="nav-item">
              <a
                className="nav-link"
                href="https://www.startech.com.bd/avita-laptop"
              >
                AVITA_Laptop
              </a>
            </li>
            <li className="nav-item">
              <a
                className="nav-link"
                href="https://www.startech.com.bd/lenovo-laptop"
              >
                Lenovo
              </a>
            </li>
            <li className="nav-item">
              <a
                className="nav-link"
                href="https://www.startech.com.bd/laptop-notebook/laptop/msi-laptop"
              >
                MSI
              </a>
            </li>
            
            <li className="nav-item">
              <a
                className="nav-link"
                href="https://www.startech.com.bd/walton-laptop"
              >
                Walton
              </a>
            </li>
          </ul>
        </li>
        <li>
          <a
            href="https://www.startech.com.bd/laptop-notebook"
            className="see-all"
          >
            Show All Laptop
          </a>
        </li>
      </ul>
    </li>

    <li className="nav-item has-child multi-col">
      <a className="nav-link" href="https://www.startech.com.bd/monitor">
        Monitor
      </a>
      <div className="drop-down drop-menu-1">
        <ul>
          <li className="nav-item">
            <a
              className="nav-link"
              href="https://www.startech.com.bd/monitor/msi"
            >
              MSI
            </a>
          </li>
          <li className="nav-item">
            <a
              className="nav-link"
              href="https://www.startech.com.bd/aoc-monitor"
            >
              AOC
            </a>
          </li>
          <li className="nav-item">
            <a
              className="nav-link"
              href="https://www.startech.com.bd/dahua-monitor"
            >
              Dahua
            </a>
          </li>
        </ul>
        <ul>
          <li className="nav-item">
            <a
              className="nav-link"
              href="https://www.startech.com.bd/pc-power-monitor"
            >
              PC Power
            </a>
          </li>
         

          <li>
            <a
              href="https://www.startech.com.bd/monitor"
              className="see-all"
            >
              Show All Monitor
            </a>
          </li>
        </ul>
      </div>
    </li>
    <li className="nav-item has-child multi-col">
      <a
        className="nav-link"
        href="https://www.startech.com.bd/office-equipment"
      >
        Office Equipment
      </a>
      <div className="drop-down drop-menu-1">
        <ul>
          <li className="nav-item has-child">
            <a
              className="nav-link"
              href="https://www.startech.com.bd/projector"
            >
              Projector
            </a>
            <ul className="drop-down drop-menu-2">
              <li className="nav-item">
                <a
                  className="nav-link"
                  href="https://www.startech.com.bd/projector/infocus"
                >
                  InFocus
                </a>
              </li>

              <li className="nav-item">
                <a
                  className="nav-link"
                  href="https://www.startech.com.bd/xinji-projector"
                >
                  XINJI{" "}
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link"
                  href="https://www.startech.com.bd/projection-screen"
                >
                  Projection Screen
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link"
                  href="https://www.startech.com.bd/projector-mount"
                >
                  Projector Mount
                </a>
              </li>
            </ul>
          </li>

          <li className="nav-item">
            <a
              className="nav-link"
              href="https://www.startech.com.bd/video-wall"
            >
              Video Wall
            </a>
          </li>
          <li className="nav-item has-child">
            <a
              className="nav-link"
              href="https://www.startech.com.bd/office-equipment/signage"
            >
              Signage
            </a>
            <ul className="drop-down drop-menu-2">
              <li className="nav-item">
                <a
                  className="nav-link"
                  href="https://www.startech.com.bd/benq-signage"
                >
                  BenQ
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link"
                  href="https://www.startech.com.bd/viewsonic-signage"
                >
                  ViewSonic
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link"
                  href="https://www.startech.com.bd/lg-signage"
                >
                  LG
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link"
                  href="https://www.startech.com.bd/panasonic-signage"
                >
                  Panasonic
                </a>
              </li>
            </ul>
          </li>

          <li className="nav-item">
            <a
              className="nav-link"
              href="https://www.startech.com.bd/laser-printer"
            >
              Laser Printer
            </a>
          </li>
          <li className="nav-item">
            <a
              className="nav-link"
              href="https://www.startech.com.bd/large-format-printer"
            >
              Large Format Printer
            </a>
          </li>
        </ul>
        <ul>
          <li className="nav-item has-child">
            <a
              className="nav-link"
              href="https://www.startech.com.bd/cartridge"
            >
              Cartridge
            </a>
            <ul className="drop-down drop-menu-2">
              <li className="nav-item">
                <a
                  className="nav-link"
                  href="https://www.startech.com.bd/canon-cartridge"
                >
                  Canon
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link"
                  href="https://www.startech.com.bd/epson-cartridge"
                >
                  Epson
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link"
                  href="https://www.startech.com.bd/hp-cartridge"
                >
                  HP{" "}
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link"
                  href="https://www.startech.com.bd/brother-cartridge"
                >
                  Brother
                </a>
              </li>
            </ul>
          </li>
          <li className="nav-item">
            <a
              className="nav-link"
              href="https://www.startech.com.bd/printer-paper"
            >
              Printer Paper
            </a>
          </li>
          <li className="nav-item has-child">
            <a
              className="nav-link"
              href="https://www.startech.com.bd/office-equipment/Scanner"
            >
              Scanner
            </a>
            <ul className="drop-down drop-menu-2">
              <li className="nav-item">
                <a
                  className="nav-link"
                  href="https://www.startech.com.bd/office-equipment/Scanner/plustek"
                >
                  Plustek
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link"
                  href="https://www.startech.com.bd/canon-scanner"
                >
                  Canon
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link"
                  href="https://www.startech.com.bd/hp-scanner"
                >
                  HP{" "}
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link"
                  href="https://www.startech.com.bd/epson-scanner"
                >
                  Epson
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link"
                  href="https://www.startech.com.bd/brother-scanner"
                >
                  Brother
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link"
                  href="https://www.startech.com.bd/office-equipment/Scanner/avision"
                >
                  Avision
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link"
                  href="https://www.startech.com.bd/fujitsu-scanner"
                >
                  Fujitsu
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link"
                  href="https://www.startech.com.bd/kodak-scanner"
                >
                  Kodak{" "}
                </a>
              </li>
            </ul>
          </li>

          <li className="nav-item">
            <a
              className="nav-link"
              href="https://www.startech.com.bd/binding-machine"
            >
              Binding Machine
            </a>
          </li>
          <li>
            <a
              href="https://www.startech.com.bd/office-equipment"
              className="see-all"
            >
              Show All Office Equipment
            </a>
          </li>
        </ul>
      </div>
    </li>

    <li className="nav-item has-child">
      <a
        className="nav-link"
        href="https://www.startech.com.bd/Security-Camera"
      >
        Security
      </a>
      <ul className="drop-down drop-menu-1">
        <li className="nav-item has-child">
          <a
            className="nav-link"
            href="https://www.startech.com.bd/wifi-camera"
          >
            Portable WiFi Camera
          </a>
          <ul className="drop-down drop-menu-2">
            <li className="nav-item">
              <a
                className="nav-link"
                href="https://www.startech.com.bd/dahua-wifi-camera"
              >
                Dahua
              </a>
            </li>
            <li className="nav-item">
              <a
                className="nav-link"
                href="https://www.startech.com.bd/ezviz-wifi-camera"
              >
                EZVIZ
              </a>
            </li>
            <li className="nav-item">
              <a
                className="nav-link"
                href="https://www.startech.com.bd/jovision-wifi-camera"
              >
                Jovision
              </a>
            </li>
            <li className="nav-item">
              <a
                className="nav-link"
                href="https://www.startech.com.bd/tp-link-wifi-camera"
              >
                TP-Link
              </a>
            </li>
            <li className="nav-item">
              <a
                className="nav-link"
                href="https://www.startech.com.bd/srihome-wifi-camera"
              >
                SriHome
              </a>
            </li>
            <li className="nav-item">
              <a
                className="nav-link"
                href="https://www.startech.com.bd/tenda-wifi-camera"
              >
                Tenda
              </a>
            </li>
            <li className="nav-item">
              <a
                className="nav-link"
                href="https://www.startech.com.bd/xiaomi-wifi-camera"
              >
                Xiaomi
              </a>
            </li>
            <li className="nav-item">
              <a
                className="nav-link"
                href="https://www.startech.com.bd/uniview-wifi-camera"
              >
                Uniview{" "}
              </a>
            </li>
            <li className="nav-item">
              <a
                className="nav-link"
                href="https://www.startech.com.bd/vimtag-wifi-camera"
              >
                Vimtag
              </a>
            </li>
          </ul>
        </li>
        <li className="nav-item has-child">
          <a
            className="nav-link"
            href="https://www.startech.com.bd/Security-Camera/ip-camera"
          >
            IP Camera
          </a>
          <ul className="drop-down drop-menu-2">
            <li className="nav-item">
              <a
                className="nav-link"
                href="https://www.startech.com.bd/Security-Camera/ip-camera/Dahua-IPCamera"
              >
                Dahua
              </a>
            </li>
            <li className="nav-item">
              <a
                className="nav-link"
                href="https://www.startech.com.bd/Security-Camera/ip-camera/Jovision-IPCamera"
              >
                Jovision
              </a>
            </li>
            <li className="nav-item">
              <a
                className="nav-link"
                href="https://www.startech.com.bd/Security-Camera/ip-camera/Hikvision-IPCamera"
              >
                Hikvision
              </a>
            </li>
            <li className="nav-item">
              <a
                className="nav-link"
                href="https://www.startech.com.bd/havit-ip-camera"
              >
                Havit
              </a>
            </li>
            <li className="nav-item">
              <a
                className="nav-link"
                href="https://www.startech.com.bd/uniview-ip-camera"
              >
                Uniview{" "}
              </a>
            </li>
            <li className="nav-item">
              <a
                className="nav-link"
                href="https://www.startech.com.bd/tp-link-ip-camera"
              >
                TP-Link
              </a>
            </li>
            <li className="nav-item">
              <a
                className="nav-link"
                href="https://www.startech.com.bd/tiandy-ip-camera"
              >
                Tiandy
              </a>
            </li>
          </ul>
        </li>
        <li className="nav-item has-child">
          <a
            className="nav-link"
            href="https://www.startech.com.bd/Security-Camera/cc-camera"
          >
            CC Camera
          </a>
          <ul className="drop-down drop-menu-2">
            <li className="nav-item">
              <a
                className="nav-link"
                href="https://www.startech.com.bd/Security-Camera/cc-camera/dahua-cc-camera"
              >
                Dahua
              </a>
            </li>
            <li className="nav-item">
              <a
                className="nav-link"
                href="https://www.startech.com.bd/Security-Camera/cc-camera/jovision-cc-camera"
              >
                Jovision
              </a>
            </li>
            <li className="nav-item">
              <a
                className="nav-link"
                href="https://www.startech.com.bd/uniview-cc-camera"
              >
                Uniview{" "}
              </a>
            </li>
            <li className="nav-item">
              <a
                className="nav-link"
                href="https://www.startech.com.bd/Security-Camera/cc-camera/hikvision-cc-camera"
              >
                Hikvision
              </a>
            </li>
            <li className="nav-item">
              <a
                className="nav-link"
                href="https://www.startech.com.bd/armor-cc-camera"
              >
                ARMOR
              </a>
            </li>
          </ul>
        </li>
        <li className="nav-item has-child">
          <a
            className="nav-link"
            href="https://www.startech.com.bd/Security-Camera/ptz-camera"
          >
            PTZ Camera
          </a>
          <ul className="drop-down drop-menu-2">
            <li className="nav-item">
              <a
                className="nav-link"
                href="https://www.startech.com.bd/dahua-ptz-camera"
              >
                {" "}
                Dahua
              </a>
            </li>
            <li className="nav-item">
              <a
                className="nav-link"
                href="https://www.startech.com.bd/uniview-ptz-camera"
              >
                Uniview
              </a>
            </li>
            <li className="nav-item">
              <a
                className="nav-link"
                href="https://www.startech.com.bd/jovision-ptz-camera"
              >
                Jovision
              </a>
            </li>
            <li className="nav-item">
              <a
                className="nav-link"
                href="https://www.startech.com.bd/tp-link-ptz-camera"
              >
                TP-Link
              </a>
            </li>
            <li className="nav-item">
              <a
                className="nav-link"
                href="https://www.startech.com.bd/tiandy-ptz-camera"
              >
                Tiandy
              </a>
            </li>
          </ul>
        </li>
        <li className="nav-item has-child">
          <a
            className="nav-link"
            href="https://www.startech.com.bd/cc-camera-package"
          >
            CC Camera Package
          </a>
          <ul className="drop-down drop-menu-2">
            <li className="nav-item">
              <a
                className="nav-link"
                href="https://www.startech.com.bd/hikvision-cc-camera-package"
              >
                Hikvision
              </a>
            </li>
            <li className="nav-item">
              <a
                className="nav-link"
                href="https://www.startech.com.bd/dahua-cc-camera-package"
              >
                Dahua
              </a>
            </li>
          </ul>
        </li>
        <li className="nav-item has-child">
          <a
            className="nav-link"
            href="https://www.startech.com.bd/ip-camera-package"
          >
            IP Camera Package
          </a>
          <ul className="drop-down drop-menu-2">
            <li className="nav-item">
              <a
                className="nav-link"
                href="https://www.startech.com.bd/hikvision-ip-camera-package"
              >
                Hikvision
              </a>
            </li>
            <li className="nav-item">
              <a
                className="nav-link"
                href="https://www.startech.com.bd/dahua-ip-camera-package"
              >
                Dahua
              </a>
            </li>
            <li className="nav-item">
              <a
                className="nav-link"
                href="https://www.startech.com.bd/tp-link-ip-camera-package"
              >
                TP-Link
              </a>
            </li>
          </ul>
        </li>
        <li className="nav-item has-child">
          <a
            className="nav-link"
            href="https://www.startech.com.bd/Security-Camera/dvr"
          >
            DVR
          </a>
          <ul className="drop-down drop-menu-2">
            <li className="nav-item">
              <a
                className="nav-link"
                href="https://www.startech.com.bd/Security-Camera/dvr/jovision"
              >
                Jovision
              </a>
            </li>
            <li className="nav-item">
              <a
                className="nav-link"
                href="https://www.startech.com.bd/Security-Camera/dvr/hikvision"
              >
                Hikvision
              </a>
            </li>
          </ul>
        </li>
        <li className="nav-item has-child">
          <a
            className="nav-link"
            href="https://www.startech.com.bd/Security-Camera/nvr"
          >
            NVR
          </a>
          <ul className="drop-down drop-menu-2">
            <li className="nav-item">
              <a
                className="nav-link"
                href="https://www.startech.com.bd/dahua-nvr"
              >
                Dahua
              </a>
            </li>
            <li className="nav-item">
              <a
                className="nav-link"
                href="https://www.startech.com.bd/hikvision-nvr"
              >
                Hikvision
              </a>
            </li>
            <li className="nav-item">
              <a
                className="nav-link"
                href="https://www.startech.com.bd/jovision-nvr"
              >
                Jovision
              </a>
            </li>
            <li className="nav-item">
              <a
                className="nav-link"
                href="https://www.startech.com.bd/uniview-nvr"
              >
                Uniview
              </a>
            </li>
            <li className="nav-item">
              <a
                className="nav-link"
                href="https://www.startech.com.bd/tp-link-nvr"
              >
                TP-Link
              </a>
            </li>
            <li className="nav-item">
              <a
                className="nav-link"
                href="https://www.startech.com.bd/tiandy-nvr"
              >
                Tiandy
              </a>
            </li>
          </ul>
        </li>
        <li className="nav-item has-child">
          <a
            className="nav-link"
            href="https://www.startech.com.bd/Security-Camera/xvr"
          >
            XVR
          </a>
          <ul className="drop-down drop-menu-2">
            <li className="nav-item">
              <a
                className="nav-link"
                href="https://www.startech.com.bd/dahua-xvr"
              >
                Dahua
              </a>
            </li>
            <li className="nav-item">
              <a
                className="nav-link"
                href="https://www.startech.com.bd/uniview-xvr"
              >
                Uniview{" "}
              </a>
            </li>
            <li className="nav-item">
              <a
                className="nav-link"
                href="https://www.startech.com.bd/jovision-xvr"
              >
                Jovision
              </a>
            </li>
          </ul>
        </li>
        <li className="nav-item">
          <a
            className="nav-link"
            href="https://www.startech.com.bd/Security-Camera/cc-camera-accessories"
          >
            CC Camera Accessories
          </a>
        </li>
        <li className="nav-item has-child">
          <a
            className="nav-link"
            href="https://www.startech.com.bd/Security-Camera/door-lock"
          >
            Door Lock
          </a>
          <ul className="drop-down drop-menu-2">
            <li className="nav-item">
              <a
                className="nav-link"
                href="https://www.startech.com.bd/Security-Camera/door-lock/zkteco-door-lock"
              >
                ZKTeco
              </a>
            </li>
            <li className="nav-item">
              <a
                className="nav-link"
                href="https://www.startech.com.bd/stata-door-lock"
              >
                STATA
              </a>
            </li>
            <li className="nav-item">
              <a
                className="nav-link"
                href="https://www.startech.com.bd/smartx-door-lock"
              >
                SmartX
              </a>
            </li>
            <li className="nav-item">
              <a
                className="nav-link"
                href="https://www.startech.com.bd/smartlife-door-lock"
              >
                SmartLife
              </a>
            </li>
            <li className="nav-item">
              <a
                className="nav-link"
                href="https://www.startech.com.bd/Security-Camera/door-lock/non-brand-door-lock"
              >
                Others
              </a>
            </li>
          </ul>
        </li>
        <li className="nav-item">
          <a
            className="nav-link"
            href="https://www.startech.com.bd/Security-Camera/home-security-door-bell"
          >
            Smart Door Bell
          </a>
        </li>
        <li className="nav-item has-child">
          <a
            className="nav-link"
            href="https://www.startech.com.bd/Security-Camera/access-control"
          >
            Access Control
          </a>
          <ul className="drop-down drop-menu-2">
            <li className="nav-item">
              <a
                className="nav-link"
                href="https://www.startech.com.bd/Security-Camera/access-control/zkteco-access"
              >
                ZKTeco
              </a>
            </li>
            <li className="nav-item">
              <a
                className="nav-link"
                href="https://www.startech.com.bd/hikvision-access-control"
              >
                Hikvision
              </a>
            </li>
            <li className="nav-item">
              <a
                className="nav-link"
                href="https://www.startech.com.bd/Security-Camera/access-control/onspot-access-control"
              >
                Onspot
              </a>
            </li>
            <li className="nav-item">
              <a
                className="nav-link"
                href="https://www.startech.com.bd/access-control-accessories"
              >
                Access Control Accessories
              </a>
            </li>
          </ul>
        </li>
        <li className="nav-item">
          <a
            className="nav-link"
            href="https://www.startech.com.bd/entrance-control"
          >
            Entrance Control
          </a>
        </li>
        <li className="nav-item">
          <a
            className="nav-link"
            href="https://www.startech.com.bd/digital-locker"
          >
            Digital Locker &amp; Vault
          </a>
        </li>
        <li className="nav-item">
          <a
            className="nav-link"
            href="https://www.startech.com.bd/kvm-switch"
          >
            KVM Switch
          </a>
        </li>
        <li>
          <a
            href="https://www.startech.com.bd/Security-Camera"
            className="see-all"
          >
            Show All Security
          </a>
        </li>
      </ul>
    </li>
    <li className="nav-item has-child">
      <a
        className="nav-link"
        href="https://www.startech.com.bd/server-networking"
      >
        Server &amp; Storage
      </a>
      <ul className="drop-down drop-menu-1">
        <li className="nav-item has-child">
          <a
            className="nav-link"
            href="https://www.startech.com.bd/server-networking/server"
          >
            Server
          </a>
          <ul className="drop-down drop-menu-2">
            <li className="nav-item">
              <a
                className="nav-link"
                href="https://www.startech.com.bd/server-networking/server/dell-server"
              >
                Dell
              </a>
            </li>
            <li className="nav-item">
              <a
                className="nav-link"
                href="https://www.startech.com.bd/hpe-server"
              >
                HPE
              </a>
            </li>
            <li className="nav-item">
              <a
                className="nav-link"
                href="https://www.startech.com.bd/server-networking/server/cisco-server"
              >
                Cisco
              </a>
            </li>
            <li className="nav-item">
              <a
                className="nav-link"
                href="https://www.startech.com.bd/asus-server"
              >
                ASUS
              </a>
            </li>
          </ul>
        </li>
        <li className="nav-item">
          <a
            className="nav-link"
            href="https://www.startech.com.bd/server-hdd"
          >
            Server HDD
          </a>
        </li>
        <li>
          <a
            href="https://www.startech.com.bd/server-networking"
            className="see-all"
          >
            Show All Server &amp; Storage
          </a>
        </li>
      </ul>
    </li>
  </ul>
</div>
</nav>
); */
}
