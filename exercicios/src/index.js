import React from 'react'
import ReactDOM  from 'react-dom'

import Primeiro from './componentes/Primeiro'

import BomDia from './componentes/BomDia'

import { BoaTarde, BoaNoite } from './componentes/Multiplos'

import Saudacao from './componentes/Saudacao'

import Pai from './componentes/Pai'

import Filho from './componentes/Filho'

const elemento = <h1>React</h1>

// ReactDOM.render(<BoaNoite nome="Guerra" />, document.getElementById('root'))

// ReactDOM.render(
// <div>
//     <BoaTarde nome="Guerra" />
//     <BoaNoite nome="Guerra" />
// </div>, document.getElementById('root')
// )

//  ReactDOM.render(
//  <Saudacao tipo="Boa Semana" nome="Guerra" />,
//   document.getElementById('root'))

ReactDOM.render(
    <div>
        <Pai nome="Kevin" sobrenome="Guerra">
            <Filho nome="Ayumi" sobrenome="Guerra" />
            <Filho nome="JR" />    
        </Pai>
    </div>,
     document.getElementById('root'))