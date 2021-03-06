import React, { useState } from 'react';
import Select from 'react-select';

function App() {
  const data = [
    {
      value: 1,
      label: "cerulean"
    },
    {
      value: 2,
      label: "fuchsia rose",
      isdisabled: true // disable this option
    },
    {
      value: 3,
      label: "true red"
    },
    {
      value: 4,
      label: "aqua sky",
      isdisabled: true // disable this option
    },
    {
      value: 5,
      label: "tigerlily"
    },
    {
      value: 6,
      label: "blue turquoise"
    }
  ];

  const [selectedOption, setSelectedOption] = useState(null);

  // handle onChange event of the dropdown
  const handleChange = e => {
    setSelectedOption(e);
  }

  return (
    <div className="App">
      <a href="https://www.cluemediator.com">Clue Mediator</a><br /><br />

      <Select
        placeholder="Select Option"
        value={selectedOption} // set selected value
        options={data} // set list of the data
        onChange={handleChange} // assign onChange function
        isOptionDisabled={(option) => option.isdisabled} // disable an option
      />

      {selectedOption && <div style={{ marginTop: 20, lineHeight: '25px' }}>
        <b>Selected Option</b><br />
        <div style={{ marginTop: 10 }}><b>Label: </b> {selectedOption.label}</div>
        <div><b>Value: </b> {selectedOption.value}</div>
      </div>}
    </div>
  );
}

export default App;
