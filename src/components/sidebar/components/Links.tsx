/* eslint-disable */
import React from 'react';
import DashIcon from 'components/icons/DashIcon';
import { FaCircle } from 'react-icons/fa';
import {
  Accordion,
  AccordionButton,
  AccordionIcon,
  AccordionItem,
  AccordionPanel,
} from '@chakra-ui/accordion';
import { IRoute } from 'types/navigation';
import NavLink from 'components/link/NavLink';
import { useCallback } from 'react';
import { usePathname } from 'next/navigation';

export function SidebarLinks(props: { routes: IRoute[]; [x: string]: any }) {
  //  Chakra color mode
  const pathname = usePathname();

  const { routes, hovered, mini } = props;
  // verifies if routeName is the one active (in browser input)
  const activeRoute = useCallback(
    (routeName: string) => {
      return pathname?.includes(routeName);
    },
    [pathname],
  );

  const createLinks = (routes: IRoute[]) => {
    return routes.map((route, key) => {
      if (route.collapse) {
        return (
          <Accordion allowToggle key={key}>
            <AccordionItem mb="8px" border="none" key={key}>
              <AccordionButton
                display="flex"
                _hover={{
                  bg: 'unset',
                }}
                _focus={{
                  boxShadow: 'none',
                }}
                borderRadius="8px"
                w={{
                  sm: '100%',
                  xl: '100%',
                }}
                px={route.icon ? null : '0px'}
                py="0px"
                bg={'transparent'}
                ms={0}
                mb="4px"
              >
                {route.icon ? (
                  <div
                    className={`mb-1.5 flex w-full items-center pl-8 pr-7 ${
                      mini === false
                        ? ' justify-between'
                        : mini === true && hovered === true
                        ? ' justify-between'
                        : ' justify-center'
                    }`}
                  >
                    <div>
                      <div className="align-center flex w-full justify-center">
                        <div
                          className={`flex items-center justify-center ${
                            mini === false
                              ? 'mr-3.5'
                              : mini === true && hovered
                              ? 'mr-3.5'
                              : 'mx-auto'
                          } ${
                            activeRoute(route.path.toLowerCase())
                              ? 'text-brand-500 dark:text-white'
                              : 'text-gray-600'
                          } ${
                            activeRoute(route.path.toLowerCase())
                              ? '22px'
                              : '26px'
                          }`}
                        >
                          {route.icon}
                        </div>
                        <p
                          className={`mr-auto
                          ${
                            mini === false
                              ? 'block'
                              : mini === true && hovered === true
                              ? 'block'
                              : 'block xl:hidden'
                          } ${
                            activeRoute(route.path.toLowerCase())
                              ? 'text-700 text-navy-700 font-medium dark:text-white'
                              : 'font-medium text-gray-600'
                          } `}
                        >
                          {route.name}
                        </p>
                      </div>
                    </div>
                    <AccordionIcon
                      ms="auto"
                      className={`!text-gray-600 
                          ${
                            mini === false
                              ? 'block'
                              : mini === true && hovered === true
                              ? 'block'
                              : 'block xl:hidden'
                          }`}
                      display={
                        mini === false
                          ? 'block'
                          : mini === true && hovered === true
                          ? 'block'
                          : { base: 'block', xl: 'none' }
                      }
                      transform={route.icon ? null : 'translateX(-70%)'}
                    />
                  </div>
                ) : (
                  <div
                    className={`flex w-full items-center pb-0 pt-0 ${
                      mini === false
                        ? 'ml-5 pl-12'
                        : mini === true && hovered === true
                        ? 'ml-5 pl-12'
                        : 'ml-5 pl-12 xl:ml-[unset] xl:justify-center xl:pl-8 xl:pr-7 '
                    } pr-7`}
                  >
                    <div>
                      <p
                        className={`mr-auto text-sm font-medium ${
                          activeRoute(route.path.toLowerCase())
                            ? 'text-800 text-navy-700 dark:text-white'
                            : 'text-gray-600'
                        } ${
                          activeRoute(route.path.toLowerCase())
                            ? '22px'
                            : '26px'
                        }`}
                      >
                        {mini === false
                          ? route.name
                          : mini === true && hovered === true
                          ? route.name
                          : route.name[0]}
                      </p>
                    </div>
                    <AccordionIcon
                      ms="auto"
                      className={`!text-gray-600 
                          ${
                            mini === false
                              ? 'block'
                              : mini === true && hovered === true
                              ? 'block'
                              : 'block xl:hidden'
                          }`}
                      display={
                        mini === false
                          ? 'block'
                          : mini === true && hovered === true
                          ? 'block'
                          : 'none'
                      }
                      transform={null}
                    />
                  </div>
                )}
              </AccordionButton>
              <AccordionPanel
                pe={route.icon ? null : '0px'}
                py="0px"
                ps={
                  route.icon
                    ? mini === false
                      ? '8px'
                      : mini === true && hovered === true
                      ? '8px'
                      : 'base:8px xl:0px'
                    : mini === false
                    ? '8px'
                    : mini === true && hovered === true
                    ? '8px'
                    : 'base:8px xl:0px'
                }
                display={
                  mini === false
                    ? 'block'
                    : mini === true && hovered === true
                    ? 'block'
                    : 'base:block xl:flex'
                }
              >
                <ul>
                  {
                    route.icon
                      ? createLinks(route.items) // for bullet accordion links
                      : createAccordionLinks(route.items) // for non-bullet accordion links
                  }
                </ul>
              </AccordionPanel>
            </AccordionItem>
          </Accordion>
        );
      } else {
        return (
          <NavLink href={route.layout + route.path} key={key}>
            {route.icon ? (
              <div>
                <div className="relative mb-2 flex hover:cursor-pointer">
                  <li className="my-[3px] flex cursor-pointer px-8" key={key}>
                    <span
                      className={`mt-0.5 ${
                        activeRoute(route.path) === true
                          ? 'text-brand-500 font-bold dark:text-white'
                          : 'text-gray-600'
                      }`}
                    >
                      {route.icon ? route.icon : <DashIcon />}
                    </span>
                    <span
                      className={`ml-2 flex text-base ${
                        activeRoute(route.path) === true
                          ? 'text-navy-700 font-bold dark:text-white'
                          : 'text-gray-600'
                      }`}
                    >
                      {mini === false
                        ? route.name
                        : mini === true && hovered === true
                        ? route.name
                        : route.name[0]}
                    </span>
                  </li>
                  {activeRoute(route.path) ? (
                    <div className="bg-brand-500 absolute right-0 top-px h-9 w-1 rounded-lg" />
                  ) : null}
                </div>
                {/* <div className="w-full, mb-0 flex items-center justify-between pl-4">
                  <div>
                    <div>
                      <div
                        color={
                          activeRoute(route.path.toLowerCase())
                            ? 'brand-500'
                            : 'white'
                        }
                      >
                        {route.icon}
                      </div>
                      <p
                        color={
                          activeRoute(route.path.toLowerCase())
                            ? 'text-70'
                            : 'secondarygray-600'
                        }
                      >
                        {mini === false
                          ? route.name
                          : mini === true && hovered === true
                          ? route.name
                          : route.name[0]}
                      </p>
                    </div>
                  </div>
                </div> */}
              </div>
            ) : (
              <div
                className={`relative mb-2 flex ${
                  mini === false
                    ? ''
                    : mini === true && hovered === true
                    ? ''
                    : 'xl:justify-center'
                } hover:cursor-pointer`}
              >
                <li
                  className="my-[3px] flex cursor-pointer items-center px-[22px]"
                  key={key}
                >
                  <span
                    className={`flex text-sm leading-none ${
                      mini === false
                        ? 'ml-9'
                        : mini === true && hovered === true
                        ? 'ml-9'
                        : 'ml-9 xl:ml-0'
                    } ${
                      activeRoute(route.path) === true
                        ? 'text-navy-700 font-medium dark:text-white'
                        : 'font-medium text-gray-600'
                    }`}
                  >
                    {mini === false
                      ? route.name
                      : mini === true && hovered === true
                      ? route.name
                      : route.name[0]}
                  </span>
                </li>
              </div>
            )}
          </NavLink>
        );
      }
    });
  };
  const createAccordionLinks = (routes: IRoute[]) => {
    return routes.map((route, index) => {
      if (
        route.layout === '/admin' ||
        route.layout === '/auth' ||
        route.layout === '/rtl'
      ) {
        return (
          <NavLink key={index} href={route.layout + route.path}>
            <div
              className={`relative ${
                mini === false
                  ? 'ml-7'
                  : mini === true && hovered === true
                  ? 'ml-7'
                  : 'ml-7 xl:ml-4'
              } mb-1 flex hover:cursor-pointer`}
            >
              <li
                className="my-[3px] flex cursor-pointer items-center px-8"
                key={index}
              >
                <span className={`text-brand-500 dark:text-white`}>
                  <FaCircle className={`mr-0.5 h-1.5 w-1.5`} />
                </span>
                <span
                  className={`ml-2 flex text-sm ${
                    activeRoute(route.path) === true
                      ? 'text-navy-700 font-medium dark:text-white'
                      : 'font-medium text-gray-600'
                  }`}
                >
                  {mini === false
                    ? route.name
                    : mini === true && hovered === true
                    ? route.name
                    : route.name[0]}
                </span>
              </li>
            </div>
          </NavLink>
        );
      }
    });
  };
  // BRAND
  return <>{createLinks(routes)}</>;
}

export default SidebarLinks;
