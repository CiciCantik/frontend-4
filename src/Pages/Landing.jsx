import React from "react";
import LandingPage from "./LandingPage";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

function Landing() {
    const navigate = useNavigate();
    return (
        <>
            <LandingPage>
                <div className="my-8">
                    <Link
                        to="/"
                        className="font-medium text-blue-600 underline dark:text-blue-500 hover:no-underline">
                        Home
                    </Link>

                    <button
                        type="button"
                        className="mx-3 text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
                        onClick={() => navigate("/")}>
                        Home
                    </button>

                    <Link
                        to="/gallery"
                        className="font-medium text-blue-600 underline dark:text-blue-500 hover:no-underline">
                        Gallery
                    </Link>

                    <button
                        type="button"
                        className="mx-3 text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
                        onClick={() => navigate("/gallery")}>
                        Gallery
                    </button>
                </div>
            </LandingPage>
        </>
    );
}