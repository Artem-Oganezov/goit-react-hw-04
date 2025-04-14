import { useState } from "react";
import "./App.css";
import axios from "axios";
import { useEffect } from "react";
import SearchBar from "./SearchBar/SearchBar";
import ImageGallery from "./ImageGallery/ImageGallery";
import LoadMoreBtn from "./LoadMoreBtn/LoadMoreBtn";
import Loader from "./Loader/Loader";
import { Toaster } from "react-hot-toast";
import ErrorMessage from "./ErrorMessage/ErrorMessage";

function App() {
  const [data, setData] = useState([]);
  const [query, setQuery] = useState("");
  const [page, setPage] = useState(1);
  const [isLoading, setIsLoading] = useState(false);
  const [totalPage, setTotalPage] = useState(1);
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    const controller = new AbortController();

    const fetchData = async () => {
      try {
        setIsLoading(true);
        const res = await axios.get("https://api.unsplash.com/search/photos", {
          headers: {
            Authorization:
              "Client-ID T_94gPQ09YDGXErTAc1pexDKhSwSitav9FE5_q8C7QY",
          },
          params: {
            page: page,
            per_page: 12,
            query: query,
            signal: controller.signal,
          },
        });

        if (page === 1) {
          setData(res.data.results);
        } else {
          setData((prev) => [...prev, ...res.data.results]);
        }
        setTotalPage(res.data.total_pages);
      } catch (error) {
        console.log(error);
        setIsError(true);
      } finally {
        setIsLoading(false);
      }
    };

    if (query) {
      fetchData();
    }
    return () => {
      controller.abort();
    };
  }, [query, page]);

  const handleChangeValue = (newQuery) => {
    setQuery(newQuery);
    setPage(1);
    setData([]);
  };

  const loadMoreImg = () => {
    setPage(page + 1);
  };

  return (
    <>
      <Toaster
        position="top-right"
        reverseOrder={false}
        toastOptions={{
          className: "",
          duration: 3000,
          removeDelay: 1000,
          style: {
            background: "blue",
            color: "#fff",
          },
        }}
      />
      <div>
        <SearchBar handleChangeValue={handleChangeValue} />
        {isError && <ErrorMessage />}
        <ImageGallery data={data} />
        {isLoading && <Loader />}

        {page < totalPage && !isLoading && (
          <LoadMoreBtn loadMoreI={loadMoreImg} />
        )}
      </div>
    </>
  );
}

export default App;
