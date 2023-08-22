interface Props {
  todo: string;
  setTodo: React.Dispatch<React.SetStateAction<string>>;
  handleAdd: (e: React.FormEvent) => void;
}

const InputField: React.FC<Props> = ({ todo, setTodo, handleAdd }) => {
  return (
    <form onSubmit={handleAdd} className="flex relative mt-12 items-center">
      <input
        type="input"
        value={todo}
        onChange={(e) => setTodo(e.target.value)}
        className=" rounded-3xl md:w-[500px] lg:w-[800px] px-4 py-4 border-none text-sm transition-all outline-none"
        placeholder="Enter a Task"
      />
      <button className="p-2 absolute right-0 mr-2 rounded-full border-none transition-all hover:bg-pink-600 hover:scale-75 bg-pink-400">
        Go
      </button>
    </form>
  );
};

export default InputField;
