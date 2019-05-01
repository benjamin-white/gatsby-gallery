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

  columnGroups() {

    const colCount = this.getColCount();
    const columns  = Array(colCount).fill('').map(x => []);
    this.props.cardsData.forEach((card, index) =>  columns[index % colCount].push(card));
    return columns;

  }

  bindEvents() {
    // debounce resize, remap cardsData struct, render state
  }

  render() {

    return (
      <section className={styles.cardGrid+' u-siteWrap'}>
        <div>
        {this.columnGroups().map((column, index) => {
          return <div className={styles.cardGridColumn} key={index}>{column.map(CardImage)}</div>
        })}

        </div>
      </section>
    )

  }

}
