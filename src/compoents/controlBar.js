import React from 'react';
import styled from 'styled-components'

const ControlBar = (props) => {
    const {eqLayer, setEqLayer, setControl} = props;

    const toggle = (layer, setLayer) => {
        console.log(layer);
        console.log(!layer);
       return setLayer(!layer);
    };

    return(
        <TopBar>
            <button onClick={ () => {
                toggle(eqLayer, setEqLayer)
                setControl(false)
            }}>
                Toggle Eathquake data
            </button>
        </TopBar>
    )
};

export default ControlBar;

const TopBar = styled.div`
    height: 80px;
    display: flex;
`;