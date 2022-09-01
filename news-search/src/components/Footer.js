import React from 'react';
import GithubLogo from './img/GitHub-Logos/GitHub_Logo.png';

function Footer () {
    return(
 <div className="main-footer">       
    <div className='container'>
        <div className='row'>
                <div className='shadow-lg col-lg-12 text-center py-3 mt-4 bg-light text-dark rounded-bottom rounded-5'>
                    <p className='col-lg-12'>This is a web development project as part of the 2022 <a href="https://techlabs.org/de/location/duesseldorf/" target="_blank" rel="noreferrer">Düsseldorf Techlabs</a> Summer Term.</p>
                    <p className='col-lg-12'>Please find our project code repo here: <a href="https://github.com/kierandidi/news_search_engine" target="_blank" rel="noreferrer"><img width='70px' height='auto' src={GithubLogo} alt="Github Logo"/></a></p>
                    {/* <p className='col-lg-12'>this is some text</p>
                    <p className='col-lg-12'>this is some text</p> */}
                    <div className="footer-bottom">
                        <div className="text-center">
                            &copy; {new Date().getFullYear()} - Athena Delta
                        </div>
                    </div>
                </div>
        </div>
    </div>
</div>
)
}
  
export default Footer;