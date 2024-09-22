import React from 'react';
import { Icon,Image } from 'semantic-ui-react';
import './Footer.css'; // 引入 CSS 文件

const Footer = () => (
    <div className='footer-container'>
        <div className='footer-column'>
            <h4>Explore</h4>
            <ul>
                <li>Home</li>
                <li>Questions</li>
                <li><a href='src\components\FeaturedArticles.js'>Articles</a></li>
                <li><a href='src\components\Tutorials.js'>Tutorials</a></li>
            </ul>
        </div>
        <div className='footer-column'>
            <h4>Support</h4>
            <ul>
                <li>FAQs</li>
                <li>Help</li>
                <li>Contact Us</li>
            </ul>
        </div>
        <div className='footer-column'>
            <h4>Stay connected</h4>
            <ul>
                <Icon name='facebook' /> <Image src='/image/facebook.png' size='mini' />
                <Icon name='twitter' /> <Image src='/image/twitter.png' size='mini' />
               <Icon name='instagram' /> <Image src='/image/instagram.png' size='mini' />
            </ul>
        </div>
        <div className='footer-bottom'>
            <p>© DEV@Deakin 2022</p>
            <ul className='horizontal-list'>
                <li>Privacy Policy</li>
                <li>Terms</li>
                <li>Code of Conduct</li>
            </ul>
        </div>
    </div>
);

export default Footer;
