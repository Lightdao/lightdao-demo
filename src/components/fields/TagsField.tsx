// Custom components
import { useState } from "react";
import { MdClose } from "react-icons/md";

function TagsField(props: {
  id?: string;
  label?: string;
  placeholder?: string;
  placeholderTags?: { name: string; id: number }[];
  onChange?: any;
  [x: string]: any;
}) {
  const { label, id, onChange, placeholderTags, placeholder, ...rest } = props;
  let initialTags = [
    {
      name: "chakra-ui",
      id: 1,
    },
    {
      name: "react",
      id: 2,
    },
    {
      name: "javascript",
      id: 3,
    },
  ];
  if (placeholderTags) initialTags = placeholderTags;
  const [tags, setTags] = useState(initialTags);

  const keyPress = (e: any) => {
    if (e.keyCode === 13) {
      setTags([
        ...tags,
        {
          name: e.target.value,
          id: tags.length === 0 ? 1 : tags[tags.length - 1].id + 1,
        },
      ]);
      e.target.value = "";
    }
  };

  return (
    <div>
      <label htmlFor={id} className={"mb-2 text-sm font-bold"}>
        {label}
      </label>
      <div
        className="min-h-10 h-stretch flex flex-row flex-wrap rounded-xl border border-gray-200 bg-none p-3 focus:border-brand-200 dark:!border-white/10"
        {...rest}
      >
        {tags.map((tag, index) => {
          return (
            <div
              className="align-center mb-1.5 mr-1.5 flex items-center rounded-xl bg-brand-500 py-0.5 px-3 text-sm font-medium"
              key={index}
            >
              <p className="mr-1 w-full text-white">{tag.name}</p>
              <MdClose
                className="justify-end text-white"
                onClick={() =>
                  setTags([...tags.filter((element) => element.id !== tag.id)])
                }
              />
            </div>
          );
        })}
        <input
          onChange={onChange}
          type="text"
          onKeyDown={(e) => keyPress(e)}
          id="username"
          placeholder={placeholder}
          className="flex h-[48px] w-full border-none bg-none p-0 text-sm outline-none dark:!bg-navy-800"
        />
      </div>
    </div>
  );
}

export default TagsField;
