const menuArray = [
  {
    label: "Desktop",
    url: "https://www.startech.com.bd/desktops",
    children: [
      {
        label: "Desktop Offer",
        url: "https://www.startech.com.bd/special-pc",
      },
      {
        label: "Star PC",
        url: "https://www.startech.com.bd/desktops/star-pc",
        children: [
          {
            label: "Intel PC",
            url: "https://www.startech.com.bd/intel-pc",
          },
          {
            label: "Ryzen PC",
            url: "https://www.startech.com.bd/ryzen-pc",
          },
        ],
      },
      {
        label: "Apple Mac Mini",
        url: "https://www.startech.com.bd/apple-mac-mini",
      },
      {
        label: "Show All Desktop",
        url: "https://www.startech.com.bd/desktops",
        className: "see-all",
      },
    ],
  },
  {
    label: "Laptop",
    url: "https://www.startech.com.bd/laptop-notebook",
    children: [
      {
        label: "All Laptop",
        url: "https://www.startech.com.bd/laptop-notebook/laptop",
        children: [
          {
            label: "AVITA Laptop",
            url: "https://www.startech.com.bd/avita-laptop",
          },
          {
            label: "Lenovo",
            url: "https://www.startech.com.bd/lenovo-laptop",
          },
          {
            label: "MSI",
            url: "https://www.startech.com.bd/laptop-notebook/laptop/msi-laptop",
          },
          {
            label: "Walton",
            url: "https://www.startech.com.bd/walton-laptop",
          },
        ],
      },
      {
        label: "Show All Laptop",
        url: "https://www.startech.com.bd/laptop-notebook",
        className: "see-all",
      },
    ],
  },
  {
    label: "Server & Storage",
    url: "https://www.startech.com.bd/server-networking",
    children: [
      {
        label: "Server",
        url: "https://www.startech.com.bd/server-networking/server",
        children: [
          {
            label: "Dell",
            url: "https://www.startech.com.bd/server-networking/server/dell-server",
          },
          {
            label: "HPE",
            url: "https://www.startech.com.bd/hpe-server",
          },
          {
            label: "Cisco",
            url: "https://www.startech.com.bd/server-networking/server/cisco-server",
          },
          {
            label: "ASUS",
            url: "https://www.startech.com.bd/asus-server",
          },
        ],
      },
      {
        label: "Server HDD",
        url: "https://www.startech.com.bd/server-hdd",
      },
      {
        label: "Show All Server & Storage",
        url: "https://www.startech.com.bd/server-networking",
        className: "see-all",
      },
    ],
  },
  {
    label: "Security",
    url: "https://www.startech.com.bd/Security-Camera",
    children: [
      {
        label: "Portable WiFi Camera",
        url: "https://www.startech.com.bd/wifi-camera",
        children: [
          {
            label: "Dahua",
            url: "https://www.startech.com.bd/dahua-wifi-camera",
          },
          {
            label: "EZVIZ",
            url: "https://www.startech.com.bd/ezviz-wifi-camera",
          },
          {
            label: "Jovision",
            url: "https://www.startech.com.bd/jovision-wifi-camera",
          },
          {
            label: "TP-Link",
            url: "https://www.startech.com.bd/tp-link-wifi-camera",
          },
          {
            label: "SriHome",
            url: "https://www.startech.com.bd/srihome-wifi-camera",
          },
          {
            label: "Tenda",
            url: "https://www.startech.com.bd/tenda-wifi-camera",
          },
          {
            label: "Xiaomi",
            url: "https://www.startech.com.bd/xiaomi-wifi-camera",
          },
          {
            label: "Uniview",
            url: "https://www.startech.com.bd/uniview-wifi-camera",
          },
          {
            label: "Vimtag",
            url: "https://www.startech.com.bd/vimtag-wifi-camera",
          },
        ],
      },
      {
        label: "IP Camera",
        url: "https://www.startech.com.bd/Security-Camera/ip-camera",
        children: [
          {
            label: "Dahua",
            url: "https://www.startech.com.bd/Security-Camera/ip-camera/Dahua-IPCamera",
          },
          {
            label: "Jovision",
            url: "https://www.startech.com.bd/Security-Camera/ip-camera/Jovision-IPCamera",
          },
          {
            label: "Hikvision",
            url: "https://www.startech.com.bd/Security-Camera/ip-camera/Hikvision-IPCamera",
          },
          {
            label: "Havit",
            url: "https://www.startech.com.bd/havit-ip-camera",
          },
          {
            label: "Uniview",
            url: "https://www.startech.com.bd/uniview-ip-camera",
          },
          {
            label: "TP-Link",
            url: "https://www.startech.com.bd/tp-link-ip-camera",
          },
          {
            label: "Tiandy",
            url: "https://www.startech.com.bd/tiandy-ip-camera",
          },
        ],
      },
      {
        label: "CC Camera",
        url: "https://www.startech.com.bd/Security-Camera/cc-camera",
        children: [
          {
            label: "Dahua",
            url: "https://www.startech.com.bd/Security-Camera/cc-camera/dahua-cc-camera",
          },
          {
            label: "Jovision",
            url: "https://www.startech.com.bd/Security-Camera/cc-camera/jovision-cc-camera",
          },
          {
            label: "Uniview",
            url: "https://www.startech.com.bd/uniview-cc-camera",
          },
          {
            label: "Hikvision",
            url: "https://www.startech.com.bd/Security-Camera/cc-camera/hikvision-cc-camera",
          },
          {
            label: "ARMOR",
            url: "https://www.startech.com.bd/armor-cc-camera",
          },
        ],
      },
    ],
  },
  {
    label: "Monitor",
    url: "https://www.startech.com.bd/monitor",
    children: [
      { label: "MSI", url: "https://www.startech.com.bd/monitor/msi" },
      { label: "AOC", url: "https://www.startech.com.bd/aoc-monitor" },
      { label: "Dahua", url: "https://www.startech.com.bd/dahua-monitor" },
      {
        label: "PC Power",
        url: "https://www.startech.com.bd/pc-power-monitor",
      },
      {
        label: "Show All Monitor",
        url: "https://www.startech.com.bd/monitor",
        isShowAll: true,
      },
    ],
  },
  {
    label: "Office Equipment",
    url: "https://www.startech.com.bd/office-equipment",
    children: [
      {
        label: "Projector",
        url: "https://www.startech.com.bd/projector",
        children: [
          {
            label: "InFocus",
            url: "https://www.startech.com.bd/projector/infocus",
          },
          {
            label: "XINJI",
            url: "https://www.startech.com.bd/xinji-projector",
          },
          {
            label: "Projection Screen",
            url: "https://www.startech.com.bd/projection-screen",
          },
          {
            label: "Projector Mount",
            url: "https://www.startech.com.bd/projector-mount",
          },
        ],
      },
      { label: "Video Wall", url: "https://www.startech.com.bd/video-wall" },
      {
        label: "Signage",
        url: "https://www.startech.com.bd/office-equipment/signage",
        children: [
          { label: "BenQ", url: "https://www.startech.com.bd/benq-signage" },
          {
            label: "ViewSonic",
            url: "https://www.startech.com.bd/viewsonic-signage",
          },
          { label: "LG", url: "https://www.startech.com.bd/lg-signage" },
          {
            label: "Panasonic",
            url: "https://www.startech.com.bd/panasonic-signage",
          },
        ],
      },
      {
        label: "Laser Printer",
        url: "https://www.startech.com.bd/laser-printer",
      },
      {
        label: "Large Format Printer",
        url: "https://www.startech.com.bd/large-format-printer",
      },
      {
        label: "Cartridge",
        url: "https://www.startech.com.bd/cartridge",
        children: [
          {
            label: "Canon",
            url: "https://www.startech.com.bd/canon-cartridge",
          },
          {
            label: "Epson",
            url: "https://www.startech.com.bd/epson-cartridge",
          },
          { label: "HP", url: "https://www.startech.com.bd/hp-cartridge" },
          {
            label: "Brother",
            url: "https://www.startech.com.bd/brother-cartridge",
          },
        ],
      },
      {
        label: "Printer Paper",
        url: "https://www.startech.com.bd/printer-paper",
      },
      {
        label: "Scanner",
        url: "https://www.startech.com.bd/office-equipment/Scanner",
        children: [
          {
            label: "Plustek",
            url: "https://www.startech.com.bd/office-equipment/Scanner/plustek",
          },
          { label: "Canon", url: "https://www.startech.com.bd/canon-scanner" },
          { label: "HP", url: "https://www.startech.com.bd/hp-scanner" },
          { label: "Epson", url: "https://www.startech.com.bd/epson-scanner" },
          {
            label: "Brother",
            url: "https://www.startech.com.bd/brother-scanner",
          },
          {
            label: "Avision",
            url: "https://www.startech.com.bd/office-equipment/Scanner/avision",
          },
          {
            label: "Fujitsu",
            url: "https://www.startech.com.bd/fujitsu-scanner",
          },
          { label: "Kodak", url: "https://www.startech.com.bd/kodak-scanner" },
        ],
      },
      {
        label: "Binding Machine",
        url: "https://www.startech.com.bd/binding-machine",
      },
      {
        label: "Show All Office Equipment",
        url: "https://www.startech.com.bd/office-equipment",
        isShowAll: true,
      },
    ],
  },
];

