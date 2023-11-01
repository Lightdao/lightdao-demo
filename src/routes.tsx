import {
  MdHome,
  MdOutlineShoppingCart,
  MdOutlineAccountCircle,
} from 'react-icons/md';
import Marketplace from './app/admin/nfts/marketplace/page';
import NftProfile from './app/admin/nfts/profile/page';

const routes = [
  {
  	name: 'Home',
  	layout: '/admin',
  	path: '/nfts/marketplace',
  	icon: <MdHome className="text-inherit h-5 w-5" />,
  	component: <Marketplace />,
  },
  {
    name: 'Profile',
    layout: '/admin',
    path: '/nfts/profile',
    icon: <MdOutlineAccountCircle className="text-inherit h-5 w-5" />,
    component: <NftProfile />,
  },
];
export default routes;
