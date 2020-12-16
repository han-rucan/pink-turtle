import React from 'react';
import _ from 'lodash';
import moment from 'moment-strftime';

import {htmlToReact, getPages, Link, safePrefix, markdownify} from '../utils';

export default class SectionPosts extends React.Component {
    render() {
        let pageUrl = _.get(this.props, 'pageContext.url');
        let enLang = pageUrl.includes('-en');
        let posts_dir = (enLang ? '/posts2-en': '/posts2');

        let section = _.get(this.props, 'section');
        let display_posts = _.orderBy(getPages(this.props.pageContext.pages, posts_dir), 'frontmatter.date', 'desc');
        let post_slice = _.get(section, 'post_slice')
        let recent_posts = display_posts.slice(0, post_slice);

        return (
            <section id={_.get(section, 'section_id')} className={'block posts-block bg-' + _.get(section, 'background') + ' outer'}>
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
              <div className="inner">
                <div className="post-feed">
                  {_.map(recent_posts, (post, post_idx) => (
                  <article key={post_idx} className="post post-card">
                    <div className="post-card-inside">
                      {_.get(post, 'frontmatter.thumb_image') &&
                      _.get(post, 'frontmatter.action') &&
                      <Link className="post-card-thumbnail" to={safePrefix(_.get(post, 'url'))}>
                        <img className="thumbnail" src={safePrefix(_.get(post, 'frontmatter.thumb_image'))} alt={_.get(post, 'frontmatter.title')} />
                      </Link>
                      ||
                      <span className="post-card-thumbnail">
                        <img className="thumbnail" src={safePrefix(_.get(post, 'frontmatter.thumb_image'))} alt={_.get(post, 'frontmatter.title')} />
                      </span>
                      }
                      <div className="post-card-content">
                        <header className="post-header">
                          <h3 className="post-title">{_.get(post, 'frontmatter.title')}</h3>
                        </header>
                        <div className="post-excerpt">
                          {markdownify(_.get(post, 'frontmatter.excerpt'))}
                          {_.get(post, 'frontmatter.action') &&
                          <Link className="" to={safePrefix(_.get(post, 'url'))}>
                              {_.get(post, 'frontmatter.action')}
                          </Link>
                          }
                        </div>
                        <footer className="post-meta">
                        </footer>
                      </div>
                    </div>
                  </article>
                  ))}
                </div>
              </div>
            </section>
        );
    }
}
