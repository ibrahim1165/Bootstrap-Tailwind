import React from 'react';
import PricingOption from '../pricingOption/PricingOption';

const Price = () => {
    const pricing =[
        {id:1,name:'free',price:0, Benefits:
        ['liftime Free',
        'unlimited deals',
        'local deals',
         'fantastic deals'
        ]},
        {id:2,name:'reguler',price:999 ,Benefits:
        ['Regular all Free',
        'unlimited deals',
         'local deals',
          'fantastic deals']},
        {id:3,name:'primemum',price:19.99,Benefits:
        [
            'primuam all Free',
            'unlimited deals', 'local deals',
             'fantastic deals'
            ]}
    ]
    return (
        <div className="bg-indigo-200 p-4 mt-8">
           <h1>Best Deals Of the town</h1> 
           <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda aperiam possimus quos dicta fugit tempore rerum excepturi sapiente blanditiis consequatur!</p>
           <div className="grid md:grid-cols-3 gap-3 mt-8">
               {
                   pricing.map(option=><PricingOption key={option.id}
                    option={option}

                   
                   
                   ></PricingOption>)
               }
           </div>
        </div>
    );
};

export default Price;