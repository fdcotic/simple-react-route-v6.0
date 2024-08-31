import { useEffect } from "react";
import { useFetch } from "../hooks/useFetch";
import { Link, useSearchParams } from "react-router-dom";

const Blog = () =>{

  const [searchParams,setSearchParams] = useSearchParams();

  const { data, loading, error } = useFetch(
    "https://jsonplaceholder.typicode.com/posts"
  );

  if(loading) return <p>Loading data...</p>
  if(error) return <p>error...</p>

  const handleChange = (e) => {
    let filter = e.target.value;

    if (filter) {
      setSearchParams({ filter: filter });
    } else {
      setSearchParams({});
    }
  };

    return (
      <>
        <h1>Blog</h1>
        <input
          type="text"
          name="filter"
          onChange={handleChange}
          className="form-control"
        ></input>
        <ul className="list-group">
          {data
            .filter((item) => {
              let filter = searchParams.get("filter");
              if (!filter) return true;
              let name = item.title.toLowerCase();
              return name.startsWith(filter.toLocaleLowerCase());
            })
            .map((item) => (
              <Link
                to={`/Blog/${item.id}`}
                id={item.id}
                className="list-group-item my-2"
                value={searchParams.get("filter") || ""}
              >
                {item.id} - {item.title}
              </Link>
            ))}
        </ul>
      </>
    );
};

export default Blog;