const officeEquipmentCategories = [
  {
    label: "Monitor",
    url: "https://www.startech.com.bd/monitor",
    children: [
      { label: "MSI", url: "https://www.startech.com.bd/monitor/msi" },
      { label: "AOC", url: "https://www.startech.com.bd/aoc-monitor" },
      { label: "Dahua", url: "https://www.startech.com.bd/dahua-monitor" },
      {
        label: "PC Power",
        url: "https://www.startech.com.bd/pc-power-monitor",
      },
      {
        label: "Show All Monitor",
        url: "https://www.startech.com.bd/monitor",
        isShowAll: true,
      },
    ],
  },
  {
    label: "Office Equipment",
    url: "https://www.startech.com.bd/office-equipment",
    children: [
      {
        label: "Projector",
        url: "https://www.startech.com.bd/projector",
        children: [
          {
            label: "InFocus",
            url: "https://www.startech.com.bd/projector/infocus",
          },
          {
            label: "XINJI",
            url: "https://www.startech.com.bd/xinji-projector",
          },
          {
            label: "Projection Screen",
            url: "https://www.startech.com.bd/projection-screen",
          },
          {
            label: "Projector Mount",
            url: "https://www.startech.com.bd/projector-mount",
          },
        ],
      },
      { label: "Video Wall", url: "https://www.startech.com.bd/video-wall" },
      {
        label: "Signage",
        url: "https://www.startech.com.bd/office-equipment/signage",
        children: [
          { label: "BenQ", url: "https://www.startech.com.bd/benq-signage" },
          {
            label: "ViewSonic",
            url: "https://www.startech.com.bd/viewsonic-signage",
          },
          { label: "LG", url: "https://www.startech.com.bd/lg-signage" },
          {
            label: "Panasonic",
            url: "https://www.startech.com.bd/panasonic-signage",
          },
        ],
      },
      {
        label: "Laser Printer",
        url: "https://www.startech.com.bd/laser-printer",
      },
      {
        label: "Large Format Printer",
        url: "https://www.startech.com.bd/large-format-printer",
      },
      {
        label: "Cartridge",
        url: "https://www.startech.com.bd/cartridge",
        children: [
          {
            label: "Canon",
            url: "https://www.startech.com.bd/canon-cartridge",
          },
          {
            label: "Epson",
            url: "https://www.startech.com.bd/epson-cartridge",
          },
          { label: "HP", url: "https://www.startech.com.bd/hp-cartridge" },
          {
            label: "Brother",
            url: "https://www.startech.com.bd/brother-cartridge",
          },
        ],
      },
      {
        label: "Printer Paper",
        url: "https://www.startech.com.bd/printer-paper",
      },
      {
        label: "Scanner",
        url: "https://www.startech.com.bd/office-equipment/Scanner",
        children: [
          {
            label: "Plustek",
            url: "https://www.startech.com.bd/office-equipment/Scanner/plustek",
          },
          { label: "Canon", url: "https://www.startech.com.bd/canon-scanner" },
          { label: "HP", url: "https://www.startech.com.bd/hp-scanner" },
          { label: "Epson", url: "https://www.startech.com.bd/epson-scanner" },
          {
            label: "Brother",
            url: "https://www.startech.com.bd/brother-scanner",
          },
          {
            label: "Avision",
            url: "https://www.startech.com.bd/office-equipment/Scanner/avision",
          },
          {
            label: "Fujitsu",
            url: "https://www.startech.com.bd/fujitsu-scanner",
          },
          { label: "Kodak", url: "https://www.startech.com.bd/kodak-scanner" },
        ],
      },
      {
        label: "Binding Machine",
        url: "https://www.startech.com.bd/binding-machine",
      },
      {
        label: "Show All Office Equipment",
        url: "https://www.startech.com.bd/office-equipment",
        isShowAll: true,
      },
    ],
  },
];

