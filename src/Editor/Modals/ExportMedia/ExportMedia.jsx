/*
 * Copyright 2018 WICKLETS LLC
 *
 * This file is part of Wick Editor.
 *
 * Wick Editor is free software: you can redistribute it and/or modify
 * it under the terms of the GNU General Public License as published by
 * the Free Software Foundation, either version 3 of the License, or
 * (at your option) any later version.
 *
 * Wick Editor is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU General Public License for more details.
 *
 * You should have received a copy of the GNU General Public License
 * along with Wick Editor.  If not, see <https://www.gnu.org/licenses/>.
 */

import React, { Component } from 'react';
import WickModal from 'Editor/Modals/WickModal/WickModal';
import { Progress } from 'reactstrap';

import './_exportmedia.scss';

class ExportMedia extends Component {
  render() {
    let renderName = this.props.renderType === "video" ? this.props.project.name+'.mp4' : this.props.project.name+'.gif';
    return (
      <WickModal
        open={this.props.open}
        toggle={this.props.toggle}
        className="media-export-modal-body"
        overlayClassName="media-export-modal-overlay">
        <div id="media-export-modal-title">Exporting {this.props.renderType}</div>
        <div className="media-export-modal-content">
          <div id="media-export-modal-subtitle">Creating "{renderName}"</div>
          <Progress animated color="success" value={this.props.renderProgress}/>
          <div id="media-export-modal-status-message">{this.props.renderStatusMessage}</div>
        </div>
      </WickModal>
    );
  }
}

export default ExportMedia
