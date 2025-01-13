import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import './Header.css'
import down from '../assets/dropdown-arrow.png'

const Header = () => {

  return (
    <>
    <header>
      <div className='header-top'>
        Logo Floriguia
      </div>
      <div className='navbar'>
        <Link>Página inicial</Link>
        <div className='dropdown'>
          <span>Praias</span>
          <div>
            <div className='dropdown-side'>
              <span>Norte da Ilha</span>
              <div>
                <Link>Praia de Jurerê</Link>
                <Link>Praia do Forte</Link>
                <Link>Praia Brava</Link>
                <Link>Praia dos Ingleses</Link>
                <Link>Praia de Canasvieiras</Link>
                <Link>Praia do Santinho</Link>
              </div>
            </div>
            <div className='dropdown-side'>
              <span>Leste da Ilha</span>
              <div>
                <Link>Praia Mole</Link>
                <Link>Praia da Joaquina</Link>
                <Link>Praia da Galheta</Link>
                <Link>Barra da Lagoa</Link>
              </div>
            </div>
            <div className='dropdown-side'>
              <span>Sul da Ilha</span>
              <div>
                <Link>Praia do Campeche</Link>
                <Link>Praia da Armação</Link>
                <Link>Praia do Matadeiro</Link>
                <Link>Praia da Solidão</Link>
                <Link>Praia de Naufragados</Link>
              </div>
            </div>
            <div className='dropdown-side'>
              <span>Centro da Ilha</span>
              <div>
                <Link>Beira Mar Norte</Link>
              </div>
            </div>
            <div className='dropdown-side'>
              <span>Ilhas Adjacentes</span>
              <div>
                <Link>Ilha do Campeche</Link>
                <Link>Ilha de Anhatomirim</Link>
                <Link>Ilha do Arvoredo</Link>
              </div>
            </div>
          </div>
        </div>
        <div className='dropdown'>
          <span>Trilhas</span>
          <div>
            <Link>Fáceis</Link>
            <Link>Moderadas</Link>
            <Link>Difíceis</Link>
            <Link>Guiadas</Link>
          </div>
        </div>
        <div className='dropdown'>
          <span>Restaurantes</span>
          <div>
            <Link>Frutos do Mar</Link>
            <div className='dropdown-side'>
            <span>Comida Internacional</span>
            <div>
              <Link>Japonesa</Link>
              <Link>Mexicana</Link>
              <Link>Italiana</Link>
              <Link>Árabe</Link>
              <Link>Francesa</Link>
            </div>
          </div>
          <div className='dropdown-side'>
            <span>Comida Brasileira</span>
            <div>
              <Link>Comida Típica Catarinense</Link>
              <Link>Churrascarias</Link>
              <Link>Comida Mineira</Link>
              <Link>Comida Nordestina</Link>
              <Link>Comida Nortista</Link>
            </div>
          </div>
          <Link>Vegetariana e Vegana</Link>
          <Link>Cafés</Link>
          <Link>Hamburguerias</Link>
          <Link>Buffets</Link>
          <Link>Barzinhos e Bistrôs</Link>
          <Link>Fast Food</Link>
          </div>
        </div>
        <div className='dropdown'>
          <span>Hospedagens</span>
          <div>
            <Link>Hoteis</Link>
            <Link>Pousadas</Link>
            <Link>Hostels</Link>
            <Link>Alugueis de Temporada</Link>
            <Link>Camping</Link>
          </div>
        </div>
        <div className='dropdown'>
          <span>Compras e Artesanato</span>
          <div>
            <Link>Shoppings</Link>
            <Link>Centros de Artesanato</Link>
            <Link>Feiras Locais</Link>
            <Link>Mercado Público</Link>
          </div>
        </div>
        <div className='dropdown'>
          <span>Mobilidade e Transporte</span>
          <div>
            <Link>Transporte Público</Link>
            <Link>Aluguel de Carros e Motos</Link>
            <Link>Aplicativos de Transporte</Link>
            <Link>Passeios de Barco</Link>
            <Link>Estacionamento</Link>
          </div>
        </div>
        <div className='dropdown'>
          <span>Passeios e Experiências</span>
          <div>
            <Link>City Tuors</Link>
            <Link>Passeios de Barco</Link>
            <div className='dropdown-side'>
              <span>Atividades de Aventura</span>
              <div>
                <Link>Surfe</Link>
                <Link>Mergulho</Link>
                <Link>Parapente</Link>
              </div>
            </div>
            <div className='dropdown-side'>
              <span>Experiências Culturais</span>
              <div>
                <Link>Museus</Link>
                <Link>Fortalezas</Link>
                <Link>Construções Históricas</Link>
                <Link>Festas/Eventos Tradicionais</Link>
              </div>
            </div>
          </div>
        </div>
        <Link className='anuncie-aqui'>Anuncie Aqui!</Link>
      </div>
    </header>
    </>
  )
}

export default Header