import React from 'react';
import { Row } from 'react-bootstrap';
import SargeryPart from '../SargeryPart/SargeryPart';
import corner1 from "../../../../images/dentist.png";
import corner2 from "../../../../images/clinic.png";
import corner3 from "../../../../images/bannerPart.png";

const SargeryParts = () => {

    const sargeryCorners = [
        {
            id: 1,
            name: 'Best Dental Sargon',
            img: corner1,
            description: "You get here one the best dental and oral sargon in your city.I have many more years experiences of dental and oral sargery with an excellenct success rate. So be sure you have choosen a perfet one. Remember oral care is a sensetive case forever."
        },
        {
            id: 2,
            name: 'Complete Modern OT',
            img: corner2,
            description: "Here you get all the modern facilities of oral sargery and best quality OT mediciens are provided by Your Private Dental.All costs are included with the registration fees. No extra charge is to be given.So make happy sargery. "
        },
        {
            id: 3,
            name: 'Free Follow up check-up',
            img: corner3,
            description: "Your Private Dentist is very much patient freindly Dental service provider.Here you get a awesome sargery package where you will get free follow up check-up within 3 days of your sargery. Don't miss your gift."
        },
    ]
    return (
        <div className='container'>
            <h1 className='text-success text-center mt-3'>Sargery Corner</h1>
            <Row xs={1} md={2} lg={3} className="g-4 my-3">
                {
                    sargeryCorners.map(sergaryCorner => <SargeryPart
                        key={sergaryCorner.id}
                        sergaryCorner={sergaryCorner}
                    ></SargeryPart>)
                }
            </Row>
        </div>
    );
};

export default SargeryParts;