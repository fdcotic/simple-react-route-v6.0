import { useParams, Link } from "react-router-dom";
import { useFetch } from "../hooks/useFetch";

const BlogDetails = () => {
  const params = useParams();
  const { data, loading, error } = useFetch(
    `https://jsonplaceholder.typicode.com/posts/${params.id}`
  );

  if (loading) return <p>Loading data...</p>;
  if (error) return <p>error...</p>;

  return (
    <>
      <h1>{data.id} - Blog Detail</h1>
      <h3>{data.title}</h3>
      <p>{data.body}</p>
      <Link to="/blog">Volver</Link>
    </>
  );
};

export default BlogDetails;
