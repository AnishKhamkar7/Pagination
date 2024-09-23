import { useState, useEffect } from "react";
import axios from "axios";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Post from "./components/Post";
import Pagination from "./components/Pagination";

function App() {
  const [posts, setPosts] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [loading, setLoading] = useState(false);
  const [postOnPage, setPostOnPage] = useState(10);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      const res = await axios.get("https://jsonplaceholder.typicode.com/posts");
      setPosts(res.data);
      setLoading(false);
    };

    fetchData();
  }, []);

  const lastIndex = currentPage * postOnPage;
  const firstIndex = lastIndex - postOnPage;
  const postPerPage = posts.slice(firstIndex, lastIndex);
  const totalPost = posts.length;

  const paginatePage = (number) => {
    setCurrentPage(number);
  };

  return (
    <>
      <h1 className="">POSTS</h1>
      <Post loading={loading} posts={postPerPage} pos />

      <Pagination
        totalPages={Math.ceil(totalPost / postOnPage)}
        paginate={paginatePage}
      />
    </>
  );
}

export default App;
