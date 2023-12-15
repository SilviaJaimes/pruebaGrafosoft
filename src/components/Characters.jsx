import React from "react";

function Characters({ characters = [] }) {
    return (
        <div className="row">
            {
                characters.map((item, index) => (
                    <div key={index} className="card">
                    <div className="card-body">
                        <img src={item.image} alt="" />
                        {/* <h2 className="card-header">Maximizing Your Productivity at Work</h2>
                        <p className="text-content2">Are you looking to increase your productivity at work?</p>
                        <div className="card-footer">
                            <button className="btn-secondary btn">Learn More</button>
                        </div> */}
                    </div>
                    </div>
                ))
            }
        </div>

    )
}

export default Characters;