import React from 'react'

import NextHead from 'next/head'
import styled from 'styled-components'
import Footer from 'Components/Footer'
import Header from 'Components/Header'

const Layout = (props) => {
  const { children } = props
  return(
    <>
      <NextHead>
        {/* Metadatos SEO */}
        <meta charSet="UTF-8"/>
        <link rel="icon" type="image/png" sizes="32x32" href="https://cdn.larepublica.pe/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="https://cdn.larepublica.pe/favicon-16x16.png" />
        <link rel="canonical" href="" />
        <title>Especiales | Mundial Qatar 2022</title>
        <meta name="description" content="" />
        <meta name="keywords" content="" />
        <meta name="googlebot" content="index,follow"/>
        <meta name="bingbot" content="index,follow"/>
        <meta name="robots" content="max-image-preview:large"/>
        <meta name="MobileOptimized" content="width" />
        <meta name="HandheldFriendly" content="true" />

        {/* Metadatos Twitter */}
        <meta name="twitter:title" content=""/>
        <meta name="twitter:description" content="" />
        <meta name="twitter:image" content="" />
        <meta name="twitter:url" content="" />
        <meta property="twitter:image" content="" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@larepublica_pe" />
        <meta name="twitter:creator" content="@larepublica_pe" />
        <meta name="twitter:width" content="828" />
        <meta name="twitter:height" content="450" />

        {/* Metadatos Facebook */}
        <meta property="og:title" content=""/>
        <meta property="og:description" content=""/>
        <meta property="og:image" content=""/>
        <meta property="og:url" content="" />
        <meta property="og:type" content="website" />
        <meta property="og:image:width" content="828"/>
        <meta property="og:image:height" content="450"/>
        <meta property="og:site_name" content="La República" />
        <meta property="fb:pages" content="145820412845"/>
        <meta property="fb:app_id" content="602624269799095"/>

      </NextHead>
      <Header/>
      <Wrapper>
        <LayoutContent>
          <BanderaDecoration src="/images/banderas1.png"/>
          <MarginDecoration src="/images/borde-r.png" />
          <LayoutBody>
            { children }
          </LayoutBody>
            <MarginDecoration2  src='/images/borde-l.png'/>
            <BanderaDecoration2 src='/images/banderas2.png' />
        </LayoutContent>
        <Footer/>
      </Wrapper>
    </>
  )
}

export default Layout

const Wrapper = styled.div`
  height: auto;
  /* max-width: 1300px; */
  width: 100%;
  margin: 0 auto;
`
const LayoutContent = styled.div`
  position: relative;
  height: calc(100vh - 104px);
  width: 100%;
  height: 100%;
  overflow-y: hidden;
  min-height: calc(100vh - 450px);
  background-image: url("/images/fondo.png");
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  object-fit: cover;
  padding: 0 12% 0;

  @media (max-width: 1300px){
    padding: 0;
    overflow-x: hidden;
  }
`
const LayoutBody = styled.div`
  width: 100%;
  margin: auto;
  padding: 0 100px 100px;
  font-family: Arial, Helvetica, sans-serif;
  box-shadow: 1px 2px 22px 9px rgba(0,0,0,0.28);
  -webkit-box-shadow: 1px 2px 22px 9px rgba(0,0,0,0.28);
  -moz-box-shadow: 1px 2px 22px 9px rgba(0,0,0,0.28);
  min-height: 500px;
  @media (max-width: 800px){
    padding: 0 35px 60px;
  }
`
const BanderaDecoration = styled.img`
  position: absolute;
  width: auto;
  height: 60px;
  object-fit: cover;
  @media (max-width: 800px){
    height: 45px;
  }
`
const MarginDecoration = styled.img`
  position: absolute;
  right: 13%;
  width: auto;
  height: 140px;
  margin-top: 5px;
  object-fit: cover;
  -webkit-transform: rotate(-90deg);
  -moz-transform: rotate(-90deg);
  -ms-transform: rotate(-90deg);
  -o-transform: rotate(-90deg);
  transform: rotate(-90deg);
  @media (max-width: 1300px){
    right: 3%;
  }
  @media (max-width: 800px){
    right: 1%;
    height: 120px;
  }
`
const BanderaDecoration2 = styled.img`
  position: absolute;
  bottom: 0;
  right: 12%;
  width: auto;
  height: 60px;
  object-fit: cover;
  @media (max-width: 1300px){
    right: 0%;
  }
  @media (max-width: 800px){
    height: 45px;
  }
`
const MarginDecoration2 = styled.img`
  position: absolute;
  left: 13%;
  bottom: 15px;
  width: auto;
  height: 140px;
  margin-top: 5px;
  object-fit: cover;
  @media (max-width: 1300px){
    left: 3%;
  }
  @media (max-width: 800px){
    left: 2px;
    height: 120px;
  }
`
