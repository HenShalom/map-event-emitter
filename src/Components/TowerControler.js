import React, { Component } from 'react'
import { TextInput, FormField,CheckBox,Button } from 'grommet'

import './TowerControler.css'

export default class TowerControler extends Component {
    state = {
        towerList: [],
        radius: 200,
        complex: false
    }

    render() {
        const { radius, complex } = this.state
        return (
            <div className="tower-controler">
                <div>
                <FormField label="radius" margin="medium" style={{ width: "50%" }}>
                    <TextInput pplaceholder="type here"
                        value={radius}
                        onChange={event => this.setState({ radius: event.target.value })}
                    />
                </FormField>
                <FormField margin="medium" style={{ width: "50%" }}>
                <CheckBox
                    checked={complex}
                    label="Complex?"
                    onChange={event => this.setState({ complex: event.target.checked })}

                />
                </FormField>
                </div>
                <Button
  icon={<Icons.Edit />}
  label="Edit"
  onClick={() => {}}
/>
                
            </div>
        )
    }
}