const securityCategories = [
  {
    label: "Security",
    url: "https://www.startech.com.bd/Security-Camera",
    children: [
      {
        label: "Portable WiFi Camera",
        url: "https://www.startech.com.bd/wifi-camera",
        children: [
          {
            label: "Dahua",
            url: "https://www.startech.com.bd/dahua-wifi-camera",
          },
          {
            label: "EZVIZ",
            url: "https://www.startech.com.bd/ezviz-wifi-camera",
          },
          {
            label: "Jovision",
            url: "https://www.startech.com.bd/jovision-wifi-camera",
          },
          {
            label: "TP-Link",
            url: "https://www.startech.com.bd/tp-link-wifi-camera",
          },
          {
            label: "SriHome",
            url: "https://www.startech.com.bd/srihome-wifi-camera",
          },
          {
            label: "Tenda",
            url: "https://www.startech.com.bd/tenda-wifi-camera",
          },
          {
            label: "Xiaomi",
            url: "https://www.startech.com.bd/xiaomi-wifi-camera",
          },
          {
            label: "Uniview",
            url: "https://www.startech.com.bd/uniview-wifi-camera",
          },
          {
            label: "Vimtag",
            url: "https://www.startech.com.bd/vimtag-wifi-camera",
          },
        ],
      },
      {
        label: "IP Camera",
        url: "https://www.startech.com.bd/Security-Camera/ip-camera",
        children: [
          {
            label: "Dahua",
            url: "https://www.startech.com.bd/Security-Camera/ip-camera/Dahua-IPCamera",
          },
          {
            label: "Jovision",
            url: "https://www.startech.com.bd/Security-Camera/ip-camera/Jovision-IPCamera",
          },
          {
            label: "Hikvision",
            url: "https://www.startech.com.bd/Security-Camera/ip-camera/Hikvision-IPCamera",
          },
          {
            label: "Havit",
            url: "https://www.startech.com.bd/havit-ip-camera",
          },
          {
            label: "Uniview",
            url: "https://www.startech.com.bd/uniview-ip-camera",
          },
          {
            label: "TP-Link",
            url: "https://www.startech.com.bd/tp-link-ip-camera",
          },
          {
            label: "Tiandy",
            url: "https://www.startech.com.bd/tiandy-ip-camera",
          },
        ],
      },
      {
        label: "CC Camera",
        url: "https://www.startech.com.bd/Security-Camera/cc-camera",
        children: [
          {
            label: "Dahua",
            url: "https://www.startech.com.bd/Security-Camera/cc-camera/dahua-cc-camera",
          },
          {
            label: "Jovision",
            url: "https://www.startech.com.bd/Security-Camera/cc-camera/jovision-cc-camera",
          },
          {
            label: "Uniview",
            url: "https://www.startech.com.bd/uniview-cc-camera",
          },
          {
            label: "Hikvision",
            url: "https://www.startech.com.bd/Security-Camera/cc-camera/hikvision-cc-camera",
          },
          {
            label: "ARMOR",
            url: "https://www.startech.com.bd/armor-cc-camera",
          },
        ],
      },
    ],
  },
];
