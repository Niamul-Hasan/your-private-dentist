import React from 'react';
import { Row } from 'react-bootstrap';
import pic1 from "../../../images/cavity.png";
import pic2 from "../../../images/cracked.png";
import pic3 from "../../../images/impacted.png";
import pic4 from "../../../images/toothache.png";
import pic5 from "../../../images/periodonta.png";
import pic6 from "../../../images/halitosis.png";
import Service from './Service';


const Services = () => {
    const serviceNames = [
        {
            id: 1,
            name: 'Cavity Care',
            price: '2000 tk/teeth',
            img: pic1,
            description: "A cavity is a hole in a tooth that develops from tooth decay. Cavities form when acids in the mouth wear down, or erode, a tooth's hard outer layer (enamel). Anyone can get a cavity. Proper brushing, flossing and dental cleanings can prevent cavities."
        },
        {
            id: 2,
            name: 'Cracked Care & Repair',
            price: '2500 tk/teeth',
            img: pic2,
            description: " Cracked tooth syndrome (CTS) is when a crack appears in your tooth.Tooth fractures are most common in children and older people, although anybody can crack a tooth. If you suspect a broken tooth, see a dentist right away."
        },
        {
            id: 3,
            name: 'Impaction Sargery',
            price: '3500 tk/teeth',
            img: pic3,
            description: "An impacted tooth is a tooth that is positioned against another tooth, bone, or soft tissue. The position of the tooth makes it unlikely to fully erupt through the gums to reach its normal position in the mouth."
        },
        {
            id: 4,
            name: 'Relief from Toothache',
            price: '2000 tk/teeth',
            img: pic4,
            description: "A toothache is a pain in or around a tooth. More serious toothaches are caused by dental and mouth problems that won't get better on their own and will need to be treated by a experienced dentist."
        },
        {
            id: 5,
            name: 'Periodonta Recovery',
            price: '2700 tk/teeth',
            img: pic5,
            description: "Periodontitis, a type of gum disease, is severe inflammation of the gums, with symptoms that include red, bleeding or swollen gums. If left untreated, periodontitis can lead to loss of teeth."
        },
        {
            id: 6,
            name: 'Halitosis Solution',
            price: '4000 tk',
            img: pic6,
            description: "Chronic bad breath, which is sometimes called halitosis, is often a sign of poor dental hygiene or dry mouth. The condition may also be a sign of a more serious mouth disease."
        },
    ]
    return (
        <div className='container'>
            <h1 className='text-success text-center mt-3'>Available Services</h1>
            <Row xs={1} md={2} lg={3} className="g-4 my-3">
                {
                    serviceNames.map(serviceName => <Service
                        key={serviceName.id}
                        serviceName={serviceName}
                    ></Service>)
                }
            </Row>
        </div>
    );
};

export default Services;