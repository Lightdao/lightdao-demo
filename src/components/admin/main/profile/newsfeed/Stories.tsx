import { Scrollbars } from 'react-custom-scrollbars-2';

// Assets
import avatar1 from '/public/img/avatars/avatar1.png';
import avatar10 from '/public/img/avatars/avatar10.png';
import avatar2 from '/public/img/avatars/avatar2.png';
import avatar3 from '/public/img/avatars/avatar3.png';
import avatar4 from '/public/img/avatars/avatar4.png';
import avatar5 from '/public/img/avatars/avatar5.png';
import avatar6 from '/public/img/avatars/avatar6.png';
import avatar8 from '/public/img/avatars/avatar8.png';
import avatar9 from '/public/img/avatars/avatar9.png';
import SeeStory from 'components/actions/SeeStory';
import { MdAdd } from 'react-icons/md';
import storyImage from '/public/img/profile/storyImage.png';
import Image from 'next/image';

const Stories = () => {
  return (
    <div className="rounded-[20px] bg-white bg-clip-border shadow-3xl shadow-shadow-500 dark:!bg-navy-800 dark:shadow-none lg:justify-between">
      <Scrollbars
        autoHide
        style={{ width: '100', height: 128, borderRadius: 30 }}
      >
        <div className="flex h-[128px] w-full items-center gap-[30px] px-8 py-4">
          <div className="mb-1 flex cursor-pointer flex-col items-center">
            <div className="flex h-14 w-14 items-center justify-center rounded-full border-[3px] border-[#FF5E62] p-px text-2xl text-navy-700 dark:text-white">
              <MdAdd />
            </div>
            <p className="mt-[8px] text-sm font-medium dark:text-white">
              Add Story
            </p>
          </div>
          <SeeStory
            content={
              <div className="relative h-[80vh] w-[500px]">
                <Image
                  fill
                  style={{ objectFit: 'contain' }}
                  className="z-[99] rounded-2xl"
                  src={storyImage}
                  alt=""
                />
              </div>
            }
            name="Alexander"
            photo={avatar2}
          />
          <SeeStory
            content={
              <div className="relative h-[80vh] w-[500px]">
                <Image
                  fill
                  style={{ objectFit: 'contain' }}
                  className="z-[99] rounded-2xl"
                  src={storyImage}
                  alt=""
                />
              </div>
            }
            name="Perdana"
            photo={avatar1}
          />
          <SeeStory
            content={
              <div className="relative h-[80vh] w-[500px]">
                <Image
                  fill
                  style={{ objectFit: 'contain' }}
                  className="z-[99] rounded-2xl"
                  src={storyImage}
                  alt=""
                />
              </div>
            }
            name="Sumesh"
            photo={avatar8}
          />
          <SeeStory
            content={
              <div className="relative h-[80vh] w-[500px]">
                <Image
                  fill
                  style={{ objectFit: 'contain' }}
                  className="z-[99] rounded-2xl"
                  src={storyImage}
                  alt=""
                />
              </div>
            }
            name="Esthera"
            photo={avatar4}
          />
          <SeeStory
            content={
              <div className="relative h-[80vh] w-[500px]">
                <Image
                  fill
                  style={{ objectFit: 'contain' }}
                  className="z-[99] rounded-2xl"
                  src={storyImage}
                  alt=""
                />
              </div>
            }
            name="Louis"
            photo={avatar5}
          />
          <SeeStory
            content={
              <div className="relative h-[80vh] w-[500px]">
                <Image
                  fill
                  style={{ objectFit: 'contain' }}
                  className="z-[99] rounded-2xl"
                  src={storyImage}
                  alt=""
                />
              </div>
            }
            name="Roberto"
            photo={avatar6}
          />
          <SeeStory
            content={
              <div className="relative h-[80vh] w-[500px]">
                <Image
                  fill
                  style={{ objectFit: 'contain' }}
                  className="z-[99] rounded-2xl"
                  src={storyImage}
                  alt=""
                />
              </div>
            }
            name="Su Jeo"
            photo={avatar10}
          />
          <SeeStory
            content={
              <div className="relative h-[80vh] w-[500px]">
                <Image
                  fill
                  style={{ objectFit: 'contain' }}
                  className="z-[99] rounded-2xl"
                  src={storyImage}
                  alt=""
                />
              </div>
            }
            name="Antonia"
            photo={avatar3}
          />
          <SeeStory
            content={
              <div className="relative h-[80vh] w-[500px]">
                <Image
                  fill
                  style={{ objectFit: 'contain' }}
                  className="z-[99] rounded-2xl"
                  src={storyImage}
                  alt=""
                />
              </div>
            }
            name="Markus"
            photo={avatar9}
          />
          <SeeStory
            content={
              <div className="relative h-[80vh] w-[500px]">
                <Image
                  fill
                  style={{ objectFit: 'contain' }}
                  className="z-[99] rounded-2xl"
                  src={storyImage}
                  alt=""
                />
              </div>
            }
            name="Su Jeo"
            photo={avatar10}
          />
          <SeeStory
            content={
              <div className="relative h-[80vh] w-[500px]">
                <Image
                  fill
                  style={{ objectFit: 'contain' }}
                  className="z-[99] rounded-2xl"
                  src={storyImage}
                  alt=""
                />
              </div>
            }
            name="Louis"
            photo={avatar5}
          />
          <SeeStory
            content={
              <div className="relative h-[80vh] w-[500px]">
                <Image
                  fill
                  style={{ objectFit: 'contain' }}
                  className="z-[99] rounded-2xl"
                  src={storyImage}
                  alt=""
                />
              </div>
            }
            name="Robert"
            photo={avatar8}
          />
          <SeeStory
            content={
              <div className="relative h-[80vh] w-[500px]">
                <Image
                  fill
                  style={{ objectFit: 'contain' }}
                  className="z-[99] rounded-2xl"
                  src={storyImage}
                  alt=""
                />
              </div>
            }
            name="Zobar"
            photo={avatar10}
          />
        </div>
      </Scrollbars>
    </div>
  );
};

export default Stories;
