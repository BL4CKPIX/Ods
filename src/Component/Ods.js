import React from 'react'
import * as S from '../Style/Style'
import Logo from '../img/LogoOds.png'
export default function Ods(){
    return(
        <S.ContainerOds>
             <S.GlobalStyle/>
            <div>
                <S.Header>
                    <S.Logo src={Logo} alt='Logo' />
                    <S.H1>Os Objetivos de Desenvolvimento Sustentável em Fortaleza</S.H1>
                </S.Header>
                    <S.H3>
                        <h3>Os Objetivos de Desenvolvimento Sustentável são um apelo global à ação para acabar com a pobreza, proteger o meio ambiente e o clima e garantir que as pessoas, em todos os lugares, possam desfrutar de paz e de prosperidade. Estes são os objetivos para os quais as Nações Unidas estão contribuindo a fim de que possamos atingir a Agenda 2030 no Brasil.</h3>
                    </S.H3>
                
                <S.Icons>
                <S.DivOne>
                    <div>
                        <h2>1</h2>
                        <p>Equidade Territorial, Social e Econômica</p>
                    </div>
                    <S.iconOne/>
                    <a href='https://observatoriodefortaleza.fortaleza.ce.gov.br/relacao-de-indicadores-2040/0' target={'_blank'} rel="noopener noreferrer" >Saiba Mais</a>
                </S.DivOne>
                
                <S.DivTwo>
                    <div>
                        <h2>2</h2>
                        <p>Cidade conectada, Acessível e Justa</p>
                    </div>
                    <S.iconTwo/>
                    <a href='https://observatoriodefortaleza.fortaleza.ce.gov.br/relacao-de-indicadores-2040/1' target={'_blank'} rel="noopener noreferrer">Saiba Mais</a>
                </S.DivTwo>
                <S.DivThree>
                    <div>
                        <h2>3</h2>
                        <p>Vida Comunitária, Acolhimento e Bem-estar</p>
                    </div>
                    <S.iconThree/>
                    <a href='https://observatoriodefortaleza.fortaleza.ce.gov.br/relacao-de-indicadores-2040/2' target={'_blank'} rel="noopener noreferrer" >Saiba Mais</a>
                </S.DivThree>
                <S.DivFour>
                    <div>
                        <h2>4</h2>
                        <p>Desenvolvimento da Cultura e do Conhecimento</p>
                    </div>
                <S.iconFour/>
                <a href='https://observatoriodefortaleza.fortaleza.ce.gov.br/relacao-de-indicadores-2040/3' target={'_blank'} rel="noopener noreferrer">Saiba Mais</a>
                </S.DivFour>
                <S.DivFive>
                    <div>
                        <h2>5</h2>
                        <p>Qualidade do Meio Ambiente e dos Recursos Naturais</p>
                    </div>
                    <S.iconFive/>
                    <a href='https://observatoriodefortaleza.fortaleza.ce.gov.br/relacao-de-indicadores-2040/4' target={'_blank'} rel="noopener noreferrer">Saiba Mais</a>
                </S.DivFive>
                <S.DivSix>
                    <div>
                        <h2>6</h2>
                        <p>Dinamização Econômica e inclusão Produtiva</p>
                    </div>
                    <S.iconSix/>
                    <a href='https://observatoriodefortaleza.fortaleza.ce.gov.br/relacao-de-indicadores-2040/5' target={'_blank'} rel="noopener noreferrer">Saiba Mais</a>
                </S.DivSix>
                <S.DivSeven>
                    <div>
                        <h2>7</h2>
                        <p>Governança Municipal</p>
                    </div>
                    <S.iconSeven/>
                    <a href='https://observatoriodefortaleza.fortaleza.ce.gov.br/relacao-de-indicadores-2040/6' target={'_blank'} rel="noopener noreferrer">Saiba Mais</a>
                </S.DivSeven>
                </S.Icons>
            </div>
        </S.ContainerOds>
    )
}