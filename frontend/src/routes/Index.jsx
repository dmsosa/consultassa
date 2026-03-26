import React from "react";

const Index = () => {
  const categories = [
    "Administracion y Gestion",
    "Agricultura",
    "Informatica y Comunicaciones",
    "Sanidad"
  ];

  return (
    <div className="container mt-4">
      <ul className="list-group">
        {categories.map((category, index) => (
          <li key={index} className="list-group-item">
            <a
              href={`/${encodeURIComponent(category)}`}
              className="text-decoration-none"
            >
              {category}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Index;