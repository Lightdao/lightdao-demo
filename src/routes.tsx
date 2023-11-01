import {
  MdHome,
  MdOutlineAccountCircle,
  MdOutlineFavoriteBorder,
  MdDashboard,
} from 'react-icons/md';
import Marketplace from './app/nfts/marketplace/page';
import NftMyCollection from './app/nfts/mycollection/page';
import NftCollection from './app/nfts/collection/page';
import NftFavorites from './app/nfts/favorites/page';
import { IRoute } from 'types/navigation';

const routes: IRoute[] = [
  {
  	name: 'Home',
  	layout: '/nfts',
  	path: '/marketplace',
  	icon: <MdHome className="text-inherit h-5 w-5" />,
  	component: <Marketplace />
  },
  {
  	name: 'Favorite NFTs',
  	layout: '/nfts',
  	path: '/favorites',
  	icon: <MdOutlineFavoriteBorder className="text-inherit h-5 w-5" />,
  	component: <NftFavorites />
  },
  {
    name: 'My Collection',
    layout: '/nfts',
    path: '/mycollection',
    icon: <MdOutlineAccountCircle className="text-inherit h-5 w-5" />,
    component: <NftMyCollection />
  },
  {
    name: 'Trending Collection',
    layout: '/nfts',
    path: '/collection',
    icon: <MdDashboard className="text-inherit h-5 w-5" />,
    component: <NftCollection />
  },
];
export default routes;
