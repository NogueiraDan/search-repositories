import styled from "styled-components";
import { Link } from "react-router-dom";

export const Container = styled.div`
  width: 100%;
  max-width: 991px;
  margin: 0 auto;
`;
export const Title = styled.h1`
  text-align: center;
  font-size: 2rem;
  font-family: Poppins;
  color: #333;
`;

export const List = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
  font-family: Poppins;
`;

export const ListItem = styled.li`
  padding: 5px;
  margin: 15px;
  text-align: center;
  background: #191970;
  color: #fff;
`;
export const LinkHome = styled(Link)`
  display: block;
  width: 4rem;
  text-align: center;
  margin: 2rem auto;
  background-color: #000;
  padding: 0.5rem 0;
  color: #fff;
  text-decoration: none;
`;
