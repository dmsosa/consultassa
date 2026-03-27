import { useState } from "react";
import { useParams } from "react-router-dom";
import BannerContainer from "../components/BannerContainer";
import { coursesObjects } from "../data/courses";

function Courses() {
  const { name } = useParams();
  const [ course, setCourse ] = useState(coursesObjects[name] || coursesObjects[0]);

  return (
    <div className="container-fluid">
      <BannerContainer>
        <h1>{course.nombre}</h1>
      </BannerContainer>

      <div className="container page">
        <div className="row article-content">
          <div className="col-md-12">
            <p>{course.descripcion}</p>
          </div>
          <div className="col-md-12">
            <p>
              {course.body}
            </p>
          </div>
        </div>
        <div className="row">
          <ul>
            {course.salidas.map((salida) => (<li className="li-item">{salida}</li>))}
          </ul>
        </div>
        <hr />
        <div className="article-actions">
          <div className="d-flex justify-content-between">
            <button className="btn btn-primary">Enviar documentación</button>
            <button className="btn btn-danger">Inscribirse</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Courses;
