import React from 'react';
import { DivGrid } from '../components/editor/style';
import { Codes, Command } from '../components/editor';


function Commands() {
    return (
       <DivGrid>
           <Command/>
           <Codes />     
       </DivGrid>
    );
}

export default Commands;