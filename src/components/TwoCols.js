import React from 'react';
import _ from 'lodash';

import {htmlToReact, safePrefix, markdownify} from '../utils';

export default class TwoCols extends React.Component {
    render() {
      let section = _.get(this.props, 'section');
        return (

          <section id="partners" className={'block features-block bg-gray outer'}>
            <div id="title-partners" className="block-header inner-small">
              {_.get(section, 'title') &&
              <h2 className="block-title">{_.get(section, 'title')}</h2>
              }
              {_.get(section, 'subtitle') &&
              <p className="block-subtitle">
                {htmlToReact(_.get(section, 'subtitle'))}
              </p>
              }
            </div>
            <div className="inner">
              <div key="1" className="block-item">
                <div className="agrid">
                  <div className="cell block-content">
                    <h3 className="block-title underline">
                    {_.get(section, 'head_icon_col1') &&
                      <img className="" src={safePrefix(_.get(section, 'head_icon_col1'))} alt={_.get(section, 'title_col1')} />
                    }
                    {_.get(section, 'title_col1') &&
                      _.get(section, 'title_col1')
                    }
                    </h3>
                    <div className="block-copy">
                      {markdownify(_.get(section, 'content_col1'))}
                    </div>
                  </div>

                  <div className="cell block-content">
                    <h3 className="block-title underline">
                    {_.get(section, 'head_icon_col2') &&
                      <img className="" src={safePrefix(_.get(section, 'head_icon_col2'))} alt={_.get(section, 'title_col2')} />
                    }
                    {_.get(section, 'title_col2') &&
                      _.get(section, 'title_col2')
                    }
                    </h3>
                    <div className="block-copy">
                      {markdownify(_.get(section, 'content_col2'))}
                    </div>
                  </div>
                </div>
              </div>
                <div className="block-copy">
                  {_.get(section, 'body_content') &&
                    markdownify(_.get(section, 'body_content'))
                  }
                </div>
              </div>
          </section>

        );
    }
}
