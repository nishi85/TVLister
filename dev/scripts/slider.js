import React from "react";
import ReactDom from "react-dom";
import InputRange from "react-input-range";


class Slider extends React.Component {  
 constructor(props) {
    super(props);
    this.onChange = this.onChange.bind(this);
 }
  
    onChange(range) {
    this.props.onChange({
      type: this.props.data.label,
      value: range
    });
  };


  render() {
    const { min, max, step, value, label } = this.props.data;
    return (
      <div className="slider">
        <label>{label}</label>
        <InputRange
          minValue={min}
          maxValue={max}
          step={step}
          onChange={this.onChange}
          value={value}
        />
      </div>
    );
  }
}

export default Slider;
