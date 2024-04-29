import React from 'react';
import Layout from "../componen/Layout";
import Navbar from "../componen/Navbar";
import { Link } from "react-router-dom";
import { useNavigate } from 'react-router-dom';

function Home() {
    const navigate = useNavigate();
    return ( 
        <>
            <Layout>
                <Navbar />
                <div className="my-8">
                    <Link to='/landingpage'
                        className="font-medium text-blue-600 underline dark:text-blue-500 hover:no-underline">
                        Landing Page
                </Link>

                <button type="button"
                    className="mx-3 text-white bg-blue-700 hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 font-medium rounded-full text-sm px-5 py-2.5 text-center me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                    onClick={() => navigate ('/landingpage')}>
                        Landing Page
                </button>
                </div>

                <div className="my-8">
                    <Link to='/gallery'
                        className="font-medium text-blue-600 underline dark:text-blue-500 hover:no-underline">
                        Gallery
                </Link>
                <button type="button"
                        className="mx-3 text-white bg-blue-700 hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 font-medium rounded-full text-sm px-5 py-2.5 text-center me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                        onClick={() =>navigate ('/gallery')}>
                        Gallery
                </button>
                </div>
            </Layout>
        </>
     );
}

export default Home;
