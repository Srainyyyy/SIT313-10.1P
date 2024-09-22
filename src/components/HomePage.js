import React from 'react';
import Subscribe from './Subscribe'; // 导入订阅组件
import Footer from './Footer'; // 导入页脚组件
import './HomePage.css';


const HomePage = () => {
    return (
        <div className="home-page">
         

            
            <section className="subscribe-section">
                <Subscribe />
            </section>

            
            <footer className="footer-section">
                <Footer />
            </footer>
        </div>
    );
};

export default HomePage;
