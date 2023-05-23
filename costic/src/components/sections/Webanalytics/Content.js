import React, { Component } from 'react';
import { VectorMap } from 'react-jvectormap';
import Websiteaudience from './Websiteaudience';
import Seasonchannel from './Seasonchannel';
import Pageviews from './Pageviews';
import Googleanalytics from './Googleanalytics';
import Googleanalyticsdevice from './Googleanalyticsdevice';

// Images
import img1 from '../../../assets/img/costic/country-1.jpg';
import img2 from '../../../assets/img/costic/country-2.jpg';
import img3 from '../../../assets/img/costic/country-3.jpg';
import img4 from '../../../assets/img/costic/country-4.jpg';
import img5 from '../../../assets/img/costic/country-5.jpg';

const countryactivity = [
    {
        photo: img1,
        entrance: "725",
        bouncerate: "17.24%",
        exits: "7.65%",
    },
    {
        photo: img2,
        entrance: "890",
        bouncerate: "12.90%",
        exits: "9.12%",
    },
    {
        photo: img3,
        entrance: "729",
        bouncerate: "20.75%",
        exits: "14.29%",
    },
    {
        photo: img4,
        entrance: "316",
        bouncerate: "32.09%",
        exits: "10.99%",
    },
    {
        photo: img5,
        entrance: "275",
        bouncerate: "33.58%",
        exits: "6.75%",
    },
]
const mapData = {
    US: 100000,
    RU: 9900,
    AU: 86,
    IN: 70,
    BR: 70,
};
class Content extends Component {
    render() {
        return (
            <div className="ms-content-wrapper">
                <div className="row">
                    <div className="col-md-12">
                        <h1 className="db-header-title">Welcome, Anny</h1>
                    </div>
                    {/* Audience Metrics */}
                    <div className="col-xl-7 col-md-12">
                        <Websiteaudience />
                        <Seasonchannel />
                        <Pageviews />
                    </div>
                    <div className="col-xl-5 col-md-12">
                        {/* Website Performance */}
                        <Googleanalytics />
                        {/* Sessions by Device */}
                        <Googleanalyticsdevice />
                    </div>
                </div>
                <div className="row">
                    <div className="col-xl-5 col-md-12">
                        <div className="ms-panel ms-widget">
                            <div className="ms-panel-header">
                                <h6>Top User Activity By Country</h6>
                                <p>Users activity performance and bounce rate based on country</p>
                            </div>
                            <div className="ms-panel-body p-0">
                                <div className="table-responsive">
                                    <table className="table table-hover thead-light">
                                        <thead>
                                            <tr>
                                                <th scope="col">Country</th>
                                                <th scope="col">Entrances</th>
                                                <th scope="col">Bounce Rate</th>
                                                <th scope="col">Exits</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {countryactivity.map((item, i) => (
                                                <tr key={i}>
                                                    <th scope="row">
                                                        <img src={item.photo} alt="flags" />
                                                    </th>
                                                    <td>{item.entrance}</td>
                                                    <td>{item.bouncerate}</td>
                                                    <td>{item.exits}</td>
                                                </tr>
                                            ))}
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-7 col-md-12">
                        <div className="ms-panel ms-panel-fh">
                            <div className="ms-panel-header header-mini">
                                <h6>Average Users By Country</h6>
                                <p>The top locations where users of your product are located</p>
                            </div>
                            <div className="ms-panel-body ms-average-users-country">
                                <div className="row">
                                    <div className="col-xl-4 col-md-12"> <span className="progress-label">United States</span>
                                        <span className="progress-status">14,805</span>
                                        <div className="progress progress-tiny">
                                            <div className="progress-bar bg-secondary" role="progressbar" style={{ width: '80%' }} aria-valuenow={80} aria-valuemin={0} aria-valuemax={100} />
                                        </div> <span className="progress-label">Brazil</span>
                                        <span className="progress-status">11,651</span>
                                        <div className="progress progress-tiny">
                                            <div className="progress-bar bg-primary" role="progressbar" style={{ width: '70%' }} aria-valuenow={70} aria-valuemin={0} aria-valuemax={100} />
                                        </div> <span className="progress-label">Russia</span>
                                        <span className="progress-status">9,157</span>
                                        <div className="progress progress-tiny">
                                            <div className="progress-bar bg-warning" role="progressbar" style={{ width: '60%' }} aria-valuenow={60} aria-valuemin={0} aria-valuemax={100} />
                                        </div> <span className="progress-label">India</span>
                                        <span className="progress-status">7,846</span>
                                        <div className="progress progress-tiny">
                                            <div className="progress-bar bg-danger" role="progressbar" style={{ width: '45%' }} aria-valuenow={45} aria-valuemin={0} aria-valuemax={100} />
                                        </div> <span className="progress-label">Australia</span>
                                        <span className="progress-status">6,789</span>
                                        <div className="progress progress-tiny mb-0">
                                            <div className="progress-bar bg-success" role="progressbar" style={{ width: '30%' }} aria-valuenow={30} aria-valuemin={0} aria-valuemax={100} />
                                        </div>
                                    </div>
                                    <div className="offset-xl-1 col-xl-7 col-md-12">
                                        <VectorMap map={'world_mill'}
                                            backgroundColor="#ffffff"
                                            ref="map "
                                            containerStyle={{
                                                width: '100%',
                                                height: '100%'
                                            }}
                                            regionsSelectable={true}
                                            series={{
                                                regions: [
                                                    {
                                                        values: mapData, //this is your data
                                                        scale: ["#5cb85c", "#ff0018"], //your color game's here
                                                        normalizeFunction: "polynomial"
                                                    }
                                                ]
                                            }}
                                            regionStyle={
                                                {
                                                    initial: {
                                                        fill: '#384ea1',
                                                        "fill-opacity": 1,
                                                        stroke: 'none',
                                                        "stroke-width": 0,
                                                        "stroke-opacity": 1
                                                    },
                                                    hover: {
                                                        fill: 'rgb(50,92,204)',
                                                        "fill-opacity": 1,
                                                        cursor: 'pointer'
                                                    },
                                                }
                                            }
                                            containerClassName="map"
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        );
    }
}

export default Content;