import React, { Component } from 'react';
import { Section } from '../../layout/Section/Section';
import Tabset from '../../layout/Tabset/Tabset';
import Cardset from '../../layout/Cards/Cards';
import Columns from '../../layout/Columns/Columns';
//import Row from 'reactstrap';
import './index.css';

class FlexContent extends Component {
  render() {
    if (this.props.data) {
      let acf = this.props.data.acf;
      let layouts = acf.flex_content;
      let pageTitle = acf.page_title_group.page_title;
      let pageTitleClass = acf.page_title_group.page_title_class;

      const getLayouts = layouts.map((layout, index) => {
        let fc_layout = layout.acf_fc_layout;

        let sectionProps = {
          key: index,
          section: layout.section_m,
          content: layout.content,
          inGrid: layout.in_grid
        };

        let tabsetProps = {
          key: index,
          section: layout.section_m,
          tab: layout.tab,
          inGrid: layout.in_grid
        };

        let cardProps = {
          key: index,
          section: layout.section_m,
          card: layout.card,
          columns: layout.num_col
        };

        let colProps = {
          key: index,
          section: layout.section_m,
          num_col: layout.num_columns,
          containerized: layout.containerized,
          columns: layout.col_group
        };

        switch (fc_layout) {
          case 'tab_set':
            return <Tabset {...tabsetProps} />;
          case 'columns':
            return <Columns {...colProps} />;
          case 'cards':
            return <Cardset {...cardProps} />;
          default:
            return <Section {...sectionProps} />;
        }
      });

      return (
        <div className={acf.page_class}>
          <article className={`flex-content ${this.props.data.slug} `}>
            {pageTitle ? (
              <h1 className={`container ${pageTitleClass}`}>{pageTitle}</h1>
            ) : (
              ''
            )}
            {getLayouts}
          </article>
        </div>
      );
    }

    return null;
  }
}

export default FlexContent;
