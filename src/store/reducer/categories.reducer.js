import { createSlice } from "@reduxjs/toolkit";
import automotiveThumb from "../../assets/categorias/thumbnail/automotivo.png";
import automotiveHeader from "../../assets/categorias/header/automotivo.png";
import electronicsThumb from "../../assets/categorias/thumbnail/eletronicos.png";
import electronicsHeader from "../../assets/categorias/header/eletronicos.png";
import gamesThumb from "../../assets/categorias/thumbnail/jogos.png";
import gamesHeader from "../../assets/categorias/header/jogos.png";
import deskThumb from "../../assets/categorias/thumbnail/escritorio.png";
import deskHeader from "../../assets/categorias/header/escritorio.png";
import songAndImageThumb from "../../assets/categorias/thumbnail/som.png";
import songAndImageHeader from "../../assets/categorias/header/som.png";

const initialState = [
  {
    name: "Automotivo",
    thumbnail: automotiveThumb,
    header: automotiveHeader,
    id: "automotive",
    description:
      "Tudo sobre o mundo automotivo, desde carros até motos e acessórios.",
  },
  {
    name: "Eletrônicos",
    thumbnail: electronicsThumb,
    header: electronicsHeader,
    id: "electronics",
    description:
      "Últimas inovações e produtos eletrônicos para o seu dia a dia.",
  },
  {
    name: "Jogos",
    thumbnail: gamesThumb,
    header: gamesHeader,
    id: "games",
    description:
      "Jogos de todos os gêneros, de ação até estratégia, para diversas plataformas.",
  },
  {
    name: "Escritório",
    thumbnail: deskThumb,
    header: deskHeader,
    id: "desk",
    description:
      "Tudo para criar o ambiente de trabalho ideal, desde móveis até gadgets.",
  },
  {
    name: "Som e Imagem",
    thumbnail: songAndImageThumb,
    header: songAndImageHeader,
    id: "songAndImage",
    description: "Combinando música e imagem, uma experiência sensorial única.",
  },
];

const categories = createSlice({
  name: "Categories",
  initialState,
});

export default categories.reducer;
