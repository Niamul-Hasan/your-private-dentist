import React from 'react';

const Blog = () => {
    return (
        <div className='container w-80 mx-auto'>
            <h1 className='m-2 fs-1' style={{ color: 'tomato' }}>FAQ</h1>
            <div className='container mt-4 py-3  shadow p-3 mb-5 bg-body rounded'>
                <h2 style={{ color: 'teal' }}>What is the Difference between authentication and authorization ?</h2>
                <p className='fs-4'>Authentication is the process of verifying the identity of a person where authorization is the name of a proces that tells the authenticated person which resorces he /she can access to.Authentication process depends on the information provided by the user.On the other hand authorization process is managed by the organization where user is fully dependend on the authorization authority.So it can be realized very easyly that athentication always comes first to confirm a user's identity and authorization is followed by the authentication process to provide the accessibility of the resources.</p>
            </div>
            <div className='container pb-4 shadow p-3 mb-5 bg-body rounded'>
                <h2 style={{ color: 'teal' }}>Why are you using firebase? What other options do you have to implement authentication?</h2>
                <p className='fs-4'>I am using firebase to implement authentication hooks in my react project. I am also use firebase hosting product to deploy my project website.
                    <br />There are many more options to implement authentication along with firebase.Some commonly used platforms are as follows.</p>
                <ul className='text-dark fs-5' style={{ listStyle: 'disc' }}>
                    <li>Auth0</li>
                    <li>HID Global</li>
                    <li>Okta</li>
                    <li>Duo Access</li>
                    <li>Duo MFA</li>
                    <li>Centrify</li>
                    <li>ImageWare</li>
                </ul>
            </div>
            <div className='shadow p-3 mb-5 bg-body rounded'>
                <h2 style={{ color: 'teal' }}>What other services does firebase provide other than authentication?</h2>
                <p className='fs-4'>Firebase has some awesome build products along with Authentication.Such features are given below.</p>
                <ul className='text-dark fs-5' style={{ listStyle: 'circle' }}>
                    <li>Realtime Database</li>
                    <li>Remote Config</li>
                    <li>Firebase ML</li>
                    <li>Cloud Functions</li>
                    <li>Cloud Messaging</li>
                    <li>Cloud Storage</li>
                    <li>Hosting</li>
                </ul>
            </div>
        </div >
    );
};

export default Blog;