import React from 'react';
import _ from 'lodash';
import { Video } from 'gatsby-video'
import video from '../../static/images/coexist_v2.mp4'

import {safePrefix, markdownify} from '../utils';
import ActionLink from './ActionLink';

export default class SectionHero extends React.Component {
    render() {
        let section = _.get(this.props, 'section');
        return (
            <section id={_.get(section, 'section_id')} className="block hero-block bg-accent outer">
              <div className="inner">
                <div className="grid">
                  {_.get(section, 'image') &&
                  <div className="cell block-preview">
                  <video controls Autoplay autoplay="autoplay">
                    <source src={video} type="video/mp4" />
                  </video>

                  </div>
                  }
                  <div className="cell block-content">
                    {_.get(section, 'title') &&
                    <h2 className="block-title underline">{_.get(section, 'title')}</h2>
                    }
                    <div className="block-copy">
                      {markdownify(_.get(section, 'content'))}
                    </div>
                    {_.get(section, 'actions') &&
                    <p className="block-buttons">
                      {_.map(_.get(section, 'actions'), (action, action_idx) => (
                        <ActionLink key={action_idx} {...this.props} action={action} class_names={'button white large'} />
                      ))}
                    </p>
                    }
                  </div>
                </div>
              </div>
            </section>
        );
    }
}
