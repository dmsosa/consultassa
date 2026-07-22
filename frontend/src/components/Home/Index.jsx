import React from "react";
import { Link } from "react-router-dom";

const pages = [
	{
		name: "Home", url: "/",
	}, 
	{
		name: "Buy", url: "/buy",
	},
	{
		name: "Items", url: "/items/1",
	},
]

const Index = () => {

  return (
    <div className="container-md mb-3">
      <ul className="list-group">
        {pages.map((page, index) => (
          <li key={index} className="list-group-item">
            <Link to={page.url}
              className="link text-decoration-none"
            >
              {page.name}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Index;