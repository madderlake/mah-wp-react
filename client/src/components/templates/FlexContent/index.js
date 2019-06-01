import React, { Component } from "react";
import Section from "../../layout/Flex/Section";
import Tabset from "../../layout/Flex/Tabset";

import "./index.css";
//import ContentBlock from '../../utilities/ContentBlock';

class FlexContent extends Component {
  render() {
    if (this.props.data) {
      let acf = this.props.data.acf;
      let layouts = acf.content;
      let pageTitle = acf.page_title_group.page_title;
      let pageTitleClass = acf.page_title_group.page_title_class;
      //console.log(layouts);

      const getLayout = layouts.map((section, index) => {
        let layout = section.acf_fc_layout;
        //let pageTitleEl = section.acf.page_title_group;

        let props = {
          inGrid: section.in_grid,
          className: section.section_class,
          title: section.section_title,
          titleClasses: section.section_title_class,
          content: section.section_content,
          bgImg: section.section_bg_img,
          key: index
        };

        let tabsetProps = {
          key: index,
          tabsetClass: section.tabset_class,
          id: section.tabset_name,
          tab: section.tab,
          content: section.tab_content,
          inGrid: section.in_grid
        };

        switch (layout) {
          case "section":
            return <Section {...props} />;
          //break;
          case "tab_set":
            //console.log(tabsetProps)
            return <Tabset {...tabsetProps} />;
          //break;
          default:
            return <Section {...props} />;
        }
      });

      return (
        <div className={acf.page_class}>
          <article className={`${this.props.slug} flex-template`}>
            <h1 className={`container ${pageTitleClass}`}>{pageTitle}</h1>

            {getLayout}
          </article>
        </div>
      );
    }

    return null;
  }
}

export default FlexContent;
