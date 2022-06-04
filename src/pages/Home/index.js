import React, { useState } from "react";
import axios from "axios";
import "./styles.css";
import * as S from "./styled";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();
  const [usuario, setUsuario] = useState("");
  const [erro, setErro] = useState(false);

  const handlePesquisa = () => {
    axios
      .get(`https://api.github.com/users/${usuario}/repos`)
      .then((response) => {
        const repositories = response.data;

        const repositoriesName = [];
        repositories.map((repository) => {
          repositoriesName.push(repository.name);
        });
        localStorage.setItem(
          "repositoriesName",
          JSON.stringify(repositoriesName)
        );
        setErro(false);
        navigate("/repositories");
      })
      .catch((error) => setErro(true));
  };
  return (
    <S.HomeContainer>
      <S.Content>
        <S.Title>Pesquise Repositorios</S.Title>
        <S.ContainerInput>
          <S.Input
            className="usuarioInput"
            placeholder="Usuário"
            value={usuario}
            onChange={(e) => setUsuario(e.target.value)}
          />
          <S.Button type="button" onClick={handlePesquisa}>
            Pesquisar
          </S.Button>
        </S.ContainerInput>
      </S.Content>
      {erro ? <S.ErrorMsg>Ocorreu um erro. Tente novamente.</S.ErrorMsg> : ""}
    </S.HomeContainer>
  );
};

export default Home;
