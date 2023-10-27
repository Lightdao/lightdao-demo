import InputField from 'components/fields/InputField';
import TagsField from 'components/fields/TagsField';

const Pricing = () => {
  return (
    <div className="h-full w-full rounded-[20px] px-3 pt-7 md:px-8">
      {/* Header */}
      <h1 className="pt-[5px] text-xl font-bold text-navy-700 dark:text-white">
        Pricing
      </h1>
      {/* inputs */}
      <div className="mt-10 grid h-full w-full grid-cols-1 gap-3 md:grid-cols-2">
        {/* left side */}
        <div className="flex h-fit flex-col gap-3 md:col-span-2 md:grid md:grid-cols-3">
          <InputField
            label="Price"
            placeholder="eg. $99"
            id="price"
            type="text"
          />
          <InputField
            label="Unique Code"
            placeholder="eg. 4030120241"
            id="price"
            type="text"
          />

          <div className="mb-0">
            <label
              htmlFor="currency"
              className="ml-3 text-sm font-bold text-navy-700 dark:text-white"
            >
              Currency
            </label>
            <div className="w-full rounded-xl border border-gray-200 mt-2 py-3 px-2.5 text-sm text-gray-600 outline-none dark:!border-white/10 dark:!bg-navy-800">
              <select
                id="currency"
                className="w-full bg-white dark:!bg-navy-800 mb-0"
              >
                <option value="usd">USD</option>
                <option value="usd">EUR</option>
                <option value="usd">GBP</option>
              </select>
            </div>
          </div>
        </div>
        <div className="col-span-2">
          <TagsField />
        </div>
      </div>
    </div>
  );
};

export default Pricing;
