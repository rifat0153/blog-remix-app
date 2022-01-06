import { Link } from "remix";

const Test = () => {
  return (
    <>
      <div className="flex justify-between px-4 py-5">
        <p className="text-xl font-bold">Posts</p>
        <Link to="/posts" className="text-lg">
          Back
        </Link>
      </div>
      <div className="p-4">
        <form method="POST">
          <div className="flex flex-col  pb-2">
            <label htmlFor="title" className="pb-2 text-xl font-bold">
              Title
            </label>
            <input
              type="text"
              name="title"
              id="title"
              className="text-lg px-4 py-2 
              border-2 border-slate-400 rounded-md"
            />
          </div>
          <div className="flex flex-col pb-2">
            <label htmlFor="body" className="pb-2 font-bold text-xl">
              Post Body
            </label>
            <textarea
              name="body"
              id="body"
              className="text-lg px-4 py-2 
              border-2 border-slate-400 rounded-md"
            />
          </div>
        </form>
      </div>
    </>
  );
};

export default Test;
