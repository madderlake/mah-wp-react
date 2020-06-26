import React, { Component } from "react";
import Section from "../../layout/Section/Section";
import Tabset from "../../layout/Tabset/Tabset";
import Cardset from "../../layout/Cards/Cards";
import Columns from "../../layout/Columns/Columns";
//import Row from 'reactstrap';
import "./index.css";

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
          inGrid: layout.in_grid,
          className: layout.section_class,
          title: layout.section_title,
          titleClasses: layout.section_title_class,
          content: layout.content,
          bgImg: layout.bg_img,
        };
        //console.log(sectionProps);
        let tabsetProps = {
          key: index,
          title: layout.section_title,
          titleClasses: layout.section_title_class,
          tabsetClass: layout.tabset_class,
          id: layout.tabset_name,
          tab: layout.tab,
          inGrid: layout.in_grid,
        };

        let cardProps = {
          key: index,
          title: layout.section_title,
          class: layout.title_class,
          card: layout.card,
          button: layout.button,
          inGrid: layout.in_grid,
          columns: layout.num_col,
        };

        let colProps = {
          key: index,
          inGrid: layout.in_grid,
          num_col: layout.num_columns,
          title: layout.section_title,
          titleClasses: layout.title_classes,
          section_class: layout.section_classes,
          colGroup: layout.col_container,
        };

        switch (fc_layout) {
          case "tab_set":
            return <Tabset {...tabsetProps} />;
          case "columns":
            return <Columns {...colProps} />;
          case "cards":
            return <Cardset {...cardProps} />;
          default:
            return <Section {...sectionProps} />;
        }
      });

      return (
        <div className={acf.page_class}>
          <article className={`${this.props.slug} flex-template`}>
            <h1 className={`container ${pageTitleClass}`}>{pageTitle}</h1>
            {getLayouts}
          </article>
        </div>
      );
    }

    return null;
  }
}

export default FlexContent;
