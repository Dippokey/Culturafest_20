import React from 'react';
import '../caro.scss';
import ReactCardFlip from 'react-card-flip';



// =========================
// Slide
// =========================

class Slide extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      isFlipped: false
    };
    this.handleClick = this.handleClick.bind(this);
    this.handleMouseMove = this.handleMouseMove.bind(this)
    this.handleMouseLeave = this.handleMouseLeave.bind(this)
    this.handleSlideClick = this.handleSlideClick.bind(this)
    this.imageLoaded = this.imageLoaded.bind(this)
    this.slide = React.createRef()
  }

  handleMouseMove(event) {
    const el = this.slide.current
    const r = el.getBoundingClientRect()

    el.style.setProperty('--x', event.clientX - (r.left + Math.floor(r.width / 2)))
    el.style.setProperty('--y', event.clientY - (r.top + Math.floor(r.height / 2)))
  }

  handleMouseLeave(event) {
    this.slide.current.style.setProperty('--x', 0)
    this.slide.current.style.setProperty('--y', 0)
  }

  handleSlideClick(event) {
    this.props.handleSlideClick(this.props.slide.index)
  }

  handleClick(e) {
    e.preventDefault();
    this.setState(prevState => ({ isFlipped: !prevState.isFlipped }));
  }

  imageLoaded(event) {
    event.target.style.opacity = 1
  }

  getButtonsUsingMap = (hrefObj) => {

    return hrefObj.map((it) => {

      return <a href={it["refer"]}><button className="eve_bt " >{it["headl"]}</button></a>
    }
    )
  }



  render() {
    const { src, button, headline, index, backg, hrefObj } = this.props.slide
    const current = this.props.current
    let classNames = 'slide'

    if (current === index) classNames += ' slide--current'
    else if (current - 1 === index) classNames += ' slide--previous'
    else if (current + 1 === index) classNames += ' slide--next'

    return (

      <ReactCardFlip isFlipped={this.state.isFlipped} flipDirection="vertical">
        <div className="row">
          <div className="col-12">
            <li
              ref={this.slide}
              className={classNames}
              onClick={this.handleSlideClick}
              onMouseMove={this.handleMouseMove}
              onMouseLeave={this.handleMouseLeave}
            >
              <div className="slide__image-wrapper">
                <img
                  className="slide__image"
                  alt={headline}
                  src={src}
                  onLoad={this.imageLoaded}
                />
              </div>

              <article className="slide__content">
                <h2 className="slide__headline">{headline}</h2>
                <button className="slide__action btnn" onClick={this.handleClick} >{button}</button>
              </article>
            </li>
          </div>
        </div>
        <div className="row">
          <div className="col-12">
            <li
              ref={this.slide}
              className={classNames}
              onClick={this.handleSlideClick}
              onMouseMove={this.handleMouseMove}
              onMouseLeave={this.handleMouseLeave}
            >
              <div className="slide__image-wrapper">
                <img
                  className="slide__image"
                  alt={headline}
                  src={src}
                  onLoad={this.imageLoaded}
                />
              </div>

              <article className="slide__content">
                <h2 className="slide__headline">{headline}</h2>
                <div className="row">
                  {
                    this.getButtonsUsingMap(hrefObj)
                  }
                </div>
              </article>
            </li>
          </div>
        </div>
      </ReactCardFlip>


    )
  }
}


// =========================
// Slider control
// =========================

const SliderControl = ({ type, title, handleClick }) => {
  return (
    <button className={`btn btn--${type}`} title={title} onClick={handleClick}>
      <svg className="icon" viewBox="0 0 24 24">
        <path d="M8.59,16.58L13.17,12L8.59,7.41L10,6L16,12L10,18L8.59,16.58Z" />
      </svg>
    </button>
  )
}


// =========================
// Slider
// =========================

class Slider extends React.Component {
  constructor(props) {
    super(props)

    this.state = { current: 0 }
    this.handlePreviousClick = this.handlePreviousClick.bind(this)
    this.handleNextClick = this.handleNextClick.bind(this)
    this.handleSlideClick = this.handleSlideClick.bind(this)
  }

  handlePreviousClick() {
    const previous = this.state.current - 1

    this.setState({
      current: (previous < 0)
        ? this.props.slides.length - 1
        : previous
    })
  }

  handleNextClick() {
    const next = this.state.current + 1;

    this.setState({
      current: (next === this.props.slides.length)
        ? 0
        : next
    })
  }

  handleSlideClick(index) {
    if (this.state.current !== index) {
      this.setState({
        current: index
      })
    }
  }

  render() {
    const { current, direction } = this.state
    const { slides, heading } = this.props
    const headingId = `slider-heading__${heading.replace(/\s+/g, '-').toLowerCase()}`
    const wrapperTransform = {
      'transform': `translateX(-${current * (100 / slides.length)}%)`
    }

    return (
      <div className='div_slider'>
        <div className='slider' id="id_events" aria-labelledby={headingId}>
          <h1>Events</h1>
          <ul className="slider__wrapper" style={wrapperTransform}>
            <h3 id={headingId} class="visuallyhidden">{heading}</h3>

            {slides.map(slide => {
              return (
                <Slide
                  key={slide.index}
                  slide={slide}
                  current={current}
                  handleSlideClick={this.handleSlideClick}
                />
              )
            })}
          </ul>

          <div className="slider__controls">
            <SliderControl
              type="previous"
              title="Go to previous slide"
              handleClick={this.handlePreviousClick}
            />

            <SliderControl
              type="next"
              title="Go to next slide"
              handleClick={this.handleNextClick}
            />
          </div>
        </div>
      </div>
    )
  }
}
export default Slider;

