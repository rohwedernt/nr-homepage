import React, { Component } from 'react'
import Globe from 'worldwind-react-globe'
import { Container } from 'reactstrap'

export default class NasaGlobe extends Component {
  constructor(props) {
    super(props)
    this.state = {
      lat: 34.2,
      lon: -119.2,
      alt: 10e6,
      globe: null
    }
    this.globeRef = React.createRef()
    this.layersRef = React.createRef()
    this.markersRef = React.createRef()
    this.settingsRef = React.createRef()
  }
  
  componentDidMount() {
    // Get the component with the WorldWindow after mounting
    this.setState({globe: this.globeRef.current})
  }
  
  render() {
    const globe = this.globeRef.current
    
    const layers = [
      {layer: 'blue-marble', options: {category: 'base', enabled: false}},
      {layer: 'blue-marble-landsat', options: {category: 'base', enabled: false}},
      {layer: 'eox-sentinal2', options: {category: 'base', enabled: false}},
      {layer: 'eox-sentinal2-labels', options: {category: 'base', enabled: true}},
      {layer: 'eox-openstreetmap', options: {category: 'overlay', enabled: false, opacity: 0.8}},
      {layer: 'renderables', options: {category: 'data', enabled: true, displayName: 'Markers'}},
      {layer: 'compass', options: {category: 'setting', enabled: false}},
      {layer: 'coordinates', options: {category: 'setting', enabled: true}},
      {layer: 'view-controls', options: {category: 'setting', enabled: true}},
      {layer: 'stars', options: {category: 'setting', enabled: false}},
      {layer: 'atmosphere-day-night', options: {category: 'setting', enabled: false}}
    ]
    
    return (
      <div>
        <h4 style={{ padding:'10px', textAlign:'center', fontStyle:'italic', fontFamily:`'Montserrat', sans-serif` }}>For now this is just the interactive worldwind globe from the NASA API :)</h4>
        <Container fluid className='p-0'>
          <div className='globe'>
              <Globe 
                ref={this.globeRef} 
                layers={layers}/>
          </div>
        </Container>
      </div>
    )
  }
}