import React from 'react'
import styled from 'styled-components'

import Container from '../components/Container'
import Spacer from '../components/Spacer/Spacer'

// Files


class RecentActivities extends React.Component {
    render() {
        return (
            <Container>
                <div className="ui stackable grid work-container">
                    <div className="eight wide column">
                        <h2 className="ui header serif">
                            Recent Activities
                        </h2>
                        <ul>
                            <li>Started interning at Pretia as UI/UX Engineer.</li>
                            <li>Working on my Graduate School thesis on Computer Vision.</li>
                            <li>Participated in IDEO Tokyo’s startup makeathon.</li>
                            <li>My team won an honorable mention award in SICF20 with InWoFumu.</li>
                            <li>Exhibited an Interactive Storytelling Installation in Jakarta.</li>
                        </ul>
                    </div>
                    <div className="eight wide column">
                        
                    </div>
                </div>
                <Spacer />
            </Container>
        )
    }
}

export default RecentActivities