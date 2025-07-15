import { useEffect, useState } from "react";
import NewsItem from "./NewsItem";

const NewsBoard = ({ category }) => {
  const [articles, setArticles] = useState([]);
  const [page, setPage] = useState(1); 
  const [totalResults, setTotalResults] = useState(0); 
  const pageSize = 6;

  useEffect(() => {
    const fetchNews = async () => {
      const url = `https://newsapi.org/v2/top-headlines?country=us&category=${category}&page=${page}&pageSize=${pageSize}&apiKey=${import.meta.env.VITE_API_KEY}`;
      const res = await fetch(url);
      const data = await res.json();
      setArticles(data.articles);
      setTotalResults(data.totalResults);
    };

    fetchNews();
  }, [category, page]);

  
  useEffect(() => {
    setPage(1);
  }, [category]);

  const totalPages = Math.ceil(totalResults / pageSize);

  return (
    <div>
      <h2 className="text-center">
        Latest <span className="badge bg-danger">{category} News</span>
      </h2>

      <div className="d-flex flex-wrap justify-content-center">
        {articles.map((news, index) => (
          <NewsItem
            key={index}
            title={news.title}
            description={news.description}
            src={news.urlToImage}
            url={news.url}
          />
        ))}
      </div>

     
      <nav aria-label="News Pagination">
        <ul className="pagination justify-content-center my-4 flex-wrap">

          
          <li className={`page-item ${page === 1 ? "disabled" : ""}`}>
            <button className="page-link" onClick={() => setPage(page - 1)} disabled={page === 1}>
              Previous
            </button>
          </li>

          
          {[...Array(totalPages)].map((_, index) => {
            const pageNum = index + 1;
            return (
              <li key={pageNum} className={`page-item ${page === pageNum ? "active" : ""}`}>
                <button className="page-link" onClick={() => setPage(pageNum)}>
                  {pageNum}
                </button>
              </li>
            );
          })}

          
          <li className={`page-item ${page === totalPages ? "disabled" : ""}`}>
            <button className="page-link" onClick={() => setPage(page + 1)} disabled={page === totalPages}>
              Next
            </button>
          </li>

        </ul>
      </nav>
    </div>
  );
};

export default NewsBoard;
