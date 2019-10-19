import React, { Component } from "react";
import Section from "../../layout/Section/Section";
import Tabset from "../../layout/Tabset/Tabset";
import Cardset from "../../layout/Cards/Cards";
import Columns from "../../layout/Columns/Columns";
import ContentBlock from "../../utilities/ContentBlock";
//import Row from 'reactstrap';
import "./index.css";

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

        let props = {
          key: index,
          inGrid: section.in_grid,
          className: section.section_class,
          title: section.section_title,
          titleClasses: section.section_title_class,
          content: section.section_content,
          bgImg: section.section_bg_img
        };

        let tabsetProps = {
          key: index,
          title: section.section_title,
          titleClasses: section.section_title_class,
          tabsetClass: section.tabset_class,
          id: section.tabset_name,
          tab: section.tab,
          content: section.tab_content,
          inGrid: section.in_grid
        };

        let cardProps = {
          key: index,
          title: section.section_title,
          class: section.title_class,
          image: section.image,
          card: section.card,
          content: section.card_content,
          button: section.button,
          inGrid: section.section_type,
          columns: section.num_col
        };

        let colProps = {
          key: index,
          inGrid: section.in_grid,
          num_col: section.num_columns,
          title: section.section_title,
          titleClasses: section.title_classes,
          section_class: section.section_classes,
          colGroup: section.col_container
        };

        switch (layout) {
          case "section":
            console.log(props.content);
            return (
              <Section {...props}>
                <ContentBlock content={props.content} />
              </Section>
            );
          //break;
          case "tab_set":
            console.log(tabsetProps);
            return <Tabset {...tabsetProps} />;
          //return <Tabs {...tabsetProps} />;
          //break;
          case "columns":
            return <Columns {...colProps} />;
          case "card_layout":
            return <Cardset {...cardProps} />;
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
