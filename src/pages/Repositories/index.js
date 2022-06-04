import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import * as S from "./styled";

const Repositories = () => {
  const navigate = useNavigate();
  const [repositories, setRepositories] = useState([]);

  useEffect(() => {
    let repositoriesName = localStorage.getItem("repositoriesName");
    if (repositoriesName != null) {
      repositoriesName = JSON.parse(repositoriesName);
      setRepositories(repositoriesName);
    } else {
      navigate("/");
    }
  }, []);
  return (
    <S.Container>
      <S.Title>Repositorios</S.Title>
      <S.List>
        {repositories.map((repository, key) => {
          return (
            <S.ListItem key={key}>
              <strong>Repositório: </strong>
              {repository}
            </S.ListItem>
          );
        })}
      </S.List>
      <S.LinkHome to="/"> Voltar</S.LinkHome>
    </S.Container>
  );
};

export default Repositories;
