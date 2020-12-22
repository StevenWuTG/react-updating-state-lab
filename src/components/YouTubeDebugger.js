// Code YouTubeDebugger Component Here
import React, { Component } from 'react'

export class YouTubeDebugger extends Component {

    constructor(){
        super()
        this.state = {
            errors: [],
            user: null,
            settings: {
              bitrate: 8,
              video: {
                resolution: '1080p'
              }
            }
          }
    }
    
    handleBitRate = () => {
        this.setState({
            settings: {
                ...this.state.settings,
                bitrate: 12
            }
        })
        console.log(this.state.settings)
    }
    
    handleResolution = () => {
        this.setState({
            settings: {
                ...this.state.settings,
                video: {
                    ...this.state.settings.video,
                    resolution: '720p'
                }
            }
        })
        console.log(this.state.settings)
    }
    
    render() {
        return (
            <div>
                <h1>YouTube debugger</h1>
                <button onClick={this.handleBitRate} className="bitrate">BitRate</button>
                <button onClick={this.handleResolution} className="resolution">Resolution</button>
                
            </div>
        )
    }
}

export default YouTubeDebugger
