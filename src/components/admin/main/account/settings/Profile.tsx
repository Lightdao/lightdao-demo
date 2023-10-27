import profileAvatar from '/public/img/avatars/avatar4.png';
import Card from 'components/card';
import Image from 'next/image';
const Profile = () => {
  return (
    <Card extra={'w-full py-[18px] px-[18px] h-[140px]'}>
      <div className="flex items-center gap-3">
        <div className="flex h-[90px] w-[90px] items-center justify-center rounded-full">
          <Image
            width="2"
            height="20"
            className="h-full w-full rounded-full"
            src={profileAvatar}
            alt="phot"
          />
        </div>
        <div>
          <p className="text-xl font-bold text-navy-700 dark:text-white">
            Adela Parkson
          </p>
          <p className="text-base text-gray-600">adela@horizon-ui.com</p>
        </div>
      </div>
    </Card>
  );
};

export default Profile;
