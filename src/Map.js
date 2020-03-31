import React, { Component } from 'react'
import { Map, TileLayer } from 'react-leaflet'
import './App.css'

export default class MapContainer extends Component {
    state = {
        lat: 32.0755,
        lng: 34.7804,
        zoom: 15,
    }

    render() {
        const position = [this.state.lat, this.state.lng]
        return (
            <Map center={position} zoom={this.state.zoom}>
                <TileLayer
                    attribution='&amp;copy <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />
                {this.props.children}
                {/* <Circle center={position} fillColor="blue" radius={200} /> */}
            </Map>
        )
    }
}