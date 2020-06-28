# Simple Javascript Validator

This package aims to validate the input data in javascript from the most common and simplest way.


## Installation
```
npm install simple-javascript-validator
```

## Validation Rules

- required = Textbox's value must be required
- number = Textbox's value must be a number
- email = Textbox's value must be an email
- gtzero = Select tag must have a value

**gtzero** - Because select tag's initial value is zero as stated below:
```
<select>
  <option value="0" selected="selected">- select -</option>
  <option value="1" selected="selected">Admin</option>
  <option value="2" selected="selected">Guest</option>
</select>
```

## How To Use

```
<script src="js/simple-javascript-validator.js"></script>

var full_name     = document.getElementById("name").value;
var age           = document.getElementById("age").value;
var email_address = document.getElementById("email_address").value;
var role          = document.getElementById("role").value;

var validateData = {
  name  : full_name + '|required',
  age   : age + '|required,number',
  email : email_address + '|required,email',
  role  : role + '|gtzero'
};

var validation = validateInputs(validateData);

if(validation.length){
  var error_msgs = formatErrorMessage(validation);

  console.log(error_msgs);
  //toastr.error(error_msgs, 'Ooops!');

  e.preventDefault();
}
else
  return true;
```

## License

The MIT License (MIT)

## Support

You can ask for support by emailing kapitannwel a t g m a i l d o t c o m
