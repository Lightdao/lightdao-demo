'use client';
import Filter from 'components/admin/main/profile/newsfeed/Filter';
import Post from 'components/admin/main/profile/newsfeed/Post';
import Stories from 'components/admin/main/profile/newsfeed/Stories';
import Trending from 'components/admin/main/profile/newsfeed/Trending';

const NewsFeed = () => {
  return (
    <div className="mt-3 flex h-full w-full flex-col gap-[18px] xl:flex-row">
      {/* story and feed */}
      <div className="h-full w-full rounded-[20px]">
        <div>
          <Stories />
        </div>
        <div className="mt-3">
          <Filter />
        </div>
        <div className="mt-3">
          <Post />
        </div>
      </div>

      {/* line */}
      <div className="flex w-0 bg-gray-200 dark:!bg-white/10 xl:w-px" />

      {/* right section */}
      <div className="h-full w-full xl:w-[538px]">
        <Trending />
      </div>
    </div>
  );
};

export default NewsFeed;
