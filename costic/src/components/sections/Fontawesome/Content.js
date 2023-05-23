import React, { Component } from 'react';
import Breadcrumb from './Breadcrumb'

class Content extends Component {
    render() {
        return (
            <div className="ms-content-wrapper">
                <div className="row">
                    <div className="col-md-12">
                        <Breadcrumb/>
                    </div>
                    <div className="col-md-12">
                        <div className="ms-panel">
                            <div className="ms-panel-header">
                                <h6>General icons</h6>
                            </div>
                            <div className="ms-panel-body">
                                <p className="ms-directions">Use <code>fas fa-*</code> for solid icons, <code>far fa-*</code> for regular icons and <code>fab fa-*</code> for brand icons</p>
                                <div className="ms-icons-list row">
                                    <div className="col-sm-6 col-md-4 col-lg-3"> <i className="fa fa-address-book" />fa fa-address-book</div>
                                    <div className="col-sm-6 col-md-4 col-lg-3"> <i className="far fa-address-book" />far fa-address-book</div>
                                    <div className="col-sm-6 col-md-4 col-lg-3"> <i className="fa fa-address-card" />fa fa-address-card</div>
                                    <div className="col-sm-6 col-md-4 col-lg-3"> <i className="far fa-address-card" />far fa-address-card</div>
                                    <div className="col-sm-6 col-md-4 col-lg-3"> <i className="fab fa-bandcamp" />fab fa-bandcamp</div>
                                    <div className="col-sm-6 col-md-4 col-lg-3"> <i className="fa fa-bath" />fa fa-bath</div>
                                    <div className="col-sm-6 col-md-4 col-lg-3"> <i className="far fa-envelope" />far fa-envelopepen</div>
                                    <div className="col-sm-6 col-md-4 col-lg-3"> <i className="far fa-envelope-open" />far fa-envelope-open</div>
                                    <div className="col-sm-6 col-md-4 col-lg-3"> <i className="fab fa-etsy" />fab fa-etsy</div>
                                    <div className="col-sm-6 col-md-4 col-lg-3"> <i className="fab fa-free-code-camp" />fab fa-free-code-camp</div>
                                    <div className="col-sm-6 col-md-4 col-lg-3"> <i className="fab fa-grav" />fab fa-grav</div>
                                    <div className="col-sm-6 col-md-4 col-lg-3"> <i className="far fa-handshake" />far fa-handshake</div>
                                    <div className="col-sm-6 col-md-4 col-lg-3"> <i className="fa fa-id-badge" />fa fa-id-badge</div>
                                    <div className="col-sm-6 col-md-4 col-lg-3"> <i className="fa fa-id-card" />fa fa-id-card</div>
                                    <div className="col-sm-6 col-md-4 col-lg-3"> <i className="far fa-id-card" />far fa-id-card</div>
                                    <div className="col-sm-6 col-md-4 col-lg-3"> <i className="fab fa-imdb" />fab fa-imdb</div>
                                    <div className="col-sm-6 col-md-4 col-lg-3"> <i className="fab fa-linode" /> fab fa-linode</div>
                                    <div className="col-sm-6 col-md-4 col-lg-3"> <i className="fab fa-meetup" />fab fa-meetup</div>
                                    <div className="col-sm-6 col-md-4 col-lg-3"> <i className="fa fa-microchip" />fa fa-microchip</div>
                                    <div className="col-sm-6 col-md-4 col-lg-3"> <i className="fa fa-podcast" />fa fa-podcast</div>
                                    <div className="col-sm-6 col-md-4 col-lg-3"> <i className="fab fa-quora" />fab fa-quora</div>
                                    <div className="col-sm-6 col-md-4 col-lg-3"> <i className="fab fa-ravelry" />fab fa-ravelry</div>
                                    <div className="col-sm-6 col-md-4 col-lg-3"> <i className="fa fa-shower" />fa fa-shower</div>
                                    <div className="col-sm-6 col-md-4 col-lg-3"> <i className="far fa-snowflake" />far fa-snowflake</div>
                                    <div className="col-sm-6 col-md-4 col-lg-3"> <i className="fab fa-superpowers" />fab fa-superpowers</div>
                                    <div className="col-sm-6 col-md-4 col-lg-3"> <i className="fab fa-telegram" />fab fa-telegram</div>
                                    <div className="col-sm-6 col-md-4 col-lg-3"> <i className="fa fa-thermometer" />fa fa-thermometer</div>
                                    <div className="col-sm-6 col-md-4 col-lg-3"> <i className="fa fa-thermometer" />fa fa-thermometer</div>
                                    <div className="col-sm-6 col-md-4 col-lg-3"> <i className="fa fa-thermometer-empty" />fa fa-thermometer-empty</div>
                                    <div className="col-sm-6 col-md-4 col-lg-3"> <i className="fa fa-thermometer-full" />fa fa-thermometer-full</div>
                                    <div className="col-sm-6 col-md-4 col-lg-3"> <i className="fa fa-thermometer-half" />fa fa-thermometer-half</div>
                                    <div className="col-sm-6 col-md-4 col-lg-3"> <i className="fa fa-thermometer-quarter" />fa fa-thermometer-quarter</div>
                                    <div className="col-sm-6 col-md-4 col-lg-3"> <i className="fa fa-thermometer-three-quarters" />fa fa-thermometer-three-quarters</div>
                                    <div className="col-sm-6 col-md-4 col-lg-3"> <i className="fa fa-user-circle" />fa fa-user-circle</div>
                                    <div className="col-sm-6 col-md-4 col-lg-3"> <i className="far fa-user-circle" />far fa-user-circle</div>
                                    <div className="col-sm-6 col-md-4 col-lg-3"> <i className="far fa-user" />far fa-user</div>
                                    <div className="col-sm-6 col-md-4 col-lg-3"> <i className="fa fa-window-close" />fa fa-window-close</div>
                                    <div className="col-sm-6 col-md-4 col-lg-3"> <i className="far fa-window-close" />far fa-window-close</div>
                                    <div className="col-sm-6 col-md-4 col-lg-3"> <i className="fa fa-window-maximize" />fa fa-window-maximize</div>
                                    <div className="col-sm-6 col-md-4 col-lg-3"> <i className="fa fa-window-minimize" />fa fa-window-minimize</div>
                                    <div className="col-sm-6 col-md-4 col-lg-3"> <i className="fa fa-window-restore" />fa fa-window-restore</div>
                                    <div className="col-sm-6 col-md-4 col-lg-3"> <i className="fab fa-wpexplorer" />fab fa-wpexplorer</div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-12">
                        <div className="ms-panel">
                            <div className="ms-panel-header">
                                <h6>Web Application Icons</h6>
                            </div>
                            <div className="ms-panel-body">
                                <div className="ms-icons-list row">
                                    <div className="col-sm-6 col-md-4 col-lg-3"><i className="fa fa-adjust" /> fa-adjust</div>
                                    <div className="col-sm-6 col-md-4 col-lg-3"><i className="fa fa-anchor" /> fa-anchor</div>
                                    <div className="col-sm-6 col-md-4 col-lg-3"><i className="fa fa-archive" /> fa-archive</div>
                                    <div className="col-sm-6 col-md-4 col-lg-3"><i className="fa fa-asterisk" /> fa-asterisk</div>
                                    <div className="col-sm-6 col-md-4 col-lg-3"><i className="fa fa-ban" /> fa-ban</div>
                                    <div className="col-sm-6 col-md-4 col-lg-3"><i className="fa fa-bars" /> fa-bars</div>
                                    <div className="col-sm-6 col-md-4 col-lg-3"><i className="fa fa-beer" /> fa-beer</div>
                                    <div className="col-sm-6 col-md-4 col-lg-3"><i className="fa fa-bell" /> fa-bell</div>
                                    <div className="col-sm-6 col-md-4 col-lg-3"><i className="far fa-bell" /> fa-bell</div>
                                    <div className="col-sm-6 col-md-4 col-lg-3"><i className="fa fa-bolt" /> fa-bolt</div>
                                    <div className="col-sm-6 col-md-4 col-lg-3"><i className="fa fa-bomb" /> fa-bomb</div>
                                    <div className="col-sm-6 col-md-4 col-lg-3"><i className="fa fa-book" /> fa-book</div>
                                    <div className="col-sm-6 col-md-4 col-lg-3"><i className="fa fa-bookmark" /> fa-bookmark</div>
                                    <div className="col-sm-6 col-md-4 col-lg-3"><i className="far fa-bookmark" /> fa-bookmark</div>
                                    <div className="col-sm-6 col-md-4 col-lg-3"><i className="fa fa-briefcase" /> fa-briefcase</div>
                                    <div className="col-sm-6 col-md-4 col-lg-3"><i className="fa fa-bug" /> fa-bug</div>
                                    <div className="col-sm-6 col-md-4 col-lg-3"><i className="fa fa-building" /> fa-building</div>
                                    <div className="col-sm-6 col-md-4 col-lg-3"><i className="far fa-building" /> fa-building</div>
                                    <div className="col-sm-6 col-md-4 col-lg-3"><i className="fa fa-bullhorn" /> fa-bullhorn</div>
                                    <div className="col-sm-6 col-md-4 col-lg-3"><i className="fa fa-bullseye" /> fa-bullseye</div>
                                    <div className="col-sm-6 col-md-4 col-lg-3"><i className="fa fa-calendar" /> fa-calendar</div>
                                    <div className="col-sm-6 col-md-4 col-lg-3"><i className="far fa-calendar" /> fa-calendar</div>
                                    <div className="col-sm-6 col-md-4 col-lg-3"><i className="fa fa-camera" /> fa-camera</div>
                                    <div className="col-sm-6 col-md-4 col-lg-3"><i className="fa fa-camera-retro" /> fa-camera-retro</div>
                                    <div className="col-sm-6 col-md-4 col-lg-3"><i className="fa fa-car" /> fa-car</div>
                                    <div className="col-sm-6 col-md-4 col-lg-3"><i className="far fa-caret-square-down" /> fa-caret-square-down</div>
                                    <div className="col-sm-6 col-md-4 col-lg-3"><i className="far fa-caret-square-left" /> fa-caret-square-left</div>
                                    <div className="col-sm-6 col-md-4 col-lg-3"><i className="far fa-caret-square-right" /> fa-caret-square-right</div>
                                    <div className="col-sm-6 col-md-4 col-lg-3"><i className="far fa-caret-square-up" /> fa-caret-square-up</div>
                                    <div className="col-sm-6 col-md-4 col-lg-3"><i className="fa fa-certificate" /> fa-certificate</div>
                                    <div className="col-sm-6 col-md-4 col-lg-3"><i className="fa fa-check" /> fa-check</div>
                                    <div className="col-sm-6 col-md-4 col-lg-3"><i className="fa fa-check-circle" /> fa-check-circle</div>
                                    <div className="col-sm-6 col-md-4 col-lg-3"><i className="far fa-check-circle" /> fa-check-circle</div>
                                    <div className="col-sm-6 col-md-4 col-lg-3"><i className="fa fa-check-square" /> fa-check-square</div>
                                    <div className="col-sm-6 col-md-4 col-lg-3"><i className="far fa-check-square" /> fa-check-square</div>
                                    <div className="col-sm-6 col-md-4 col-lg-3"><i className="fa fa-child" /> fa-child</div>
                                    <div className="col-sm-6 col-md-4 col-lg-3"><i className="fa fa-circle" /> fa-circle</div>
                                    <div className="col-sm-6 col-md-4 col-lg-3"><i className="far fa-circle" /> fa-circle</div>
                                    <div className="col-sm-6 col-md-4 col-lg-3"><i className="far fa-clock" /> fa-clock</div>
                                    <div className="col-sm-6 col-md-4 col-lg-3"><i className="fa fa-cloud" /> fa-cloud</div>
                                    <div className="col-sm-6 col-md-4 col-lg-3"><i className="fas fa-cloud-upload-alt" /> fa-cloud-upload</div>
                                    <div className="col-sm-6 col-md-4 col-lg-3"><i className="fa fa-code" /> fa-code</div>
                                    <div className="col-sm-6 col-md-4 col-lg-3"><i className="fa fa-coffee" /> fa-coffee</div>
                                    <div className="col-sm-6 col-md-4 col-lg-3"><i className="fa fa-cog" /> fa-cog</div>
                                    <div className="col-sm-6 col-md-4 col-lg-3"><i className="fa fa-cogs" /> fa-cogs</div>
                                    <div className="col-sm-6 col-md-4 col-lg-3"><i className="fa fa-comment" /> fa-comment</div>
                                    <div className="col-sm-6 col-md-4 col-lg-3"><i className="far fa-comment" /> fa-comment</div>
                                    <div className="col-sm-6 col-md-4 col-lg-3"><i className="fa fa-comments" /> fa-comments</div>
                                    <div className="col-sm-6 col-md-4 col-lg-3"><i className="far fa-comments" /> fa-comments</div>
                                    <div className="col-sm-6 col-md-4 col-lg-3"><i className="fa fa-compass" /> fa-compass</div>
                                    <div className="col-sm-6 col-md-4 col-lg-3"><i className="fa fa-credit-card" /> fa-credit-card</div>
                                    <div className="col-sm-6 col-md-4 col-lg-3"><i className="fa fa-crop" /> fa-crop</div>
                                    <div className="col-sm-6 col-md-4 col-lg-3"><i className="fa fa-crosshairs" /> fa-crosshairs</div>
                                    <div className="col-sm-6 col-md-4 col-lg-3"><i className="fa fa-cube" /> fa-cube</div>
                                    <div className="col-sm-6 col-md-4 col-lg-3"><i className="fa fa-cubes" /> fa-cubes</div>
                                    <div className="col-sm-6 col-md-4 col-lg-3"><i className="fa fa-cutlery" /> fa-cutlery</div>
                                    <div className="col-sm-6 col-md-4 col-lg-3"><i className="fa fa-dashboard" /> fa-dashboard <span className="text-muted">(alias)</span>
                                    </div>
                                    <div className="col-sm-6 col-md-4 col-lg-3"><i className="fa fa-database" /> fa-database</div>
                                    <div className="col-sm-6 col-md-4 col-lg-3"><i className="fa fa-desktop" /> fa-desktop</div>
                                    <div className="col-sm-6 col-md-4 col-lg-3"><i className="far fa-dot-circle" /> fa-dot-circle</div>
                                    <div className="col-sm-6 col-md-4 col-lg-3"><i className="fa fa-download" /> fa-download</div>
                                    <div className="col-sm-6 col-md-4 col-lg-3"><i className="fa fa-edit" /> fa-edit <span className="text-muted">(alias)</span>
                                    </div>
                                    <div className="col-sm-6 col-md-4 col-lg-3"><i className="fa fa-ellipsis-h" /> fa-ellipsis-h</div>
                                    <div className="col-sm-6 col-md-4 col-lg-3"><i className="fa fa-ellipsis-v" /> fa-ellipsis-v</div>
                                    <div className="col-sm-6 col-md-4 col-lg-3"><i className="fa fa-envelope" /> fa-envelope</div>
                                    <div className="col-sm-6 col-md-4 col-lg-3"><i className="far fa-envelope" /> fa-envelope</div>
                                    <div className="col-sm-6 col-md-4 col-lg-3"><i className="fa fa-envelope-square" /> fa-envelope-square</div>
                                    <div className="col-sm-6 col-md-4 col-lg-3"><i className="fa fa-eraser" /> fa-eraser</div>
                                    <div className="col-sm-6 col-md-4 col-lg-3"><i className="fa fa-exclamation" /> fa-exclamation</div>
                                    <div className="col-sm-6 col-md-4 col-lg-3"><i className="fa fa-exclamation-circle" /> fa-exclamation-circle</div>
                                    <div className="col-sm-6 col-md-4 col-lg-3"><i className="fa fa-exclamation-triangle" /> fa-exclamation-triangle</div>
                                    <div className="col-sm-6 col-md-4 col-lg-3"><i className="fa fa-eye" /> fa-eye</div>
                                    <div className="col-sm-6 col-md-4 col-lg-3"><i className="fa fa-eye-slash" /> fa-eye-slash</div>
                                    <div className="col-sm-6 col-md-4 col-lg-3"><i className="fa fa-fax" /> fa-fax</div>
                                    <div className="col-sm-6 col-md-4 col-lg-3"><i className="fa fa-female" /> fa-female</div>
                                    <div className="col-sm-6 col-md-4 col-lg-3"><i className="fa fa-fighter-jet" /> fa-fighter-jet</div>
                                    <div className="col-sm-6 col-md-4 col-lg-3"><i className="far fa-file-archive" /> fa-file-archive</div>
                                    <div className="col-sm-6 col-md-4 col-lg-3"><i className="far fa-file-audio" /> fa-file-audio</div>
                                    <div className="col-sm-6 col-md-4 col-lg-3"><i className="far fa-file-code" /> fa-file-code</div>
                                    <div className="col-sm-6 col-md-4 col-lg-3"><i className="far fa-file-excel" /> fa-file-excel</div>
                                    <div className="col-sm-6 col-md-4 col-lg-3"><i className="far fa-file-image" /> fa-file-image</div>
                                    <div className="col-sm-6 col-md-4 col-lg-3"><i className="far fa-file-pdf" /> fa-file-pdf</div>
                                    <div className="col-sm-6 col-md-4 col-lg-3"><i className="far fa-file-powerpoint" /> fa-file-powerpoint</div>
                                    <div className="col-sm-6 col-md-4 col-lg-3"><i className="far fa-file-video" /> fa-file-video</div>
                                    <div className="col-sm-6 col-md-4 col-lg-3"><i className="far fa-file-word" /> fa-file-word</div>
                                    <div className="col-sm-6 col-md-4 col-lg-3"><i className="fa fa-film" /> fa-film</div>
                                    <div className="col-sm-6 col-md-4 col-lg-3"><i className="fa fa-filter" /> fa-filter</div>
                                    <div className="col-sm-6 col-md-4 col-lg-3"><i className="fa fa-fire" /> fa-fire</div>
                                    <div className="col-sm-6 col-md-4 col-lg-3"><i className="fa fa-fire-extinguisher" /> fa-fire-extinguisher</div>
                                    <div className="col-sm-6 col-md-4 col-lg-3"><i className="fa fa-flag" /> fa-flag</div>
                                    <div className="col-sm-6 col-md-4 col-lg-3"><i className="fa fa-flag-checkered" /> fa-flag-checkered</div>
                                    <div className="col-sm-6 col-md-4 col-lg-3"><i className="far fa-flag" /> fa-flag</div>
                                    <div className="col-sm-6 col-md-4 col-lg-3"><i className="fa fa-flash" /> fa-flash <span className="text-muted">(alias)</span>
                                    </div>
                                    <div className="col-sm-6 col-md-4 col-lg-3"><i className="fa fa-flask" /> fa-flask</div>
                                    <div className="col-sm-6 col-md-4 col-lg-3"><i className="fa fa-folder" /> fa-folder</div>
                                    <div className="col-sm-6 col-md-4 col-lg-3"><i className="far fa-folder" /> fa-folder</div>
                                    <div className="col-sm-6 col-md-4 col-lg-3"><i className="fa fa-folder-open" /> fa-folder-open</div>
                                    <div className="col-sm-6 col-md-4 col-lg-3"><i className="far fa-folder-open" /> fa-folder-open</div>
                                    <div className="col-sm-6 col-md-4 col-lg-3"><i className="far fa-frown" /> fa-frown</div>
                                    <div className="col-sm-6 col-md-4 col-lg-3"><i className="fa fa-gamepad" /> fa-gamepad</div>
                                    <div className="col-sm-6 col-md-4 col-lg-3"><i className="fa fa-gavel" /> fa-gavel</div>
                                    <div className="col-sm-6 col-md-4 col-lg-3"><i className="fa fa-gift" /> fa-gift</div>
                                    <div className="col-sm-6 col-md-4 col-lg-3"><i className="fa fa-globe" /> fa-globe</div>
                                    <div className="col-sm-6 col-md-4 col-lg-3"><i className="fa fa-graduation-cap" /> fa-graduation-cap</div>
                                    <div className="col-sm-6 col-md-4 col-lg-3"><i className="fa fa-group" /> fa-group <span className="text-muted">(alias)</span>
                                    </div>
                                    <div className="col-sm-6 col-md-4 col-lg-3"><i className="far fa-hdd" /> fa-hdd</div>
                                    <div className="col-sm-6 col-md-4 col-lg-3"><i className="fa fa-headphones" /> fa-headphones</div>
                                    <div className="col-sm-6 col-md-4 col-lg-3"><i className="fa fa-heart" /> fa-heart</div>
                                    <div className="col-sm-6 col-md-4 col-lg-3"><i className="far fa-heart" /> fa-heart</div>
                                    <div className="col-sm-6 col-md-4 col-lg-3"><i className="fa fa-history" /> fa-history</div>
                                    <div className="col-sm-6 col-md-4 col-lg-3"><i className="fa fa-home" /> fa-home</div>
                                    <div className="col-sm-6 col-md-4 col-lg-3"><i className="fa fa-image" /> fa-image <span className="text-muted">(alias)</span>
                                    </div>
                                    <div className="col-sm-6 col-md-4 col-lg-3"><i className="fa fa-inbox" /> fa-inbox</div>
                                    <div className="col-sm-6 col-md-4 col-lg-3"><i className="fa fa-info" /> fa-info</div>
                                    <div className="col-sm-6 col-md-4 col-lg-3"><i className="fa fa-info-circle" /> fa-info-circle</div>
                                    <div className="col-sm-6 col-md-4 col-lg-3"><i className="fa fa-institution" /> fa-institution <span className="text-muted">(alias)</span>
                                    </div>
                                    <div className="col-sm-6 col-md-4 col-lg-3"><i className="fa fa-key" /> fa-key</div>
                                    <div className="col-sm-6 col-md-4 col-lg-3"><i className="far fa-keyboard" /> fa-keyboard</div>
                                    <div className="col-sm-6 col-md-4 col-lg-3"><i className="fa fa-language" /> fa-language</div>
                                    <div className="col-sm-6 col-md-4 col-lg-3"><i className="fa fa-laptop" /> fa-laptop</div>
                                    <div className="col-sm-6 col-md-4 col-lg-3"><i className="fa fa-leaf" /> fa-leaf</div>
                                    <div className="col-sm-6 col-md-4 col-lg-3"><i className="far fa-lemon" /> fa-lemon</div>
                                    <div className="col-sm-6 col-md-4 col-lg-3"><i className="fa fa-life-ring" /> fa-life-ring</div>
                                    <div className="col-sm-6 col-md-4 col-lg-3"><i className="fa fa-life-saver" /> fa-life-saver <span className="text-muted">(alias)</span>
                                    </div>
                                    <div className="col-sm-6 col-md-4 col-lg-3"><i className="far fa-lightbulb" /> fa-lightbulb</div>
                                    <div className="col-sm-6 col-md-4 col-lg-3"><i className="fa fa-location-arrow" /> fa-location-arrow</div>
                                    <div className="col-sm-6 col-md-4 col-lg-3"><i className="fa fa-lock" /> fa-lock</div>
                                    <div className="col-sm-6 col-md-4 col-lg-3"><i className="fa fa-magic" /> fa-magic</div>
                                    <div className="col-sm-6 col-md-4 col-lg-3"><i className="fa fa-magnet" /> fa-magnet</div>
                                    <div className="col-sm-6 col-md-4 col-lg-3"><i className="fa fa-mail-reply-all" /> fa-mail-reply-all <span className="text-muted">(alias)</span>
                                    </div>
                                    <div className="col-sm-6 col-md-4 col-lg-3"><i className="fa fa-male" /> fa-male</div>
                                    <div className="col-sm-6 col-md-4 col-lg-3"><i className="fa fa-map-marker" /> fa-map-marker</div>
                                    <div className="col-sm-6 col-md-4 col-lg-3"><i className="far fa-meh" /> fa-meh</div>
                                    <div className="col-sm-6 col-md-4 col-lg-3"><i className="fa fa-microphone" /> fa-microphone</div>
                                    <div className="col-sm-6 col-md-4 col-lg-3"><i className="fa fa-microphone-slash" /> fa-microphone-slash</div>
                                    <div className="col-sm-6 col-md-4 col-lg-3"><i className="fa fa-minus" /> fa-minus</div>
                                    <div className="col-sm-6 col-md-4 col-lg-3"><i className="fa fa-minus-circle" /> fa-minus-circle</div>
                                    <div className="col-sm-6 col-md-4 col-lg-3"><i className="fa fa-minus-square" /> fa-minus-square</div>
                                    <div className="col-sm-6 col-md-4 col-lg-3"><i className="far fa-minus-square" /> fa-minus-square</div>
                                    <div className="col-sm-6 col-md-4 col-lg-3"><i className="fa fa-mobile" /> fa-mobile</div>
                                    <div className="col-sm-6 col-md-4 col-lg-3"><i className="far fa-moon" /> fa-moon</div>
                                    <div className="col-sm-6 col-md-4 col-lg-3"><i className="fa fa-music" /> fa-music</div>
                                    <div className="col-sm-6 col-md-4 col-lg-3"><i className="fa fa-paper-plane" /> fa-paper-plane</div>
                                    <div className="col-sm-6 col-md-4 col-lg-3"><i className="far fa-paper-plane" /> fa-paper-plane</div>
                                    <div className="col-sm-6 col-md-4 col-lg-3"><i className="fa fa-paw" /> fa-paw</div>
                                    <div className="col-sm-6 col-md-4 col-lg-3"><i className="fas fa-pencil-alt" /> fa-pencil</div>
                                    <div className="col-sm-6 col-md-4 col-lg-3"><i className="fa fa-phone" /> fa-phone</div>
                                    <div className="col-sm-6 col-md-4 col-lg-3"><i className="fa fa-phone-square" /> fa-phone-square</div>
                                    <div className="col-sm-6 col-md-4 col-lg-3"><i className="fa fa-plane" /> fa-plane</div>
                                    <div className="col-sm-6 col-md-4 col-lg-3"><i className="fa fa-plus" /> fa-plus</div>
                                    <div className="col-sm-6 col-md-4 col-lg-3"><i className="fa fa-plus-circle" /> fa-plus-circle</div>
                                    <div className="col-sm-6 col-md-4 col-lg-3"><i className="fa fa-plus-square" /> fa-plus-square</div>
                                    <div className="col-sm-6 col-md-4 col-lg-3"><i className="far fa-plus-square" /> fa-plus-square</div>
                                    <div className="col-sm-6 col-md-4 col-lg-3"><i className="fa fa-power-off" /> fa-power-off</div>
                                    <div className="col-sm-6 col-md-4 col-lg-3"><i className="fa fa-print" /> fa-print</div>
                                    <div className="col-sm-6 col-md-4 col-lg-3"><i className="fa fa-puzzle-piece" /> fa-puzzle-piece</div>
                                    <div className="col-sm-6 col-md-4 col-lg-3"><i className="fa fa-qrcode" /> fa-qrcode</div>
                                    <div className="col-sm-6 col-md-4 col-lg-3"><i className="fa fa-question" /> fa-question</div>
                                    <div className="col-sm-6 col-md-4 col-lg-3"><i className="fa fa-question-circle" /> fa-question-circle</div>
                                    <div className="col-sm-6 col-md-4 col-lg-3"><i className="fa fa-quote-left" /> fa-quote-left</div>
                                    <div className="col-sm-6 col-md-4 col-lg-3"><i className="fa fa-quote-right" /> fa-quote-right</div>
                                    <div className="col-sm-6 col-md-4 col-lg-3"><i className="fa fa-random" /> fa-random</div>
                                    <div className="col-sm-6 col-md-4 col-lg-3"><i className="fa fa-recycle" /> fa-recycle</div>
                                    <div className="col-sm-6 col-md-4 col-lg-3"><i className="fa fa-refresh" /> fa-refresh</div>
                                    <div className="col-sm-6 col-md-4 col-lg-3"><i className="fa fa-reorder" /> fa-reorder <span className="text-muted">(alias)</span>
                                    </div>
                                    <div className="col-sm-6 col-md-4 col-lg-3"><i className="fa fa-reply" /> fa-reply</div>
                                    <div className="col-sm-6 col-md-4 col-lg-3"><i className="fa fa-reply-all" /> fa-reply-all</div>
                                    <div className="col-sm-6 col-md-4 col-lg-3"><i className="fa fa-retweet" /> fa-retweet</div>
                                    <div className="col-sm-6 col-md-4 col-lg-3"><i className="fa fa-road" /> fa-road</div>
                                    <div className="col-sm-6 col-md-4 col-lg-3"><i className="fa fa-rocket" /> fa-rocket</div>
                                    <div className="col-sm-6 col-md-4 col-lg-3"><i className="fa fa-rss" /> fa-rss</div>
                                    <div className="col-sm-6 col-md-4 col-lg-3"><i className="fa fa-rss-square" /> fa-rss-square</div>
                                    <div className="col-sm-6 col-md-4 col-lg-3"><i className="fa fa-search" /> fa-search</div>
                                    <div className="col-sm-6 col-md-4 col-lg-3"><i className="fa fa-search-minus" /> fa-search-minus</div>
                                    <div className="col-sm-6 col-md-4 col-lg-3"><i className="fa fa-search-plus" /> fa-search-plus</div>
                                    <div className="col-sm-6 col-md-4 col-lg-3"><i className="fa fa-send" /> fa-send <span className="text-muted">(alias)</span>
                                    </div>
                                    <div className="col-sm-6 col-md-4 col-lg-3"><i className="far fa-send" /> fa-send <span className="text-muted">(alias)</span>
                                    </div>
                                    <div className="col-sm-6 col-md-4 col-lg-3"><i className="fa fa-share" /> fa-share</div>
                                    <div className="col-sm-6 col-md-4 col-lg-3"><i className="fa fa-share-alt" /> fa-share-alt</div>
                                    <div className="col-sm-6 col-md-4 col-lg-3"><i className="fa fa-share-alt-square" /> fa-share-alt-square</div>
                                    <div className="col-sm-6 col-md-4 col-lg-3"><i className="fa fa-share-square" /> fa-share-square</div>
                                    <div className="col-sm-6 col-md-4 col-lg-3"><i className="far fa-share-square" /> fa-share-square</div>
                                    <div className="col-sm-6 col-md-4 col-lg-3"><i className="fas fa-shield-alt" /> fa-shield</div>
                                    <div className="col-sm-6 col-md-4 col-lg-3"><i className="fa fa-shopping-cart" /> fa-shopping-cart</div>
                                    <div className="col-sm-6 col-md-4 col-lg-3"><i className="fa fa-signal" /> fa-signal</div>
                                    <div className="col-sm-6 col-md-4 col-lg-3"><i className="fa fa-sitemap" /> fa-sitemap</div>
                                    <div className="col-sm-6 col-md-4 col-lg-3"><i className="far fa-smile" /> fa-smile</div>
                                    <div className="col-sm-6 col-md-4 col-lg-3"><i className="fa fa-sort" /> fa-sort</div>
                                    <div className="col-sm-6 col-md-4 col-lg-3"><i className="fa fa-sort-down" /> fa-sort-down <span className="text-muted">(alias)</span>
                                    </div>
                                    <div className="col-sm-6 col-md-4 col-lg-3"><i className="fa fa-sort-up" /> fa-sort-up <span className="text-muted">(alias)</span>
                                    </div>
                                    <div className="col-sm-6 col-md-4 col-lg-3"><i className="fa fa-space-shuttle" /> fa-space-shuttle</div>
                                    <div className="col-sm-6 col-md-4 col-lg-3"><i className="fa fa-spinner" /> fa-spinner</div>
                                    <div className="col-sm-6 col-md-4 col-lg-3"><i className="fa fa-spoon" /> fa-spoon</div>
                                    <div className="col-sm-6 col-md-4 col-lg-3"><i className="far fa-square" /> fa-square</div>
                                    <div className="col-sm-6 col-md-4 col-lg-3"><i className="fa fa-star" /> fa-star</div>
                                    <div className="col-sm-6 col-md-4 col-lg-3"><i className="fa fa-star-half" /> fa-star-half</div>
                                    <div className="col-sm-6 col-md-4 col-lg-3"><i className="far fa-star-half" /> fa-star-half</div>
                                    <div className="col-sm-6 col-md-4 col-lg-3"><i className="far fa-star" /> fa-star</div>
                                    <div className="col-sm-6 col-md-4 col-lg-3"><i className="fa fa-suitcase" /> fa-suitcase</div>
                                    <div className="col-sm-6 col-md-4 col-lg-3"><i className="far fa-sun" /> fa-sun</div>
                                    <div className="col-sm-6 col-md-4 col-lg-3"><i className="fa fa-tablet" /> fa-tablet</div>
                                    <div className="col-sm-6 col-md-4 col-lg-3"><i className="fa fa-tag" /> fa-tag</div>
                                    <div className="col-sm-6 col-md-4 col-lg-3"><i className="fa fa-tags" /> fa-tags</div>
                                    <div className="col-sm-6 col-md-4 col-lg-3"><i className="fa fa-tasks" /> fa-tasks</div>
                                    <div className="col-sm-6 col-md-4 col-lg-3"><i className="fa fa-taxi" /> fa-taxi</div>
                                    <div className="col-sm-6 col-md-4 col-lg-3"><i className="fa fa-terminal" /> fa-terminal</div>
                                    <div className="col-sm-6 col-md-4 col-lg-3"><i className="fa fa-thumb-tack" /> fa-thumb-tack</div>
                                    <div className="col-sm-6 col-md-4 col-lg-3"><i className="fa fa-thumbs-down" /> fa-thumbs-down</div>
                                    <div className="col-sm-6 col-md-4 col-lg-3"><i className="far fa-thumbs-down" /> fa-thumbs-down</div>
                                    <div className="col-sm-6 col-md-4 col-lg-3"><i className="far fa-thumbs-up" /> fa-thumbs-up</div>
                                    <div className="col-sm-6 col-md-4 col-lg-3"><i className="fa fa-thumbs-up" /> fa-thumbs-up</div>
                                    <div className="col-sm-6 col-md-4 col-lg-3"><i className="fa fa-ticket" /> fa-ticket</div>
                                    <div className="col-sm-6 col-md-4 col-lg-3"><i className="fa fa-times" /> fa-times</div>
                                    <div className="col-sm-6 col-md-4 col-lg-3"><i className="fa fa-times-circle" /> fa-times-circle</div>
                                    <div className="col-sm-6 col-md-4 col-lg-3"><i className="far fa-times-circle" /> fa-times-circle</div>
                                    <div className="col-sm-6 col-md-4 col-lg-3"><i className="fa fa-tint" /> fa-tint</div>
                                    <div className="col-sm-6 col-md-4 col-lg-3"><i className="fa fa-toggle-down" /> fa-toggle-down <span className="text-muted">(alias)</span>
                                    </div>
                                    <div className="col-sm-6 col-md-4 col-lg-3"><i className="fa fa-toggle-left" /> fa-toggle-left <span className="text-muted">(alias)</span>
                                    </div>
                                    <div className="col-sm-6 col-md-4 col-lg-3"><i className="fa fa-toggle-right" /> fa-toggle-right <span className="text-muted">(alias)</span>
                                    </div>
                                    <div className="col-sm-6 col-md-4 col-lg-3"><i className="fa fa-toggle-up" /> fa-toggle-up <span className="text-muted">(alias)</span>
                                    </div>
                                    <div className="col-sm-6 col-md-4 col-lg-3"><i className="fas fa-trash" /> fa-trash</div>
                                    <div className="col-sm-6 col-md-4 col-lg-3"><i className="fa fa-tree" /> fa-tree</div>
                                    <div className="col-sm-6 col-md-4 col-lg-3"><i className="fa fa-trophy" /> fa-trophy</div>
                                    <div className="col-sm-6 col-md-4 col-lg-3"><i className="fa fa-truck" /> fa-truck</div>
                                    <div className="col-sm-6 col-md-4 col-lg-3"><i className="fa fa-umbrella" /> fa-umbrella</div>
                                    <div className="col-sm-6 col-md-4 col-lg-3"><i className="fa fa-university" /> fa-university</div>
                                    <div className="col-sm-6 col-md-4 col-lg-3"><i className="fa fa-unlock" /> fa-unlock</div>
                                    <div className="col-sm-6 col-md-4 col-lg-3"><i className="fa fa-unlock-alt" /> fa-unlock-alt</div>
                                    <div className="col-sm-6 col-md-4 col-lg-3"><i className="fa fa-unsorted" /> fa-unsorted <span className="text-muted">(alias)</span>
                                    </div>
                                    <div className="col-sm-6 col-md-4 col-lg-3"><i className="fa fa-upload" /> fa-upload</div>
                                    <div className="col-sm-6 col-md-4 col-lg-3"><i className="fa fa-user" /> fa-user</div>
                                    <div className="col-sm-6 col-md-4 col-lg-3"><i className="fa fa-users" /> fa-users</div>
                                    <div className="col-sm-6 col-md-4 col-lg-3"><i className="fa fa-video-camera" /> fa-video-camera</div>
                                    <div className="col-sm-6 col-md-4 col-lg-3"><i className="fa fa-volume-down" /> fa-volume-down</div>
                                    <div className="col-sm-6 col-md-4 col-lg-3"><i className="fa fa-volume-off" /> fa-volume-off</div>
                                    <div className="col-sm-6 col-md-4 col-lg-3"><i className="fa fa-volume-up" /> fa-volume-up</div>
                                    <div className="col-sm-6 col-md-4 col-lg-3"><i className="fa fa-warning" /> fa-warning <span className="text-muted">(alias)</span>
                                    </div>
                                    <div className="col-sm-6 col-md-4 col-lg-3"><i className="fa fa-wheelchair" /> fa-wheelchair</div>
                                    <div className="col-sm-6 col-md-4 col-lg-3"><i className="fa fa-wrench" /> fa-wrench</div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-12">
                        <div className="ms-panel">
                            <div className="ms-panel-header">
                                <h6>File Type Icons</h6>
                            </div>
                            <div className="ms-panel-body">
                                <div className="ms-icons-list row">
                                    <div className="col-sm-6 col-md-4 col-lg-3"><i className="fa fa-adjust" /> fa-adjust</div>
                                    <div className="col-sm-6 col-md-4 col-lg-3"><i className="fa fa-anchor" /> fa-anchor</div>
                                    <div className="col-sm-6 col-md-4 col-lg-3"><i className="fa fa-archive" /> fa-archive</div>
                                    <div className="col-sm-6 col-md-4 col-lg-3"><i className="fa fa-asterisk" /> fa-asterisk</div>
                                    <div className="col-sm-6 col-md-4 col-lg-3"><i className="fa fa-ban" /> fa-ban</div>
                                    <div className="col-sm-6 col-md-4 col-lg-3"><i className="fa fa-bank" /> fa-bank <span className="text-muted">(alias)</span>
                                    </div>
                                    <div className="col-sm-6 col-md-4 col-lg-3"><i className="far fa-bar-chart" /> fa-bar-chart</div>
                                    <div className="col-sm-6 col-md-4 col-lg-3"><i className="fa fa-barcode" /> fa-barcode</div>
                                    <div className="col-sm-6 col-md-4 col-lg-3"><i className="fa fa-bars" /> fa-bars</div>
                                    <div className="col-sm-6 col-md-4 col-lg-3"><i className="fa fa-beer" /> fa-beer</div>
                                    <div className="col-sm-6 col-md-4 col-lg-3"><i className="fa fa-bell" /> fa-bell</div>
                                    <div className="col-sm-6 col-md-4 col-lg-3"><i className="far fa-bell" /> fa-bell</div>
                                    <div className="col-sm-6 col-md-4 col-lg-3"><i className="fa fa-bolt" /> fa-bolt</div>
                                    <div className="col-sm-6 col-md-4 col-lg-3"><i className="fa fa-bomb" /> fa-bomb</div>
                                    <div className="col-sm-6 col-md-4 col-lg-3"><i className="fa fa-book" /> fa-book</div>
                                    <div className="col-sm-6 col-md-4 col-lg-3"><i className="fa fa-bookmark" /> fa-bookmark</div>
                                    <div className="col-sm-6 col-md-4 col-lg-3"><i className="far fa-bookmark" /> fa-bookmark</div>
                                    <div className="col-sm-6 col-md-4 col-lg-3"><i className="fa fa-briefcase" /> fa-briefcase</div>
                                    <div className="col-sm-6 col-md-4 col-lg-3"><i className="fa fa-bug" /> fa-bug</div>
                                    <div className="col-sm-6 col-md-4 col-lg-3"><i className="fa fa-building" /> fa-building</div>
                                    <div className="col-sm-6 col-md-4 col-lg-3"><i className="far fa-building" /> fa-building</div>
                                    <div className="col-sm-6 col-md-4 col-lg-3"><i className="fa fa-bullhorn" /> fa-bullhorn</div>
                                    <div className="col-sm-6 col-md-4 col-lg-3"><i className="fa fa-bullseye" /> fa-bullseye</div>
                                    <div className="col-sm-6 col-md-4 col-lg-3"><i className="fa fa-cab" /> fa-cab <span className="text-muted">(alias)</span>
                                    </div>
                                    <div className="col-sm-6 col-md-4 col-lg-3"><i className="fa fa-calendar" /> fa-calendar</div>
                                    <div className="col-sm-6 col-md-4 col-lg-3"><i className="far fa-calendar" /> fa-calendar</div>
                                    <div className="col-sm-6 col-md-4 col-lg-3"><i className="fa fa-camera" /> fa-camera</div>
                                    <div className="col-sm-6 col-md-4 col-lg-3"><i className="fa fa-camera-retro" /> fa-camera-retro</div>
                                    <div className="col-sm-6 col-md-4 col-lg-3"><i className="fa fa-car" /> fa-car</div>
                                    <div className="col-sm-6 col-md-4 col-lg-3"><i className="far fa-caret-square-down" /> fa-caret-square-down</div>
                                    <div className="col-sm-6 col-md-4 col-lg-3"><i className="far fa-caret-square-left" /> fa-caret-square-left</div>
                                    <div className="col-sm-6 col-md-4 col-lg-3"><i className="far fa-caret-square-right" /> fa-caret-square-right</div>
                                    <div className="col-sm-6 col-md-4 col-lg-3"><i className="far fa-caret-square-up" /> fa-caret-square-up</div>
                                    <div className="col-sm-6 col-md-4 col-lg-3"><i className="fa fa-certificate" /> fa-certificate</div>
                                    <div className="col-sm-6 col-md-4 col-lg-3"><i className="fa fa-check" /> fa-check</div>
                                    <div className="col-sm-6 col-md-4 col-lg-3"><i className="fa fa-check-circle" /> fa-check-circle</div>
                                    <div className="col-sm-6 col-md-4 col-lg-3"><i className="far fa-check-circle" /> fa-check-circle</div>
                                    <div className="col-sm-6 col-md-4 col-lg-3"><i className="fa fa-check-square" /> fa-check-square</div>
                                    <div className="col-sm-6 col-md-4 col-lg-3"><i className="far fa-check-square" /> fa-check-square</div>
                                    <div className="col-sm-6 col-md-4 col-lg-3"><i className="fa fa-child" /> fa-child</div>
                                    <div className="col-sm-6 col-md-4 col-lg-3"><i className="fa fa-circle" /> fa-circle</div>
                                    <div className="col-sm-6 col-md-4 col-lg-3"><i className="far fa-circle" /> fa-circle</div>
                                    <div className="col-sm-6 col-md-4 col-lg-3"><i className="fa fa-circle-thin" /> fa-circle-thin</div>
                                    <div className="col-sm-6 col-md-4 col-lg-3"><i className="fa fa-cloud" /> fa-cloud</div>
                                    <div className="col-sm-6 col-md-4 col-lg-3"><i className="fas fa-cloud-upload-alt" /> fa-cloud-upload</div>
                                    <div className="col-sm-6 col-md-4 col-lg-3"><i className="fa fa-code" /> fa-code</div>
                                    <div className="col-sm-6 col-md-4 col-lg-3"><i className="fa fa-code-fork" /> fa-code-fork</div>
                                    <div className="col-sm-6 col-md-4 col-lg-3"><i className="fa fa-coffee" /> fa-coffee</div>
                                    <div className="col-sm-6 col-md-4 col-lg-3"><i className="fa fa-cog" /> fa-cog</div>
                                    <div className="col-sm-6 col-md-4 col-lg-3"><i className="fa fa-cogs" /> fa-cogs</div>
                                    <div className="col-sm-6 col-md-4 col-lg-3"><i className="fa fa-comment" /> fa-comment</div>
                                    <div className="col-sm-6 col-md-4 col-lg-3"><i className="far fa-comment" /> fa-comment</div>
                                    <div className="col-sm-6 col-md-4 col-lg-3"><i className="fa fa-comments" /> fa-comments</div>
                                    <div className="col-sm-6 col-md-4 col-lg-3"><i className="far fa-comments" /> fa-comments</div>
                                    <div className="col-sm-6 col-md-4 col-lg-3"><i className="fa fa-compass" /> fa-compass</div>
                                    <div className="col-sm-6 col-md-4 col-lg-3"><i className="fa fa-credit-card" /> fa-credit-card</div>
                                    <div className="col-sm-6 col-md-4 col-lg-3"><i className="fa fa-crop" /> fa-crop</div>
                                    <div className="col-sm-6 col-md-4 col-lg-3"><i className="fa fa-crosshairs" /> fa-crosshairs</div>
                                    <div className="col-sm-6 col-md-4 col-lg-3"><i className="fa fa-cube" /> fa-cube</div>
                                    <div className="col-sm-6 col-md-4 col-lg-3"><i className="fa fa-cubes" /> fa-cubes</div>
                                    <div className="col-sm-6 col-md-4 col-lg-3"><i className="fa fa-cutlery" /> fa-cutlery</div>
                                    <div className="col-sm-6 col-md-4 col-lg-3"><i className="fa fa-dashboard" /> fa-dashboard <span className="text-muted">(alias)</span>
                                    </div>
                                    <div className="col-sm-6 col-md-4 col-lg-3"><i className="fa fa-database" /> fa-database</div>
                                    <div className="col-sm-6 col-md-4 col-lg-3"><i className="fa fa-desktop" /> fa-desktop</div>
                                    <div className="col-sm-6 col-md-4 col-lg-3"><i className="far fa-dot-circle" /> fa-dot-circle</div>
                                    <div className="col-sm-6 col-md-4 col-lg-3"><i className="fa fa-download" /> fa-download</div>
                                    <div className="col-sm-6 col-md-4 col-lg-3"><i className="fa fa-edit" /> fa-edit <span className="text-muted">(alias)</span>
                                    </div>
                                    <div className="col-sm-6 col-md-4 col-lg-3"><i className="fa fa-ellipsis-h" /> fa-ellipsis-h</div>
                                    <div className="col-sm-6 col-md-4 col-lg-3"><i className="fa fa-ellipsis-v" /> fa-ellipsis-v</div>
                                    <div className="col-sm-6 col-md-4 col-lg-3"><i className="fa fa-envelope" /> fa-envelope</div>
                                    <div className="col-sm-6 col-md-4 col-lg-3"><i className="far fa-envelope" /> fa-envelope</div>
                                    <div className="col-sm-6 col-md-4 col-lg-3"><i className="fa fa-envelope-square" /> fa-envelope-square</div>
                                    <div className="col-sm-6 col-md-4 col-lg-3"><i className="fa fa-eraser" /> fa-eraser</div>
                                    <div className="col-sm-6 col-md-4 col-lg-3"><i className="fa fa-exclamation" /> fa-exclamation</div>
                                    <div className="col-sm-6 col-md-4 col-lg-3"><i className="fa fa-exclamation-circle" /> fa-exclamation-circle</div>
                                    <div className="col-sm-6 col-md-4 col-lg-3"><i className="fa fa-exclamation-triangle" /> fa-exclamation-triangle</div>
                                    <div className="col-sm-6 col-md-4 col-lg-3"><i className="fa fa-eye" /> fa-eye</div>
                                    <div className="col-sm-6 col-md-4 col-lg-3"><i className="fa fa-eye-slash" /> fa-eye-slash</div>
                                    <div className="col-sm-6 col-md-4 col-lg-3"><i className="fa fa-fax" /> fa-fax</div>
                                    <div className="col-sm-6 col-md-4 col-lg-3"><i className="fa fa-female" /> fa-female</div>
                                    <div className="col-sm-6 col-md-4 col-lg-3"><i className="fa fa-fighter-jet" /> fa-fighter-jet</div>
                                    <div className="col-sm-6 col-md-4 col-lg-3"><i className="far fa-file-archive" /> fa-file-archive</div>
                                    <div className="col-sm-6 col-md-4 col-lg-3"><i className="far fa-file-audio" /> fa-file-audio</div>
                                    <div className="col-sm-6 col-md-4 col-lg-3"><i className="far fa-file-code" /> fa-file-code</div>
                                    <div className="col-sm-6 col-md-4 col-lg-3"><i className="far fa-file-excel" /> fa-file-excel</div>
                                    <div className="col-sm-6 col-md-4 col-lg-3"><i className="far fa-file-image" /> fa-file-image</div>
                                    <div className="col-sm-6 col-md-4 col-lg-3"><i className="far fa-file-movie" /> fa-file-movie <span className="text-muted">(alias)</span>
                                    </div>
                                    <div className="col-sm-6 col-md-4 col-lg-3"><i className="far fa-file-pdf" /> fa-file-pdf</div>
                                    <div className="col-sm-6 col-md-4 col-lg-3"><i className="far fa-file-photo" /> fa-file-photo <span className="text-muted">(alias)</span>
                                    </div>
                                    <div className="col-sm-6 col-md-4 col-lg-3"><i className="far fa-file-picture" /> fa-file-picture <span className="text-muted">(alias)</span>
                                    </div>
                                    <div className="col-sm-6 col-md-4 col-lg-3"><i className="far fa-file-powerpoint" /> fa-file-powerpoint</div>
                                    <div className="col-sm-6 col-md-4 col-lg-3"><i className="far fa-file-sound" /> fa-file-sound <span className="text-muted">(alias)</span>
                                    </div>
                                    <div className="col-sm-6 col-md-4 col-lg-3"><i className="far fa-file-video" /> fa-file-video</div>
                                    <div className="col-sm-6 col-md-4 col-lg-3"><i className="far fa-file-word" /> fa-file-word</div>
                                    <div className="col-sm-6 col-md-4 col-lg-3"><i className="far fa-file-zip" /> fa-file-zip <span className="text-muted">(alias)</span>
                                    </div>
                                    <div className="col-sm-6 col-md-4 col-lg-3"><i className="fa fa-film" /> fa-film</div>
                                    <div className="col-sm-6 col-md-4 col-lg-3"><i className="fa fa-filter" /> fa-filter</div>
                                    <div className="col-sm-6 col-md-4 col-lg-3"><i className="fa fa-fire" /> fa-fire</div>
                                    <div className="col-sm-6 col-md-4 col-lg-3"><i className="fa fa-fire-extinguisher" /> fa-fire-extinguisher</div>
                                    <div className="col-sm-6 col-md-4 col-lg-3"><i className="fa fa-flag" /> fa-flag</div>
                                    <div className="col-sm-6 col-md-4 col-lg-3"><i className="fa fa-flag-checkered" /> fa-flag-checkered</div>
                                    <div className="col-sm-6 col-md-4 col-lg-3"><i className="far fa-flag" /> fa-flag</div>
                                    <div className="col-sm-6 col-md-4 col-lg-3"><i className="fa fa-flash" /> fa-flash <span className="text-muted">(alias)</span>
                                    </div>
                                    <div className="col-sm-6 col-md-4 col-lg-3"><i className="fa fa-flask" /> fa-flask</div>
                                    <div className="col-sm-6 col-md-4 col-lg-3"><i className="fa fa-folder" /> fa-folder</div>
                                    <div className="col-sm-6 col-md-4 col-lg-3"><i className="far fa-folder" /> fa-folder</div>
                                    <div className="col-sm-6 col-md-4 col-lg-3"><i className="fa fa-folder-open" /> fa-folder-open</div>
                                    <div className="col-sm-6 col-md-4 col-lg-3"><i className="far fa-folder-open" /> fa-folder-open</div>
                                    <div className="col-sm-6 col-md-4 col-lg-3"><i className="far fa-frown" /> fa-frown</div>
                                    <div className="col-sm-6 col-md-4 col-lg-3"><i className="fa fa-gamepad" /> fa-gamepad</div>
                                    <div className="col-sm-6 col-md-4 col-lg-3"><i className="fa fa-gavel" /> fa-gavel</div>
                                    <div className="col-sm-6 col-md-4 col-lg-3"><i className="fa fa-gear" /> fa-gear <span className="text-muted">(alias)</span>
                                    </div>
                                    <div className="col-sm-6 col-md-4 col-lg-3"><i className="fa fa-gears" /> fa-gears <span className="text-muted">(alias)</span>
                                    </div>
                                    <div className="col-sm-6 col-md-4 col-lg-3"><i className="fa fa-gift" /> fa-gift</div>
                                    <div className="col-sm-6 col-md-4 col-lg-3"><i className="fa fa-glass" /> fa-glass</div>
                                    <div className="col-sm-6 col-md-4 col-lg-3"><i className="fa fa-globe" /> fa-globe</div>
                                    <div className="col-sm-6 col-md-4 col-lg-3"><i className="fa fa-graduation-cap" /> fa-graduation-cap</div>
                                    <div className="col-sm-6 col-md-4 col-lg-3"><i className="fa fa-group" /> fa-group <span className="text-muted">(alias)</span>
                                    </div>
                                    <div className="col-sm-6 col-md-4 col-lg-3"><i className="far fa-hdd" /> fa-hdd</div>
                                    <div className="col-sm-6 col-md-4 col-lg-3"><i className="fa fa-headphones" /> fa-headphones</div>
                                    <div className="col-sm-6 col-md-4 col-lg-3"><i className="fa fa-heart" /> fa-heart</div>
                                    <div className="col-sm-6 col-md-4 col-lg-3"><i className="far fa-heart" /> fa-heart</div>
                                    <div className="col-sm-6 col-md-4 col-lg-3"><i className="fa fa-history" /> fa-history</div>
                                    <div className="col-sm-6 col-md-4 col-lg-3"><i className="fa fa-home" /> fa-home</div>
                                    <div className="col-sm-6 col-md-4 col-lg-3"><i className="fa fa-image" /> fa-image <span className="text-muted">(alias)</span>
                                    </div>
                                    <div className="col-sm-6 col-md-4 col-lg-3"><i className="fa fa-inbox" /> fa-inbox</div>
                                    <div className="col-sm-6 col-md-4 col-lg-3"><i className="fa fa-info" /> fa-info</div>
                                    <div className="col-sm-6 col-md-4 col-lg-3"><i className="fa fa-info-circle" /> fa-info-circle</div>
                                    <div className="col-sm-6 col-md-4 col-lg-3"><i className="fa fa-institution" /> fa-institution <span className="text-muted">(alias)</span>
                                    </div>
                                    <div className="col-sm-6 col-md-4 col-lg-3"><i className="fa fa-key" /> fa-key</div>
                                    <div className="col-sm-6 col-md-4 col-lg-3"><i className="far fa-keyboard" /> fa-keyboard</div>
                                    <div className="col-sm-6 col-md-4 col-lg-3"><i className="fa fa-language" /> fa-language</div>
                                    <div className="col-sm-6 col-md-4 col-lg-3"><i className="fa fa-laptop" /> fa-laptop</div>
                                    <div className="col-sm-6 col-md-4 col-lg-3"><i className="fa fa-leaf" /> fa-leaf</div>
                                    <div className="col-sm-6 col-md-4 col-lg-3"><i className="fa fa-legal" /> fa-legal <span className="text-muted">(alias)</span>
                                    </div>
                                    <div className="col-sm-6 col-md-4 col-lg-3"><i className="far fa-lemon" /> fa-lemon</div>
                                    <div className="col-sm-6 col-md-4 col-lg-3"><i className="fa fa-level-down" /> fa-level-down</div>
                                    <div className="col-sm-6 col-md-4 col-lg-3"><i className="fa fa-level-up" /> fa-level-up</div>
                                    <div className="col-sm-6 col-md-4 col-lg-3"><i className="fa fa-life-bouy" /> fa-life-bouy <span className="text-muted">(alias)</span>
                                    </div>
                                    <div className="col-sm-6 col-md-4 col-lg-3"><i className="fa fa-life-ring" /> fa-life-ring</div>
                                    <div className="col-sm-6 col-md-4 col-lg-3"><i className="fa fa-life-saver" /> fa-life-saver <span className="text-muted">(alias)</span>
                                    </div>
                                    <div className="col-sm-6 col-md-4 col-lg-3"><i className="far fa-lightbulb" /> fa-lightbulb</div>
                                    <div className="col-sm-6 col-md-4 col-lg-3"><i className="fa fa-location-arrow" /> fa-location-arrow</div>
                                    <div className="col-sm-6 col-md-4 col-lg-3"><i className="fa fa-lock" /> fa-lock</div>
                                    <div className="col-sm-6 col-md-4 col-lg-3"><i className="fa fa-magic" /> fa-magic</div>
                                    <div className="col-sm-6 col-md-4 col-lg-3"><i className="fa fa-magnet" /> fa-magnet</div>
                                    <div className="col-sm-6 col-md-4 col-lg-3"><i className="fa fa-mail-forward" /> fa-mail-forward <span className="text-muted">(alias)</span>
                                    </div>
                                    <div className="col-sm-6 col-md-4 col-lg-3"><i className="fa fa-mail-reply" /> fa-mail-reply <span className="text-muted">(alias)</span>
                                    </div>
                                    <div className="col-sm-6 col-md-4 col-lg-3"><i className="fa fa-mail-reply-all" /> fa-mail-reply-all <span className="text-muted">(alias)</span>
                                    </div>
                                    <div className="col-sm-6 col-md-4 col-lg-3"><i className="fa fa-male" /> fa-male</div>
                                    <div className="col-sm-6 col-md-4 col-lg-3"><i className="fa fa-map-marker" /> fa-map-marker</div>
                                    <div className="col-sm-6 col-md-4 col-lg-3"><i className="far fa-meh" /> fa-meh</div>
                                    <div className="col-sm-6 col-md-4 col-lg-3"><i className="fa fa-microphone" /> fa-microphone</div>
                                    <div className="col-sm-6 col-md-4 col-lg-3"><i className="fa fa-microphone-slash" /> fa-microphone-slash</div>
                                    <div className="col-sm-6 col-md-4 col-lg-3"><i className="fa fa-minus" /> fa-minus</div>
                                    <div className="col-sm-6 col-md-4 col-lg-3"><i className="fa fa-minus-circle" /> fa-minus-circle</div>
                                    <div className="col-sm-6 col-md-4 col-lg-3"><i className="fa fa-minus-square" /> fa-minus-square</div>
                                    <div className="col-sm-6 col-md-4 col-lg-3"><i className="far fa-minus-square" /> fa-minus-square</div>
                                    <div className="col-sm-6 col-md-4 col-lg-3"><i className="fa fa-mobile" /> fa-mobile</div>
                                    <div className="col-sm-6 col-md-4 col-lg-3"><i className="fa fa-mobile-phone" /> fa-mobile-phone <span className="text-muted">(alias)</span>
                                    </div>
                                    <div className="col-sm-6 col-md-4 col-lg-3"><i className="far fa-moon" /> fa-moon</div>
                                    <div className="col-sm-6 col-md-4 col-lg-3"><i className="fa fa-mortar-board" /> fa-mortar-board <span className="text-muted">(alias)</span>
                                    </div>
                                    <div className="col-sm-6 col-md-4 col-lg-3"><i className="fa fa-music" /> fa-music</div>
                                    <div className="col-sm-6 col-md-4 col-lg-3"><i className="fa fa-navicon" /> fa-navicon <span className="text-muted">(alias)</span>
                                    </div>
                                    <div className="col-sm-6 col-md-4 col-lg-3"><i className="fa fa-paper-plane" /> fa-paper-plane</div>
                                    <div className="col-sm-6 col-md-4 col-lg-3"><i className="far fa-paper-plane" /> fa-paper-plane</div>
                                    <div className="col-sm-6 col-md-4 col-lg-3"><i className="fa fa-paw" /> fa-paw</div>
                                    <div className="col-sm-6 col-md-4 col-lg-3"><i className="fas fa-pencil-alt" /> fa-pencil</div>
                                    <div className="col-sm-6 col-md-4 col-lg-3"><i className="fa fa-phone" /> fa-phone</div>
                                    <div className="col-sm-6 col-md-4 col-lg-3"><i className="fa fa-phone-square" /> fa-phone-square</div>
                                    <div className="col-sm-6 col-md-4 col-lg-3"><i className="fa fa-photo" /> fa-photo <span className="text-muted">(alias)</span>
                                    </div>
                                    <div className="col-sm-6 col-md-4 col-lg-3"><i className="far fa-picture" /> fa-picture</div>
                                    <div className="col-sm-6 col-md-4 col-lg-3"><i className="fa fa-plane" /> fa-plane</div>
                                    <div className="col-sm-6 col-md-4 col-lg-3"><i className="fa fa-plus" /> fa-plus</div>
                                    <div className="col-sm-6 col-md-4 col-lg-3"><i className="fa fa-plus-circle" /> fa-plus-circle</div>
                                    <div className="col-sm-6 col-md-4 col-lg-3"><i className="fa fa-plus-square" /> fa-plus-square</div>
                                    <div className="col-sm-6 col-md-4 col-lg-3"><i className="far fa-plus-square" /> fa-plus-square</div>
                                    <div className="col-sm-6 col-md-4 col-lg-3"><i className="fa fa-power-off" /> fa-power-off</div>
                                    <div className="col-sm-6 col-md-4 col-lg-3"><i className="fa fa-print" /> fa-print</div>
                                    <div className="col-sm-6 col-md-4 col-lg-3"><i className="fa fa-puzzle-piece" /> fa-puzzle-piece</div>
                                    <div className="col-sm-6 col-md-4 col-lg-3"><i className="fa fa-qrcode" /> fa-qrcode</div>
                                    <div className="col-sm-6 col-md-4 col-lg-3"><i className="fa fa-question" /> fa-question</div>
                                    <div className="col-sm-6 col-md-4 col-lg-3"><i className="fa fa-question-circle" /> fa-question-circle</div>
                                    <div className="col-sm-6 col-md-4 col-lg-3"><i className="fa fa-quote-left" /> fa-quote-left</div>
                                    <div className="col-sm-6 col-md-4 col-lg-3"><i className="fa fa-quote-right" /> fa-quote-right</div>
                                    <div className="col-sm-6 col-md-4 col-lg-3"><i className="fa fa-random" /> fa-random</div>
                                    <div className="col-sm-6 col-md-4 col-lg-3"><i className="fa fa-recycle" /> fa-recycle</div>
                                    <div className="col-sm-6 col-md-4 col-lg-3"><i className="fa fa-refresh" /> fa-refresh</div>
                                    <div className="col-sm-6 col-md-4 col-lg-3"><i className="fa fa-reorder" /> fa-reorder <span className="text-muted">(alias)</span>
                                    </div>
                                    <div className="col-sm-6 col-md-4 col-lg-3"><i className="fa fa-reply" /> fa-reply</div>
                                    <div className="col-sm-6 col-md-4 col-lg-3"><i className="fa fa-reply-all" /> fa-reply-all</div>
                                    <div className="col-sm-6 col-md-4 col-lg-3"><i className="fa fa-retweet" /> fa-retweet</div>
                                    <div className="col-sm-6 col-md-4 col-lg-3"><i className="fa fa-road" /> fa-road</div>
                                    <div className="col-sm-6 col-md-4 col-lg-3"><i className="fa fa-rocket" /> fa-rocket</div>
                                    <div className="col-sm-6 col-md-4 col-lg-3"><i className="fa fa-rss" /> fa-rss</div>
                                    <div className="col-sm-6 col-md-4 col-lg-3"><i className="fa fa-rss-square" /> fa-rss-square</div>
                                    <div className="col-sm-6 col-md-4 col-lg-3"><i className="fa fa-search" /> fa-search</div>
                                    <div className="col-sm-6 col-md-4 col-lg-3"><i className="fa fa-search-minus" /> fa-search-minus</div>
                                    <div className="col-sm-6 col-md-4 col-lg-3"><i className="fa fa-search-plus" /> fa-search-plus</div>
                                    <div className="col-sm-6 col-md-4 col-lg-3"><i className="fa fa-send" /> fa-send <span className="text-muted">(alias)</span>
                                    </div>
                                    <div className="col-sm-6 col-md-4 col-lg-3"><i className="far fa-send" /> fa-send <span className="text-muted">(alias)</span>
                                    </div>
                                    <div className="col-sm-6 col-md-4 col-lg-3"><i className="fa fa-share" /> fa-share</div>
                                    <div className="col-sm-6 col-md-4 col-lg-3"><i className="fa fa-share-alt" /> fa-share-alt</div>
                                    <div className="col-sm-6 col-md-4 col-lg-3"><i className="fa fa-share-alt-square" /> fa-share-alt-square</div>
                                    <div className="col-sm-6 col-md-4 col-lg-3"><i className="fa fa-share-square" /> fa-share-square</div>
                                    <div className="col-sm-6 col-md-4 col-lg-3"><i className="far fa-share-square" /> fa-share-square</div>
                                    <div className="col-sm-6 col-md-4 col-lg-3"><i className="fas fa-shield-alt" /> fa-shield</div>
                                    <div className="col-sm-6 col-md-4 col-lg-3"><i className="fa fa-shopping-cart" /> fa-shopping-cart</div>
                                    <div className="col-sm-6 col-md-4 col-lg-3"><i className="fa fa-sign-in" /> fa-sign-in</div>
                                    <div className="col-sm-6 col-md-4 col-lg-3"><i className="fa fa-sign-out" /> fa-sign-out</div>
                                    <div className="col-sm-6 col-md-4 col-lg-3"><i className="fa fa-signal" /> fa-signal</div>
                                    <div className="col-sm-6 col-md-4 col-lg-3"><i className="fa fa-sitemap" /> fa-sitemap</div>
                                    <div className="col-sm-6 col-md-4 col-lg-3"><i className="fa fa-sliders" /> fa-sliders</div>
                                    <div className="col-sm-6 col-md-4 col-lg-3"><i className="far fa-smile" /> fa-smile</div>
                                    <div className="col-sm-6 col-md-4 col-lg-3"><i className="fa fa-sort" /> fa-sort</div>
                                    <div className="col-sm-6 col-md-4 col-lg-3"><i className="fa fa-sort-down" /> fa-sort-down <span className="text-muted">(alias)</span>
                                    </div>
                                    <div className="col-sm-6 col-md-4 col-lg-3"><i className="fa fa-sort-up" /> fa-sort-up <span className="text-muted">(alias)</span>
                                    </div>
                                    <div className="col-sm-6 col-md-4 col-lg-3"><i className="fa fa-space-shuttle" /> fa-space-shuttle</div>
                                    <div className="col-sm-6 col-md-4 col-lg-3"><i className="fa fa-spinner" /> fa-spinner</div>
                                    <div className="col-sm-6 col-md-4 col-lg-3"><i className="fa fa-square" /> fa-square</div>
                                    <div className="col-sm-6 col-md-4 col-lg-3"><i className="far fa-square" /> fa-square</div>
                                    <div className="col-sm-6 col-md-4 col-lg-3"><i className="fa fa-star" /> fa-star</div>
                                    <div className="col-sm-6 col-md-4 col-lg-3"><i className="fa fa-star-half" /> fa-star-half</div>
                                    <div className="col-sm-6 col-md-4 col-lg-3"><i className="far fa-star-half" /> fa-star-half</div>
                                    <div className="col-sm-6 col-md-4 col-lg-3"><i className="far fa-star" /> fa-star</div>
                                    <div className="col-sm-6 col-md-4 col-lg-3"><i className="fa fa-suitcase" /> fa-suitcase</div>
                                    <div className="col-sm-6 col-md-4 col-lg-3"><i className="far fa-sun" /> fa-sun</div>
                                    <div className="col-sm-6 col-md-4 col-lg-3"><i className="fa fa-tablet" /> fa-tablet</div>
                                    <div className="col-sm-6 col-md-4 col-lg-3"><i className="fa fa-tachometer" /> fa-tachometer</div>
                                    <div className="col-sm-6 col-md-4 col-lg-3"><i className="fa fa-tag" /> fa-tag</div>
                                    <div className="col-sm-6 col-md-4 col-lg-3"><i className="fa fa-tags" /> fa-tags</div>
                                    <div className="col-sm-6 col-md-4 col-lg-3"><i className="fa fa-tasks" /> fa-tasks</div>
                                    <div className="col-sm-6 col-md-4 col-lg-3"><i className="fa fa-taxi" /> fa-taxi</div>
                                    <div className="col-sm-6 col-md-4 col-lg-3"><i className="fa fa-terminal" /> fa-terminal</div>
                                    <div className="col-sm-6 col-md-4 col-lg-3"><i className="fa fa-thumb-tack" /> fa-thumb-tack</div>
                                    <div className="col-sm-6 col-md-4 col-lg-3"><i className="fa fa-thumbs-down" /> fa-thumbs-down</div>
                                    <div className="col-sm-6 col-md-4 col-lg-3"><i className="far fa-thumbs-down" /> fa-thumbs-down</div>
                                    <div className="col-sm-6 col-md-4 col-lg-3"><i className="far fa-thumbs-up" /> fa-thumbs-up</div>
                                    <div className="col-sm-6 col-md-4 col-lg-3"><i className="fa fa-thumbs-up" /> fa-thumbs-up</div>
                                    <div className="col-sm-6 col-md-4 col-lg-3"><i className="fa fa-ticket" /> fa-ticket</div>
                                    <div className="col-sm-6 col-md-4 col-lg-3"><i className="fa fa-times" /> fa-times</div>
                                    <div className="col-sm-6 col-md-4 col-lg-3"><i className="fa fa-times-circle" /> fa-times-circle</div>
                                    <div className="col-sm-6 col-md-4 col-lg-3"><i className="far fa-times-circle" /> fa-times-circle</div>
                                    <div className="col-sm-6 col-md-4 col-lg-3"><i className="fa fa-tint" /> fa-tint</div>
                                    <div className="col-sm-6 col-md-4 col-lg-3"><i className="fa fa-toggle-down" /> fa-toggle-down <span className="text-muted">(alias)</span>
                                    </div>
                                    <div className="col-sm-6 col-md-4 col-lg-3"><i className="fa fa-toggle-left" /> fa-toggle-left <span className="text-muted">(alias)</span>
                                    </div>
                                    <div className="col-sm-6 col-md-4 col-lg-3"><i className="fa fa-toggle-right" /> fa-toggle-right <span className="text-muted">(alias)</span>
                                    </div>
                                    <div className="col-sm-6 col-md-4 col-lg-3"><i className="fa fa-toggle-up" /> fa-toggle-up <span className="text-muted">(alias)</span>
                                    </div>
                                    <div className="col-sm-6 col-md-4 col-lg-3"><i className="fas fa-trash" /> fa-trash</div>
                                    <div className="col-sm-6 col-md-4 col-lg-3"><i className="fa fa-tree" /> fa-tree</div>
                                    <div className="col-sm-6 col-md-4 col-lg-3"><i className="fa fa-trophy" /> fa-trophy</div>
                                    <div className="col-sm-6 col-md-4 col-lg-3"><i className="fa fa-truck" /> fa-truck</div>
                                    <div className="col-sm-6 col-md-4 col-lg-3"><i className="fa fa-umbrella" /> fa-umbrella</div>
                                    <div className="col-sm-6 col-md-4 col-lg-3"><i className="fa fa-university" /> fa-university</div>
                                    <div className="col-sm-6 col-md-4 col-lg-3"><i className="fa fa-unlock" /> fa-unlock</div>
                                    <div className="col-sm-6 col-md-4 col-lg-3"><i className="fa fa-unlock-alt" /> fa-unlock-alt</div>
                                    <div className="col-sm-6 col-md-4 col-lg-3"><i className="fa fa-unsorted" /> fa-unsorted <span className="text-muted">(alias)</span>
                                    </div>
                                    <div className="col-sm-6 col-md-4 col-lg-3"><i className="fa fa-upload" /> fa-upload</div>
                                    <div className="col-sm-6 col-md-4 col-lg-3"><i className="fa fa-user" /> fa-user</div>
                                    <div className="col-sm-6 col-md-4 col-lg-3"><i className="fa fa-users" /> fa-users</div>
                                    <div className="col-sm-6 col-md-4 col-lg-3"><i className="fa fa-video-camera" /> fa-video-camera</div>
                                    <div className="col-sm-6 col-md-4 col-lg-3"><i className="fa fa-volume-down" /> fa-volume-down</div>
                                    <div className="col-sm-6 col-md-4 col-lg-3"><i className="fa fa-volume-off" /> fa-volume-off</div>
                                    <div className="col-sm-6 col-md-4 col-lg-3"><i className="fa fa-volume-up" /> fa-volume-up</div>
                                    <div className="col-sm-6 col-md-4 col-lg-3"><i className="fa fa-warning" /> fa-warning <span className="text-muted">(alias)</span>
                                    </div>
                                    <div className="col-sm-6 col-md-4 col-lg-3"><i className="fa fa-wheelchair" /> fa-wheelchair</div>
                                    <div className="col-sm-6 col-md-4 col-lg-3"><i className="fa fa-wrench" /> fa-wrench</div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-12">
                        <div className="ms-panel">
                            <div className="ms-panel-body">
                                <h6>Form Control Icons</h6>
                            </div>
                            <div className="ms-panel-body">
                                <div className="ms-icons-list row">
                                    <div className="col-sm-6 col-md-4 col-lg-3"><i className="fa fa-check-square" /> fa-check-square</div>
                                    <div className="col-sm-6 col-md-4 col-lg-3"><i className="far fa-check-square" /> fa-check-square</div>
                                    <div className="col-sm-6 col-md-4 col-lg-3"><i className="fa fa-circle" /> fa-circle</div>
                                    <div className="col-sm-6 col-md-4 col-lg-3"><i className="far fa-circle" /> fa-circle</div>
                                    <div className="col-sm-6 col-md-4 col-lg-3"><i className="far fa-dot-circle" /> fa-dot-circle</div>
                                    <div className="col-sm-6 col-md-4 col-lg-3"><i className="fa fa-minus-square" /> fa-minus-square</div>
                                    <div className="col-sm-6 col-md-4 col-lg-3"><i className="far fa-minus-square" /> fa-minus-square</div>
                                    <div className="col-sm-6 col-md-4 col-lg-3"><i className="fa fa-plus-square" /> fa-plus-square</div>
                                    <div className="col-sm-6 col-md-4 col-lg-3"><i className="far fa-plus-square" /> fa-plus-square</div>
                                    <div className="col-sm-6 col-md-4 col-lg-3"><i className="fa fa-square" /> fa-square</div>
                                    <div className="col-sm-6 col-md-4 col-lg-3"><i className="far fa-square" /> fa-square</div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-12">
                        <div className="ms-panel">
                            <div className="ms-panel-header">
                                <h6>Text Editor Icons</h6>
                            </div>
                            <div className="ms-panel-body">
                                <div className="row ms-icons-list">
                                    <div className="col-sm-6 col-md-4 col-lg-3"><i className="fa fa-align-center" /> fa-align-center</div>
                                    <div className="col-sm-6 col-md-4 col-lg-3"><i className="fa fa-align-justify" /> fa-align-justify</div>
                                    <div className="col-sm-6 col-md-4 col-lg-3"><i className="fa fa-align-left" /> fa-align-left</div>
                                    <div className="col-sm-6 col-md-4 col-lg-3"><i className="fa fa-align-right" /> fa-align-right</div>
                                    <div className="col-sm-6 col-md-4 col-lg-3"><i className="fa fa-bold" /> fa-bold</div>
                                    <div className="col-sm-6 col-md-4 col-lg-3"><i className="fa fa-chain" /> fa-chain <span className="text-muted">(alias)</span>
                                    </div>
                                    <div className="col-sm-6 col-md-4 col-lg-3"><i className="fa fa-chain-broken" /> fa-chain-broken</div>
                                    <div className="col-sm-6 col-md-4 col-lg-3"><i className="fa fa-clipboard" /> fa-clipboard</div>
                                    <div className="col-sm-6 col-md-4 col-lg-3"><i className="fa fa-columns" /> fa-columns</div>
                                    <div className="col-sm-6 col-md-4 col-lg-3"><i className="fa fa-copy" /> fa-copy <span className="text-muted">(alias)</span>
                                    </div>
                                    <div className="col-sm-6 col-md-4 col-lg-3"><i className="fa fa-cut" /> fa-cut <span className="text-muted">(alias)</span>
                                    </div>
                                    <div className="col-sm-6 col-md-4 col-lg-3"><i className="fa fa-dedent" /> fa-dedent <span className="text-muted">(alias)</span>
                                    </div>
                                    <div className="col-sm-6 col-md-4 col-lg-3"><i className="fa fa-eraser" /> fa-eraser</div>
                                    <div className="col-sm-6 col-md-4 col-lg-3"><i className="fa fa-file" /> fa-file</div>
                                    <div className="col-sm-6 col-md-4 col-lg-3"><i className="far fa-file" /> fa-file-</div>
                                    <div className="col-sm-6 col-md-4 col-lg-3"><i className="fa fa-file-text" /> fa-file-text</div>
                                    <div className="col-sm-6 col-md-4 col-lg-3"><i className="far fa-file-text" /> fa-file-text</div>
                                    <div className="col-sm-6 col-md-4 col-lg-3"><i className="far fa-files" /> fa-files</div>
                                    <div className="col-sm-6 col-md-4 col-lg-3"><i className="far fa-floppy" /> fa-floppy</div>
                                    <div className="col-sm-6 col-md-4 col-lg-3"><i className="fa fa-font" /> fa-font</div>
                                    <div className="col-sm-6 col-md-4 col-lg-3"><i className="fa fa-header" /> fa-header</div>
                                    <div className="col-sm-6 col-md-4 col-lg-3"><i className="fa fa-indent" /> fa-indent</div>
                                    <div className="col-sm-6 col-md-4 col-lg-3"><i className="fa fa-italic" /> fa-italic</div>
                                    <div className="col-sm-6 col-md-4 col-lg-3"><i className="fa fa-link" /> fa-link</div>
                                    <div className="col-sm-6 col-md-4 col-lg-3"><i className="fa fa-list" /> fa-list</div>
                                    <div className="col-sm-6 col-md-4 col-lg-3"><i className="fa fa-list-alt" /> fa-list-alt</div>
                                    <div className="col-sm-6 col-md-4 col-lg-3"><i className="fa fa-list-ol" /> fa-list-ol</div>
                                    <div className="col-sm-6 col-md-4 col-lg-3"><i className="fa fa-list-ul" /> fa-list-ul</div>
                                    <div className="col-sm-6 col-md-4 col-lg-3"><i className="fa fa-outdent" /> fa-outdent</div>
                                    <div className="col-sm-6 col-md-4 col-lg-3"><i className="fa fa-paperclip" /> fa-paperclip</div>
                                    <div className="col-sm-6 col-md-4 col-lg-3"><i className="fa fa-paragraph" /> fa-paragraph</div>
                                    <div className="col-sm-6 col-md-4 col-lg-3"><i className="fa fa-paste" /> fa-paste <span className="text-muted">(alias)</span>
                                    </div>
                                    <div className="col-sm-6 col-md-4 col-lg-3"><i className="fas fa-redo" /> fa-repeat</div>
                                    <div className="col-sm-6 col-md-4 col-lg-3"><i className="fa fa-rotate-left" /> fa-rotate-left <span className="text-muted">(alias)</span>
                                    </div>
                                    <div className="col-sm-6 col-md-4 col-lg-3"><i className="fa fa-rotate-right" /> fa-rotate-right <span className="text-muted">(alias)</span>
                                    </div>
                                    <div className="col-sm-6 col-md-4 col-lg-3"><i className="fa fa-save" /> fa-save <span className="text-muted">(alias)</span>
                                    </div>
                                    <div className="col-sm-6 col-md-4 col-lg-3"><i className="fa fa-scissors" /> fa-scissors</div>
                                    <div className="col-sm-6 col-md-4 col-lg-3"><i className="fa fa-strikethrough" /> fa-strikethrough</div>
                                    <div className="col-sm-6 col-md-4 col-lg-3"><i className="fa fa-subscript" /> fa-subscript</div>
                                    <div className="col-sm-6 col-md-4 col-lg-3"><i className="fa fa-superscript" /> fa-superscript</div>
                                    <div className="col-sm-6 col-md-4 col-lg-3"><i className="fa fa-table" /> fa-table</div>
                                    <div className="col-sm-6 col-md-4 col-lg-3"><i className="fa fa-text-height" /> fa-text-height</div>
                                    <div className="col-sm-6 col-md-4 col-lg-3"><i className="fa fa-text-width" /> fa-text-width</div>
                                    <div className="col-sm-6 col-md-4 col-lg-3"><i className="fa fa-th" /> fa-th</div>
                                    <div className="col-sm-6 col-md-4 col-lg-3"><i className="fa fa-th-large" /> fa-th-large</div>
                                    <div className="col-sm-6 col-md-4 col-lg-3"><i className="fa fa-th-list" /> fa-th-list</div>
                                    <div className="col-sm-6 col-md-4 col-lg-3"><i className="fa fa-underline" /> fa-underline</div>
                                    <div className="col-sm-6 col-md-4 col-lg-3"><i className="fa fa-undo" /> fa-undo</div>
                                    <div className="col-sm-6 col-md-4 col-lg-3"><i className="fa fa-unlink" /> fa-unlink <span className="text-muted">(alias)</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-12">
                        <div className="ms-panel">
                            <div className="ms-panel-header">
                                <h6>Directional Icons</h6>
                            </div>
                            <div className="ms-panel-body">
                                <div className="row ms-icons-list">
                                    <div className="col-sm-6 col-md-4 col-lg-3"><i className="fa fa-angle-double-down" /> fa-angle-double-down</div>
                                    <div className="col-sm-6 col-md-4 col-lg-3"><i className="fa fa-angle-double-left" /> fa-angle-double-left</div>
                                    <div className="col-sm-6 col-md-4 col-lg-3"><i className="fa fa-angle-double-right" /> fa-angle-double-right</div>
                                    <div className="col-sm-6 col-md-4 col-lg-3"><i className="fa fa-angle-double-up" /> fa-angle-double-up</div>
                                    <div className="col-sm-6 col-md-4 col-lg-3"><i className="fa fa-angle-down" /> fa-angle-down</div>
                                    <div className="col-sm-6 col-md-4 col-lg-3"><i className="fa fa-angle-left" /> fa-angle-left</div>
                                    <div className="col-sm-6 col-md-4 col-lg-3"><i className="fa fa-angle-right" /> fa-angle-right</div>
                                    <div className="col-sm-6 col-md-4 col-lg-3"><i className="fa fa-angle-up" /> fa-angle-up</div>
                                    <div className="col-sm-6 col-md-4 col-lg-3"><i className="fa fa-arrow-circle-down" /> fa-arrow-circle-down</div>
                                    <div className="col-sm-6 col-md-4 col-lg-3"><i className="fa fa-arrow-circle-left" /> fa-arrow-circle-left</div>
                                    <div className="col-sm-6 col-md-4 col-lg-3"><i className="far fa-arrow-circle-down" /> fa-arrow-circle-down</div>
                                    <div className="col-sm-6 col-md-4 col-lg-3"><i className="far fa-arrow-circle-left" /> fa-arrow-circle-left</div>
                                    <div className="col-sm-6 col-md-4 col-lg-3"><i className="far fa-arrow-circle-right" /> fa-arrow-circle-right</div>
                                    <div className="col-sm-6 col-md-4 col-lg-3"><i className="far fa-arrow-circle-up" /> fa-arrow-circle-up</div>
                                    <div className="col-sm-6 col-md-4 col-lg-3"><i className="fa fa-arrow-circle-right" /> fa-arrow-circle-right</div>
                                    <div className="col-sm-6 col-md-4 col-lg-3"><i className="fa fa-arrow-circle-up" /> fa-arrow-circle-up</div>
                                    <div className="col-sm-6 col-md-4 col-lg-3"><i className="fa fa-arrow-down" /> fa-arrow-down</div>
                                    <div className="col-sm-6 col-md-4 col-lg-3"><i className="fa fa-arrow-left" /> fa-arrow-left</div>
                                    <div className="col-sm-6 col-md-4 col-lg-3"><i className="fa fa-arrow-right" /> fa-arrow-right</div>
                                    <div className="col-sm-6 col-md-4 col-lg-3"><i className="fa fa-arrow-up" /> fa-arrow-up</div>
                                    <div className="col-sm-6 col-md-4 col-lg-3"><i className="fa fa-caret-down" /> fa-caret-down</div>
                                    <div className="col-sm-6 col-md-4 col-lg-3"><i className="fa fa-caret-left" /> fa-caret-left</div>
                                    <div className="col-sm-6 col-md-4 col-lg-3"><i className="fa fa-caret-right" /> fa-caret-right</div>
                                    <div className="col-sm-6 col-md-4 col-lg-3"><i className="fa fa-caret-up" /> fa-caret-up</div>
                                    <div className="col-sm-6 col-md-4 col-lg-3"><i className="far fa-caret-square-left" /> fa-caret-square-left</div>
                                    <div className="col-sm-6 col-md-4 col-lg-3"><i className="far fa-caret-square-right" /> fa-caret-square-right</div>
                                    <div className="col-sm-6 col-md-4 col-lg-3"><i className="far fa-caret-square-up" /> fa-caret-square-up</div>
                                    <div className="col-sm-6 col-md-4 col-lg-3"><i className="far fa-caret-square-down" /> fa-caret-square-down</div>
                                    <div className="col-sm-6 col-md-4 col-lg-3"><i className="fa fa-chevron-circle-down" /> fa-chevron-circle-down</div>
                                    <div className="col-sm-6 col-md-4 col-lg-3"><i className="fa fa-chevron-circle-left" /> fa-chevron-circle-left</div>
                                    <div className="col-sm-6 col-md-4 col-lg-3"><i className="fa fa-chevron-circle-right" /> fa-chevron-circle-right</div>
                                    <div className="col-sm-6 col-md-4 col-lg-3"><i className="fa fa-chevron-circle-up" /> fa-chevron-circle-up</div>
                                    <div className="col-sm-6 col-md-4 col-lg-3"><i className="fa fa-chevron-down" /> fa-chevron-down</div>
                                    <div className="col-sm-6 col-md-4 col-lg-3"><i className="fa fa-chevron-left" /> fa-chevron-left</div>
                                    <div className="col-sm-6 col-md-4 col-lg-3"><i className="fa fa-chevron-right" /> fa-chevron-right</div>
                                    <div className="col-sm-6 col-md-4 col-lg-3"><i className="fa fa-chevron-up" /> fa-chevron-up</div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-12">
                        <div className="ms-panel">
                            <div className="ms-panel-header">
                                <h6>Video Player Icons</h6>
                            </div>
                            <div className="ms-panel-body">
                                <div className="row ms-icons-list">
                                    <div className="col-sm-6 col-md-4 col-lg-3"><i className="fa fa-arrows-alt" /> fa-arrows-alt</div>
                                    <div className="col-sm-6 col-md-4 col-lg-3"><i className="fa fa-backward" /> fa-backward</div>
                                    <div className="col-sm-6 col-md-4 col-lg-3"><i className="fa fa-compress" /> fa-compress</div>
                                    <div className="col-sm-6 col-md-4 col-lg-3"><i className="fa fa-eject" /> fa-eject</div>
                                    <div className="col-sm-6 col-md-4 col-lg-3"><i className="fa fa-expand" /> fa-expand</div>
                                    <div className="col-sm-6 col-md-4 col-lg-3"><i className="fa fa-fast-backward" /> fa-fast-backward</div>
                                    <div className="col-sm-6 col-md-4 col-lg-3"><i className="fa fa-fast-forward" /> fa-fast-forward</div>
                                    <div className="col-sm-6 col-md-4 col-lg-3"><i className="fa fa-forward" /> fa-forward</div>
                                    <div className="col-sm-6 col-md-4 col-lg-3"><i className="fa fa-pause" /> fa-pause</div>
                                    <div className="col-sm-6 col-md-4 col-lg-3"><i className="fa fa-play" /> fa-play</div>
                                    <div className="col-sm-6 col-md-4 col-lg-3"><i className="fa fa-play-circle" /> fa-play-circle</div>
                                    <div className="col-sm-6 col-md-4 col-lg-3"><i className="far fa-play-circle" /> fa-play-circle</div>
                                    <div className="col-sm-6 col-md-4 col-lg-3"><i className="fa fa-step-backward" /> fa-step-backward</div>
                                    <div className="col-sm-6 col-md-4 col-lg-3"><i className="fa fa-step-forward" /> fa-step-forward</div>
                                    <div className="col-sm-6 col-md-4 col-lg-3"><i className="fa fa-stop" /> fa-stop</div>
                                    <div className="col-sm-6 col-md-4 col-lg-3"><i className="fab fa-youtube" /> fa-youtube-play</div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-12">
                        <div className="ms-panel">
                            <div className="ms-panel-header">
                                <h6>Brand Icons</h6>
                            </div>
                            <div className="ms-panel-body">
                                <div className="row ms-icons-list">
                                    <div className="col-sm-6 col-md-4 col-lg-3"><i className="fab fa-adn" /> fa-adn</div>
                                    <div className="col-sm-6 col-md-4 col-lg-3"><i className="fab fa-android" /> fa-android</div>
                                    <div className="col-sm-6 col-md-4 col-lg-3"><i className="fab fa-apple" /> fa-apple</div>
                                    <div className="col-sm-6 col-md-4 col-lg-3"><i className="fab fa-behance" /> fa-behance</div>
                                    <div className="col-sm-6 col-md-4 col-lg-3"><i className="fab fa-behance-square" /> fa-behance-square</div>
                                    <div className="col-sm-6 col-md-4 col-lg-3"><i className="fab fa-bitbucket" /> fa-bitbucket</div>
                                    <div className="col-sm-6 col-md-4 col-lg-3"><i className="fab fa-bitbucket-square" /> fa-bitbucket-square</div>
                                    <div className="col-sm-6 col-md-4 col-lg-3"><i className="cc BTC" /> fa-bitcoin <span className="text-muted">(alias)</span>
                                    </div>
                                    <div className="col-sm-6 col-md-4 col-lg-3"><i className="fab fa-btc" /> fa-btc</div>
                                    <div className="col-sm-6 col-md-4 col-lg-3"><i className="fab fa-codepen" /> fa-codepen</div>
                                    <div className="col-sm-6 col-md-4 col-lg-3"><i className="fab fa-css3" /> fa-css3</div>
                                    <div className="col-sm-6 col-md-4 col-lg-3"><i className="fab fa-delicious" /> fa-delicious</div>
                                    <div className="col-sm-6 col-md-4 col-lg-3"><i className="fab fa-deviantart" /> fa-deviantart</div>
                                    <div className="col-sm-6 col-md-4 col-lg-3"><i className="fab fa-digg" /> fa-digg</div>
                                    <div className="col-sm-6 col-md-4 col-lg-3"><i className="fab fa-dribbble" /> fa-dribbble</div>
                                    <div className="col-sm-6 col-md-4 col-lg-3"><i className="fab fa-dropbox" /> fa-dropbox</div>
                                    <div className="col-sm-6 col-md-4 col-lg-3"><i className="fabb fa-drupal" /> fa-drupal</div>
                                    <div className="col-sm-6 col-md-4 col-lg-3"><i className="fab fa-empire" /> fa-empire</div>
                                    <div className="col-sm-6 col-md-4 col-lg-3"><i className="fab fa-facebook-f" /> fa-facebook</div>
                                    <div className="col-sm-6 col-md-4 col-lg-3"><i className="fab fa-facebook-f-square" /> fa-facebook-square</div>
                                    <div className="col-sm-6 col-md-4 col-lg-3"><i className="fab fa-flickr" /> fa-flickr</div>
                                    <div className="col-sm-6 col-md-4 col-lg-3"><i className="fab fa-foursquare" /> fa-foursquare</div>
                                    <div className="col-sm-6 col-md-4 col-lg-3"><i className="fab fa-ge" /> fa-ge <span className="text-muted">(alias)</span>
                                    </div>
                                    <div className="col-sm-6 col-md-4 col-lg-3"><i className="fab fa-git" /> fa-git</div>
                                    <div className="col-sm-6 col-md-4 col-lg-3"><i className="fab fa-git-square" /> fa-git-square</div>
                                    <div className="col-sm-6 col-md-4 col-lg-3"><i className="fab fa-github" /> fa-github</div>
                                    <div className="col-sm-6 col-md-4 col-lg-3"><i className="fab fa-github-alt" /> fa-github-alt</div>
                                    <div className="col-sm-6 col-md-4 col-lg-3"><i className="fab fa-github-square" /> fa-github-square</div>
                                    <div className="col-sm-6 col-md-4 col-lg-3"><i className="fab fa-gittip" /> fa-gittip</div>
                                    <div className="col-sm-6 col-md-4 col-lg-3"><i className="fab fa-google" /> fa-google</div>
                                    <div className="col-sm-6 col-md-4 col-lg-3"><i className="fab fa-google" /> fa-google-plus</div>
                                    <div className="col-sm-6 col-md-4 col-lg-3"><i className="fab fa-google-square" /> fa-google-plus-square</div>
                                    <div className="col-sm-6 col-md-4 col-lg-3"><i className="fab fa-hacker-news" /> fa-hacker-news</div>
                                    <div className="col-sm-6 col-md-4 col-lg-3"><i className="fab fa-html5" /> fa-html5</div>
                                    <div className="col-sm-6 col-md-4 col-lg-3"><i className="fab fa-instagram" /> fa-instagram</div>
                                    <div className="col-sm-6 col-md-4 col-lg-3"><i className="fab fa-joomla" /> fa-joomla</div>
                                    <div className="col-sm-6 col-md-4 col-lg-3"><i className="fab fa-jsfiddle" /> fa-jsfiddle</div>
                                    <div className="col-sm-6 col-md-4 col-lg-3"><i className="fab fa-linkedin-in" /> fa-linkedin</div>
                                    <div className="col-sm-6 col-md-4 col-lg-3"><i className="fab fa-linkedin-in-square" /> fa-linkedin-square</div>
                                    <div className="col-sm-6 col-md-4 col-lg-3"><i className="fab fa-linux" /> fa-linux</div>
                                    <div className="col-sm-6 col-md-4 col-lg-3"><i className="fab fa-maxcdn" /> fa-maxcdn</div>
                                    <div className="col-sm-6 col-md-4 col-lg-3"><i className="fab fa-openid" /> fa-openid</div>
                                    <div className="col-sm-6 col-md-4 col-lg-3"><i className="fab fa-pagelines" /> fa-pagelines</div>
                                    <div className="col-sm-6 col-md-4 col-lg-3"><i className="fab fa-pied-piper" /> fa-pied-piper</div>
                                    <div className="col-sm-6 col-md-4 col-lg-3"><i className="fab fa-pied-piper-alt" /> fa-pied-piper-alt</div>
                                    <div className="col-sm-6 col-md-4 col-lg-3"><i className="fab fa-pinterest" /> fa-pinterest</div>
                                    <div className="col-sm-6 col-md-4 col-lg-3"><i className="fab fa-pinterest-square" /> fa-pinterest-square</div>
                                    <div className="col-sm-6 col-md-4 col-lg-3"><i className="fab fa-qq" /> fa-qq</div>
                                    <div className="col-sm-6 col-md-4 col-lg-3"><i className="fab fa-ra" /> fa-ra <span className="text-muted">(alias)</span>
                                    </div>
                                    <div className="col-sm-6 col-md-4 col-lg-3"><i className="fab fa-rebel" /> fa-rebel</div>
                                    <div className="col-sm-6 col-md-4 col-lg-3"><i className="fab fa-reddit" /> fa-reddit</div>
                                    <div className="col-sm-6 col-md-4 col-lg-3"><i className="fab fa-reddit-square" /> fa-reddit-square</div>
                                    <div className="col-sm-6 col-md-4 col-lg-3"><i className="fab fa-renren" /> fa-renren</div>
                                    <div className="col-sm-6 col-md-4 col-lg-3"><i className="fab fa-share-alt" /> fa-share-alt</div>
                                    <div className="col-sm-6 col-md-4 col-lg-3"><i className="fab fa-share-alt-square" /> fa-share-alt-square</div>
                                    <div className="col-sm-6 col-md-4 col-lg-3"><i className="fab fa-skype" /> fa-skype</div>
                                    <div className="col-sm-6 col-md-4 col-lg-3"><i className="fab fa-slack" /> fa-slack</div>
                                    <div className="col-sm-6 col-md-4 col-lg-3"><i className="fab fa-soundcloud" /> fa-soundcloud</div>
                                    <div className="col-sm-6 col-md-4 col-lg-3"><i className="fab fa-spotify" /> fa-spotify</div>
                                    <div className="col-sm-6 col-md-4 col-lg-3"><i className="fab fa-stack-exchange" /> fa-stack-exchange</div>
                                    <div className="col-sm-6 col-md-4 col-lg-3"><i className="fab fa-stack-overflow" /> fa-stack-overflow</div>
                                    <div className="col-sm-6 col-md-4 col-lg-3"><i className="fab fa-steam" /> fa-steam</div>
                                    <div className="col-sm-6 col-md-4 col-lg-3"><i className="fab fa-steam-square" /> fa-steam-square</div>
                                    <div className="col-sm-6 col-md-4 col-lg-3"><i className="fab fa-stumbleupon" /> fa-stumbleupon</div>
                                    <div className="col-sm-6 col-md-4 col-lg-3"><i className="fab fa-stumbleupon-circle" /> fa-stumbleupon-circle</div>
                                    <div className="col-sm-6 col-md-4 col-lg-3"><i className="fab fa-tencent-weibo" /> fa-tencent-weibo</div>
                                    <div className="col-sm-6 col-md-4 col-lg-3"><i className="fab fa-trello" /> fa-trello</div>
                                    <div className="col-sm-6 col-md-4 col-lg-3"><i className="fab fa-tumblr" /> fa-tumblr</div>
                                    <div className="col-sm-6 col-md-4 col-lg-3"><i className="fab fa-tumblr-square" /> fa-tumblr-square</div>
                                    <div className="col-sm-6 col-md-4 col-lg-3"><i className="fab fa-twitter" /> fa-twitter</div>
                                    <div className="col-sm-6 col-md-4 col-lg-3"><i className="fab fa-twitter-square" /> fa-twitter-square</div>
                                    <div className="col-sm-6 col-md-4 col-lg-3"><i className="fa fa-vimeo-square" /> fa-vimeo-square</div>
                                    <div className="col-sm-6 col-md-4 col-lg-3"><i className="fab fa-vine" /> fa-vine</div>
                                    <div className="col-sm-6 col-md-4 col-lg-3"><i className="fab fa-vk" /> fa-vk</div>
                                    <div className="col-sm-6 col-md-4 col-lg-3"><i className="fab fa-wechat" /> fa-wechat <span className="text-muted">(alias)</span>
                                    </div>
                                    <div className="col-sm-6 col-md-4 col-lg-3"><i className="fab fa-weibo" /> fa-weibo</div>
                                    <div className="col-sm-6 col-md-4 col-lg-3"><i className="fab fa-weixin" /> fa-weixin</div>
                                    <div className="col-sm-6 col-md-4 col-lg-3"><i className="fab fa-windows" /> fa-windows</div>
                                    <div className="col-sm-6 col-md-4 col-lg-3"><i className="fab fa-wordpress" /> fa-wordpress</div>
                                    <div className="col-sm-6 col-md-4 col-lg-3"><i className="fab fa-xing" /> fa-xing</div>
                                    <div className="col-sm-6 col-md-4 col-lg-3"><i className="fab fa-xing-square" /> fa-xing-square</div>
                                    <div className="col-sm-6 col-md-4 col-lg-3"><i className="fab fa-yahoo" /> fa-yahoo</div>
                                    <div className="col-sm-6 col-md-4 col-lg-3"><i className="fab fa-youtube" /> fa-youtube</div>
                                    <div className="col-sm-6 col-md-4 col-lg-3"><i className="fab fa-youtube" /> fa-youtube-play</div>
                                    <div className="col-sm-6 col-md-4 col-lg-3"><i className="fab fa-youtube-square" /> fa-youtube-square</div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-12">
                        <div className="ms-panel">
                            <div className="ms-panel-header">
                                <h6>Medical Icons</h6>
                            </div>
                            <div className="ms-panel-body">
                                <div className="row ms-icons-list">
                                    <div className="col-sm-6 col-md-4 col-lg-3"><i className="fa fa-ambulance" /> fa-ambulance</div>
                                    <div className="col-sm-6 col-md-4 col-lg-3"><i className="fa fa-h-square" /> fa-h-square</div>
                                    <div className="col-sm-6 col-md-4 col-lg-3"><i className="far fa-hospital" /> fa-hospital</div>
                                    <div className="col-sm-6 col-md-4 col-lg-3"><i className="fa fa-medkit" /> fa-medkit</div>
                                    <div className="col-sm-6 col-md-4 col-lg-3"><i className="fa fa-plus-square" /> fa-plus-square</div>
                                    <div className="col-sm-6 col-md-4 col-lg-3"><i className="fa fa-stethoscope" /> fa-stethoscope</div>
                                    <div className="col-sm-6 col-md-4 col-lg-3"><i className="fa fa-user-md" /> fa-user-md</div>
                                    <div className="col-sm-6 col-md-4 col-lg-3"><i className="fa fa-wheelchair" /> fa-wheelchair</div>
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