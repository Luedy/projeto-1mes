import React from "react";
import styled from "styled-components";

import { HeaderWeb } from "../components/Header.Web";
import GlobalStyle from "../components/styles";

const Experienci = styled.div`
  width: 100%;
  height: 50px;
  background: #f0f0f0;
  align-items: center;
  justify-content: center;
  display: flex;
`;

const Banner = styled.div`
  
  width: 98%;
  height: 400px;
  background-image: url(${banner});
  margin: 0 auto;
  margin-top: 24px;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  border-radius: 16px;
  div {
    
    width: 759px;
    height: 316px;
    background: white;
    opacity: 60%;
    border-top-left-radius: 24px;
    border-bottom-left-radius: 24px;
    
  }
`;

const Carrosel = styled.div`
  margin-left: 19px;
  margin-top: 68px;
  h2 {
    font-weight: 600;
    font-size: 34px;
    line-height: 44px;
    font-family: "Inter";
  }
`;

const CardBox = styled.div`
  display: flex;
`;

const Card = styled.div`
  width: 286px;
  margin-right: 40px;
  
  img {
    width: 284px;
    height: 350px;
    border-radius: 10px;
  }
`;

const Title = styled.h4`
  font-size: 16px;
  font-weight: 500;
  font-family: "Inter";
`;

const Descript = styled.div`
  display: flex;
  img {
    width: 18px;
    height: 18px;
    margin-left: 60%;
  }
  h4 {
    font-size: 16px;
    font-weight: 500;
    font-family: "Inter";
  }
  p {
    font-size: 14px;
    font-weight: 500;
    font-family: "Inter";
    color: #626262;
  }
`;

const Collections = styled.div`
  background: #1b4b66;
  display: flex;
  flex-direction: column;
  align-items: center;
  div {
    width: 100%;
    display: flex;
    align-items: flex-start;
    h2 {
      color: #fff;
      margin: 32px 0 24px 25px;
    }
  }
`;

const CollectionsCardBox = styled.div`
  display: flex;
  width: 98%;
  align-items: center;
  justify-content: center;
`;

interface Props {name: string}

const ColectionsCard = styled.div<Props>`
  background-image: url(${(props)=> props.name});
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  border-radius: 10px;
  margin-left: 20px;
  margin-right: 30px;
  width: 280px;
  height: 280px;
  display: flex;
  flex-direction: column;
  align-items: end;
  justify-content: flex-end;
  margin-bottom: 40px;

  h3 {
    margin: 0 0 16px 16px;
  }
`;

const Shots = styled.div`
  margin-top: 60px;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  div {
    width: 100%;
    display: flex;
    align-items: flex-start;
    h2 {
      margin: 0 0 24px 65px;
    }
  }
`;

const ShotBox = styled.div`
  display: flex;
  width: 96%;
  justify-content: center;
  div {
    width: 168px;
    height: 168px;
    background: #f4f4f4;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 16px;
  }
`;

const Especial = styled.div`
  width: 160px;
  height: 160px;
  background: #f4f4f4;
  margin-right: 46px;
  display: flex;
  align-items: center;
  border-radius: 16px;
`;

const Banner2 = styled.div`
  height:400px;
  
  width:98%;
  background: gray;
  margin: 0 auto;
  margin-bottom:40px;
  margin-top:68px;
  border-radius: 16px;
`

const BannerBox = styled.div`
  margin: 0 auto;
  width: 98%;
  display:flex;
  justify-content:space-between;
  margin-bottom:73px;
  
`

const Banner3 = styled.div`
  height: 228px;
  
  width: 604px;
  background: gray;
  border-radius: 16px;
`

const Banner4 = styled.div`
    height: 228px;
  width: 604px;
  background: gray;
  border-radius: 16px;
`


