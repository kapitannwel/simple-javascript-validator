/*  start - main validator function  */
function validateInputs(data)
{
  var items = Object.keys(data);
  var errors = [];

  items.map(key => {
    var param = data[key].split('|');
    var value = param[0];

    if(param.length != 2)
      errors.push(key + ' - no set validation parameter');
    else{
      var validation = param[1].split(',');
      var validator;

      for (validator of validation){
        switch (validator) {
          case 'number':
            var return_data = numberValidator(key, value);

            if (return_data)
              errors.push(return_data);
            break;
          case 'required':
            var return_data = requiredValidator(key, value);

            if (return_data)
              errors.push(return_data);
            break;
          case 'gtzero':
            var return_data = selectTagValidator(key, value);

            if (return_data)
              errors.push(return_data);
            break;
          case 'email':
            var return_data = emailValidator(key, value);

            if (return_data)
              errors.push(return_data);
            break;
          case 'date':
            var return_data = dateValidator(key, value);

            if (return_data)
              errors.push(return_data);
            break;
          default:
            errors.push(ucFirst(key) + ': Unknown validation error occured');
        }
      }
    }
  });

  if (errors.length){
    var error_msgs = formatErrorMessage(errors);

    return error_msgs;
  }
  else
    return false;
}
/*  end - main validator function  */

/*  start - convert error message from array to bulleted list  */
function formatErrorMessage(message)
{
  var msg = '';

  for (i = 0; i < message.length; i++)
    msg += '&middot;&nbsp;' + ucFirst(message[i]) + "<br/>";

  return msg;
}
/*  end - convert error message from array to bulleted list  */

/*  start - capitalize first letter of string  */
function ucFirst(data)
{
  return data[0].toUpperCase() + data.slice(1);
}
/*  end - capitalize first letter of string  */

/*  start - validate data if it is a number  */
function numberValidator(key, value)
{
  if (isNaN(value))
    return key + ' is not a number';

  return;
}
/*  end - validate data if it is a number  */

/*  start - validate data if value is not empty  */
function requiredValidator(key, value)
{
  if (value === 'null' || value == '')
    return key + ' is required';
  else
    return '';
}
/*  end - validate data if value is not empty  */

/*  start - validate data if select tag is not empty  */
function selectTagValidator(key, value)
{
  if(value == 0)
    return key + ' - no selected value';

  return;
}
/*  end - validate data if select tag is not empty  */

/*  start - validate data if value is email  */
function validateEmail(email) {
  const re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(email);
}

function emailValidator(key, value)
{
  if (!validateEmail(value))
    return key + ' is not a valid email';

  return;
}
/*  end - validate data if value is email  */

/*  start - validate data if value is a date  */
function dateValidator(key, value)
{
   const regExp = /^(\d\d?)\/(\d\d?)\/(\d{4})$/;
   let matches = value.match(regExp);
   let isValid = matches;
   let maxDate = [0, 31, 29, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

   if (matches) {
     const month = parseInt(matches[1]);
     const date = parseInt(matches[2]);
     const year = parseInt(matches[3]);

     isValid = month <= 12 && month > 0;
     isValid &= date <= maxDate[month] && date > 0;

     const leapYear = (year % 400 == 0)
        || (year % 4 == 0 && year % 100 != 0);
     isValid &= month != 2 || leapYear || date <= 28;
   }

   if(!isValid)
     return key + ' - invalid date format';

   return;
}
/*  end - validate data if value is a date  */
