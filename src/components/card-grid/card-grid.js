import React     from 'react'
import CardImage from '../card-image/card-image'
import styles    from './card-grid.module.css'

export default class CardGrid extends React.Component {

  constructor(props) {
    super(props)
    // this.colRules = this.getColRules()
    // this.columns = this.getColumns()
    // console.log(this.columns)
    this.bindEvents()
  }

  getColCount() {

    if (document.documentElement.clientWidth > 1000) return 4;
    if (document.documentElement.clientWidth > 700) return 3;

  }

  getColumns() {

    const colCount = this.getColCount();
    const columns  = Array(colCount).fill('').map(x => []);

    // this.props.cardsData.push(this.props.cardsData[0]);

    this.props.cardsData.forEach((card, index) => {

      const colIndex = index % colCount;
      // Array.isArray(columns[colIndex]) || (columns[colIndex] = [])
      columns[colIndex].push(card)

    });

    return columns;

  }

  bindEvents() {
    // debounce resize, remap cardsData struct, render state
  }

  render() {

    return (
      <section className={styles.cardGrid+' u-siteWrap'}>
        <div>
        {this.getColumns().map((column, index) => {
          return <div className={styles.cardGridColumn}>{column.map(CardImage)}</div>
        })}

        </div>
      </section>
    )

  }

}
