export default function IdNumberValidator(idNumber) {
    if (!idNumber) return "Id Number  can't be empty."
    if (idNumber.length < 9) return 'Id number must be  9 characters long.'
    return ''
  }