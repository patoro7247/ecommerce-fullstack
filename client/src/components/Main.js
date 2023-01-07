
import React from 'react';
import {CardWrapper} from './styles/CardWrapper.styled.js';
import CardRow from './styles/CardRow.js'


export const Main = (props) => {


    return (

            <div className="Maindiv">
                <CardWrapper>
                    <CardRow itemList={props.itemList} />
                </CardWrapper>
            </div>

    )
}

