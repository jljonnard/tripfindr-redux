import React from "react";
import { useDispatch, useSelector } from "react-redux";

import "../css/Trip.css";

import { closeDetails } from "../actions";

import Route from "./Route";

const TripDetails = () => {
    const selectedTrip = useSelector(state => state.selectedTrip)
    const dispatch = useDispatch()

    const handleDetails = () => {
        document.querySelector(".details-wrap").style.transform = "translateY(+20%)";
        setTimeout(() => {
            dispatch(closeDetails());
        }, 600);
    };

    return (
        <div className="details">
            <div className="media" onClick={handleDetails}>
                <div className="hide-details">
                    <i className="material-icons dark arrow">keyboard_arrow_down</i>
                    Cacher les détails
                    <i className="material-icons dark arrow">keyboard_arrow_down</i>
                </div>
            </div>
            <div className="media detailCity">{selectedTrip.frenchCityName}</div>
            <Route
                carrier={selectedTrip.outboundLegCarrier}
                day={selectedTrip.outboundLegDay}
                date={selectedTrip.outboundLegDate}
                origin={selectedTrip.originAirport}
                destination={selectedTrip.outboundLegAirport}
                direct={selectedTrip.direct}
            />
            <Route
                carrier={selectedTrip.inboundLegCarrier}
                day={selectedTrip.inboundLegDay}
                date={selectedTrip.inboundLegDate}
                origin={selectedTrip.inboundLegAirport}
                destination={selectedTrip.originAirport}
                direct={selectedTrip.direct}
            />
            {/*le bouton nous redirige vers le lien qu'on a créé au début du composant*/}
            <a
                className="button middle normal"
                href={selectedTrip.link}
                target="_blank"
                rel="noopener noreferrer"
            >
                Consulter l'offre
            </a>
        </div>
    );
};

export default TripDetails;
