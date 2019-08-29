import React, { Component } from 'react';
import WickModal from 'Editor/Modals/WickModal/WickModal'; 

import './_listFiles.scss';

class ListFiles extends Component {

  componentDidMount() {
    if (this.props.userSession && !this.props.userSession.isUserSignedIn()) {
      this.props.toggle();
    } 
  }

  onFileSelected = (fileName) => {
    this.props.onFileSelected(fileName);
    this.props.toggle();
  }

  render() {
    return (
      <WickModal
        open={this.props.open}
        toggle={this.props.toggle}
        className="listfiles-modal-body"
        overlayClassName="listfiles-modal-overlay">
          
        <div className="listfiles-container listfiles-text">
            <h5>Stored projects</h5>
            <div className="listfiles-messages-container">
              {this.props.savedFiles && this.props.savedFiles.map((fileName) => 
                <div className="listfiles-file" key={fileName} onClick={() => this.onFileSelected(fileName)}>{fileName}</div>
              )}
            </div>
            {(!this.props.savedFiles || this.props.savedFiles.length === 0) &&
            <div>No project stored yet.</div>}
        </div>

      </WickModal>
    );
  }
}
export default ListFiles;
