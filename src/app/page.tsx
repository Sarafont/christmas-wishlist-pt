'use client';

import { useState } from "react";
import { ArrowDown, ExternalLink, Gift, Snowflake } from "lucide-react";
import SaraImg from "../../public/Sara.jpeg";
import Snowfall from "../components/ui/Snowfall";
import ChristmasWallpaper from "../components/ui/ChristmasWallpaper";

import { categorias, products } from "../data/produtos";

const filtros = ["Ver todos", ...categorias] as const;
type Filtro = (typeof filtros)[number];

const produtosPorNome = [...products].sort((primeiro, segundo) =>
  primeiro.nome.localeCompare(segundo.nome, "pt", { sensitivity: "base" })
);

export default function Home() {
  const [activeCategory, setActiveCategory] =
    useState<Filtro>("Maquilhagem");

  const filteredProducts = activeCategory === "Ver todos"
    ? produtosPorNome
    : products.filter((product) => product.categoria === activeCategory);

  const scrollToWishlist = () => {
    document.getElementById("wishlist")?.scrollIntoView({
      behavior: window.matchMedia("(prefers-reduced-motion: reduce)").matches
        ? "instant"
        : "smooth",
    });
  };

  return (
    <main>
      {/* HERO SECTION */}
      <section className="relative isolate flex min-h-[92svh] flex-col items-center justify-center overflow-hidden bg-forest px-4 py-10 text-center text-cream sm:px-6 sm:py-16">
        <Snowfall />
        <div className="mb-6 flex items-center gap-3 sm:mb-8">
          <Snowflake size={18} />
          <span className="text-sm tracking-[0.3em] uppercase">
            Natal 2026
          </span>
          <Snowflake size={18} />
        </div>

        <div className="mb-6 flex h-40 w-40 shrink-0 items-center justify-center overflow-hidden rounded-full border-4 border-gold bg-burgundy shadow-2xl sm:mb-8 sm:h-52 sm:w-52 lg:h-64 lg:w-64">
          <img src={SaraImg.src} alt="Sara" className="h-full w-full object-cover" />
        </div>

        <h1 className="mb-4 max-w-4xl text-4xl leading-tight break-words sm:text-5xl lg:text-7xl">
          A Minha Wishlist de Natal
        </h1>

        <p className="mb-6 max-w-lg text-base opacity-85 sm:mb-10 sm:text-lg">
          Querido Pai Natal, portei-me (na maior parte) bem este ano...
        </p>

        <button
          onClick={scrollToWishlist}
          className="flex min-h-11 max-w-full cursor-pointer items-center justify-center gap-3 rounded-full bg-cream px-6 py-3 font-semibold text-burgundy transition-transform duration-300 hover:scale-105 sm:px-8 sm:py-4"
        >
          Ver wishlist
          <ArrowDown size={19} />
        </button>
      </section>

      {/* WISHLIST */}
      <section
        id="wishlist"
        className="relative isolate min-h-svh overflow-hidden bg-ivory px-4 py-10 sm:px-6 sm:py-16 lg:px-10 lg:py-20"
      >
        <ChristmasWallpaper />
        <div className="mx-auto max-w-6xl">
          <div className="mb-8 text-center sm:mb-12">
            <p className="mb-3 text-sm tracking-widest text-forest uppercase">
              Um pequeno catálogo de presentes que gostaria de receber, para que possam escolher de livre vontade.
            </p>
            <p className="mb-3 text-sm tracking-widest text-forest uppercase">
              Não tudo claro, mas se quiserem... 🤭
            </p>
            <h2 className="text-4xl text-burgundy sm:text-5xl">
              🎁
            </h2>
          </div>

          {/* CATEGORY TABS */}
          <div
            role="group"
            aria-label="Categorias de presentes"
            className="mb-8 grid grid-cols-2 gap-2 sm:mb-12 sm:flex sm:flex-wrap sm:justify-center sm:gap-3"
          >
            {filtros.map((categoria) => (
              <button
                key={categoria}
                onClick={() => setActiveCategory(categoria)}
                aria-pressed={activeCategory === categoria}
                className={`min-h-11 min-w-0 cursor-pointer rounded-full px-3 py-3 text-sm font-medium break-words transition-all duration-300 sm:px-5 ${
                  activeCategory === categoria
                    ? "bg-burgundy text-white shadow-md"
                    : "bg-cream text-burgundy hover:bg-burgundy/10"
                }`}
              >
                {categoria}
              </button>
            ))}
          </div>

          {/* PRODUCT GRID */}
          {filteredProducts.length > 0 ? (
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 sm:gap-7 lg:grid-cols-3">
              {filteredProducts.map((product) => (
                <article
                  key={product.id}
                  className="min-w-0 overflow-hidden rounded-2xl bg-white shadow-sm transition-transform duration-300 hover:-translate-y-1 hover:shadow-lg"
                >
                  <div className="flex aspect-[4/5] items-center justify-center bg-cream">
                    {product.imagem ? (
                      <img
                        src={product.imagem}
                        alt={product.nome}
                        className="h-full w-full object-cover"
                      />
                    ) : (
                      <Gift
                        size={55}
                        strokeWidth={1.2}
                        className="text-burgundy/50"
                      />
                    )}
                  </div>

                  <div className="p-4 break-words sm:p-5">
                    <h3 className="mb-2 text-lg text-burgundy sm:text-xl">
                      {product.nome}
                    </h3>

                    <p className="mb-5 font-semibold text-forest">
                      {product.preço}
                    </p>

                    <p className="mb-5 font-semibold text-forest">
                      {product.notas}
                    </p>

                    {/* Generated by GitHub Copilot - Nov-04-2026 */}
                    {product.link && (
                      <a
                        href={product.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex min-h-11 max-w-full items-center justify-center gap-2 rounded-full bg-burgundy px-3 py-3 text-sm font-medium text-cream shadow-md transition-colors duration-300 hover:bg-burgundy/90 sm:px-5"
                      >
                        Ver na loja
                        <ExternalLink size={16} />
                      </a>
                    )}
                  </div>
                </article>
              ))}
            </div>
          ) : (
            <div className="py-20 text-center">
              <Gift
                size={45}
                className="mx-auto mb-5 text-burgundy/50"
              />
              <p className="text-muted">
                Ainda não há presentes nesta categoria.
              </p>
            </div>
          )}
        </div>
      </section>
    </main>
  );
}
