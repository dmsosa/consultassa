import React from "react";
import { coursesObjects } from "../../data/courses";

const Index = () => {

  return (
    <div className="container-md mb-3">
      <ul className="list-group">
        {coursesObjects.map((course, index) => (
          <li key={index} className="list-group-item">
            <a
              href={`/cursos/${encodeURIComponent(course.href)}`}
              className="text-decoration-none"
            >
              {course.nombre}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Index;