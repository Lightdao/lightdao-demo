import { useState } from 'react';
import NavLink from 'components/link/NavLink';
import { FiAlignJustify } from 'react-icons/fi';

// Custom components
import dropdownMain from '/public/img/layout/dropdownMain.png';

// Assets
import { GoChevronDown } from 'react-icons/go';
import { IRoute } from 'types/navigation';
import routes from 'routes';

function NavbarAuth(props: {
  onOpenSidenav: () => void;
  sidebarWidth?: any;
  [x: string]: any;
}) {
  const { sidebarWidth, onOpenSidenav, ...rest } = props;
  const [openDashboard, setOpenDashboard] = useState(false);
  const [openNft, setOpenNft] = useState(false);
  const [openMain, setOpenMain] = useState(false);
  const [openAuth, setOpenAuth] = useState(false);

  // menus object
  let authObject = getLinksCollapse('Authentication');
  let mainObject = getLinksCollapse('Main Pages');
  let dashboardsObject = getLinks('Dashboards');
  let nftsObject = getLinks('NFTs');
  // menus links
  function getLinks(routeName: string) {
    let foundRoute = routes.filter(function (route) {
      return route.items && route.name === routeName;
    });
    return foundRoute[0].items;
  }

  function getLinksCollapse(routeName: string) {
    let foundRoute = routes.filter(
      (route) => route.items && route.name === routeName,
    );
    // let foundLinks: { name: string; layout?: string; path: string; component?: () => JSX.Element }[];
    let foundLinks: IRoute[] = [];
    if (foundRoute[0].items) {
      for (let link = 0; link < foundRoute[0].items.length; link++) {
        foundLinks.push(foundRoute[0].items[link]);
      }
      return foundLinks;
    }

    return foundLinks;
  }
  const createDashboardsLinks = (routes: IRoute[]) => {
    return routes.map((link, key) => {
      return (
        <NavLink
          key={key}
          href={link.layout + link.path}
          styles={{ maxWidth: 'max-content' }}
        >
          <p className="text-sm font-medium text-gray-600">{link.name}</p>
        </NavLink>
      );
    });
  };
  const createNftsLinks = (routes: IRoute[]) => {
    return routes.map((link, key) => {
      return (
        <NavLink
          key={key}
          href={link.layout + link.path}
          styles={{ maxWidth: 'max-content' }}
        >
          <p className="text-sm font-medium text-gray-600">{link.name}</p>
        </NavLink>
      );
    });
  };
  const createMainLinks = (routes: IRoute[]) => {
    return routes.map((link, key) => {
      if (link.collapse === true) {
        return (
          <div className="flex w-max flex-col flex-wrap" key={key}>
            <div className="mb-2 flex cursor-default items-center">
              <p className="mr-auto text-sm font-bold uppercase text-navy-700 dark:text-white">
                {link.name}
              </p>
            </div>
            <div className="flex w-max flex-col flex-wrap gap-1 dark:text-white">
              {createMainLinks(link.items)}
            </div>
          </div>
        );
      } else {
        return (
          <NavLink key={key} href={link.layout + link.path}>
            <p className="text-sm text-gray-600">{link.name}</p>
          </NavLink>
        );
      }
    });
  };
  const createAuthLinks = (routes: IRoute[]) => {
    return routes.map((link, key) => {
      if (link.collapse === true) {
        return (
          <div className="flex w-max flex-col flex-wrap" key={key}>
            <div className="mb-1 flex cursor-default items-center">
              <p className="mr-auto text-sm font-bold uppercase text-navy-700 dark:text-white">
                {link.name}
              </p>
            </div>
            <div className="flex flex-col flex-wrap gap-1">
              {createAuthLinks(link.items)}
            </div>
          </div>
        );
      } else {
        return (
          <NavLink key={key} href={link.layout + link.path}>
            <p className="text-sm text-gray-600">{link.name}</p>
          </NavLink>
        );
      }
    });
  };

  return (
    <div
      {...rest}
      className="z-[1] mx-auto flex h-[80px] w-full max-w-screen-xl items-center justify-between px-3 xl:items-end"
    >
      {/* horizon logo */}
      <a
        href="/admin/dashboards/default"
        className="leading-1 font-poppins text-[26px] font-bold uppercase text-white"
      >
        Light<span className="font-medium">DAO</span>
      </a>
      <span
        className="flex cursor-pointer text-xl text-white xl:hidden"
        onClick={onOpenSidenav}
      >
        <FiAlignJustify className="h-5 w-5" />
      </span>
      {/* menus */}
      <div className="mb-[6px] hidden items-center gap-3 xl:flex">
        {/* Dashboard submenu */}
        <div
          onMouseLeave={() => setOpenDashboard(false)}
          onMouseEnter={() => setOpenDashboard(true)}
          className="relative flex items-center gap-1 text-sm font-medium text-white"
        >
          <p className="cursor-pointer py-1">Dashboard</p>
          <p className="cursor-pointer">
            <GoChevronDown />
          </p>
          <div
            className={`duration-125 linear absolute -left-4 top-6 z-10 w-max origin-top-left py-2 transition-all ${
              openDashboard ? 'scale-100' : 'scale-0'
            }`}
          >
            <div
              className={`grid h-fit w-fit grid-cols-2 items-center gap-4 rounded-2xl bg-white px-3 py-3 shadow-xl shadow-shadow-500 dark:!bg-navy-700 dark:shadow-none`}
            >
              <div className="flex flex-col gap-2">
                {createDashboardsLinks(dashboardsObject)}
              </div>
              <div
                style={{ backgroundImage: `url(${dropdownMain.src})` }}
                className="h-28 w-28 rounded-xl bg-cover bg-no-repeat"
              />
            </div>
          </div>
        </div>
        {/* NFTs submenu */}
        <div
          onMouseLeave={() => setOpenNft(false)}
          onMouseEnter={() => setOpenNft(true)}
          className="relative flex items-center gap-1 text-sm font-medium text-white"
        >
          <p className="cursor-pointer py-1">NFTs</p>
          <p className="cursor-pointer">
            <GoChevronDown />
          </p>
          <div
            className={`duration-125 linear absolute -left-4 top-6 z-10 w-max origin-top-left py-2 transition-all ${
              openNft ? 'scale-100' : 'scale-0'
            }`}
          >
            <div
              className={`grid h-fit w-fit grid-cols-2 items-center gap-4 rounded-2xl bg-white px-3 py-3 shadow-xl shadow-shadow-500 dark:!bg-navy-700 dark:shadow-none`}
            >
              <div className="flex flex-col gap-2">
                {createNftsLinks(nftsObject)}
              </div>
              <div
                style={{ backgroundImage: `url(${dropdownMain.src})` }}
                className="h-28 w-28 rounded-xl bg-cover bg-no-repeat"
              />
            </div>
          </div>
        </div>
        {/* Main submenu */}
        <div
          onMouseLeave={() => setOpenMain(false)}
          onMouseEnter={() => setOpenMain(true)}
          className="relative flex items-center gap-1 text-sm font-medium text-white"
        >
          <p className="cursor-pointer py-1">Main Pages</p>
          <p className="cursor-pointer">
            <GoChevronDown />
          </p>
          <div
            className={`duration-125 linear absolute -left-4 top-6 z-10 w-max origin-top-left py-2 transition-all ${
              openMain ? 'scale-100' : 'scale-0'
            }`}
          >
            <div className="grid h-fit w-fit grid-cols-2 gap-4 rounded-2xl bg-white px-3 py-3 shadow-xl shadow-shadow-500 dark:!bg-navy-700 dark:shadow-none">
              <div className="grid grid-cols-2 gap-4">
                {createMainLinks(mainObject)}
              </div>
              <div
                style={{ backgroundImage: `url(${dropdownMain.src})` }}
                className="f-full col-span-1 rounded-xl bg-cover bg-no-repeat"
              />
            </div>
          </div>
        </div>
        {/* Auth submenu */}
        <div
          onMouseLeave={() => setOpenAuth(false)}
          onMouseEnter={() => setOpenAuth(true)}
          className="relative flex items-center gap-1 text-sm font-medium text-white"
        >
          <p className="cursor-pointer py-1">Authentication</p>
          <p className="cursor-pointer">
            <GoChevronDown />
          </p>
          <div
            className={`duration-125 linear absolute -left-4 top-6 z-10 w-max origin-top-left py-2 transition-all ${
              openAuth ? 'scale-100' : 'scale-0'
            }`}
          >
            <div className="grid h-fit w-fit grid-cols-2 gap-4 rounded-xl bg-white px-3 py-3 shadow-xl shadow-shadow-500 dark:!bg-navy-700 dark:shadow-none">
              <div className="grid grid-cols-2 gap-4">
                {createAuthLinks(authObject)}
              </div>

              <div
                style={{ backgroundImage: `url(${dropdownMain.src})` }}
                className="col-span-1 rounded-xl bg-cover bg-no-repeat"
              />
            </div>
          </div>
        </div>
      </div>
      <a
        target="blank"
        href="https://horizon-ui.com/pro?ref=live-pro-tailwind-react"
        className="hidden xl:flex"
      >
        <button className="linear hidden items-center justify-center rounded-3xl bg-white px-8 py-2 text-base font-medium text-brand-500 transition duration-200 hover:opacity-90 active:opacity-80 xl:flex">
          Buy Now
        </button>
      </a>
    </div>
  );
}

export default NavbarAuth;
