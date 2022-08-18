import React from "react";
import Filho from "./Filho"

export default props => 
    <div>
        <h1>{props.nome} {props.sobrenome}</h1>
        <h2>Filhos</h2>
        <ul>
            {/* <Filho nome="Pedro" sobrenome={props.sobrenome} />
            
            <Filho {...props} />
            <Filho  {...props} nome="Ayumi"  /> */
            
            props.Children
            }

            {
            React.Children.map(props.children, child =>{
                
                return React.cloneElement(child,{
                    ...props, ...child.props
                })
            })
            }
        </ul>
    </div>
