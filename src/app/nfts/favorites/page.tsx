'use client';
import NftCard from 'components/card/NftCard';
import Nft2 from '/public/img/nfts/Nft2.png';
import Nft4 from '/public/img/nfts/Nft4.png';
import Nft5 from '/public/img/nfts/Nft5.png';
import Nft6 from '/public/img/nfts/Nft6.png';
import avatar1 from '/public/img/avatars/avatar1.png';
import avatar2 from '/public/img/avatars/avatar2.png';
import avatar3 from '/public/img/avatars/avatar3.png';

const NftFavorites = () => {
  return (
    <div className="mt-3 h-full w-full rounded-[20px]">
      <div className="mt-3">
        <div className="mt-[64px] grid grid-cols-1 gap-3 md:grid-cols-2 xl:grid-cols-4">
          <NftCard
            bidders={[avatar1, avatar2, avatar3]}
            title="Prince of peace"
            author="Nick Wilson"
            price="0.7"
            image={Nft2}
            isFavorite={true}
          />
          <NftCard
            bidders={[avatar1, avatar2, avatar3]}
            title="In the ashes"
            author="TearFund"
            price="0.91"
            image={Nft4}
            isFavorite={true}
          />
          <NftCard
            bidders={[avatar1, avatar2, avatar3]}
            title="Leading the way"
            author="Mark Benjamin"
            price="0.7"
            image={Nft5}
            isFavorite={true}
          />
          <NftCard
            bidders={[avatar1, avatar2, avatar3]}
            title="Lion of Judah"
            author="Patrick"
            price="2.91"
            image={Nft6}
            isFavorite={true}
          />
        </div>
      </div>
    </div>
  );
};

export default NftFavorites;
