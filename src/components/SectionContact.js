import React from 'react';
import _ from 'lodash';

import {htmlToReact, markdownify} from '../utils';

export default class SectionContact extends React.Component {
    render() {
        let section = _.get(this.props, 'section');
        return (
            <section id={_.get(section, 'section_id')} className={'block contact-block bg-' + _.get(section, 'background') + ' outer'}>
              <div className="block-header inner-small">
                {_.get(section, 'title') &&
                <h2 className="block-title">{_.get(section, 'title')}</h2>
                }
                {_.get(section, 'subtitle') &&
                <p className="block-subtitle">
                  {htmlToReact(_.get(section, 'subtitle'))}
                </p>
                }
              </div>
              <div className="block-content inner-medium">
                {markdownify(_.get(section, 'content'))}
                <form name="contactForm" method="POST" netlifyHoneypot="bot-field" data-netlify="true" id="contact-form"
                  className="contact-form" action="https://getform.io/f/de3ac1e9-424d-4029-8b88-9721d41d5b10">
                  <p className="screen-reader-text">
                    <label>Don't fill this out if you're human: <input name="bot-field" /></label>
                  </p>
                  <p className="form-row">
                    <label className="form-label">{_.get(section, 'label_nome')}</label>
                    <input type="text" name="name" className="form-input"/>
                  </p>
                  <p className="form-row">
                    <label className="form-label">{_.get(section, 'label_email')}</label>
                    <input type="email" name="email" className="form-input"/>
                  </p>
                  <p className="form-row">
                    <label className="form-label">{_.get(section, 'label_message')}</label>
                    <textarea name="message" className="form-textarea" rows="7" />
                  </p>
                  <input type="hidden" name="form-name" value="contactForm" />
                  <p className="form-row form-submit">
                    <button type="submit" className="button">{_.get(section, 'submit')}</button>
                  </p>
                </form>
              </div>
            </section>
        );
    }
}
