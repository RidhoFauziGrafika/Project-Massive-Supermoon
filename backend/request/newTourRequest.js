const validator = require('validator')
// Validation for each request
  function validateTitle(title) {
    if (validator.isEmpty(title)) {
      errors.title = "Silhakan isi Title!";
    }

    if (!validator.isLength(title, { min: 3, max: 255 })) {
      errors.title = "Isikan minimum 3 karakter, maksimal 255 karakter!";
    }
  }

function validateSlug(slug) {
    if (validator.isEmpty(slug)) {
      errors.slug = "Silhakan isi Slug!";
    }

    if (!validator.isLength(slug, { min: 3, max: 255 })) {
      errors.slug = "Isikan minimum 3 karakter, maksimal 255 karakter!";
    }

    const isValidSlug = (slug) => {
      const slugPattern = /^[a-z0-9]+(?:-[a-z0-9])*$/
      return slugPattern.test(slug);
    }

    if(!isValidSlug(slug)) {
      errors.slug("Silahkan isikan slug yang benar, contoh 'gunung-ciremai'!")
    }
}

function validateCategories(categories){
  if (validator.isEmpty(categories)) {
    errors.categories("Silahkan isi kategori!")
  }
}

function validatePrice(price){
  if(validator.isEmpty(price)) {
    errors.price("Silahkan isi harga!")
  }
}

function validateAddress(address){
  if(validator.isEmpty(address)){
    errors.address('Silahkan isikan alamat!')
  }

  if (!validator.isLength(address, { min: 3, max: 255 })) {
    errors.address = "Isikan minimum 3 karakter, maksimal 255 karakter!";
  }
}

function validateAddressLink(address_link){
  if(validator.isEmpty(address_link)){
    errors.address_link('Silahkan isikan link alamat!')
  }
  
  const isValidLink = (link) => {
   const linkPattern = /^(https?ftp):\/\/[^\s/$.?#].[^\s]*$/

   return linkPattern.test(link)
 }

 if(!isValidLink(address_link)){
  errors.address_link('Link tidak valid!')
 }
  
}

function validateDescription(description){
  if (validator.isEmpty(description)) {
    errors.description("Silahkan isikan alamat!");
  }

  if (!validator.isLength(description, { min: 3, max: 255 })) {
    errors.description = "Isikan minimum 3 karakter, maksimal 255 karakter!";
  }
}

function validateTicketOperasional(ticket_operasional) {
  if (validator.isEmpty(ticket_operasional)) {
    errors.ticket_operasional("Silahkan isikan alamat!");
  }

  if (!validator.isLength(ticket_operasional, { min: 3, max: 255 })) {
    errors.ticket_operasional = "Isikan minimum 3 karakter, maksimal 255 karakter!";
  }
}

// Validation function called inside controller
function newTourValidation(data) {
    const errors = {}
    validateTitle(data.title)
    validateSlug(data.slug)
    validateCategories(data.categories)
    validatePrice(data.price)
    validateAddress(data.address)
    validateAddressLink(data.address_link)
    validateDescription(data.description)
    validateTicketOperasional(data.ticket_operasional)
    if (req.facilities === null) {
      errors.facilities("Fasilitas tidak boleh kosong!");
    }

  if(Object.keys(errors.length > 0)) {
    return res.sendStatus(400).json({ 
        message: "Bad Request!",
        errors: errors
     })
  }
}

module.exports = newTourValidation;