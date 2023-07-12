const inputs = document.querySelectorAll('input') // returns a collection of elements

const regExpressions = {
  username: /^\w{5,12}$/, // 5-12 char alphanumeric

  email: /^[\w\.]+@[a-z-]+\.[a-z]{2,8}(\.[a-z]{2,8})?$/i, // me@mydomain.com

  password: /^[\w@-]{8,20}$/, // 8-20 char alphanumeric with @ -

  telephone: /^\d{10}$/, // 10 digit number

  slug: /^[a-z\d-]{8,20}$/, // 8-20 char lowercase numbers -
}

inputs.forEach((input) => {
  input.addEventListener('keyup', (e) => {
    const input = e.target
    const inputNameAttribute = e.target.attributes.name.value
    validate(input, regExpressions[inputNameAttribute])
  })
})

// validation functions
const validate = (input, regex) => {
  console.log(regex.test(input.value))

  if (regex.test(input.value)) {
    input.className = 'valid'
  } else {
    input.className = 'invalid'
  }
}
