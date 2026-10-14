

import { useState } from "react";
import "./App.css";

const filmes = [
  {
    id: 1,
    titulo: "Portrait of a Lady on Fire",
    original: "Portrait de la jeune fille en feu",
    ano: 2019,
    diretor: "Céline Sciamma",
    generos: ["Romance", "Drama"],
    classe: "portrait",
    numero: "01",
  },
  {
    id: 2,
    titulo: "The Wild Bunch",
    original: "A balada de um grupo de fora da lei",
    ano: 1969,
    diretor: "Sam Peckinpah",
    generos: ["Drama", "Suspense"],
    classe: "wild-bunch",
    numero: "02",
  },
  {
    id: 3,
    titulo: "Alien",
    original: "O oitavo passageiro",
    ano: 1979,
    diretor: "Ridley Scott",
    generos: ["Terror psicológico", "Suspense"],
    classe: "alien",
    numero: "03",
  },
  {
    id: 4,
    titulo: "The Return",
    original: "Vozvrashchenie",
    ano: 2003,
    diretor: "Andrey Zvyagintsev",
    generos: ["Drama", "Suspense"],
    classe: "the-return",
    numero: "04",
  },
];

const generosFavoritos = [
  "Terror psicológico",
  "Romance",
  "Drama",
  "Suspense",
];


function Cabecalho({ temaEscuro, alternarTema }) {
  return (
    <header className="cabecalho">
      <a href="#inicio" className="logo">
        buerak<span>®</span>
      </a>

      <nav className="menu">
        <a href="#sobre">sobre</a>
        <a href="#favoritos">filmes favoritos</a>
        <a href="#generos">gêneros</a>
      </nav>

      <button
        className="botao-tema"
        onClick={alternarTema}
        aria-label="Alternar tema"
      >
        {temaEscuro ? "☼" : "☾"}
      </button>
    </header>
  );
}

function Hero() {
  return (
    <section className="hero" id="inicio">
      <div className="hero-texto">
        <p className="microtexto">
          :)
        </p>

        <h1>buerak<span>.</span></h1>

        <p className="subtitulo">
          Minha organização cinematrográfica.
        </p>

        <a
          href="https://letterboxd.com/higii/"
          target="_blank"
          rel="noreferrer"
          className="botao-letterboxd"
        >
          <span className="lb-icon">▣</span>
          meu letterboxd ↗
        </a>
      </div>

      <div className="hero-nota">
        <span>Meu perfil no letterboxd</span>
        <p>
        <p> Diretores que eu adimiro: </ br>
          Andrei Tarkovsky,
          Céline Sciamma,
          Wong Kar-wai,
          Ridley Scott,
          Wes Anderson e
          Sam Peckinpah

        </p>
        <span></span>
      </div>
    </section>
  );
}

function Estatisticas() {
  return (
    <section className="estatisticas">
      <div className="estatistica">
        <span className="numero">"1.427"</span>
        <span className="legenda"> Filmes</span>
      </div>

      <div className="separador" />

      <div className="estatistica">
        <span className="numero">"247"</span>
        <span className="legenda"> Esse Ano</span>
      </div>

      <div className="estatistica-frase">
        
      </div>
    </section>
  );
}


function Sobre({ expandido, alternarSobre }) {
  return (
    <section className="secao sobre" id="sobre">
      <div className="secao-cabecalho">
        <span></span>
        <span></span>
      </div>

      <h2>
        Sobre mim
        <br />
        <span></span>
      </h2>

      <div className="sobre-conteudo">
        <p>
          Eu assisto filmes de forma deliberada desde 2022, que foi quando eu conheci
          o letterboxd e desde então se transformou em uma prática e uma forma de adquirir mais repertório. 
        </p>

        {expandido && (
          <p className="sobre-extra">
           Comecei com a saga de Jogos Vorazes e depois continuei com filmes populares como "Click", até eu evoluir para filmes que quase ninguém conhece. 
          </p>
        )}

        <button
          className="link-texto"
          onClick={alternarSobre}
        >
          {expandido ? "ler menos ↑" : "continuar lendo ↓"}
        </button>
      </div>
    </section>
  );
}

