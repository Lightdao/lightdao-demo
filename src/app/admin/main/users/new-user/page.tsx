'use client';
import { useState } from 'react';
import Stepper from 'components/admin/main/users/new-user/Stepper';
import StepperControl from 'components/admin/main/users/new-user/StepperControl';
import { UseContextProvider } from 'components/admin/main/users/new-user/contexts/StepperContext';
import UserInfo from 'components/admin/main/users/new-user/steps/UserInfo';
import Address from 'components/admin/main/users/new-user/steps/Address';
import Profile from 'components/admin/main/users/new-user/steps/Profile';
import Card from 'components/card';

const NewUser = () => {
  const [currentStep, setCurrentStep] = useState(1);

  const steps = [
    { stepNo: 1, name: 'User Info' },
    { stepNo: 2, name: 'Address' },
    { stepNo: 3, name: 'Profile' },
  ];
  const displayStep = (step: {
    stepNo: number;
    name: string;
    highlighted?: boolean;
    selected?: boolean;
    completed?: boolean;
  }) => {
    switch (step.stepNo) {
      case 1:
        return <UserInfo />;
      case 2:
        return <Address />;
      case 3:
        return <Profile />;
      default:
    }
  };

  const handleClick = (direction: string) => {
    let newStep = currentStep;

    direction === 'next' ? newStep++ : newStep--;
    // check if steps are within bounds
    newStep > 0 && newStep <= steps.length && setCurrentStep(newStep);
  };
  return (
    <div className="mt-3 h-full w-full">
      <div className="h-[350px] w-full rounded-[20px] bg-gradient-to-br from-brand-400 to-brand-600 md:h-[390px]" />
      <div className="w-md:2/3 mx-auto h-full w-5/6 md:px-3  3xl:w-7/12">
        <div className="-mt-[280px] w-full pb-10 md:-mt-[240px] md:px-[70px]">
          <Stepper
            action={setCurrentStep}
            steps={steps}
            currentStep={currentStep}
          />
        </div>

        <Card extra={'h-full mx-auto pb-3'}>
          <div className="rounded-[20px]">
            <UseContextProvider>
              {displayStep(steps[currentStep - 1])}
            </UseContextProvider>
          </div>
          {/* navigation button */}

          <StepperControl
            handleClick={handleClick}
            currentStep={currentStep}
            steps={steps}
          />
        </Card>
      </div>
    </div>
  );
};

export default NewUser;
