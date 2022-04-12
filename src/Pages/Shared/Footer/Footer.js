import React from 'react';

const Footer = () => {
    return (
        <footer className='bottom-0 bg-primary'>
            <div className='container'>
                <p className='row'>
                    <small className='py-4 text-center text-white'>
                        &copy; Coppyright {(new Date().getFullYear())}
                    </small>

                </p>
            </div>

        </footer>
    );
};

export default Footer;