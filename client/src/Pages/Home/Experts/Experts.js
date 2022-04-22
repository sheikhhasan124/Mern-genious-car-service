import React from 'react';
import Expert from '../Expert/Expert';

import expert1 from '../../../imges/experts/expert-1.jpg'
import expert2 from '../../../imges/experts/expert-2.jpg'
import expert3 from '../../../imges/experts/expert-3.jpg'
import expert4 from '../../../imges/experts/expert-4.jpg'
import expert5 from '../../../imges/experts/expert-5.jpg'

const experts = [
    {id:1, name:"anabil", img: expert1},
    {id:2, name:"bnabil", img: expert2},
    {id:3, name:"cnabil", img: expert3},
    {id:4, name:"dnabil", img: expert4},
    {id:5, name:"enabil", img: expert5},
]


const Experts = () => {
    return (
        <div id='expert'>
            <h2>experts</h2>
          <div className="row ">
          {experts.map(expert=><Expert key={expert.id} expert={expert}></Expert>)}
          </div>

        </div>
    );
};

export default Experts;