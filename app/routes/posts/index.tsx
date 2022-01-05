import { Link, LoaderFunction, useLoaderData } from "remix";

export const loader: LoaderFunction = () => {
  const data = {
    posts: [
      { id: 1, title: "title 1", body: "body 1" },
      { id: 2, title: "title 2", body: "body 2" },
      { id: 3, title: "title 3", body: "body 3" },
    ],
  };

  return data;
};

const PostItems = () => {
  const { posts } = useLoaderData();

  return (
    <div className="p-4">
      <div className="flex justify-between px-4 py-4">
        <p className="text-4xl font-bold ">Posts</p>
        <Link
          to="new"
          className="px-6 py-2 rounded-lg bg-blue-500 
          hover:bg-blue-400
        text-white "
        >
          New Post
        </Link>
      </div>

      <ul className="grid  sm:grid-cols-2 lg:grid-cols-3">
        {posts.map((post: any) => (
          <Link
            to={`${post.id}`}
            key={post.id}
            className="flex justify-between  border-2 border-black
        m-4 p-4 rounded-lg text-xl"
          >
            <li>
              <p>{post.title} </p>
            </li>
          </Link>
        ))}
      </ul>
    </div>
  );
};

export default PostItems;
