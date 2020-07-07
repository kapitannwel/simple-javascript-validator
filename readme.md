# Simple Javascript Validator

Not much, but it's an honest work! (wink)

This package aims to validate the input data in javascript using the most common validation rules.


## Installation
```
npm install simple-javascript-validator
```

## Validation Rules

- required = Value must be required
- number = Value must be a number
- date = Value must be a number
- email = Value must be an email
- date = Value must be a valid date format
- gtzero = Select tag must have a value

**gtzero** - Because select tag's initial value is zero as shown in the example below:
```
<select>
  <option value="0" selected="selected">- select -</option>
  <option value="1">Admin</option>
  <option value="2">Guest</option>
</select>
```

**date** - `mm/dd/yyyy` format
```
'1/1/2017', '01/1/2017', '1/01/2017', '01/01/2017'
```

## How To Use

Please run the index.html file
```
<script src="simple-javascript-validator.min.js"></script>

var full_name     = document.getElementById("name").value;
var age           = document.getElementById("age").value;
var birthdate     = document.getElementById("birthday").value;
var email_address = document.getElementById("email_address").value;
var role          = document.getElementById("role").value;


var validateData = {
  name  : full_name + '|required',
  age   : age + '|required,number',
  birthday : birthdate + '|required,date',
  email : email_address + '|required,email',
  role  : role + '|gtzero'
};

var errors = validateInputs(validateData);

if(errors){
  console.log(errors);

  //toastr['error'](errors);

  return false;
}
```

## License

The [MIT License](https://opensource.org/licenses/MIT)

## Support

You can ask for support by emailing kapitannwel a t g m a i l d o t c o m