function FilmeCard({ filme }) {
  return (
    <article className="filme-card">
      <div className={`poster ${filme.classe}`}>
        <span className="poster-numero">
          {filme.numero}
        </span>

        <div className="poster-titulo">
          {filme.classe === "portrait" && (
            <span className="poster-nota">
              FEITO DE OLHARES
            </span>
          )}

          {filme.classe === "wild-bunch" && (
            <span className="poster-nota">
              A DYING BREED
            </span>
          )}

          {filme.classe === "alien" && (
            <span className="poster-nota">
              IN SPACE NO ONE CAN HEAR YOU SCREAM
            </span>
          )}

          {filme.classe === "the-return" && (
            <span className="poster-nota">
              ВОЗВРАЩЕНИЕ
            </span>
          )}

          <h3>{filme.titulo}</h3>
          <span className="poster-ano">{filme.ano}</span>
        </div>

        <span className="poster-marca">b.</span>
      </div>

      <div className="filme-info">
        <div>
          <h3>{filme.titulo}</h3>
          <p>{filme.diretor} · {filme.ano}</p>
        </div>

        <span className="filme-coracao">♥</span>
      </div>

      <div className="filme-generos">
        {filme.generos.map((genero) => (
          <span key={genero}>{genero}</span>
        ))}
      </div>
    </article>
  );
}

function Favoritos({ filmes, filtro, alterarFiltro }) {
  const filtros = [
    "Todos",
    "Terror psicológico",
    "Romance",
    "Drama",
    "Suspense",
  ];

  const filmesFiltrados =
    filtro === "Todos"
      ? filmes
      : filmes.filter((filme) =>
          filme.generos.includes(filtro)
        );

  return (
    <section className="secao favoritos" id="favoritos">
      <div className="secao-cabecalho">
        <span></span>
        <span></span>
      </div>

      <div className="titulo-linha">
        <h2>4 FAVORITOS</h2>
        <span className="contador">
          {filmesFiltrados.length} / {filmes.length}
        </span>
      </div>

      <div className="filtros">
        {filtros.map((item) => (
          <button
            key={item}
            onClick={() => alterarFiltro(item)}
            className={
              filtro === item
                ? "filtro ativo"
                : "filtro"
            }
          >
            {item}
          </button>
        ))}
      </div>

      {filmesFiltrados.length > 0 ? (
        <div className="grade-filmes">
          {filmesFiltrados.map((filme) => (
            <FilmeCard key={filme.id} filme={filme} />
          ))}
        </div>
      ) : (
        <p className="sem-filmes">
          Nenhum filme encontrado nessa categoria.
        </p>
      )}
    </section>
  );
}

// Gêneros
function Generos({ generos }) {
  return (
    <section className="secao generos" id="generos">
      <div className="secao-cabecalho">
        <span>03 / PREFERÊNCIAS</span>
        <span>O QUE ME ATRAI</span>
      </div>

      <h2>Gêneros favoritos.</h2>

      <div className="lista-generos">
        {generos.map((genero, index) => (
          <div className="genero-item" key={genero}>
            <span className="genero-numero">
              0{index + 1}
            </span>
            <h3>{genero}</h3>
            <span className="genero-seta">↗</span>
          </div>
        ))}
      </div>
    </section>
  );
}


function Rodape() {
  return (
    <footer className="rodape">
      <a href="#inicio" className="logo">
        buerak<span>®</span>
      </a>

      <p>
        uma página pessoal sobre cinema.
      </p>

      <a
        href="https://letterboxd.com/higii/"
        target="_blank"
        rel="noreferrer"
      >
        letterboxd ↗
      </a>
    </footer>
  );
}

export default function App() {
  const [temaEscuro, setTemaEscuro] = useState(true);
  const [filtro, setFiltro] = useState("Todos");
  const [sobreExpandido, setSobreExpandido] = useState(false);

  return (
    <div className={temaEscuro ? "app escuro" : "app claro"}>
      <Cabecalho
        temaEscuro={temaEscuro}
        alternarTema={() => setTemaEscuro((atual) => !atual)}
      />

      <main>
        <Hero />
        <Estatisticas />

        <Sobre
          expandido={sobreExpandido}
          alternarSobre={() =>
            setSobreExpandido((atual) => !atual)
          }
        />

        <Favoritos
          filmes={filmes}
          filtro={filtro}
          alterarFiltro={setFiltro}
        />

        <Generos generos={generosFavoritos} />
      </main>

      <Rodape />
    </div>
  );
}
