import Markdown from "markdown-to-jsx";
import { useState } from "react";
import { Outlet, useNavigate, useParams } from "react-router-dom";
import ArticleMeta from "../../components/ArticleMeta";
import ArticlesButtons from "../../components/ArticlesButtons";
import ArticleTags from "../../components/ArticleTags";
import BannerContainer from "../../components/BannerContainer";

function Article() {
  const { slug } = useParams();
  const [article, setArticle] = useState(slug ||"curso");
  const navigate = useNavigate();

  return (
    <div className="article-page">
      <BannerContainer>
        <h1>{title}</h1>
      </BannerContainer>

      <div className="container page">
        <div className="row article-content">
          <div className="col-md-12">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Fugit quod, consequuntur inventore rerum unde animi dicta soluta esse laboriosam rem aliquid at debitis adipisci praesentium eaque ipsam vel maxime quasi!
          </div>
        </div>

        <hr />

        <div className="article-actions">
          <div className="d-flex justify-content-between">
            <button>Play</button>
          </div>
        </div>

        <Outlet />
      </div>
    </div>
  );
}

export default Article;
