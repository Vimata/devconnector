import React, { Component } from 'react';
import PropTypes from 'prop-types';
import isEmpty from '../../validation/is-empty';

class ProfileAbout extends Component {
  render() {
    const { profile } = this.props;

    //Get first name
    const firstName = profile.user.name.trim().split(' ')[0];

    //Skill list
    const skills = profile.skills.map((skill, index) => (
      <div key={index} className="p-3 justify-content-center">
        {(() => {
          switch (skill) {
            case 'JavaScript' || 'javascript || Javascript':
              return (
                <span>
                  <i className="fab fa-js" /> {skill}{' '}
                </span>
              );
            case 'PHP' || 'php':
              return (
                <span>
                  <i className="fab fa-php" /> {skill}{' '}
                </span>
              );
            case 'HTML' || 'html':
              return (
                <span>
                  <i className="fab fa-html5" /> {skill}{' '}
                </span>
              );
            case 'Python' || 'PYTHON' || 'python':
              return (
                <span>
                  <i className="fab fa-python" /> {skill}{' '}
                </span>
              );
            case 'CSS' || 'css':
              return (
                <span>
                  <i className="fab fa-css3" /> {skill}{' '}
                </span>
              );
            default:
              return (
                <span>
                  <i className="fas fa-check" /> {skill}
                </span>
              );
          }
        })()}
      </div>
    ));
    return (
      <div className="row">
        <div className="col-md-12">
          <div className="card card-body bg-light mb-3">
            <h3 className="text-center text-info">{firstName}'s Bio</h3>
            <p className="lead text-center">
              {isEmpty(profile.bio) ? (
                <span>{firstName} does not have a bio.</span>
              ) : (
                <span>{profile.bio}</span>
              )}
            </p>
            <hr />
            <h3 className="text-center text-info">Skill Set</h3>
            <div className="row">
              <div className="d-flex flex-wrap justify-content-center align-items-center ">
                {skills}
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

ProfileAbout.propTypes = {
  profile: PropTypes.object.isRequired
};

export default ProfileAbout;
