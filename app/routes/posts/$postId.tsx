import { useParams } from "remix";

const PostItem = () => {
  const params = useParams();

  return (
    <div>
      <h1>Post {params.postId} </h1>
    </div>
  );
};

export default PostItem;
