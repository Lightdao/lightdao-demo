import Image from 'next/image';

const Follow = (props: {
  name: string;
  username: string;
  photo: string;
  mb: string;
}) => {
  const { name, username, photo, mb } = props;
  return (
    <div className={`z-10 flex items-center justify-between ${mb} `}>
      <div className="flex items-center gap-3">
        <div className="h-12 w-12 rounded-full">
          <Image
            width="2"
            height="20"
            alt=""
            src={photo}
            className="h-full w-full rounded-full"
          />
        </div>
        <div className="">
          <p className="text-base font-bold text-navy-700 dark:text-white">
            {' '}
            {name}{' '}
          </p>
          <p className="text-sm font-medium text-gray-600"> {username} </p>
        </div>
      </div>
      <p className="mr-4 text-sm font-medium text-brand-500 dark:text-white">
        Follow
      </p>
    </div>
  );
};

export default Follow;
