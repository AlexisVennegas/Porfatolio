import React from 'react'
import styled from 'styled-components'
import { VscChromeClose } from 'react-icons/vsc';


const Modal = ({children, estado, cambiarEstado, titulo, mostrarOverlay}) => {
    return(
        <>
        {estado &&

                <Overlay mostrarOverlay={mostrarOverlay} data-aos="fade-down">
                <ContenedorModal>
                    <EcabezadoModal>
                        <h3>{titulo}</h3>
                    </EcabezadoModal>
                    <BotonCerrar onClick={() => cambiarEstado(false)}><VscChromeClose className='button_close'/>
                    </BotonCerrar>
                    {children}


                </ContenedorModal>
                </Overlay>
            }
        </>
    )
}
export default Modal;

const Overlay = styled.div`
    width: 100vw;
    height: 100vh;
    position: fixed;
    top: 0;
    padding: 0px;
    left: 0;
    background: rgba(0,0,0,0.8);
    display: flex;
    align-items: center;
    justify-content: center;
`;

const ContenedorModal = styled.div`
    width: 87%;
    min-height: 112px;
    background: black;
    position: relative;
    border-radius: 5px;
    border: none;
    box-shadow: rgb(100 100 111 / 20%) 0px 7px 29px 0px;
    padding: 24px;
    height: auto;  
`;

const EcabezadoModal = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 20px;
    padding-bottom: 20px;
    border-bottom: 1px solid #E8E8E8;

    h3 {
        font-size: 36px;
        color: #1788DC;
    }
`;

const BotonCerrar = styled.button`
      border: none;
    position: absolute;
    height: 35px;
    width: 35px;
    border: none;
    border-radius: 50%;
    top: 38px;
    right: 25px;
    cursor: pointer;
    transition: .3s ease all;
    color: #1766DC;
    transition: .4s;
  
`;



