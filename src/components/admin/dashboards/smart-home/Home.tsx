// Assets
import home from '/public/img/dashboards/home.png';
import Card from 'components/card';

const Home = () => {
  return (
    <Card
      extra={
        'bg-cover bg-no-repeat min-h-[320px] md:w-full md:h-full xl:w-full xl:h-full relative'
      }
      style={{ backgroundImage: `url(${home.src})` }}
    >
      <button className="absolute bottom-8 left-5 flex items-center justify-center rounded-full bg-homeButton px-4 py-2 text-base font-medium text-white backdrop-blur-md">
        More photos
      </button>
    </Card>
  );
};

export default Home;
