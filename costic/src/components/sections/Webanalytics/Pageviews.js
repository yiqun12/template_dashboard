import React, { Component } from 'react';

const pageviewdata = [
    {
        pagename: "Admin Home",
        pageurl: "site.com/admin/index",
        avaragetraffic: "7.65%",
        impressions: "+17.24%",
        imressionsclass: "ms-text-success",
    },
    {
        pagename: "Crypto Dashboard",
        pageurl: "site.com/admin/dashboard/crypto",
        avaragetraffic: "9.12%",
        impressions: "-12.24%",
        imressionsclass: "ms-text-danger",
    },
    {
        pagename: "Widgets Page",
        pageurl: "site.com/admin/widgets",
        avaragetraffic: "14.29%",
        impressions: "+32.04%",
        imressionsclass: "ms-text-success",
    },
    {
        pagename: "Buttons Page",
        pageurl: "site.com/admin/pages/buttons",
        avaragetraffic: "12.25%",
        impressions: "-20.75%",
        imressionsclass: "ms-text-danger",
    },
    {
        pagename: "Web Analaytics",
        pageurl: "site.com/admin/dashboard/web-analytics",
        avaragetraffic: "4.65%",
        impressions: "+13.38%",
        imressionsclass: "ms-text-success",
    },
]

class Pageviews extends Component {
    render() {
        return (
            <div className="ms-panel">
                <div className="ms-panel-header">
                    <h6>Page Views by Title</h6>
                    <p>Keep track of the pages being viewed</p>
                </div>
                <div className="ms-panel-body p-0">
                    <div className="table-responsive">
                        <table className="table table-hover thead-light">
                            <thead>
                                <tr>
                                    <th scope="col">Page Name</th>
                                    <th scope="col">Page URL</th>
                                    <th scope="col">Average Traffic</th>
                                    <th scope="col">Impressions</th>
                                </tr>
                            </thead>
                            <tbody>
                                {pageviewdata.map((item, i) => (
                                    <tr key={i}>
                                        <td>{item.pagename}</td>
                                        <td>{item.pageurl}</td>
                                        <td>{item.avaragetraffic}</td>
                                        <td className={item.imressionsclass}>{item.impressions}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        );
    }
}

export default Pageviews;