import card from "./card.png";
import like from "../components/img/coracao.png";
import seta from "../components/img/chevron-right-small.png"
import perfume from "./img/perfume.png";
import bolsa1 from "./img/bolsa1.png";
import bolsa2 from "./img/bolsa2.png";
import bolsa3 from "./img/bolsa3.png";
import bolsa4 from "./img/bolsa4.png";
import { FooterWeb } from "../components/Footer.Web";
import hem from "./logos/H&M-Logo1.png";
import zara from "./logos/zara_logo.png";
import dolceGabana from "./logos/Dolce_&_Gabban1.png";
import prada from "./logos/Prada-Logo1.png";
import biba from "./logos/bibaLogo.png";
import chanel from "./logos/Chanel_logo_interlocking_cs1.png";
import banner2 from "./img/card2.png";
import banner3 from "./img/card2.1.png";
import banner4 from "./img/card2.2.png";
import banner from "././img/banner.png";
import sunGlasses from "./img/oculos.png";
import relogio from "./img/relogio.png";

 
export function HomeWeb() {
  return (
    <>
      <HeaderWeb />
      <Experienci>
        <p>
          We are currently experiencing local customs clearance delays. For the
          latest updates, please check your order status here
        </p>
      </Experienci>

      <Banner>
        <div>
        </div>
      </Banner>

      <Carrosel>
        <div>
          <h2>New Arrivals</h2>
          <div>
            <h4>View All</h4>
            <img src={seta} alt="seta" />
          </div>
        </div>

        <CardBox>
          <Card>
            <img src={bolsa1} alt="" />
            <Descript>
              <div>
                <h4>Grande</h4>
                <p>Blossom Pouch</p>
                <h4>$39.49</h4>
              </div>

              <img src={like} alt="curtida" />
            </Descript>
          </Card>
          <Card>
            <img src={bolsa2} alt="" />
            <Descript>
              <div>
                <h4>Grande</h4>
                <p>Blossom Pouch</p>
                <h4>$39.49</h4>
              </div>

              <img src={like} alt="curtida" />
            </Descript>
          </Card>
          <Card>
            <img src={bolsa3} alt="" />
            <Descript>
              <div>
                <h4>Grande</h4>
                <p>Blossom Pouch</p>
                <h4>$39.49</h4>
              </div>

              <img src={like} alt="curtida" />
            </Descript>
          </Card>
          <Card>
            <img src={bolsa4} alt="" />
            <Descript>
              <div>
                <h4>Grande</h4>
                <p>Blossom Pouch</p>
                <h4>$39.49</h4>
              </div>

              <img src={like} alt="curtida" />
            </Descript>
          </Card>
        </CardBox>
      </Carrosel>

      <Collections>
        <div>
          <h2>Handpicked Collections</h2>
        </div>
        <CollectionsCardBox>
          <ColectionsCard name = {perfume}>
            <div>
              <h3>Personal Care</h3>
            </div>
          </ColectionsCard>
          <ColectionsCard name = {bolsa1}>
            <div>
              <h3>Handbags</h3>
            </div>
          </ColectionsCard>
          <ColectionsCard name = {relogio}>
            <div>
              <h3>Wrist Watches</h3>
            </div>
          </ColectionsCard>
          <ColectionsCard name = {sunGlasses}>
            <h3>Sun Glasses</h3>
          </ColectionsCard>
        </CollectionsCardBox>
      </Collections>

      <Shots>
        <div>
          <h2>Shop by Brands</h2>
        </div>
        <ShotBox>
          <Especial>
            <img src={zara} alt="zara" />
          </Especial>
          <Especial>
            <img src={biba} alt="zara" />
          </Especial>
          <Especial>
            <img src={chanel} alt="zara" />
          </Especial>
          <Especial>
            <img src={prada} alt="zara" />
          </Especial>
          <Especial>
            <img src={dolceGabana} alt="zara" />
          </Especial>
          <div>
            <img src={hem} alt="zara" />
          </div>
        </ShotBox>
      </Shots>

      <Banner2>
        <img src={banner2} alt="banner2" />
      </Banner2>

      <BannerBox>
        <Banner3>
          <img src={banner3} alt="banner2" />
        </Banner3>
        <Banner4>
          <img src={banner4} alt="banner2" />
        </Banner4>
      </BannerBox>

      <FooterWeb/>

    </>
  );
}