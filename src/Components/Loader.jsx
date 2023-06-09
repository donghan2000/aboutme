import React from "react";
import '../styles.css'

export const AppLoader = () => {
    return (
        <section className='app-loader'>
            <div className="spinner-square">
                <div className="square-1 square"></div>
                <div className="square-2 square"></div>
                <div className="square-3 square"></div>
            </div>
        </section>
    );
};