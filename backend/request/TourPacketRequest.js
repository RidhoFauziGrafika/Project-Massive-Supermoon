const validator = require("validator");
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
    const slugPattern = /^[a-z0-9]+(?:-[a-z0-9])*$/;
    return slugPattern.test(slug);
  };

  if (!isValidSlug(slug)) {
    errors.slug("Silahkan isikan slug yang benar, contoh 'gunung-ciremai'!");
  }
}


function validatePrice(price) {
  if (validator.isEmpty(price)) {
    errors.price("Silahkan isi harga!");
  }
}

function validateAddress(address) {
  if (validator.isEmpty(address)) {
    errors.address("Silahkan isikan alamat!");
  }

  if (!validator.isLength(address, { min: 3, max: 255 })) {
    errors.address = "Isikan minimum 3 karakter, maksimal 255 karakter!";
  }
}

function validateAddressLink(address_link) {
  if (validator.isEmpty(address_link)) {
    errors.address_link("Silahkan isikan link alamat!");
  }

  const isValidLink = (link) => {
    const linkPattern = /^(https?ftp):\/\/[^\s/$.?#].[^\s]*$/;

    return linkPattern.test(link);
  };

  if (!isValidLink(address_link)) {
    errors.address_link("Link tidak valid!");
  }
}

function validateDescription(description) {
  if (validator.isEmpty(description)) {
    errors.description("Silahkan isikan deskripsi!");
  }

  if (!validator.isLength(description, { min: 3 })) {
    errors.description = "Isikan minimum 3 karakter!";
  }
}

function validateTourDescription(value) {
  if (validator.isEmpty(value)) {
    errors.tour_description("Silahkan isikan deskripsi!");
  }

  if (!validator.isLength(value, { min: 3 })) {
    errors.tour_description = "Isikan minimum 3 karakter!";
  }
}
function validateTourLink(value) {
  if (validator.isEmpty(value)) {
    errors.tour_link("Silahkan isikan link!");
  }

  const isValidLink = (value) => {
    const linkPattern = /^(https?ftp):\/\/[^\s/$.?#].[^\s]*$/;

    return linkPattern.test(value);
  };

  if (!isValidLink(value)) {
    errors.tour_link("Link tidak valid!");
  }
}
function validateCulinaryDescription(value) {
  if (validator.isEmpty(value)) {
    errors.culinary_description("Silahkan isikan deskripsi!");
  }

  if (!validator.isLength(value, { min: 3 })) {
    errors.culinary_description = "Isikan minimum 3 karakter!";
  }
}
function validateCulinaryLink(value) {
     if (validator.isEmpty(value)) {
       errors.tour_link("Silahkan isikan link!");
     }

     const isValidLink = (value) => {
       const linkPattern = /^(https?ftp):\/\/[^\s/$.?#].[^\s]*$/;

       return linkPattern.test(value);
     };

     if (!isValidLink(value)) {
       errors.tour_link("Link tidak valid!");
     }
}
function validateLodgingDescription(value) {
  if (validator.isEmpty(value)) {
    errors.Lodging_description("Silahkan isikan deskripsi!");
  }

  if (!validator.isLength(value, { min: 3 })) {
    errors.Lodging_description = "Isikan minimum 3 karakter!";
  }
}
function validateLodgingLink(value) {
     if (validator.isEmpty(value)) {
       errors.tour_link("Silahkan isikan link!");
     }

     const isValidLink = (value) => {
       const linkPattern = /^(https?ftp):\/\/[^\s/$.?#].[^\s]*$/;

       return linkPattern.test(value);
     };

     if (!isValidLink(value)) {
       errors.tour_link("Link tidak valid!");
     }
}

  const errors = {};
// Validation function called inside controller
function newTourValidation(data) {

  validateTitle(data.title);
  validateSlug(data.slug);
  validatePrice(data.price);
  validateAddress(data.address);
  validateAddressLink(data.address_link);
  validateDescription(data.description);
  validateTourDescription(data.tour_description);
  validateTourLink(data.tour_link);
  validateCulinaryDescription(data.culinary_description);
  validateCulinaryLink(data.culinary_link);
  validateLodgingDescription(data.lodging_description);
  validateLodgingLink(data.lodging_link);
  if (data.tour_facilities === null) {
    errors.tour_facilities("Fasilitas tidak boleh kosong!");
  }
  if (data.culinary_facilities === null) {
    errors.culinary_facilities("Fasilitas tidak boleh kosong!");
  }
  if (data.lodging_facilities === null) {
    errors.lodging_facilities("Fasilitas tidak boleh kosong!");
  }

  if (Object.keys(errors.length > 0)) {
    return res.sendStatus(400).json({
      message: "Bad Request!",
      errors: errors,
    });
  }
}

module.exports = newTourValidation;
