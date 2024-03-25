import { FormEvent, useState } from "react";

type FormComponentProps = {
  handleSubmit: (e: FormEvent, query: string) => void;
};

export const FormComponent = ({ handleSubmit }: FormComponentProps) => {
  const [searchFocus, setSearchFocus] = useState(false);
  const [inputSearch, setInputSearch] = useState("");

  return (
    <form
      onSubmit={(e) => {
        handleSubmit(e, inputSearch);
        setInputSearch("");
      }}
      className="flex flex-col gap-5"
    >
      <input
        type="text"
        placeholder="Search query"
        className={`bg-primary-700 rounded-lg p-2 text-primary-50 transition-transform border-primary-500 border-solid border-2 outline-none w-96 ${
          searchFocus && "scale-110"
        }`}
        onChange={(e) => setInputSearch(e.target.value)}
        value={inputSearch}
        onFocus={() => setSearchFocus(true)}
        onBlur={() => setSearchFocus(false)}
      />
      <button
        type="submit"
        className="bg-primary-600 text-primary-50 p-3 rounded-md shadow-lg"
      >
        Submit
      </button>
    </form>
  );
};
