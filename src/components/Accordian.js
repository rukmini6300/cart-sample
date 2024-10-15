// import MenuItem from '@mui/material/MenuItem';
// import FormControl from '@mui/material/FormControl';
// import Select from '@mui/material/Select';
// import React, {useState} from 'react';
// // import TextField from '@mui/material/TextField';
// import Autocomplete from '@mui/material/Autocomplete';
// export default function Accordian() {
//   const [age, setAge] = useState('');
//   // const [value, setValue] = useState('')
//   const handleChange = (event) => {
//     let x = event.target.value
//     let optionValue = x.split('-');
//     setAge(optionValue[0]);
//     //console.log(optionValue[0])
//   };

//   return (
//     <div>
//       <FormControl sx={{ m: 1, minWidth: 120 }}>
//           <Select
//           value={age}
//           onChange={handleChange}
//           displayEmpty
//           inputProps={{ 'aria-label': 'Without label' }}
//           >

//          <MenuItem value="">
//              <em>None</em>
//            </MenuItem>
//            <MenuItem value={'Ten'}>Ten-123</MenuItem>
//            <MenuItem value={'Twenty'}>Twenty-334 </MenuItem>
//            <MenuItem value={'Thirty'}>Thirty-544</MenuItem>
//          </Select>
//        </FormControl>
//      </div>
//    );
// }

import React, {useState} from 'react';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';

const options = ['Option-111', 'someting-332','Ten-10','Twenty-200','Four-04'];

export default function ControllableStates() {
  const [value, setValue] = useState('');
  const [inputValue, setInputValue] = useState('');

  return (
    <div>
      <Autocomplete
        value={value}
        onChange={(event, newValue) => {
        setValue(newValue);
        }}
        inputValue={inputValue}
        onInputChange={(event, newInputValue) => {
          let x = newInputValue
          let optionValue = x.split('-');
          setInputValue(optionValue[0]);
        }}
        id="controllable-states-demo"
        options={options}
        sx={{ width: 300 }}
        renderInput={(params) => <TextField {...params} label="Controllable" value={inputValue}/>}
      />
    </div>
  );
}
