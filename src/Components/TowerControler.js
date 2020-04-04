import React, { Component } from 'react'
import { TextArea, FormField, Button } from 'grommet'
import jsonTemplate from '../Utils/jsonTemplate'
import './TowerControler.css'


function tryParseJson(jsonString) {
    if (jsonString === "") return {};
    try {
        return JSON.parse(jsonString)
    } catch{
        return null
    }

}

export default class TowerControler extends Component {
    state = {
        towerList: [],
        settings: JSON.stringify(jsonTemplate,null,4)
    }

    render() {
        const { settings } = this.state
        const parseSettings = tryParseJson(settings)
        return (
            <div className="tower-controler">
                <div>
                    <FormField height={"20vh"} label={"Settings Json" + (parseSettings ? "" : " X")} margin="medium" style={{ width: "80%" }}>
                        <TextArea pplaceholder="type here"
                            resize
                            fill
                            value={settings}
                            onChange={event => this.setState({ settings: event.target.value })}
                        />
                    </FormField>
                </div>
                <div style={{ width: "100%", display: "flex", marginTop: "5vh" }}>
                    <Button
                        style={{ margin: "auto" }}
                        label="Add"
                        onClick={() => this.props.addTower(parseSettings)}
                    />
                </div>
            </div>
        )
    }
}