import React from 'react';
import { Card, CardGroup } from 'react-bootstrap';
import '../css/CardGrid.css';
import {Link} from 'react-router-dom';

function Main() {
    return (

        <CardGroup className='grid'>
            {Array.from({ length: 6 }).map((_, index) => (
                <Link to="/video">
                <Card className='cardstyle'>
                    <Card.Body style={{width: '100%', height: '100%'}}>
                        <Card.Title style={{paddingTop: '1.3rem', fontSize: '1.2rem'}}>All India Senior Ranking Badminton Tournament
                        <h3 style={{fontSize: '1.2rem', fontFamily: 'monospace', letterSpacing: '3px', fontStyle: 'normal'}}>Final</h3>
                        </Card.Title>
                        <Card.Text style={{fontSize: '1rem', display: 'flex', justifyContent: 'center', margin: '0'}}>
                            <div className='img1' style={{margin: '1.2em', marginBottom: '0'}}>
                                <Card.Img src='/images/india.png' width={60} height={60}/>
                                <p>Kartikey Gulshan Kumar</p> 
                            </div>
                            <div>
                                <p>v/s</p>
                                <div style={{backgroundColor: 'cyan', color: 'black', borderRadius: '5px', padding: '10px', margin: '0'}}>
                                    Scorecard
                                </div>
                            </div>
                            <div className='img2' style={{margin: '1.2em', marginBottom: '0'}}>
                                <Card.Img src='/images/india.png' width={60} height={60}/>
                                <p>Alap Mishra</p> 
                            </div>
                        </Card.Text>
                        <div>
                            <Card.Img src='/images/logo.png' width={'25%'} height={'25%'}/>
                        </div>
                    </Card.Body>
                </Card>
                </Link>
            ))}
        </CardGroup>
    )
}

export default Main;