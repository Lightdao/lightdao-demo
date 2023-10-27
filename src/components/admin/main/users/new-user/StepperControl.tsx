export default function StepperControl(props: {
  steps: {
    stepNo: number;
    name: string;
    highlighted?: boolean;
    selected?: boolean;
    completed?: boolean;
  }[];
  currentStep: number;
  handleClick: any;
}) {
  const { steps, currentStep, handleClick } = props;
  return (
    <div className="mt-4 flex flex-col justify-between px-3 pt-2 md:flex-row md:px-8">
      {currentStep === steps.length - 2 ? (
        <div />
      ) : (
        <button
          onClick={() => handleClick()}
          className={`mb-3 cursor-pointer rounded-xl bg-lightPrimary px-16 py-2 font-medium text-navy-700 transition duration-200 dark:bg-white/5 dark:text-white dark:hover:bg-white/10 dark:active:bg-white/20`}
        >
          Prev
        </button>
      )}

      <button
        onClick={() => handleClick("next")}
        className="linear cursor-pointer rounded-xl bg-brand-900 px-16 py-2 font-medium text-white transition duration-200 hover:bg-brand-800 active:bg-brand-700 dark:bg-brand-400 dark:hover:bg-brand-300 dark:active:opacity-90 md:ml-2"
      >
        {currentStep === steps.length ? "Submit" : "Next"}
      </button>
    </div>
  );
}
